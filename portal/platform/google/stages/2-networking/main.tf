

# tfdoc:file:description Networking folder and hierarchical policy.

locals {
  custom_roles = coalesce(var.custom_roles, {})
  service_accounts = {
    for k, v in coalesce(var.service_accounts, {}) :
    k => "serviceAccount:${v}" if v != null
  }
  spoke_connection = var.spoke_configs.peering_configs != null ? "peering" : "vpn"
  stage3_sas_delegated_grants = [
    "roles/composer.sharedVpcAgent",
    "roles/compute.networkUser",
    "roles/compute.networkViewer",
    "roles/container.hostServiceAgentUser",
    "roles/multiclusterservicediscovery.serviceAgent",
    "roles/vpcaccess.user",
  ]
  # combine all regions from variables and subnets
  regions = distinct(concat(
    values(var.regions),
    values(module.dev-spoke-vpc.subnet_regions),
    values(module.landing-vpc.subnet_regions),
    values(module.prod-spoke-vpc.subnet_regions),
  ))
}

module "folder" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  parent        = "organizations/${var.organization.id}"
  name          = "Networking"
  folder_create = var.folder_ids.networking == null
  id            = var.folder_ids.networking
  contacts = (
    var.essential_contacts == null
    ? {}
    : { (var.essential_contacts) = ["ALL"] }
  )
  firewall_policy = {
    name   = "default"
    policy = module.firewall-policy-default.id
  }
}

module "firewall-policy-default" {
  source    = "../../../../remotes/cloud-foundation-fabric/modules/net-firewall-policy"
  name      = var.factories_config.firewall_policy_name
  parent_id = module.folder.id
  factories_config = {
    cidr_file_path          = "${var.factories_config.data_dir}/cidrs.yaml"
    ingress_rules_file_path = "${var.factories_config.data_dir}/hierarchical-ingress-rules.yaml"
  }
}

