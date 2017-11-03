CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY,
  room INTEGER,
  user INTEGER,
  message_text TEXT,
  -- created_at DATETIME,
  FOREIGN KEY(room) REFERENCES roomnames(id),
  FOREIGN KEY(user) REFERENCES usernames(id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE roomnames (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE usernames (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY,
  name TEXT
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

