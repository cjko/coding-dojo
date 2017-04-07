# Part I
class MathDojo(object):
	def __init__(self):
		self.result = 0.0

	def add(self, *num):
		for i in num:
			if not isinstance(i, int):
				for n in i:
					self.result += n
			else:
				self.result += i
		return self

	def subtract(self, *num):
		for i in num:
			if not isinstance(i, int):
				for n in i:
					self.result -= n
			else:
				self.result -= i
		return self

md = MathDojo()
print md.add(2).add(2,5,8,89,8,87,76,5).subtract(3,2).result

# Part II
print MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result

# Part III
print MathDojo().add([1],3,4).add([3, 5, 7, 8], (2, 4.3, 1.25)).subtract(2, [2,3], (1.1, 2124.5)).result


