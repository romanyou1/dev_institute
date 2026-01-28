from OOP_Quizz import Card
import random

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