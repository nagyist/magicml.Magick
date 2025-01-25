

# tfdoc:file:description Organization policies.

locals {
  tags = {
    for k, v in var.tags : k => merge(v, {
      values = {
        for vk, vv in v.values : vk => merge(vv, {
          iam = {
            for rk, rv in vv.iam : rk => [
              for rm in rv : (
                contains(keys(local.service_accounts), rm)
                ? "serviceAccount:${local.service_accounts[rm]}"
                : rm
              )
            ]
          }
        })
      }
    })
  }
}

module "organization" {
  source          = "../../../../remotes/cloud-foundation-fabric/modules/organization"
  count           = var.root_node == null ? 1 : 0
  organization_id = "organizations/${var.organization.id}"
  # additive bindings via delegated IAM grant set in stage 0
  iam_bindings_additive = local.iam_bindings_additive
  # do not assign tagViewer or tagUser roles here on tag keys and values as
  # they are managed authoritatively and will break multitenant stages
  tags = merge(local.tags, {
    (var.tag_names.context) = {
      description = "Resource management context."
      iam         = try(local.tags.context.iam, {})
      values = {
        data = {
          iam         = try(local.tags.context.values.data.iam, {})
          description = try(local.tags.context.values.data.description, null)
        }
        gke = {
          iam         = try(local.tags.context.values.gke.iam, {})
          description = try(local.tags.context.values.gke.description, null)
        }
        gcve = {
          iam         = try(local.tags.context.values.gcve.iam, {})
          description = try(local.tags.context.values.gcve.description, null)
        }
        networking = {
          iam         = try(local.tags.context.values.networking.iam, {})
          description = try(local.tags.context.values.networking.description, null)
        }
        project-factory = {
          iam         = try(local.tags.context.values.project-factory.iam, {})
          description = try(local.tags.context.values.project-factory.description, null)
        }
        sandbox = {
          iam         = try(local.tags.context.values.sandbox.iam, {})
          description = try(local.tags.context.values.sandbox.description, null)
        }
        security = {
          iam         = try(local.tags.context.values.security.iam, {})
          description = try(local.tags.context.values.security.description, null)
        }
      }
    }
    (var.tag_names.environment) = {
      description = "Environment definition."
      iam         = try(local.tags.environment.iam, {})
      values = {
        development = {
          iam         = try(local.tags.environment.values.development.iam, {})
          description = try(local.tags.environment.values.development.description, null)
        }
        production = {
          iam         = try(local.tags.environment.values.production.iam, {})
          description = try(local.tags.environment.values.production.description, null)
        }
      }
    }
  })
}
