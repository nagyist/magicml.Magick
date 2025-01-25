output "clone" {
  description = "Clone repository commands."
  value = {
    for k, v in var.repositories :
    k => "git clone git@github.com:${var.organization}/${k}.git"
  }
}
