import unittest
from insert_value import insert_val_at

class insertValueTest(unittest.TestCase):

	def setUp(self):
		self.test_list = [0,1,2,3,4]
	def testInsertAtIndexTwo(self):
		self.result = insert_val_at(2, self.test_list, 100)
		# print "Self.result = " + str(self.result)
		return self.assertEqual([0,1,100,2,3,4], self.result)
	def testReturnFalseForInvalidIndex(self):
		self.result2 = insert_val_at(6, self.test_list, 100)
		# print "Self.result2 = " + str(self.result2)
		return self.assertEqual(False, self.result2)

if __name__ == "__main__":
	unittest.main()