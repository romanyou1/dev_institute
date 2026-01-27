#Exercice 1

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
    	return f"{self.amount} {self.currency}"

    def __repr__(self):
    	return self.__str__()

    def __int__(self):
    	return self.amount

    def __add__(self, other):
    	if isinstance(other, int):
    		return self.amount + other

    	if isinstance(other, Currency):
    		if self.currency != other.currency:
    			raise TypeError(
    				f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
    			)
    		return self.amount + other.amount

    	return NotImplemented

    def __iadd__(self, other):
    	if isinstance(other, int):
    		self.amount += other
    		return self

    	if isinstance(other, Currency):
    		if self.currency != other.currency:
    			raise TypeError(
    				f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
    			)
    		self.amount += other.amount
    		return self

    	return NotImplemented

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1)
# 5 dollars

print(int(c1))
# 5

print(repr(c1))
# 5 dollars

print(c1 + 5)
# 10

print(c1 + c2)
# 15

print(c1)
# 5 dollars

c1 += 5
print(c1)
# 10 dollars

c1 += c2
print(c1)
# 20 dollars

#print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>


#Exercice 2 (Check "func.py" for the class)

from func import Calcul

second = Calcul(4, 9)


#Exercice 3

import string
import random

letters = string.ascii_letters

random_string = ""

for _ in range(5):
	random_string += random.choice(letters)

print(random_string)


#Exercice 4

import datetime

today_date = datetime.date.today()

print(f"Today is the {today_date.day} / {today_date.month} / {today_date.year}")


#Exercice 5

now = datetime.datetime.now()

next_year = now.year + 1
january_1st = datetime.datetime(next_year, 1, 1)

time_left = january_1st - now

print(f"Time left until January 1st: {time_left}")


#Exercice 6

def minutes_lived(birthdate_str):
	birthdate = datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")

	now = datetime.datetime.now()

	time_difference = now - birthdate

	minutes = int(time_difference.total_seconds() / 60)

	print(f"You have lived approximately {minutes} minutes.")

minutes_lived("2004-02-03")

#Exercice 7

from faker import Faker

users = []

def add_users(number):
    fake = Faker()

    for _ in range(number):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user)

add_users(3)

for user in users:
    print(user)
