CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL UNIQUE,
    capital VARCHAR(150),
    flag TEXT,
    subregion VARCHAR(150),
    population BIGINT
);