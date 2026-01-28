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

import random

class Card:
	def __init__(self, suit, value):
		self.suit = suit
		self.value = value

	def __repr__(self):
		return f"{self.value} of {self.suit}"

class Deck:
	def __init__(self):
		self.cards = []

	def shuffle(self):
		suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
		values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
		self.cards = [Card(suit, value) for suit in suits for value in values]
		random.shuffle(self.cards)

	def deal(self):
		if not self.cards:
			return None
		return self.cards.pop()

deck = Deck()

deck.shuffle()
print(f"Nombre de cartes après shuffle : {len(deck.cards)}")  # Must be 52

card = deck.deal()
print(f"Carte distribuée : {card}")
print(f"Nombre de cartes restantes : {len(deck.cards)}")  # Must be 51

# Deal every cards
while True:
    card = deck.deal()
    if card is None:
        print("Plus de cartes dans le deck")
        break

