import os
import random
import requests
import psycopg2
from dotenv import load_dotenv

load_dotenv()

DB_CONFIG = {
    "dbname": os.getenv("DB_NAME"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "host": os.getenv("DB_HOST", "127.0.0.1"),
    "port": int(os.getenv("DB_PORT", "5432")),
}

API_URL = "https://restcountries.com/v3.1/all"


def fetch_all_countries() -> list[dict]:
    """Fetch all countries from REST Countries v3.1."""
    resp = requests.get(API_URL, timeout=30)
    resp.raise_for_status()
    return resp.json()


def normalize_country(raw: dict) -> dict:
    """Extract required attributes safely."""
    name = raw.get("name", {}).get("common")

    # capital is often a list in v3.1
    capital_list = raw.get("capital") or []
    capital = capital_list[0] if isinstance(capital_list, list) and capital_list else None

    # flags usually contains png/svg URLs
    flags = raw.get("flags") or {}
    flag = flags.get("png") or flags.get("svg") or None

    subregion = raw.get("subregion")
    population = raw.get("population")

    if not name:
        raise ValueError("Country has no name.common")

    return {
        "name": name,
        "capital": capital,
        "flag": flag,
        "subregion": subregion,
        "population": population,
    }


def insert_countries(rows: list[dict]) -> int:
    """Insert countries into DB. Returns number of newly inserted rows."""
    query = """
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
        ON CONFLICT (name) DO NOTHING;
    """
    inserted = 0
    with psycopg2.connect(**DB_CONFIG) as conn:
        with conn.cursor() as cur:
            for r in rows:
                cur.execute(
                    query,
                    (r["name"], r["capital"], r["flag"], r["subregion"], r["population"]),
                )
                inserted += cur.rowcount  # 1 if inserted, 0 if skipped (duplicate)
    return inserted


def seed_random_countries(n: int = 10) -> None:
    all_raw = fetch_all_countries()

    # normalize + filter out weird entries
    normalized: list[dict] = []
    for c in all_raw:
        try:
            normalized.append(normalize_country(c))
        except Exception:
            continue

    if len(normalized) < n:
        raise RuntimeError(f"Not enough valid countries fetched: {len(normalized)}")

    sample = random.sample(normalized, n)
    inserted = insert_countries(sample)

    print(f"Selected {n} random countries.")
    print(f"Inserted {inserted} new rows (duplicates skipped: {n - inserted}).")


if __name__ == "__main__":
    seed_random_countries(10)