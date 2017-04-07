class SLNode(object):
	def __init__(self, value):
		self.value = value
		self.next = None

class SList(object):
	def __init__(self):
		self.head = None
		self.tail = None

	def printAllVals(self):
		node = self.head
		while node:
			print node.value
			node = node.next

	def addBack(self, value):
		node = self.head

		while node.next != None:
			node = node.next
		node.next = SLNode(value)

	def addFront(self, value):
		temp = self.head
		self.head = SLNode(value)
		self.head.next = temp

	def insertBefore(self, nextVal, val):
		node = self.head
		while node.value ! = nextVal:
			node = node.next
		temp = node.next
		node.next = SLNode(val)
		node.next.next = temp

		
list = SList()
list.head = SLNode('Alice')
list.head.next = SLNode('Chad')
list.head.next.next = SLNode('Debra')

# print list.head.value
# print list.head.next.value
# print list.head.next.next.value
# print list.head.next.next.next

# list.printAllVals()
# list.head.next.next.next = SLNode('Colin')
list.insertBefore('Debra','Colin')
list.printAllVals()