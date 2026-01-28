import string
import re

#Step 1: Create the Text Class
class Text:
	def __init__(self, text):
		self.text = text

#Step 2: Implement word_frequency Method
	def word_frequency(self, word):
		words = self.text.split()
		count = words.count(word)

		if count == 0:
			return None
		return count

#Step 3: Implement most_common_word Method
	def most_common_word(self):
		words = self.text.split()
		word_count = {}

		for word in words:
			word_count[word] = word_count.get(word, 0) + 1

		most_commun = max(word_count, key=word_count.get)
		return most_commun

#Step 4: Implement unique_words Method
	def unique_word(self):
		words = self.text.split()
		unique = set(words)
		return list(unique)

#Step 5: Implement from_file Class Method
	@classmethod
	def from_file(cls, file_path):
		with open(file_path, "r") as file:
			content = file.read()
		return cls(content)

#Step 6: Create the TextModification Class
class TextModification(Text):

#Step 7: Implement remove_punctuation Method
	def remove_punctuation(self):
		translator = str.maketrans("", "", string.punctuation)
		cleaned_text = self.text.translate(translator)
		return cleaned_text

#Step 8: Implement remove_stop_words Method
	def remove_stop_words(self):
		STOP_WORDS = {
		    "a", "an", "the", "and", "or", "is", "are", "was", "were", 
		    "in", "on", "at", "of", "to", "for", "with", "by", "from"
		}

		words = self.text.split()
		filtered_words = [
		    word for word in words
		    if word.lower() not in STOP_WORDS
		]

		return " ".join(filtered_words)

#Step 9: Implement remove_special_characters Method
	def remove_special_characters(self):
		cleaned_text = re.sub(r"[^a-zA-Z0-9\s]", "", self.text)
		return cleaned_text

if __name__ == "__main__":
	print("===== TEXT CLASS TESTS =====")

	t = Text("hello world hello")

	print("Word frequency (hello):", t.word_frequency("hello"))
	print("Word frequency (world):", t.word_frequency("world"))
	print("Word frequency (python):", t.word_frequency("python"))

	print("Most common word:", t.most_common_word())
	print("Unique words:", t.unique_word())

	print("\n===== TEXT MODIFICATION TESTS =====")

	tm = TextModification("Hello, world!!! (test)")
	print("Remove punctuation:", tm.remove_punctuation())

	tm2 = TextModification("The cat is on the mat")
	print("Remove stop words:", tm2.remove_stop_words())

	tm3 = TextModification("Hi @you #1 :) !!!")
	print("Remove special characters:", tm3.remove_special_characters())

