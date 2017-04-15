import unittest
from underscore import Underscore
class UnderscoreTest(unittest.TestCase):
    def setUp(self):
        # create an instance of the Underscore module we created
        self._ = Underscore()
        # initialize a list to run our tests on
        self.test_list = [1,2,3,4,5]
        self.test_function = lambda x: x*3
    def testMap(self):
        self.map = Underscore().map(self.test_list, self.test_function)
        self.assertEqual([3,6,9,12,15], self.map)
    def testReduce(self):
        pass
    def testFind(self):
        self.find = Underscore().find(self.test_list, lambda x: x == x)
        self.assertEqual([])
    def testFilter(self):
        pass
    def testReject(self):
        pass
if __name__ == "__main__":
    unittest.main()