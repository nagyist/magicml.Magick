locals {
  dev_kms_restricted_admins = [
    for sa in distinct(compact([
      var.service_accounts.data-platform-dev,
      var.service_accounts.project-factory,
      var.service_accounts.project-factory-dev,
      var.service_accounts.project-factory-prod
    ])) : "serviceAccount:${sa}"
  ]
}

module "dev-sec-project" {
  source          = "../../../../remotes/cloud-foundation-fabric/modules/project"
  name            = "dev-sec-core-0"
  parent          = var.folder_ids.security
  prefix          = var.prefix
  billing_account = var.billing_account.id
  iam = {
    "roles/cloudkms.viewer" = local.dev_kms_restricted_admins
  }
  iam_bindings_additive = {
    for member in local.dev_kms_restricted_admins :
    "kms_restricted_admin.${member}" => merge(local.kms_restricted_admin_template, {
      member = member
    })
  }
  labels   = { environment = "dev", team = "security" }
  services = local.project_services
}

module "dev-sec-kms" {
  for_each   = toset(local.kms_locations)
  source     = "../../../../remotes/cloud-foundation-fabric/modules/kms"
  project_id = module.dev-sec-project.project_id
  keyring = {
    location = each.key
    name     = "dev-${each.key}"
  }
  keys = local.kms_locations_keys[each.key]
}
