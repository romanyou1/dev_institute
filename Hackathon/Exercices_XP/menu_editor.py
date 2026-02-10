from menu_item import MenuItem
from menu_manager import MenuManager


def show_restaurant_menu():
    """Print all items from the restaurant menu."""
    items = MenuManager.all_items()

    print("\n🍽️ Restaurant Menu 🍽️")
    print("-" * 30)

    if not items:
        print("The menu is currently empty.")
    else:
        for item in items:
            print(f"{item.name} - {item.price}₪")

    print("-" * 30)


def add_item_to_menu():
    """Ask user for item name and price, then add it to the DB."""
    name = input("Enter the item name: ")
    price = int(input("Enter the item price: "))

    item = MenuItem(name, price)

    if item.save():
        print("✅ Item was added successfully.")
    else:
        print("❌ Error: item could not be added.")


def remove_item_from_menu():
    """Ask user for item name, then delete it from the DB."""
    name = input("Enter the name of the item to delete: ")

    item = MenuItem(name)

    if item.delete():
        print("✅ Item was deleted successfully.")
    else:
        print("❌ Error: item could not be deleted (item not found).")


def update_item_from_menu():
    """Ask user for old item info + new item info, then update it."""
    old_name = input("Enter the name of the item to update: ")
    old_price = input("Enter the current price (optional): ")

    new_name = input("Enter the new name: ")
    new_price = int(input("Enter the new price: "))

    item = MenuItem(old_name)

    if item.update(new_name, new_price):
        print("✅ Item was updated successfully.")
    else:
        print("❌ Error: item could not be updated.")


def show_user_menu():
    """Main program menu (not restaurant menu)."""
    while True:
        print("\n--- Menu Manager ---")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Menu")
        print("(E) Exit")

        choice = input("Choose an option: ").upper()

        if choice == "V":
            name = input("Enter item name: ")
            item = MenuManager.get_by_name(name)

            if item:
                print(f"Item found: {item.name} - {item.price}₪")
            else:
                print("❌ Item not found.")

        elif choice == "A":
            add_item_to_menu()

        elif choice == "D":
            remove_item_from_menu()

        elif choice == "U":
            update_item_from_menu()

        elif choice == "S":
            show_restaurant_menu()

        elif choice == "E":
            print("\nExiting program...")
            show_restaurant_menu()
            break

        else:
            print("❌ Invalid choice. Please try again.")


# Run the program
if __name__ == "__main__":
    show_user_menu()