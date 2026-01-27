import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self._radius = radius
        elif diameter is not None:
            self._radius = diameter / 2
        else:
            raise ValueError("You must provide either a radius or a diameter")

    # --- radius property ---
    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        self._radius = value

    # --- diameter property ---
    @property
    def diameter(self):
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2

    # --- area ---
    def area(self):
        return math.pi * self._radius ** 2

    # --- display ---
    def __str__(self):
        return f"Circle(radius={self.radius})"

    __repr__ = __str__

    # --- addition ---
    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    # --- comparisons ---
    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius

c1 = Circle(radius=3)
c2 = Circle(diameter=10)
c3 = Circle(radius=5)

print(c1)                    # Circle(radius=3)
print(c2.radius)             # 5.0
print(c2.diameter)           # 10
print(c1.area())             # area calculation

# Addition
c4 = c1 + c3
print(c4)                    # Circle(radius=8)

# Comparisons
print(c1 > c2)               # False
print(c2 == c3)              # True

# Sorting
circles = [c1, c2, c3, c4]
circles_sorted = sorted(circles)
print(circles_sorted)

turtle.circle(50)
turtle.done()

