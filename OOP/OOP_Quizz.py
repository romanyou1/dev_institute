#Exercice 1

"""
Class: A blueprint for creating objects.
Instance: A specific object created from a class.
Encapsulation: Bundling data and methods, restricting direct access.
Abstraction: Hiding implementation details, exposing essentials.
Inheritance: A class acquiring properties/methods from another.
Multiple inheritance: A class inheriting from more than one class.
Polymorphism: Same method name, different behavior.
MRO (Method Resolution Order): Order Python follows to find methods in inheritance.
"""

#Exercice 2

class Card:
	def __init__(self, suit, value):
		self.suit = suit
		self.value = value

	def __repr__(self):
		return f"{self.value} of {self.suit}"



