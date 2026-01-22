menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

def Show_menu(Menu_dict):
    if len(Menu_dict) == 0:
        print("The menu is empty.")
    else:
        print("Current menu:")
        for drink, price in Menu_dict.items():
            print(f"{drink} - {price}₪")

def Add_item(Menu_dict):
    drink = input("Enter new drink name: ").strip().lower()
    if drink in Menu_dict:
        print("Item already exists!")
        return
    price = float(input("Enter price: "))

    if price < 0:
        print("Invalid price.")
        return
    
    Menu_dict[drink] = price
    print(f"\"{drink}\" added!")

def Update_price(Menu_dict):
    drink = input("Which drink do you want to update? ").strip().lower()
    if drink in Menu_dict:
        new_price = float(input("Enter the new price: "))
        Menu_dict[drink] = new_price
        print("Price updated!")
        if new_price < 0:
            print("Invalid price")
    else:
        print("Item not found.")

def Delete_item(Menu_dict):
    drink = input("Which drink do you want to remove? ").strip().lower()
    if drink in Menu_dict:
        del Menu_dict[drink]
        print("Item deleted.")
    else:
        print("Item not found.")

def search_item(Menu_dict):
    drink = input("Enter drink name to search: ").strip().lower()

    if drink in Menu_dict:
        print(f"{drink} costs {Menu_dict[drink]}₪")
    else:
        print("Not in the menu.")

def apply_discount(Menu_dict, percent):
    for drink in Menu_dict:
        Menu_dict[drink] = Menu_dict[drink] * (1 - percent / 100)
    print(f"{percent}% discount applied!")

def Show_options():
    print("\nWhat would you like to do?")
    print("1. Show menu")
    print("2. Add item")
    print("3. Update price")
    print("4. Delete item")
    print("5. Exit")
    print("6. Search item")
    print("7. Apply discount")

def Run_coffee_shop():
    while True:
        Show_options()
        choice = input("Choose an option (1-5): ")

        if choice == "1":
            Show_menu(menu)
        elif choice == "2":
            Add_item(menu)
        elif choice == "3":
            Update_price(menu)
        elif choice == "4":
            Delete_item(menu)
        elif choice == "5":
            print("Goodbye!")
            break
        elif choice == "6":
            search_item(menu)
        elif choice == "7":
            percent = float(input("Enter discount percentage: "))
            if percent < 0:
                print("Invalid discount.")
            else:
                apply_discount(menu, percent)
        else:
            print("Invalid choice, try again.")

Run_coffee_shop()
