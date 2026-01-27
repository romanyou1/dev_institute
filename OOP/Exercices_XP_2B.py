import random
from Exercices_XP_2 import Dog 

class PetDog(Dog):
	def __init__(self, name, age, weight, trained=False):
		super().__init__(name, age, weight)
		self.trained = trained

	def train(self):
		print(self.bark())
		self.trained = True

	def play(self, *args):
		dog_name = [self.name]
		for dog in args:
			dog_name.append(dog.name)

	def do_a_trick(self):
		tricks = [
		    "does a barrel roll",
		    "stands on his back legs",
		    "shakes your hand",
		    "play dead"
		]

		if self.trained:
		    trick = random.choice(tricks)
		    print(f"{self.name} {trick}")

dog1 = PetDog("Rex", 5, 20)
dog2 = PetDog("Buddy", 3, 18)
dog3 = PetDog("Max", 4, 22)

# Train dog1
dog1.train()

# Play together
dog1.play(dog2, dog3)

# Try tricks
dog1.do_a_trick()
dog2.do_a_trick() 