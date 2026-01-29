-- Exercices_XP_3B.sql
-- Exercice 2
/* =========================================================
   DVDRental Database – SQL Practice Sheet
   =========================================================
   This file contains SQL queries to practice SELECT, WHERE,
   ORDER BY, JOIN, DISTINCT, and window functions
   on the dvdrental sample database.
   ========================================================= */


/* ---------------------------------------------------------
   1. Select all columns from the customer table
   --------------------------------------------------------- */
SELECT *
FROM customer;


/* ---------------------------------------------------------
   2. Display first_name and last_name as a single column
      using an alias called "full_name"
   --------------------------------------------------------- */
SELECT
    first_name || ' ' || last_name AS full_name
FROM customer;


/* ---------------------------------------------------------
   3. Get all account creation dates (no duplicates)
   --------------------------------------------------------- */
SELECT DISTINCT create_date
FROM customer;


/* ---------------------------------------------------------
   4. Get all customer details ordered by first name (Z-A)
   --------------------------------------------------------- */
SELECT *
FROM customer
ORDER BY first_name DESC;


/* ---------------------------------------------------------
   5. Get film id, title, description, release year and
      rental rate ordered by rental rate (lowest to highest)
   --------------------------------------------------------- */
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;


/* ---------------------------------------------------------
   6. Get the address and phone number of all customers
      living in the Texas district
   --------------------------------------------------------- */
SELECT a.address, a.phone
FROM customer c
JOIN address a ON a.address_id = c.address_id
WHERE a.district = 'Texas';


/* ---------------------------------------------------------
   7. Retrieve all movie details where the film id
      is either 15 or 150
   --------------------------------------------------------- */
SELECT *
FROM film
WHERE film_id IN (15, 150);


/* ---------------------------------------------------------
   8. Check if your favorite movie exists in the database
      (replace the title with your favorite movie)
   --------------------------------------------------------- */
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'YOUR FAVORITE MOVIE';


/* ---------------------------------------------------------
   9. If the exact title is unknown, find movies starting
      with the first two letters of your favorite movie
      (replace 'TO' with the desired letters)
   --------------------------------------------------------- */
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'TO%';


/* ---------------------------------------------------------
   10. Find the 10 cheapest movies
   --------------------------------------------------------- */
SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate ASC, film_id ASC
LIMIT 10;


/* ---------------------------------------------------------
   11. Find the next 10 cheapest movies (without LIMIT)
      using a window function
   --------------------------------------------------------- */
SELECT film_id, title, rental_rate
FROM (
    SELECT
        film_id,
        title,
        rental_rate,
        ROW_NUMBER() OVER (ORDER BY rental_rate ASC, film_id ASC) AS row_num
    FROM film
) sub
WHERE row_num BETWEEN 11 AND 20
ORDER BY row_num;


/* ---------------------------------------------------------
   12. Join customer and payment tables to get
      customer names, payment amount and payment date,
      ordered by customer id
   --------------------------------------------------------- */
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date
FROM customer c
JOIN payment p ON p.customer_id = c.customer_id
ORDER BY c.customer_id ASC, p.payment_date ASC;


/* ---------------------------------------------------------
   13. Get all movies that are NOT in inventory
   --------------------------------------------------------- */
SELECT f.*
FROM film f
LEFT JOIN inventory i ON i.film_id = f.film_id
WHERE i.film_id IS NULL;


/* ---------------------------------------------------------
   14. Find which city belongs to which country
   --------------------------------------------------------- */
SELECT ci.city, co.country
FROM city ci
JOIN country co ON co.country_id = ci.country_id
ORDER BY co.country ASC, ci.city ASC;


/* ---------------------------------------------------------
   15. BONUS:
      Get customer id, customer names, payment amount
      and payment date, ordered by the staff member
      who processed the payment
   --------------------------------------------------------- */
SELECT
    p.staff_id,
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date
FROM payment p
JOIN customer c ON c.customer_id = p.customer_id
ORDER BY p.staff_id ASC, c.customer_id ASC, p.payment_date ASC;
