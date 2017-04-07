def fooBar():
	for i in range(100,10001):
		print i
		if isPrime(i):
			print 'Foo'
		elif isSquare(i):
			print 'Bar'
		else:
			print 'FooBar'

def isPrime(x):
	for i in range(2, x):
		if x%i == 0:
			return False
	return True

def isSquare(x):
	for i in range(2, (x/2)+1):
		if i*i == x:
			return True
	return False

fooBar()