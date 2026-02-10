/* =========================================================
    Exercises 1
   ========================================================= */

/* =========================================================
   DVDRental – JOINs + Creating new tables + Foreign Keys
   ========================================================= */


/* ---------------------------------------------------------
   1) Get a list of all the languages (language table)
   --------------------------------------------------------- */
SELECT *
FROM language;


/* ---------------------------------------------------------
   2) Get a list of all films joined with their languages
      (film title, description, language name)
      -> INNER JOIN: only films that have a valid language
   --------------------------------------------------------- */
SELECT
    f.title,
    f.description,
    l.name AS language_name
FROM film f
JOIN language l ON l.language_id = f.language_id;


/* ---------------------------------------------------------
   3) Get all languages even if there are no films
      (film title, description, language name)
      -> LEFT JOIN from language to film
      -> languages always appear, film columns may be NULL
   --------------------------------------------------------- */
SELECT
    f.title,
    f.description,
    l.name AS language_name
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id
ORDER BY l.name, f.title;


/* ---------------------------------------------------------
   4) Create a new table called new_film (id, name)
      and add some new films
   --------------------------------------------------------- */
DROP TABLE IF EXISTS customer_review;
DROP TABLE IF EXISTS new_film;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
('My First Film'),
('The SQL Adventure'),
('Postgres Nights');


/* ---------------------------------------------------------
   5) Create a table customer_review
      DELETE constraint:
      If a film is deleted, its reviews should be deleted too
      -> ON DELETE CASCADE
   --------------------------------------------------------- */
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,                 -- auto-increment PK, NOT NULL by default
    film_id INTEGER NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER NOT NULL REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INTEGER NOT NULL CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,                             -- no length limit
    last_update TIMESTAMP NOT NULL DEFAULT NOW()
);


/* ---------------------------------------------------------
   6) Add 2 movie reviews linked to valid objects
      - film_id must exist in new_film
      - language_id must exist in language
      We'll pick language_id = 1 (usually English), but we can
      safely fetch it first if needed.
   --------------------------------------------------------- */

-- (Optional) check available languages
SELECT language_id, name FROM language ORDER BY language_id;

-- Insert 2 reviews (make sure film_id values exist)
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Great starter movie', 8, 'Really fun and easy to follow.'),
(2, 1, 'Solid SQL vibes', 9, 'Loved the pacing and the database references.');


/* ---------------------------------------------------------
   Verify inserted reviews
   --------------------------------------------------------- */
SELECT *
FROM customer_review
ORDER BY review_id;


/* ---------------------------------------------------------
   7) Delete a film that has a review
      What happens to customer_review?
      -> Because of ON DELETE CASCADE, the related reviews are
         automatically deleted.
   --------------------------------------------------------- */

-- Delete film with id = 1 (it has a review above)
DELETE FROM new_film
WHERE id = 1;

-- Check what remains in customer_review
SELECT *
FROM customer_review
ORDER BY review_id;

-- Check remaining films
SELECT *
FROM new_film
ORDER BY id;
