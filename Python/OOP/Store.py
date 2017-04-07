class Store(object):
	def __init__(self,products,location,owner):
		self.products = products
		self.location = location
		self.owner = owner

	def add_product(self,product):
		self.products.append(product)
		return self

	def remove_product(self,productName):
		for i in range(0,len(self.products)-1):
			if self.products[i].name == productName:
				for n in range(i,len(self.products)-1):
					self.products[n] = self.products[n+1]
				self.products.pop()
		return self

	def inventory(self):
		for i in self.products:
			i.displayInfo()

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
		print 'Price:',self.price
		print 'Name:',self.name
		print 'Weight:',self.weight
		print 'Brand:',self.brand
		print 'Cost:',self.cost
		print 'Status:',self.status
		print ''

productsArr = [
	Product(2,'Apple','6oz','Apple Farms',1),
	Product(3,'Banana','4oz','Donkey Kong Farms',1.5),
	Product(4,'Kiwi','3oz','NZ Farms',2),
	Product(5,'Strawberries','15oz','Strawberry Fields',2.5)
]
newStore = Store(productsArr,'Fremont, CA','Colin')
newStore.remove_product('Kiwi').add_product(Product(4,'Milk','32oz','Oak Farms',2)).inventory()