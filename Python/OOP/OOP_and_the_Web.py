class User(object):
	def __init__(self, name):
		self.name = name

	def setCharacter(self, height, weight, hairColor):
		self.height = height
		self.weight = weight
		self.hairColor = hairColor

Colin = User('Colin')
print Colin.name

Colin.setCharacter("5 foot 7 inches", "156 lbs", 'Black')
print Colin.height
print Colin.weight
print Colin.hairColor