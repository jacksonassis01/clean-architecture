DROP TABLE IF EXISTS user;

CREATE TABLE user (
    user_id TEXT PRIMARY KEY,
    email TEXT NOT NULL,
    password_value TEXT NOT NULL,
    password_type TEXT NOT NULL,
    password_salt TEXT
);
