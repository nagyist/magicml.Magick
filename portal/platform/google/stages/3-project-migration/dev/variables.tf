variable "factories_config" {
  description = "Path to folder with YAML resource description data files."
  type = object({
    hierarchy = optional(object({
      folders_data_path = string
      parent_ids        = optional(map(string), {})
    }))
    projects_data_path = string
    budgets = optional(object({
      billing_account       = string
      budgets_data_path     = string
      notification_channels = optional(map(any), {})
    }))
  })
  nullable = false
}

variable "enforce_security_policy" {
  description = "Enforce security policy."
  type        = bool
  default     = true
}

variable "docker_image_agent_embedder" {
  description = "Docker image for agent-embedder"
  type        = string
  default     = "gcr.io/google-samples/hello-app:1.0"
}

variable "docker_image_agent_worker" {
  description = "Docker image for agent-worker"
  type        = string
  default     = "gcr.io/google-samples/hello-app:1.0"
}

variable "docker_image_agent_manager" {
  description = "Docker image for agent-manager"
  type        = string
  default     = "gcr.io/google-samples/hello-app:1.0"
}

variable "docker_image_agent_server" {
  description = "Docker image for agent-server"
  type        = string
  default     = "gcr.io/google-samples/hello-app:1.0"
}
