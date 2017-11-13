CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  Item VARCHAR(45) NULL,
  startingBid DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (Item, startingBid, quantity)
VALUES ("Boots", 2.50, 20);

INSERT INTO items (Item, startingBid, quantity)
VALUES ("Hats", 3.10, 5);

INSERT INTO items (Item, startingBid, quantity)
VALUES ("Shoes", 3.25, 15);