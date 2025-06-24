variable "commit_config" {
  description = "Configure commit metadata."
  type = object({
    author  = optional(string, "FAST loader")
    email   = optional(string, "fast-loader@fast.gcp.tf")
    message = optional(string, "FAST initial loading")
  })
  default  = {}
  nullable = false
}

variable "modules_config" {
  description = "Configure access to repository module via key, and replacement for modules sources in stage repositories."
  type = object({
    repository_name = string
    source_ref      = optional(string)
    module_prefix   = optional(string, "")
    key_config = optional(object({
      create_key     = optional(bool, false)
      create_secrets = optional(bool, false)
      keypair_path   = optional(string)
    }), {})
  })
  default = null
  validation {
    condition = (
      var.modules_config == null
      ||
      try(var.modules_config.repository_name, null) != null
    )
    error_message = "Modules configuration requires a modules repository name."
  }
}

variable "organization" {
  description = "GitHub organization."
  type        = string
}

variable "pull_request_config" {
  description = "Configure pull request metadata."
  type = object({
    create   = optional(bool, false)
    title    = optional(string, "FAST: initial loading or update")
    body     = optional(string, "")
    base_ref = optional(string, "main")
    head_ref = optional(string, "fast-loader")
  })
  default  = {}
  nullable = false
}

variable "repositories" {
  description = "Repositories to create."
  type = map(object({
    create_options = optional(object({
      allow = optional(object({
        auto_merge   = optional(bool)
        merge_commit = optional(bool)
        rebase_merge = optional(bool)
        squash_merge = optional(bool)
      }))
      auto_init   = optional(bool)
      description = optional(string)
      features = optional(object({
        issues   = optional(bool)
        projects = optional(bool)
        wiki     = optional(bool)
      }))
      templates = optional(object({
        gitignore = optional(string, "Terraform")
        license   = optional(string)
        repository = optional(object({
          name  = string
          owner = string
        }))
      }), {})
      visibility = optional(string, "private")
    }))
    populate_from    = optional(string)
    populate_samples = optional(bool, false)
  }))
  default  = {}
  nullable = true
  validation {
    condition = alltrue([
      for k, v in var.repositories :
      try(regex("^[a-zA-Z0-9-_.]+$", k), null) != null
    ])
    error_message = "Repository names must match '^[a-zA-Z0-9_.]+$'."
  }
}
