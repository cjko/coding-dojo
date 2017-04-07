def table(x):

	for row in range(1, x+1):
		
		if row == 1:
			string = 'x  '
			for col in range (row, (row*x)+1,row):
				string += str(col) + '  '
			print string

		string = str(row) + '  '

		for col in range (row, (row*x)+1, row):
				string += str(col) + '  '
		print string

table(22)