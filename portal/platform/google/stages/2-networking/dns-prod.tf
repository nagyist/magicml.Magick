

# tfdoc:file:description Production spoke DNS zones and peerings setup.

# GCP-specific environment zone

module "prod-dns-priv-example" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/dns"
  project_id = module.prod-spoke-project.project_id
  name       = "prod-gcp-example-com"
  zone_config = {
    domain = "prod.gcp.example.com."
    private = {
      client_networks = [module.landing-vpc.self_link]
    }
  }
  recordsets = {
    "A localhost" = { records = ["127.0.0.1"] }
  }
}

# root zone peering to landing to centralize configuration; remove if unneeded

module "prod-dns-peer-landing-root" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/dns"
  project_id = module.prod-spoke-project.project_id
  name       = "prod-root-dns-peering"
  zone_config = {
    domain = "."
    peering = {
      client_networks = [module.prod-spoke-vpc.self_link]
      peer_network    = module.landing-vpc.self_link
    }
  }
}

module "prod-dns-peer-landing-rev-10" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/dns"
  project_id = module.prod-spoke-project.project_id
  name       = "prod-reverse-10-dns-peering"
  zone_config = {
    domain = "10.in-addr.arpa."
    peering = {
      client_networks = [module.prod-spoke-vpc.self_link]
      peer_network    = module.landing-vpc.self_link
    }
  }
}
