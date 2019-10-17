
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

-- Create the table plans.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);


INSERT INTO burgers (burger_name, devoured) VALUES ("Hot n spicy", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("cheese burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("spicy chicken burger", false);
