

# tfdoc:file:description CI/CD resources for the networking branch.

# read-write (apply) SA used by CI/CD workflows to impersonate automation SA

module "branch-network-sa-cicd" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  for_each = (
    try(local.cicd_repositories.networking.name, null) != null
    ? { 0 = local.cicd_repositories.networking }
    : {}
  )
  project_id   = var.automation.project_id
  name         = "prod-resman-net-1"
  display_name = "Terraform CI/CD stage 2 networking service account."
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

# read-only (plan) SA used by CI/CD workflows to impersonate automation SA

module "branch-network-r-sa-cicd" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  for_each = (
    try(local.cicd_repositories.networking.name, null) != null
    ? { 0 = local.cicd_repositories.networking }
    : {}
  )
  project_id   = var.automation.project_id
  name         = "prod-resman-net-1r"
  display_name = "Terraform CI/CD stage 2 networking service account (read-only)."
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
