CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('Take a nap.');
INSERT INTO wishes (wish) VALUES ('Go on vacation.');
INSERT INTO wishes (wish) VALUES ('Play with a dog.');

SELECT * FROM wishes;