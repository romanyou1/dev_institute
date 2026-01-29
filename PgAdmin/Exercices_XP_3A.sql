-------------- Exercices_XP_1.sql --------------------
-- To create the database
CREATE DATABASE shop;

-- To create the first table
CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(100) NOT NULL,
  price NUMERIC(10,2) NOT NULL
);

-- To create the second table
CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL
);

-- To put some data in the tables
INSERT INTO items (item_name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

-- 1. All the items
SELECT * FROM items;

-- 2. All the items with a price above 80 (80 not included)
SELECT *
FROM items
WHERE price > 80;

-- 3. All the items with a price below 300 (300 included)
SELECT *
FROM items
WHERE price <= 300;

-- 4. All customers whose last name is 'Smith'
SELECT *
FROM customers
WHERE last_name = 'Smith';

-- Outcome:
-- No rows returned, because there are no customers with the last name 'Smith'

-- 5. All customers whose last name is 'Jones'
SELECT *
FROM customers
WHERE last_name = 'Jones';

-- 6. All customers whose firstname is not 'Scott'
SELECT *
FROM customers
WHERE first_name <> 'Scott';

----------------------------------

-- Exercices_XP_3A.sql

-- Exercice 1
-- 1) All items, ordered by price (lowest to highest)
SELECT *
FROM items
ORDER BY price ASC;

-- 2) Items with a price above 80 (80 included), ordered by price (highest to lowest)
SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;

-- 3) The first 3 customers in alphabetical order of the first name (A-Z)
--    Exclude the primary key column
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

-- 4) All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name
FROM customers
ORDER BY last_name DESC;