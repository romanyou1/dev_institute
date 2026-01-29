-- Create the database
CREATE DATABASE actors

-- Create the Table
CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

-- Import the data 
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);


-- To count the data 
SELECT COUNT(*) 
FROM actors;

-- Import the incomplete data
INSERT INTO actors (first_name, last_name)
VALUES ('Tom', NULL);

-- Output : ERROR:  null value in column "last_name" of relation "actors" violates not-null constraint
-- Failing row contains (3, Tom, null, null, null). 


-- The insertion will fail because some columns are defined as NOT NULL. 
-- PostgreSQL enforces data integrity and does not allow empty or missing values for those fields.