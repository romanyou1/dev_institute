#Challenge 1
user_word = input("Please enter a word: ")

result = {}
for index, char in enumerate(user_word):
    if char in result:
        result[char].append(index)
    else:
        result[char] = [index]

print(result)

#Challenge 2
# ---------- CASE 1 ----------
items_purchase1 = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}
wallet1 = "$300"

wallet_amount = int(wallet1.replace("$", "").replace(",", ""))
basket = []

for item, price in items_purchase1.items():
    clean_price = int(price.replace("$", "").replace(",", ""))
    if clean_price <= wallet_amount:
        basket.append(item)
        wallet_amount -= clean_price

if not basket:
    print("Nothing")
else:
    print(sorted(basket))


# ---------- CASE 2 ----------
items_purchase2 = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2"
}
wallet2 = "$100"

wallet_amount = int(wallet2.replace("$", "").replace(",", ""))
basket = []

for item, price in items_purchase2.items():
    clean_price = int(price.replace("$", "").replace(",", ""))
    if clean_price <= wallet_amount:
        basket.append(item)
        wallet_amount -= clean_price

if not basket:
    print("Nothing")
else:
    print(sorted(basket))


# ---------- CASE 3 ----------
items_purchase3 = {
    "Phone": "$999",
    "Speakers": "$300",
    "Laptop": "$5,000",
    "PC": "$1200"
}
wallet3 = "$1"

wallet_amount = int(wallet3.replace("$", "").replace(",", ""))
basket = []

for item, price in items_purchase3.items():
    clean_price = int(price.replace("$", "").replace(",", ""))
    if clean_price <= wallet_amount:
        basket.append(item)
        wallet_amount -= clean_price

if not basket:
    print("Nothing")
else:
    print(sorted(basket))
