locals {
  # additive IAM binding for delegated KMS admins
  kms_restricted_admin_template = {
    role = "roles/cloudkms.admin"
    condition = {
      title       = "kms_sa_delegated_grants"
      description = "Automation service account delegated grants."
      expression = format(
        <<-EOT
           api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', []).hasOnly([%s]) &&
           resource.type == 'cloudkms.googleapis.com/CryptoKey'
        EOT
        , join(",", formatlist("'%s'", [
          "roles/cloudkms.cryptoKeyEncrypterDecrypter",
          "roles/cloudkms.cryptoKeyEncrypterDecrypterViaDelegation"
        ]))
      )
    }
  }

  # list of locations with keys
  kms_locations = distinct(flatten([
    for k, v in var.kms_keys : v.locations
  ]))
  # map { location -> { key_name -> key_details } }
  kms_locations_keys = {
    for loc in local.kms_locations :
    loc => {
      for k, v in var.kms_keys :
      k => v
      if contains(v.locations, loc)
    }
  }
  project_services = [
    "cloudkms.googleapis.com",
    "secretmanager.googleapis.com",
    "stackdriver.googleapis.com"
  ]
}

module "folder" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  parent        = "organizations/${var.organization.id}"
  name          = "Security"
  folder_create = var.folder_ids.security == null
  id            = var.folder_ids.security
  contacts = (
    var.essential_contacts == null
    ? {}
    : { (var.essential_contacts) = ["ALL"] }
  )
}
