import random

user_input = input("Please enter your username (it must be 10 chcaracters long): ")


if len(user_input) < 10:
    print("String not long enough")
elif len(user_input) > 10:
    print("String too long")
else:
    print("Perfect string")
    
    first_character = user_input[0]
    last_character = user_input[-1]
    print(f"The first character is {first_character} and the last is {last_character}")

    print("\nBuilding the string:")
    current = ""
    for char in user_input:
        current += char
        print(current)

    print("\nJumbled string:")
    chars = list(user_input)
    random.shuffle(chars)
    jumbled = "".join(chars)
    print(jumbled)

