CREATE TABLE seraph_events (
  id SERIAL NOT NULL PRIMARY KEY,
  agentId TEXT NOT NULL,
  projectId TEXT NOT NULL,
  type TEXT NOT NULL,
  request JSONB,
  response JSONB,
  error TEXT,
  info TEXT,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);