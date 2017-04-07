def findChar(list, char):
	newArray = []
	for i in list:
		for letter in i:
			if letter == char:
				newArray.append(i)
	print newArray

findChar(['hello','world','my','name','is','Anna'],'o')
