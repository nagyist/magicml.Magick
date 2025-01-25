

# tfdoc:file:description Billing resources for external billing use cases.

locals {
  # used here for convenience, in organization.tf members are explicit
  billing_ext_users = concat(
    [
      module.branch-network-sa.iam_email,
      module.branch-security-sa.iam_email,
    ],
    local.branch_optional_sa_lists.dp-dev,
    local.branch_optional_sa_lists.dp-prod,
    local.branch_optional_sa_lists.gke-dev,
    local.branch_optional_sa_lists.gke-prod,
    local.branch_optional_sa_lists.gcve-dev,
    local.branch_optional_sa_lists.gcve-prod,
    local.branch_optional_sa_lists.pf,
    local.branch_optional_sa_lists.pf-dev,
    local.branch_optional_sa_lists.pf-prod,
  )
  billing_mode = (
    var.billing_account.no_iam
    ? null
    : var.billing_account.is_org_level ? "org" : "resource"
  )
}

# billing account in same org (resources is in the organization.tf file)

# standalone billing account

resource "google_billing_account_iam_member" "billing_ext_admin" {
  for_each = toset(
    local.billing_mode == "resource" ? local.billing_ext_users : []
  )
  billing_account_id = var.billing_account.id
  role               = "roles/billing.user"
  member             = each.key
}

resource "google_billing_account_iam_member" "billing_ext_costsmanager" {
  for_each = toset(
    local.billing_mode == "resource" ? local.billing_ext_users : []
  )
  billing_account_id = var.billing_account.id
  role               = "roles/billing.costsManager"
  member             = each.key
}
