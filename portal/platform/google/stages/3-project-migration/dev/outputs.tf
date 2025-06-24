output "projects" {
  description = "Created projects."
  value = {
    for k, v in module.projects.projects : k => {
      number     = v.number
      project_id = v.id
    }
  }
}

output "service_accounts" {
  description = "Created service accounts."
  value       = module.projects.service_accounts
}

output "glb_ip_address" {
  description = "Load balancer IP address."
  value       = module.glb.address
}

output "vm_siege_external_ip" {
  description = "Siege VM external IP address."
  value       = module.vm_siege.external_ip
}
