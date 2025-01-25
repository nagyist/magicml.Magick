

module "root-folder" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  count         = var.root_node != null ? 1 : 0
  id            = var.root_node
  folder_create = false
  # additive bindings via delegated IAM grant set in stage 0
  iam_bindings_additive = local.iam_bindings_additive
  logging_sinks = {
    for name, attrs in local.log_sinks : name => {
      bq_partitioned_table = attrs.type == "bigquery"
      destination          = local.log_sink_destinations[name].id
      filter               = attrs.filter
      type                 = attrs.type
    }
  }
}

module "automation-project" {
  source         = "../../../../remotes/cloud-foundation-fabric/modules/project"
  count          = var.root_node != null ? 1 : 0
  name           = var.automation.project_id
  project_create = false
  # do not assign tagViewer or tagUser roles here on tag keys and values as
  # they are managed authoritatively and will break multitenant stages
  tags = merge(local.tags, {
    (var.tag_names.context) = {
      description = "Resource management context."
      iam         = {}
      values = {
        data       = {}
        gke        = {}
        gcve       = {}
        networking = {}
        sandbox    = {}
        security   = {}
      }
    }
    (var.tag_names.environment) = {
      description = "Environment definition."
      iam         = {}
      values = {
        development = {}
        production  = {}
      }
    }
  })
}
