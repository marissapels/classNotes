DROP DATABASE IF EXISTS movies_db;

CREATE DATABASE movies_db;
USE movies_db;

-- Create the table plans.
CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) 
VALUES ('Lion King');