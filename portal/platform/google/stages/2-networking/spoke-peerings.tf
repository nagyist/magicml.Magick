

# tfdoc:file:description Peerings between landing and spokes.

moved {
  from = module.peering-dev
  to   = module.peering-dev[0]
}

module "peering-dev" {
  count         = local.spoke_connection == "peering" ? 1 : 0
  source        = "../../../../remotes/cloud-foundation-fabric/modules/net-vpc-peering"
  prefix        = "dev-peering-0"
  local_network = module.dev-spoke-vpc.self_link
  peer_network  = module.landing-vpc.self_link
  routes_config = var.spoke_configs.peering_configs.dev
}

moved {
  from = module.peering-prod
  to   = module.peering-prod[0]
}

module "peering-prod" {
  count         = local.spoke_connection == "peering" ? 1 : 0
  source        = "../../../../remotes/cloud-foundation-fabric/modules/net-vpc-peering"
  prefix        = "prod-peering-0"
  local_network = module.prod-spoke-vpc.self_link
  peer_network  = module.landing-vpc.self_link
  routes_config = var.spoke_configs.peering_configs.prod
  depends_on    = [module.peering-dev]
}

