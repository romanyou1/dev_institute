#Exercices 1

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Siamese(Cat):
    def scary(self, scare):
        return f'{scare}'

class Bengal(Cat):
    def pretty(self, beautiful):
        return f'{beautiful}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

siamese = Siamese("Kevin", 3)
bengal = Bengal("Pussycat", 1)
chartreux = Chartreux("Darling", 9)

all_cats = [siamese, bengal, chartreux]

sara_pets = Pets(all_cats)

sara_pets.walk()

#Exercices 2

class Dog():
	def __init__(self, name, age, weight):
		self.name = name
		self.age = age
		self.weight = weight

	def bark(self):
		return f"{self.name} is barking."

	def run_speed(self):
		return self.weight / self.age * 10

	def fight(self, other_dog):
		self_score = self.run_speed() * self.weight 
		other_score = other_dog.run_speed() * other_dog.weight

		if self_score > other_score:
			return f"{self.name} won the fight !"
		elif self_score < other_score:
			return f"{other_dog.name} won the fight !"
		else:
			return f"It's a tie !"

dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 18)
dog3 = Dog("Volt", 1, 22)

print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog3))

#Exercices 3 on the "Exercices_XP_2B" file. 

#Exercices 4

class Person:
	def __init__(self, first_name, age):
		self.first_name = first_name
		self.age = age
		self.last_name = ""

	def is_18(self):
		return self.age >= 18

class Family:
	def __init__(self, last_name):
		self.last_name = last_name
		self.members = []

	def born(self, first_name, age):
		new_person = Person(first_name, age)
		new_person.last_name = self.last_name
		self.members.append(new_person)

	def check_majority(self, first_name):
		for member in self.members:
			if member.first_name == first_name:
				if member.is_18():
					print(f"{first_name}, You are over 18, your parents Jane and John accept that you will go out with your friends")
				else:
					print(f"{first_name}, Sorry, you are not allowed to go out with your friends.")
				return

	def family_presentation(self):
		print(f"Family last name: {self.last_name}")
		for member in self.members:
			print(f"{member.first_name} - {member.age}")

# Create a family
family = Family("Doe")

# Add members
family.born("Alice", 20)
family.born("Bob", 16)

# Check majority
family.check_majority("Alice")
family.check_majority("Bob")

# Display family information
family.family_presentation()
