module "projects" {
  source = "../../../../modules/project-factory"
  data_defaults = {
    billing_account = var.billing_account.id
    # more defaults are available, check the project factory variables
  }
  data_merges = {
    labels = {
      environment = "dev"
    }
    services = [
      "stackdriver.googleapis.com",
      "compute.googleapis.com"
    ]
  }
  data_overrides = {
    prefix = "${var.prefix}-dev"
  }
  factories_config = var.factories_config
}

locals {
  project_id = values(module.projects.projects)[0].project_id
  prefix     = var.prefix
}


module "vpc" {
  source     = "../../../../modules/net-vpc"
  project_id = local.project_id
  name       = "${local.prefix}-vpc"
  subnets = [
    {
      ip_cidr_range = "10.0.1.0/24"
      name          = "subnet-ew1"
      region        = "europe-west1"
    },
    {
      ip_cidr_range = "10.0.2.0/24"
      name          = "subnet-ue1"
      region        = "us-east1"
    },
    {
      ip_cidr_range = "10.0.3.0/24"
      name          = "subnet-uw1"
      region        = "us-west1"
    }
  ]
}

module "firewall" {
  source     = "../../../../modules/net-vpc-firewall"
  project_id = local.project_id
  network    = module.vpc.name
}

module "nat_ew1" {
  source         = "../../../../modules/net-cloudnat"
  project_id     = local.project_id
  region         = "europe-west1"
  name           = "${local.prefix}-nat-eu1"
  router_network = module.vpc.name
}

module "nat_ue1" {
  source         = "../../../../modules/net-cloudnat"
  project_id     = local.project_id
  region         = "us-east1"
  name           = "${local.prefix}-nat-ue1"
  router_network = module.vpc.name
}


module "instance_template_ew1" {
  source        = "../../../../modules/compute-vm"
  project_id    = local.project_id
  zone          = "europe-west1-b"
  name          = "${local.prefix}-europe-west1-template"
  instance_type = "n1-standard-2"
  boot_disk = {
    image = "cos-cloud/cos-stable"
  }
  network_interfaces = [{
    network    = module.vpc.self_link
    subnetwork = module.vpc.subnet_self_links["europe-west1/subnet-ew1"]
  }]
  metadata = {
    user-data = <<EOT
#cloud-config
docker:
  images:
    - ${var.docker_image_agent_embedder}
    - ${var.docker_image_agent_worker}
    - ${var.docker_image_agent_manager}
    - ${var.docker_image_agent_server}
runcmd:
  - docker network create agent-network
  - docker run -d --name agent-embedder --network agent-network -p 8080:8080 ${var.docker_image_agent_embedder}
  - docker run -d --name agent-worker --network agent-network -p 8081:8080 ${var.docker_image_agent_worker}
  - docker run -d --name agent-manager --network agent-network -p 8082:8080 ${var.docker_image_agent_manager}
  - docker run -d --name agent-server --network agent-network -p 8083:8080 ${var.docker_image_agent_server}
EOT
  }
  create_template = true
  tags = [
    "http-server"
  ]
}

module "instance_template_ue1" {
  source     = "../../../../modules/compute-vm"
  project_id = local.project_id
  zone       = "us-east1-b"
  name       = "${local.prefix}-us-east1-template"
  boot_disk = {
    image = "cos-cloud/cos-stable"
  }
  network_interfaces = [{
    network    = module.vpc.self_link
    subnetwork = module.vpc.subnet_self_links["us-east1/subnet-ue1"]
  }]
  metadata = {
    user-data = <<EOT
#cloud-config
docker:
  images:
    - ${var.docker_image_agent_embedder}
    - ${var.docker_image_agent_worker}
    - ${var.docker_image_agent_manager}
    - ${var.docker_image_agent_server}
runcmd:
  - docker network create agent-network
  - docker run -d --name agent-embedder --network agent-network -p 8080:8080 ${var.docker_image_agent_embedder}
  - docker run -d --name agent-worker --network agent-network -p 8081:8080 ${var.docker_image_agent_worker}
  - docker run -d --name agent-manager --network agent-network -p 8082:8080 ${var.docker_image_agent_manager}
  - docker run -d --name agent-server --network agent-network -p 8083:8080 ${var.docker_image_agent_server}
EOT
  }
  create_template = true
  tags = [
    "http-server"
  ]
}

module "vm_siege" {
  source        = "../../../../modules/compute-vm"
  project_id    = local.project_id
  zone          = "us-west1-c"
  name          = "siege-vm"
  instance_type = "n1-standard-2"
  network_interfaces = [{
    network    = module.vpc.self_link
    subnetwork = module.vpc.subnet_self_links["us-west1/subnet-uw1"]
    nat        = true
  }]
  metadata = {
    startup-script = <<EOT
    #!/bin/bash

    apt update -y
    apt install -y siege
    EOT
  }
  tags = [
    "ssh"
  ]
}

module "mig_ew1" {
  source            = "../../../../modules/compute-mig"
  project_id        = local.project_id
  location          = "europe-west1"
  name              = "${local.prefix}-europe-west1-mig"
  instance_template = module.instance_template_ew1.template.self_link
  autoscaler_config = {
    max_replicas    = 5
    min_replicas    = 1
    cooldown_period = 45
    scaling_signals = {
      cpu_utilization = {
        target = 0.65
      }
    }
  }
  named_ports = {
    http = 80
  }
  depends_on = [
    module.nat_ew1
  ]
}

module "mig_ue1" {
  source            = "../../../../modules/compute-mig"
  project_id        = local.project_id
  location          = "us-east1"
  name              = "${local.prefix}-us-east1-mig"
  instance_template = module.instance_template_ue1.template.self_link
  autoscaler_config = {
    max_replicas    = 5
    min_replicas    = 1
    cooldown_period = 45
    scaling_signals = {
      cpu_utilization = {
        target = 0.65
      }
    }
  }
  named_ports = {
    http = 80
  }
  depends_on = [
    module.nat_ue1
  ]
}

module "glb" {
  source     = "../../../../modules/net-lb-app-ext"
  name       = "${local.prefix}-http-lb"
  project_id = local.project_id
  backend_service_configs = {
    default = {
      backends = [
        { backend = module.mig_ew1.group_manager.instance_group },
        { backend = module.mig_ue1.group_manager.instance_group }
      ]
      log_sample_rate = 1
      security_policy = try(google_compute_security_policy.policy[0].name, null)
    }
  }
}

resource "google_compute_security_policy" "policy" {
  count   = var.enforce_security_policy ? 1 : 0
  name    = "${local.prefix}-denylist-siege"
  project = local.project_id
  rule {
    action   = "deny(403)"
    priority = "1000"
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = [module.vm_siege.external_ip]
      }
    }
    description = "Deny access to siege VM IP"
  }
  rule {
    action   = "allow"
    priority = "2147483647"
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = ["*"]
      }
    }
    description = "default rule"
  }
}
