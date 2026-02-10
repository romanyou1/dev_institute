/* =========================================================
   TABLE RELATIONSHIPS PRACTICE
   Part I: One-to-One Relationship
   Part II: Many-to-Many Relationship (Junction Table)
   ========================================================= */


/* =========================================================
   PART I — ONE TO ONE (Customer ↔ Customer Profile)
   ========================================================= */


/* ---------------------------------------------------------
   1) Create Customer table
   --------------------------------------------------------- */
DROP TABLE IF EXISTS customer_profile;
DROP TABLE IF EXISTS customer;

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);


/* ---------------------------------------------------------
   2) Create Customer Profile table (One-to-One)
      - customer_id references customer(id)
      - UNIQUE ensures one profile per customer
   --------------------------------------------------------- */
CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INTEGER UNIQUE REFERENCES customer(id)
);


/* ---------------------------------------------------------
   3) Insert customers
   --------------------------------------------------------- */
INSERT INTO customer (first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');


/* ---------------------------------------------------------
   4) Insert customer profiles using subqueries
   --------------------------------------------------------- */

-- John is logged in
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (
    TRUE,
    (SELECT id FROM customer WHERE first_name = 'John')
);

-- Jerome is not logged in
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (
    FALSE,
    (SELECT id FROM customer WHERE first_name = 'Jerome')
);


/* ---------------------------------------------------------
   5) Display Queries with Joins
   --------------------------------------------------------- */

-- A) First names of logged-in customers
SELECT c.first_name
FROM customer c
JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;


-- B) All customers + their login status (even without profile)
SELECT c.first_name, cp.isLoggedIn
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id;


-- C) Number of customers that are NOT logged in
-- Includes customers with no profile (NULL treated as not logged in)
SELECT COUNT(*)
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS NOT TRUE;
