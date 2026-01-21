#Challenge 1
user_number = int(input("Please choose a plain number: "))
user_length = int(input("Please choose the length of your list: "))

multiples = []

for i in range(1, user_length + 1):
    multiples.append(user_number * i)

print(multiples)

#Challenge 2
word = input("Enter a word: ")

result = ""

for char in word:
    if result == "" or char != result[-1]:
        result += char

print(result)