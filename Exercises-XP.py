#Exercice 1

print("Hello world\n"*4)

#Exercice 2
print(f"The result of (99^3)*8 is {(99^3)*8}")

#Exercice 3
>>> 5 < 3  #False
>>> 3 == 3   #True
>>> 3 == "3"  #False
>>> "3" > 3  #Error
>>> "Hello" == "hello"  #False

#Exercice 4
computer_brand = input("What is your computer brand ? ")
print(f"I have a {computer_brand}")

#Exercice 5
name = "Roman"
age = 22
shoe_size = 8.5
info = f"My name is {name}, I'm {age} years old and my shoe size is {shoe_size} US."
print(info)

#Exercice 6
a = 10
b = 5

if a>b:
	print("Hello world")
else:
	print("world Hello")

#Exercice 7
number = input("Choose a plain number: ")
try:
	num = int(number)
	if num % 2 == 1:
		print(f"{number} is odd")
	elif num % 2 == 0:
		print(f"{number} is even")
except ValueError:
	print("This is not a plain number.")

#Exercice 8
my_name = "Roman"
your_name = input("What is your name ? ")

if my_name == your_name:
		print("What a beautiful name that we have !")
else:
	print("What a shame that your name isn't as cool as mine :(")

#Exercice 9
height = input("What is your height in centimenters ? ")

try: 
	if int(height) > 145:
		print("You can ride !")
	elif int(height) == 145:
		print("It's your lucky day today, you can ride !")
	else:
		print("Maybe next time you'll be grown enough kid.")
except ValueError:
	print("Please enter a valid number.")
