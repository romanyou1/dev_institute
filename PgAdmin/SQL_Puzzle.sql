-- SQL_Puzzle.sql
-- Question 1

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL)

-- Subquery result
SELECT id FROM SecondTab WHERE id IS NULL
-- Will returns (NULL)

-- Condition
ft.id NOT IN (NULL)

--For all rows, this condition evaluates to UNKNOWN, so no rows are selected.
Output: 0

-- Question 2

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5)

-- Subquery result
-> (5)

-- Evaluation
id = 5 -> FALSE
id = 6 -> TRUE
id = 7 -> TRUE
id = NULL -> UNKNOWN (excluded)

-- Rows kept: 6 and 7
->Output: 2

-- Question 3

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab)

--Subquery result
-> (5, NULL)

--Evaluation
id = 5 → FALSE
id = 6 → UNKNOWN (because of NULL)
id = 7 → UNKNOWN
id = NULL → UNKNOWN

-- No rows satisfy the condition.
-> Output: 0

-- Question 4

SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL)

-- Subquery result
-> (5)

-- Evaluation
Same logic as Q2.

-- Rows kept: 6 and 7
-> Output: 2

Final Answers Summary
-- Q1 Output: 0
-- Q2 Output: 2
-- Q3 Output: 0
-- Q4 Output: 2