#Exercices 1

import random

def get_words_from_file(file_path):
	"""
	Reads words from a file and returns them as a list.
	"""
	with open(file_path, "r") as file:
		content = file.read()
	words = content.split()
	return words

def get_random_sentence(sentence_length):
	"""
	Generates a random sentence of a given length.
	"""
	words = get_words_from_file("words.txt")
	random_words = [random.choice(words) for _ in range(sentence_length)]
	sentence = " ".join(random_words).lower()
	return sentence

def main():
	"""
	Main program function.
	"""
	print("This program generates a random sentence using words from a file.")

	user_input = input("Enter the desired sentence length (between 2 and 20): ")

	# Validate input
	if not user_input.isdigit():
		print("Error: Please enter a valid integer.")
		return

	sentence_length = int(user_input)

	if sentence_length < 2 or sentence_length > 20:
		print("Error: Sentence length must be between 2 and 20.")
		return

	sentence = get_random_sentence(sentence_length) 
	print("\nGenerated sentence:")
	print(sentence)

if __name__ == "__main__":
	main()

#Exercice 2

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Step 1: Load JSON string
data = json.loads(sampleJson)

# Step 2: Access salary
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary: ", salary)

# Step 3: Add birth_date
data["company"]["employee"]["birth_date"] = "1995-08-21"

# Step 4: Save JSON to file
with open("employee_data.json", "w") as file:
    json.dump(data, file, indent=4)