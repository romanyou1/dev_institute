import psycopg2
from db_config import DB_CONFIG


class MenuItem:
    def __init__(self, name, price=0):
        self.name = name
        self.price = price

    def save(self):
        query = """
        INSERT INTO menu_items (item_name, item_price)
        VALUES (%s, %s)
        ON CONFLICT (item_name)
        DO NOTHING;
        """
        try:
            with psycopg2.connect(**DB_CONFIG) as conn:
                with conn.cursor() as cur:
                    cur.execute(query, (self.name, self.price))
            return True
        except:
            return False

    def delete(self):
        query = "DELETE FROM menu_items WHERE item_name = %s;"
        try:
            with psycopg2.connect(**DB_CONFIG) as conn:
                with conn.cursor() as cur:
                    cur.execute(query, (self.name,))
                    return cur.rowcount > 0
        except:
            return False

    def update(self, new_name, new_price):
        query = """
        UPDATE menu_items
        SET item_name = %s, item_price = %s
        WHERE item_name = %s;
        """
        try:
            with psycopg2.connect(**DB_CONFIG) as conn:
                with conn.cursor() as cur:
                    cur.execute(query, (new_name, new_price, self.name))
                    if cur.rowcount == 0:
                        return False

            self.name = new_name
            self.price = new_price
            return True
        except:
            return False
