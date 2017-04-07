class Car(object):
	def __init__(self, price, speed, fuel, mileage):
		self.price = price
		self.speed = speed
		self.fuel = fuel
		self.mileage = mileage
		if price > 10000:
			self.tax = 0.15
		else:
			self.tax = 0.12

	def display_all(self):
		print 'Price:',self.price
		print 'Speed:',self.speed
		print 'Fuel:',self.fuel
		print 'Mileage:',self.mileage
		print 'Tax:',self.tax
		print ''
		return self


car1 = Car(2000,'35mph','Full','15mpg').display_all()
car2 = Car(2000,'5mph','Not Full','105mpg').display_all()
car3 = Car(2000,'15mph','Kind of Full','95mpg').display_all()
car4 = Car(2000,'25mph','Full','25mpg').display_all()
car5 = Car(2000,'45mph','Empty','25mpg').display_all()
car6 = Car(20000000,'35mph','Empty','15mpg').display_all()

