locals {
  gcs_storage_class = (
    length(split("-", local.locations.gcs)) < 2
    ? "MULTI_REGIONAL"
    : "REGIONAL"
  )
  principals = {
    for k, v in var.groups : k => (
      can(regex("^[a-zA-Z]+:", v))
      ? v
      : "group:${v}@${var.organization.domain}"
    )
  }
  locations = {
    bq      = var.locations.bq
    gcs     = var.locations.gcs
    logging = coalesce(try(local.checklist.location, null), var.locations.logging)
    pubsub  = var.locations.pubsub
  }
  # naming: environment used in most resource names
  prefix = join("-", compact([var.prefix, "prod"]))
}
