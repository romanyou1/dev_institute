class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    # Step 8: version kwargs (une seule définition !)
    def add_animal(self, **animals):
        for animal, count in animals.items():
            if animal in self.animals:
                self.animals[animal] += count
            else:
                self.animals[animal] = count

    def get_info(self):
        info = f"{self.name}'s farm\n\n"

        for animal, count in self.animals.items():
            info += f"{animal:<10} : {count}\n"

        info += "\n    E-I-E-I-0!"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_list = []

        for animal in animal_types:
            if self.animals[animal] > 1:
                animal_list.append(animal + "s")
            else:
                animal_list.append(animal)

        if len(animal_list) == 1:
            animals_str = animal_list[0]
        else:
            animals_str = ", ".join(animal_list[:-1]) + " and " + animal_list[-1]

        return f"{self.name}'s farm has {animals_str}."
        

macdonald = Farm("McDonald")

macdonald.add_animal(cow=5, sheep=2, goat=12)

print(macdonald.get_info())
print(macdonald.get_short_info())
