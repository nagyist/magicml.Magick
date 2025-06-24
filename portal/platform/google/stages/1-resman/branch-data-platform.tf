

# tfdoc:file:description Data Platform stages resources.

module "branch-dp-folder" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  count  = var.fast_features.data_platform ? 1 : 0
  parent = local.root_node
  name   = "Data Platform"
  iam    = var.folder_iam.data_platform
  tag_bindings = {
    context = try(
      local.tag_values["${var.tag_names.context}/data"].id, null
    )
  }
}

module "branch-dp-dev-folder" {
  source            = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  count             = var.fast_features.data_platform ? 1 : 0
  parent            = module.branch-dp-folder[0].id
  name              = "Development"
  iam_by_principals = {}
  # owner and viewer roles are broad and might grant unwanted access
  # replace them with more selective custom roles for production deployments
  iam = {
    # read-write (apply) automation service account
    (local.custom_roles.service_project_network_admin) = [
      module.branch-dp-dev-sa[0].iam_email
    ]
    "roles/logging.admin"                  = [module.branch-dp-dev-sa[0].iam_email]
    "roles/owner"                          = [module.branch-dp-dev-sa[0].iam_email]
    "roles/resourcemanager.folderAdmin"    = [module.branch-dp-dev-sa[0].iam_email]
    "roles/resourcemanager.projectCreator" = [module.branch-dp-dev-sa[0].iam_email]
    # read-only (plan) automation service account
    "roles/viewer"                       = [module.branch-dp-dev-r-sa[0].iam_email]
    "roles/resourcemanager.folderViewer" = [module.branch-dp-dev-r-sa[0].iam_email]
  }
  tag_bindings = {
    context = try(
      local.tag_values["${var.tag_names.environment}/development"].id,
      null
    )
  }
}

module "branch-dp-prod-folder" {
  source            = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  count             = var.fast_features.data_platform ? 1 : 0
  parent            = module.branch-dp-folder[0].id
  name              = "Production"
  iam_by_principals = {}
  # owner and viewer roles are broad and might grant unwanted access
  # replace them with more selective custom roles for production deployments
  iam = {
    # read-write (apply) automation service account
    (local.custom_roles.service_project_network_admin) = [module.branch-dp-prod-sa[0].iam_email]
    "roles/owner"                                      = [module.branch-dp-prod-sa[0].iam_email]
    "roles/logging.admin"                              = [module.branch-dp-prod-sa[0].iam_email]
    "roles/resourcemanager.folderAdmin"                = [module.branch-dp-prod-sa[0].iam_email]
    "roles/resourcemanager.projectCreator"             = [module.branch-dp-prod-sa[0].iam_email]
    # read-only (plan) automation service account
    "roles/viewer"                       = [module.branch-dp-prod-r-sa[0].iam_email]
    "roles/resourcemanager.folderViewer" = [module.branch-dp-prod-r-sa[0].iam_email]
  }
  tag_bindings = {
    context = try(
      local.tag_values["${var.tag_names.environment}/production"].id,
      null
    )
  }
}

# automation service accounts

module "branch-dp-dev-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.data_platform ? 1 : 0
  project_id   = var.automation.project_id
  name         = "dev-resman-dp-0"
  display_name = "Terraform data platform development service account."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-dp-dev-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectAdmin"]
  }
}

module "branch-dp-prod-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.data_platform ? 1 : 0
  project_id   = var.automation.project_id
  name         = "prod-resman-dp-0"
  display_name = "Terraform data platform production service account."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-dp-prod-sa-cicd[0].iam_email, null)
    ])
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectAdmin"]
  }
}

# automation read-only service accounts

module "branch-dp-dev-r-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.data_platform ? 1 : 0
  project_id   = var.automation.project_id
  name         = "dev-resman-dp-0r"
  display_name = "Terraform data platform development service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-dp-dev-r-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = [var.custom_roles["storage_viewer"]]
  }
}

module "branch-dp-prod-r-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.data_platform ? 1 : 0
  project_id   = var.automation.project_id
  name         = "prod-resman-dp-0r"
  display_name = "Terraform data platform production service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-dp-prod-r-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = [var.custom_roles["storage_viewer"]]
  }
}

# automation buckets

module "branch-dp-dev-gcs" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  count         = var.fast_features.data_platform ? 1 : 0
  project_id    = var.automation.project_id
  name          = "dev-resman-dp-0"
  prefix        = var.prefix
  location      = var.locations.gcs
  storage_class = local.gcs_storage_class
  versioning    = true
  iam = {
    "roles/storage.objectAdmin"  = [module.branch-dp-dev-sa[0].iam_email]
    "roles/storage.objectViewer" = [module.branch-dp-dev-r-sa[0].iam_email]
  }
}

module "branch-dp-prod-gcs" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  count         = var.fast_features.data_platform ? 1 : 0
  project_id    = var.automation.project_id
  name          = "prod-resman-dp-0"
  prefix        = var.prefix
  location      = var.locations.gcs
  storage_class = local.gcs_storage_class
  versioning    = true
  iam = {
    "roles/storage.objectAdmin"  = [module.branch-dp-prod-sa[0].iam_email]
    "roles/storage.objectViewer" = [module.branch-dp-prod-r-sa[0].iam_email]
  }
}
