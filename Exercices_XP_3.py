#Exercice 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)

#Exercice 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15

    total_cost += price
    print(f"{name} has to pay ${price}")

print("Total cost for the family: $", total_cost)

#Bonus
family = {}
total_cost = 0

while True:
    name = input("Enter family member name (or type 'quit' to finish): ")

    if name == "quit":
        break

    age = int(input("Enter age: "))
    family[name] = age

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15

    total_cost += price
    print(f"{name} has to pay ${price}")

print("Total cost for the family: $", total_cost)

#Exercice 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap, H&M, Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink, green"]
    }
}

# Change number of stores to 2
brand["number_stores"] = 2

# Print a sentence about Zara’s clients
print(f"Zara sells clothes for {', '.join(brand['type_of_clothes'])}.")

# Add country_creation
brand["country_creation"] = "Spain"

# Add Desigual to international competitors if key exists
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Delete creation_date
del brand["creation_date"]

# Print last international competitor
print("Last international competitor:", brand["international_competitors"][-1])

# Print major colors in the US
print("Major colors in the US:", brand["major_color"]["US"])

# Print number of keys
print("Number of keys in the dictionary:", len(brand))

# Print all keys
print("Dictionary keys:")
for key in brand.keys():
    print(key)

#Bonus
# Create another dictionary
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 2
}

# Merge the two dictionaries
brand.update(more_on_zara)

# Print the merged dictionary
print(brand)

#Exercice 4
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

dict_1 = {}

for index, name in enumerate(users):
    dict_1[name] = index

print(dict_1)


dict_2 = {}

for index, name in enumerate(users):
    dict_2[index] = name

print(dict_2)

sorted_users = sorted(users)
dict_3 = {}

for index, name in enumerate(sorted_users):
    dict_3[name] = index

print(dict_3)
