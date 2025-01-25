

# tfdoc:file:description Landing VPC and related resources.

module "landing-project" {
  source          = "../../../../remotes/cloud-foundation-fabric/modules/project"
  billing_account = var.billing_account.id
  name            = "prod-net-landing-0"
  parent          = var.folder_ids.networking-prod
  prefix          = var.prefix
  services = [
    "compute.googleapis.com",
    "dns.googleapis.com",
    "iap.googleapis.com",
    "networkmanagement.googleapis.com",
    "stackdriver.googleapis.com"
  ]
  shared_vpc_host_config = {
    enabled = true
  }
  iam = {
    "roles/dns.admin" = compact([
      try(local.service_accounts.project-factory, null),
      try(local.service_accounts.project-factory-prod, null)
    ])
    (local.custom_roles.service_project_network_admin) = compact([
      try(local.service_accounts.project-factory, null),
      try(local.service_accounts.project-factory-prod, null)
    ])
  }
}

module "landing-vpc" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/net-vpc"
  project_id = module.landing-project.project_id
  name       = "prod-landing-0"
  mtu        = 1500
  dns_policy = {
    inbound = true
    logging = var.dns.enable_logging
  }
  factories_config = {
    subnets_folder = "${var.factories_config.data_dir}/subnets/landing"
  }
  delete_default_routes_on_create = true
  routes = {
    default = {
      dest_range    = "0.0.0.0/0"
      next_hop      = "default-internet-gateway"
      next_hop_type = "gateway"
      priority      = 1000
    }
  }
}

module "landing-firewall" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/net-vpc-firewall"
  project_id = module.landing-project.project_id
  network    = module.landing-vpc.name
  default_rules_config = {
    disabled = true
  }
  factories_config = {
    cidr_tpl_file = "${var.factories_config.data_dir}/cidrs.yaml"
    rules_folder  = "${var.factories_config.data_dir}/firewall-rules/landing"
  }
}

module "landing-nat-primary" {
  source         = "../../../../remotes/cloud-foundation-fabric/modules/net-cloudnat"
  count          = var.enable_cloud_nat ? 1 : 0
  project_id     = module.landing-project.project_id
  region         = var.regions.primary
  name           = local.region_shortnames[var.regions.primary]
  router_create  = true
  router_name    = "prod-nat-${local.region_shortnames[var.regions.primary]}"
  router_network = module.landing-vpc.name
}
