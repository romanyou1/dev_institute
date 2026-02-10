/* =========================================================
    Exercises 2
   ========================================================= */

/* =========================================================
   DVDRental – UPDATE, Foreign Keys, Rentals & Investigation
   =========================================================
   This worksheet covers:
   - UPDATE with foreign keys
   - Foreign key constraints
   - DROP TABLE considerations
   - Outstanding rentals
   - Complex JOIN queries
   ========================================================= */


/* ---------------------------------------------------------
   1) Update the language of some films
      (Make sure the language exists)
   --------------------------------------------------------- */

-- Check available languages
SELECT * FROM language;

-- Example: change language of some films using a valid language_id
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3);

-- Example: update films by language name
UPDATE film
SET language_id = (
    SELECT language_id
    FROM language
    WHERE name = 'French'
)
WHERE title ILIKE '%ACADEMY%';


/* ---------------------------------------------------------
   2) Foreign keys defined on the customer table
      (address_id -> address.address_id)
   --------------------------------------------------------- */

SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS referenced_table,
    ccu.column_name AS referenced_column
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'customer'
  AND tc.constraint_type = 'FOREIGN KEY';

-- Effect:
-- When inserting a customer, address_id must exist in the address table.


/* ---------------------------------------------------------
   3) Drop the customer_review table
      (May require extra checks if dependencies exist)
   --------------------------------------------------------- */

-- Simple drop (works only if no dependencies exist)
DROP TABLE customer_review;

-- Safe version (drops dependent objects if any)
-- DROP TABLE IF EXISTS customer_review CASCADE;


/* ---------------------------------------------------------
   4) Find how many rentals are still outstanding
      (movies not returned yet)
   --------------------------------------------------------- */

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;


/* ---------------------------------------------------------
   5) Find the 30 most expensive movies that are outstanding
   --------------------------------------------------------- */

SELECT
    f.film_id,
    f.title,
    f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;


/* ---------------------------------------------------------
   6) Help your friend find the 4 movies he wants to rent
   --------------------------------------------------------- */

-- Movie 1:
-- A film about a sumo wrestler with actor Penelope Monroe
SELECT f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
  AND a.first_name = 'Penelope'
  AND a.last_name = 'Monroe';


-- Movie 2:
-- A short documentary (< 60 minutes), rated R
SELECT title, length, rating
FROM film
WHERE length < 60
  AND rating = 'R'
  AND description ILIKE '%documentary%';


-- Movie 3:
-- A film rented by Matthew Mahan
-- Paid over $4.00
-- Returned between July 28 and August 1, 2005
SELECT f.title, p.amount, r.return_date
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


-- Movie 4:
-- Also watched by Matthew Mahan
-- Contains the word "boat" in title or description
-- Very expensive to replace
SELECT f.title, f.description, f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (
      f.title ILIKE '%boat%'
      OR f.description ILIKE '%boat%'
  )
ORDER BY f.replacement_cost DESC;