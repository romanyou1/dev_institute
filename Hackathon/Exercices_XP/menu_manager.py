import psycopg2
from db_config import DB_CONFIG
from menu_item import MenuItem


class MenuManager:
    @classmethod
    def get_by_name(cls, name: str):
        """Return a single MenuItem by name, or None if not found."""
        query = "SELECT item_name, item_price FROM menu_items WHERE item_name = %s;"
        with psycopg2.connect(**DB_CONFIG) as conn:
            with conn.cursor() as cur:
                cur.execute(query, (name,))
                row = cur.fetchone()

        if row is None:
            return None

        return MenuItem(row[0], row[1])

    @classmethod
    def all_items(cls):
        """Return a list of all MenuItem objects."""
        query = "SELECT item_name, item_price FROM menu_items ORDER BY item_id;"
        with psycopg2.connect(**DB_CONFIG) as conn:
            with conn.cursor() as cur:
                cur.execute(query)
                rows = cur.fetchall()

        return [MenuItem(name, price) for (name, price) in rows]