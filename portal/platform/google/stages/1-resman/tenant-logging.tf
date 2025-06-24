

# tfdoc:file:description Audit log project and sink for tenant root folder.

locals {
  log_sink_destinations = merge(
    # use the same dataset for all sinks with `bigquery` as  destination
    {
      for k, v in local.log_sinks :
      k => module.log-export-dataset[0] if v.type == "bigquery"
    },
    # use the same gcs bucket for all sinks with `storage` as destination
    {
      for k, v in local.log_sinks :
      k => module.log-export-gcs[0] if v.type == "storage"
    },
    # use separate pubsub topics and logging buckets for sinks with
    # destination `pubsub` and `logging`
    module.log-export-pubsub,
    module.log-export-logbucket
  )
  log_sinks = (
    length(var.logging.log_sinks) > 0 || var.root_node == null
    ? var.logging.log_sinks
    # provide default log sinks to tenants
    : {
      audit-logs = {
        filter = <<-FILTER
          log_id("cloudaudit.googleapis.com/activity") OR
          log_id("cloudaudit.googleapis.com/system_event") OR
          log_id("cloudaudit.googleapis.com/policy") OR
          log_id("cloudaudit.googleapis.com/access_transparency")
        FILTER
        type   = "logging"
      }
      iam = {
        filter = <<-FILTER
          protoPayload.serviceName="iamcredentials.googleapis.com" OR
          protoPayload.serviceName="iam.googleapis.com" OR
          protoPayload.serviceName="sts.googleapis.com"
        FILTER
        type   = "logging"
      }
      vpc-sc = {
        filter = <<-FILTER
          protoPayload.metadata.@type="type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata"
        FILTER
        type   = "logging"
      }
    }
  )
  log_types = toset([for k, v in local.log_sinks : v.type])
}

# one log export per type, with conditionals to skip those not needed

module "log-export-dataset" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/bigquery-dataset"
  count = (
    var.root_node != null && contains(local.log_types, "bigquery") ? 1 : 0
  )
  project_id    = var.logging.project_id
  id            = "logs"
  friendly_name = "Audit logs export."
  location      = var.locations.bq
}

module "log-export-gcs" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  count = (
    var.root_node != null && contains(local.log_types, "storage") ? 1 : 0
  )
  project_id    = var.logging.project_id
  name          = "logs"
  prefix        = var.prefix
  location      = var.locations.gcs
  storage_class = local.gcs_storage_class
}

module "log-export-logbucket" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/logging-bucket"
  for_each = toset(var.root_node == null ? [] : [
    for k, v in local.log_sinks : k if v.type == "logging"
  ])
  parent_type   = "project"
  parent        = var.logging.project_id
  id            = each.key
  location      = var.locations.logging
  log_analytics = { enable = true }
}

module "log-export-pubsub" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/pubsub"
  for_each = toset(var.root_node == null ? [] : [
    for k, v in local.log_sinks : k if v.type == "pubsub"
  ])
  project_id = var.logging.project_id
  name       = each.key
  regions    = var.locations.pubsub
}
