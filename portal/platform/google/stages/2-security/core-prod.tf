locals {
  prod_kms_restricted_admins = [
    for sa in distinct(compact([
      var.service_accounts.data-platform-prod,
      var.service_accounts.project-factory,
      var.service_accounts.project-factory-prod
    ])) : "serviceAccount:${sa}"
  ]
}

module "prod-sec-project" {
  source          = "../../../../remotes/cloud-foundation-fabric/modules/project"
  name            = "prod-sec-core-0"
  parent          = var.folder_ids.security
  prefix          = var.prefix
  billing_account = var.billing_account.id
  iam = {
    "roles/cloudkms.viewer" = local.prod_kms_restricted_admins
  }
  iam_bindings_additive = {
    for member in local.prod_kms_restricted_admins :
    "kms_restricted_admin.${member}" => merge(local.kms_restricted_admin_template, {
      member = member
    })
  }
  labels   = { environment = "prod", team = "security" }
  services = local.project_services
}

module "prod-sec-kms" {
  for_each   = toset(local.kms_locations)
  source     = "../../../../remotes/cloud-foundation-fabric/modules/kms"
  project_id = module.prod-sec-project.project_id
  keyring = {
    location = each.key
    name     = "prod-${each.key}"
  }
  keys = local.kms_locations_keys[each.key]
}
