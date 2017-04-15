class DNode(object):
	def __init__(self, value):
		self.prev = None
		self.value = value
		self.next = None

class DList(object):
	def __init__(self):
		self.head = None
		self.tail = None

	def printAllValues(self):
		node = self.head
		while node:
			print node.value
			node = node.next

	def addNode(self, value):
		newNode = DNode(value)
		newNode.prev = self.tail
		self.tail.next = newNode
		self.tail = newNode
		newNode.next = None

	def deleteNode(self, value):
		currentNode = self.head

		while currentNode.next.value != value:
			currentNode = currentNode.next

		currentNode.next.prev = None
		currentNode.next = currentNode.next.next
		currentNode.next.prev = currentNode

	def insertBefore(self, nextValue, value):
		newNode = DNode(value)
		currentNode = self.head

		while currentNode.next.value != nextValue:
			currentNode = currentNode.next

		currentNode.next.prev = newNode
		newNode.next = currentNode.next
		newNode.prev = currentNode
		currentNode.next = newNode

	def insertAfter(self, prevValue, value):
		# newNode = DNode(value)
		currentNode = self.tail

		while currentNode.prev.value != prevValue:
			currentNode = currentNode.prev

		self.insertBefore(currentNode.value, value)
		

newList = DList()
newList.head = DNode('1')
newList.tail = newList.head
newList.addNode('2')
newList.addNode('3')
newList.addNode('41')
newList.addNode('42')
newList.addNode('43')
newList.deleteNode('41')
newList.insertBefore('3','66')
newList.insertAfter('42','99')

newList.printAllValues()