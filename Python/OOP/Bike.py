class Bike(object):
	def __init__(self, price, max_speed):
		self.price = price
		self.max_speed = max_speed
		self.miles = 0

	def displayInfo(self):
		print self.price
		print self.max_speed
		print self.miles
		return self

	def ride(self):
		print 'Riding...'
		self.miles += 10
		return self

	def reverse(self):
		print 'Reversing...'
		if (self.miles >= 5):
			self.miles -= 5
		return self

newBike = Bike(200, '25mph')
newBike.ride().ride().ride().reverse().displayInfo()

newBike2 = Bike(150, '15mph')
newBike2.ride().ride().reverse().reverse().displayInfo()

newBike3 = Bike(100, '15mph')
newBike3.reverse().reverse().reverse().displayInfo()

