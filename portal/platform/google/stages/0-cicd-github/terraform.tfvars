organization = "gtc-fc"

repositories = {
  fast_00_bootstrap = {
    create_options = {
      description = "FAST bootstrap stage"
      visibility  = "private"
    }
    populate_from = "../0-bootstrap"
  }
  fast_01_resman = {
    create_options = {
      description = "FAST resource management stage"
      visibility  = "private"
    }
    populate_from = "../1-resman"
  }
  fast_02_networking = {
    create_options = {
      description = "FAST networking stage"
      visibility  = "private"
    }
    populate_from = "../2-networking"
  }
  fast_03_security = {
    create_options = {
      description = "FAST security stage"
      visibility  = "private"
    }
    populate_from = "../2-security"
  }
}

modules_config = {
  repository_name = "gtc-fc/fast-modules"
  create_options = {
    description = "FAST modules repository"
    visibility  = "private"
  }
  key_config = {
    create_key     = true
    create_secrets = true
  }
}

commit_config = {
  author  = "FAST Loader"
  email   = "tf@greentea.coffee"
  message = "Initial FAST setup"
}
