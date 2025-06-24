locals {
  _output_kms_keys = concat(
    flatten([
      for location, mod in module.dev-sec-kms : [
        for name, id in mod.key_ids : {
          key = "dev-${name}:${location}"
          id  = id
        }
      ]
    ]),
    flatten([
      for location, mod in module.prod-sec-kms : [
        for name, id in mod.key_ids : {
          key = "prod-${name}:${location}"
          id  = id
        }
      ]
    ])
  )
  output_kms_keys = { for k in local._output_kms_keys : k.key => k.id }
  tfvars = {
    kms_keys = local.output_kms_keys
    vpc_sc = {
      perimeters = {
        for k, v in try(module.vpc-sc[0].service_perimeters_regular, {}) :
        k => v.id
      }
      perimeters_bridge = {
        for k, v in try(module.vpc-sc[0].service_perimeters_bridge, {}) :
        k => v.id
      }
    }
  }
}

resource "local_file" "tfvars" {
  for_each        = var.outputs_location == null ? {} : { 1 = 1 }
  file_permission = "0644"
  filename        = "${pathexpand(var.outputs_location)}/tfvars/2-security.auto.tfvars.json"
  content         = jsonencode(local.tfvars)
}

resource "google_storage_bucket_object" "tfvars" {
  bucket  = var.automation.outputs_bucket
  name    = "tfvars/2-security.auto.tfvars.json"
  content = jsonencode(local.tfvars)
}

output "kms_keys" {
  description = "KMS key ids."
  value       = local.output_kms_keys
}

output "tfvars" {
  description = "Terraform variable files for the following stages."
  sensitive   = true
  value       = local.tfvars
}

output "vpc_sc_perimeter_default" {
  description = "Raw default perimeter resource."
  sensitive   = true
  value       = try(module.vpc-sc[0].service_perimeters_regular["default"], null)
}
