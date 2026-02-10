/* =========================================================
   PART II — MANY TO MANY (Book ↔ Student through Library)
   ========================================================= */


/* ---------------------------------------------------------
   1) Create Book table
   --------------------------------------------------------- */
DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS book;

CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);


/* ---------------------------------------------------------
   2) Insert books
   --------------------------------------------------------- */
INSERT INTO book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');


/* ---------------------------------------------------------
   3) Create Student table
      - name must be unique
      - age must not be greater than 15 (CHECK constraint)
   --------------------------------------------------------- */
CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);


/* ---------------------------------------------------------
   4) Insert students
   --------------------------------------------------------- */
INSERT INTO student (name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);


/* ---------------------------------------------------------
   5) Create Library junction table (Many-to-Many)
      - Composite Primary Key (book_fk_id, student_fk_id)
      - ON DELETE CASCADE ensures automatic cleanup
   --------------------------------------------------------- */
CREATE TABLE library (
    book_fk_id INTEGER REFERENCES book(book_id)
        ON DELETE CASCADE ON UPDATE CASCADE,

    student_fk_id INTEGER REFERENCES student(student_id)
        ON DELETE CASCADE ON UPDATE CASCADE,

    borrowed_date DATE NOT NULL,

    PRIMARY KEY (book_fk_id, student_fk_id)
);


/* ---------------------------------------------------------
   6) Insert 4 borrowing records using subqueries
   --------------------------------------------------------- */

-- John borrowed Alice In Wonderland on 15/02/2022
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'John'),
    '2022-02-15'
);

-- Bob borrowed To kill a mockingbird on 03/03/2021
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-03-03'
);

-- Lera borrowed Alice In Wonderland on 23/05/2021
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'Lera'),
    '2021-05-23'
);

-- Bob borrowed Harry Potter on 12/08/2021
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-08-12'
);


/* =========================================================
   DISPLAY QUERIES
   ========================================================= */

-- 1) Select all columns from the junction table
SELECT *
FROM library;


-- 2) Select student name and title of borrowed books
SELECT s.name, b.title, l.borrowed_date
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;


-- 3) Average age of children who borrowed Alice In Wonderland
SELECT AVG(s.age) AS average_age
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';


/* ---------------------------------------------------------
   7) Delete a student and check what happens
      Because of ON DELETE CASCADE, related records in library
      will be deleted automatically.
   --------------------------------------------------------- */

-- Delete student Bob
DELETE FROM student
WHERE name = 'Bob';

-- Check junction table after deletion
SELECT *
FROM library;