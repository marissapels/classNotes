DROP DATABASE IF EXISTS seinfeld_db;

CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50),
    coolness_points INTEGER,
    attitude VARCHAR(50)
);

INSERT INTO actors(name, coolness_points, attitude)
VALUES ("Seinfield",80,"nice");

INSERT INTO actors(name, coolness_points, attitude)
VALUES ("Kramer",20,"funny");

INSERT INTO actors(name, coolness_points, attitude)
VALUES ("George Costanza",75,"cool");

INSERT INTO actors(name, coolness_points, attitude)
VALUES ("Elaine Benes",60,"high strung");

SELECT * FROM actors;