

# tfdoc:file:description VPN between landing and onprem.

locals {
  onprem_peer_gateways = try(
    var.vpn_onprem_primary_config.peer_external_gateways, {}
  )
}

module "landing-to-onprem-primary-vpn" {
  count         = var.vpn_onprem_primary_config == null ? 0 : 1
  source        = "../../../../remotes/cloud-foundation-fabric/modules/net-vpn-ha"
  project_id    = module.landing-project.project_id
  network       = module.landing-vpc.self_link
  region        = var.regions.primary
  name          = "vpn-to-onprem-${local.region_shortnames[var.regions.primary]}"
  router_config = try(var.vpn_onprem_primary_config.router_config, {})
  peer_gateways = {
    for k, v in local.onprem_peer_gateways : k => { external = v }
  }
  tunnels = try(var.vpn_onprem_primary_config.tunnels, {})
}
