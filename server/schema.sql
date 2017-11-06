CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE usernames (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  room TEXT NOT NULL,
  user INTEGER NOT NULL,
  message_text TEXT NOT NULL,
  -- created_at DATETIME,
  FOREIGN KEY(user) REFERENCES usernames(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

