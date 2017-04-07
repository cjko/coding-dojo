class Product(object):
	def __init__(self, price, name, weight, brand, cost):
		self.price = price
		self.name = name
		self.weight = weight
		self.brand = brand
		self.cost = cost
		self.status = 'for sale'

	def sell(self):
		self.status = 'sold'
		return self

	def addTax(self, tax):
		print self.price * (1+tax)
		return self

	def returnItem(self,reason):
		if reason == 'defective':
			self.status = 'defective'
			self.price = 0
		elif reason == 'returned in box, like new':
			self.status = 'for sale'
		elif reason == 'returned in box, opened':
			self.status = 'used'
			self.price *= 0.8
		return self

	def displayInfo(self):
		print self.price
		print self.name
		print self.weight
		print self.brand
		print self.cost
		print self.status

apple = Product(1.0,'Fuji apple','6oz','Apple Farms',0.5).returnItem('returned in box, opened').displayInfo()
