

# tfdoc:file:description Network monitoring dashboards.

locals {
  dashboard_path  = "${var.factories_config.data_dir}/dashboards"
  dashboard_files = fileset(local.dashboard_path, "*.json")
  dashboards = {
    for filename in local.dashboard_files :
    filename => "${local.dashboard_path}/${filename}"
  }
}

resource "google_monitoring_dashboard" "dashboard" {
  for_each       = local.dashboards
  project        = module.landing-project.project_id
  dashboard_json = file(each.value)
}
