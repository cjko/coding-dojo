def compare(list_one, list_two):
	counter = 0
	for i in list_one:
		for listTwoIndex in range (0,len(list_two)):
			if i == list_two[listTwoIndex]:
				counter += 1
	if counter == len(list_one):
		print 'The lists are the same.'
	else:
		print 'The lists are not the same.'

list_one = ['celery','carrots','bread','milk']
list_two = ['celery',20,'bread','milk']

compare(list_one,list_two)