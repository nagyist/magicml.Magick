

# tfdoc:file:description CI/CD resources for the GCVE branch.

# read-write (apply) SAs used by CI/CD workflows to impersonate automation SAs

module "branch-gcve-dev-sa-cicd" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  for_each = (
    try(local.cicd_repositories.gcve_dev.name, null) != null
    ? { 0 = local.cicd_repositories.gcve_dev }
    : {}
  )
  project_id   = var.automation.project_id
  name         = "dev-resman-gcve-1"
  display_name = "Terraform CI/CD GCVE development service account."
  prefix       = var.prefix
  iam = {
    "roles/iam.workloadIdentityUser" = [
      each.value.branch == null
      ? format(
        local.identity_providers[each.value.identity_provider].principal_repo,
        var.automation.federated_identity_pool,
        each.value.name
      )
      : format(
        local.identity_providers[each.value.identity_provider].principal_branch,
        var.automation.federated_identity_pool,
        each.value.name,
        each.value.branch
      )
    ]
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/logging.logWriter"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectViewer"]
  }
}

module "branch-gcve-prod-sa-cicd" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  for_each = (
    try(local.cicd_repositories.gcve_prod.name, null) != null
    ? { 0 = local.cicd_repositories.gcve_prod }
    : {}
  )
  project_id   = var.automation.project_id
  name         = "prod-resman-gcve-1"
  display_name = "Terraform CI/CD GCVE production service account."
  prefix       = var.prefix
  iam = {
    "roles/iam.workloadIdentityUser" = [
      each.value.branch == null
      ? format(
        local.identity_providers[each.value.identity_provider].principal_repo,
        var.automation.federated_identity_pool,
        each.value.name
      )
      : format(
        local.identity_providers[each.value.identity_provider].principal_branch,
        var.automation.federated_identity_pool,
        each.value.name,
        each.value.branch
      )
    ]
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/logging.logWriter"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectViewer"]
  }
}

# read-only (plan) SAs used by CI/CD workflows to impersonate automation SAs

module "branch-gcve-dev-r-sa-cicd" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  for_each = (
    try(local.cicd_repositories.gcve_dev.name, null) != null
    ? { 0 = local.cicd_repositories.gcve_dev }
    : {}
  )
  project_id   = var.automation.project_id
  name         = "dev-resman-gcve-1r"
  display_name = "Terraform CI/CD GCVE development service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.workloadIdentityUser" = [
      format(
        local.identity_providers[each.value.identity_provider].principal_repo,
        var.automation.federated_identity_pool,
        each.value.name
      )
    ]
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/logging.logWriter"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectViewer"]
  }
}

module "branch-gcve-prod-r-sa-cicd" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  for_each = (
    try(local.cicd_repositories.gcve_prod.name, null) != null
    ? { 0 = local.cicd_repositories.gcve_prod }
    : {}
  )
  project_id   = var.automation.project_id
  name         = "prod-resman-gcve-1r"
  display_name = "Terraform CI/CD GCVE production service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.workloadIdentityUser" = [
      format(
        local.identity_providers[each.value.identity_provider].principal_repo,
        var.automation.federated_identity_pool,
        each.value.name
      )
    ]
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/logging.logWriter"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectViewer"]
  }
}
