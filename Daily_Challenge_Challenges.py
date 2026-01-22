#Challenge 1
# Step 1: Get input
words = input("Please enter some words separeted by a coma: ")

# Step 2: Split the string into a list
words_list = words.split(",")

# Step 3: Sort the list alphabetically
words_list.sort()

# Step 4: Join the sorted list back into a string
sorted_words = ",".join(words_list)

# Step 5: Print the result
print(sorted_words)

#Challenge 2
def longest_word(sentence):
    words = sentence.split()

    longest = ""

    for word in words:
        if len(word) > len(longest):
            longest = word

    return longest
print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))