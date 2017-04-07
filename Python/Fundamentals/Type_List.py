def typeList (list):
	stringCheck = False
	numCheck = False

	string = ''
	sum = 0

	for i in list:
		if type(i) == str:
			string += i + ' '
			stringCheck = True
		elif type(i) == int or type(i) == float:
			sum += i
			numCheck = True

	if stringCheck and numCheck:
		print('The array you entered is of mixed type')
		print "String:",string
		print "Sum:",sum
	elif stringCheck == False and numCheck:
		print('The array you entered is of integer type')
		print "Sum:",sum
	elif stringCheck and numCheck == False:
		print('The array you entered is of string type')
		print "String:",string

typeList(['magical unicorns',19,'hello',98.98,'world'])
typeList([2,3,1,7,4,12])
typeList(['magical','unicorns'])