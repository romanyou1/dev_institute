from anagram_checker import AnagramChecker

def display_menu():
	print("\n===== ANAGRAM FINDER =====")
	print("1) Input a word")
	print("2) Exit")

def get_user_choice():
	return input("Choose an option (1 or 2): ").strip()

def get_valid_word_from_user():
	user_input = input("Enter a word: ").strip()

	if len(user_input.split()) != 1:
		print("Error: Please enter only ONE word (no spaces).")
		return None

	if not user_input.isalpha():
		print("Error: Only alphabetic characters are allowed (A-Z).")
		return None

	return user_input

def show_results(word, anagrams):
	print("\n" + "-" * 40)
	print(f"Your word: {word.upper()}")
	print(f"Number of anagrams found: {len(anagrams)}")

	if anagrams:
		print("Anagrams:", ", ".join(a.upper() for a in anagrams))
	else:
		print("Anagrams: None found.")
	print("-" * 40)

def main():
	checker = AnagramChecker()

	while True:
		display_menu()
		choice = get_user_choice()

		if choice == "2":
			print("Goodbye!")
			break

		elif choice == "1":
			word = get_valid_word_from_user()
			if word is None:
				continue

			if not checker.is_valid_word(word):
				print(f"Error: '{word}' is not a valid English word (not found in the word list).")
				continue

			anagrams= checker.get_anagrams(word)
			show_results(word, anagrams)

		else:
			print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
	main()