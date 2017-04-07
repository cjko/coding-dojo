# Odd/Even
def odd_even():
	for i in range(1,2001):
		if i%2 == 0:
			type = 'even'
		else:
			type = 'odd'
		print 'Number is',i, 'This is an',type,'number.'

odd_even()

# Multiply
def multiply(arr, num):
	for i in range(0,len(arr)):
		arr[i] *= num
	return arr

print multiply([2,4,10,16],5)

# Hacker Challenge
def layered_multiples(arr):
	newerArray = []
	for i in arr:
		newArray = []
		for x in range(0,i):
			newArray.append(1)
		newerArray.append(newArray)
	return newerArray

print layered_multiples(multiply([2,4,5],3))
