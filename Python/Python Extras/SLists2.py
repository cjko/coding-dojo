class SNode(object):
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
		node.next = SNode(value)
		# print node.value

	def addFront(self, value):
		newNode = SNode(value)
		newNode.next = self.head
		self.head = newNode

	def insertBefore(self, nextValue, value):
		newNode = SNode(value)
		node = self.head
		while node.next.value != nextValue:
			node = node.next
		temp = node.next
		node.next = newNode
		newNode.next = temp

	def insertAfter(self, preValue, value):
		newNode = SNode(value)
		node = self.head
		while node.value != preValue:
			node = node.next
		temp = node.next
		node.next = newNode
		newNode.next = temp

	def removeNode(self, value):
		node = self.head
		while node.next.value != value:
			node = node.next
		node.next = node.next.next

	def reverseList(self):
		prevNode = None
		currentNode = self.head

		while currentNode != None:
			nextNode = currentNode.next
			currentNode.next = prevNode
			prevNode = currentNode
			currentNode = nextNode
		self.head = prevNode


newList = SList()
newList.head = SNode('1')
newList.head.next = SNode('2')
newList.head.next.next = SNode('3')
newList.addBack('4')
newList.addBack('5')
newList.addFront('61')
newList.insertBefore('3','42')
newList.insertAfter('4','99')
newList.removeNode('42')
newList.reverseList()

newList.printAllVals()









