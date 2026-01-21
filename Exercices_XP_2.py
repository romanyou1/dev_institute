# Exercice 1
my_fav_numbers = {3, 4, 8}
print(my_fav_numbers)

my_fav_numbers.add(21)
my_fav_numbers.add(42)
print("After adding two numbers:", my_fav_numbers)

my_fav_numbers.remove(42)
print("After removing the higher number", my_fav_numbers)

friend_fav_numbers = {5, 7, 18}
print("Friend's favorite numbers:", friend_fav_numbers)

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)


# Exercice 2
numbers = (1, 2, 3)
print("Original tuple:", numbers)

#numbers.add(4)
# Tuples are immutable, so we cannot add new elements to them after creation, but we can create another one to modify it. 

numbers = (1, 2, 3)
numbers = numbers + (4,)

print(numbers)

# Exercice 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("kiwi")
basket.insert(0, "Apples")
print(basket)

apples_count = basket.count("Apples")
print("Apples appear", apples_count, "times")

basket.clear()
print(basket)

# Exercice 4
# A Float is a number with decimal points like 1.5, 6.9 or 8.88
# An Integer is a whole number with no decimal point like 2 or 5
# The difference between them is that the integer is a whole number and the float is a decimal number. 

numbers = []
for i in range(3, 11):
    numbers.append(i / 2)
print(numbers)

# Exercice 5
for i in range(1, 21):
    print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)

# Exercice 6
while True:
    name = input("Please enter your name: ")

    if name.isdigit() or len(name) < 3:
        print("This isn't your name, right ?")
    else:
        print("Thank you")
        break

# Exercice 7
favorites_fruits = input("Please enter your favorites fruits (separated by spaces): ")
fav_fruits_list = favorites_fruits.split()
new_fruit = input("Choose a fruit: ")

if new_fruit in fav_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# Exercice 8
toppings = []
price = 10

while True:
    topping = input("Enter a pizza topping (type 'quit' to finish): ")

    if topping == "quit":
        break
    else:
        toppings.append(topping)
        print(f"Adding {topping} to your pizza.")

total_price = price + (len(toppings) * 2.5)

print("\nYour pizza toppings:")
for topping in toppings:
    print("-", topping)

print(f"Total price: ${total_price}")


# Exercice 9
total_cost = 0

while True:
    age = input("Enter the person's age (or type 'quit' to finish): ")

    if age == "quit":
        break

    age = int(age)

    if age < 3:
        total_cost += 0
    elif age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print("Total ticket cost: $", total_cost)

# Bonus
attendees = []

while True:
    age = input("Enter age (or type 'quit' to finish): ")

    if age == "quit":
        break

    age = int(age)

    if 16 <= age <= 21:
        attendees.append(age)
    else:
        print("Sorry, you are not allowed to watch this movie.")

print("Final list of allowed attendees:", len(attendees))