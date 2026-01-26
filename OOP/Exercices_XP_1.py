#Exercice 1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects

cat1 = Cat("Mustard", 2)
cat2 = Cat("Felix", 4)
cat3 = Cat("Moustache", 1)

# Step 2: Create a function to find the oldest cat

def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1

    if cat2.age > oldest.age:
        oldest = cat2
    if cat3.age > oldest.age:
        oldest = cat3

    return oldest

# Step 3: Print the oldest cat's details

oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

#Exercice 2

#Step 1: Create the Dog Class

class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x} cm high!")

#Step 2: Create Dog Objects

davids_dog = Dog("Rex", 100)
sarahs_dog = Dog("Lucie", 50)

#Step 3: Print Dog Details and Call Methods

print(davids_dog.name, davids_dog.height)
davids_dog.bark()
davids_dog.jump()

print(sarahs_dog.name, sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

#Step 4: Compare Dog Sizes

def compare_dog(davids_dog, sarahs_dog):

    if davids_dog.height > sarahs_dog.height:
        return davids_dog
    else:
        return sarahs_dog

highest_dog = compare_dog(davids_dog, sarahs_dog)
print(f"The highest dog is {highest_dog.name}, its height is {highest_dog.height} cm.")


#Exercice 3

#Step 1: Create the Song Class

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
    ])

stairway.sing_me_a_song()

#Exercice 4

# Step 1: Define the Zoo Class
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, *new_animals):
        for animal in new_animals:
            if animal not in self.animals:
                self.animals.append(animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        grouped_animals = {}

        for animal in self.animals:
            first_letter = animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []
            grouped_animals[first_letter].append(animal)

        return grouped_animals

    def get_groups(self):
        grouped_animals = self.sort_animals()
        for letter, animals in grouped_animals.items():
            print(f"{letter}: {animals}")

#Step 2: Create A Zoo Object

brooklyn_safari = Zoo("Brooklyn Safari")

#Step 3: Call The Zoo Methods

brooklyn_safari.add_animal("Giraffe", "Bear", "Baboon", "Cat", "Cougar", "Lion", "Zebra")

brooklyn_safari.get_animals()

brooklyn_safari.sell_animal("Bear")
brooklyn_safari.get_animals()

brooklyn_safari.get_groups()

