-- Clipboard sync: one row per code; content and updated_at (unix seconds).
-- Expiry is enforced in API (10 min); optionally run cleanup.
CREATE TABLE IF NOT EXISTS clipboard (
  code TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);
