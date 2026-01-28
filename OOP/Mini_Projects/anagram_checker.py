class AnagramChecker:
	def __init__(self):
		with open("sowpods.txt", "r") as file:
			self.words = set(word.strip().lower() for word in file)

	def is_valid_word(self, word):
		return word.lower() in self.words

	def is_anagram(self, word1, word2):
		return sorted(word1.lower()) == sorted(word2.lower())

	def get_anagrams(self, word):
		anagrams = []
		word = word.lower()

		for candidate in self.words:
			if candidate != word and self.is_anagram(word, candidate):
				anagrams.append(candidate)

		return anagrams
