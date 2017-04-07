def coinChange(cents):
	coins = {
		'dollars':100,
		'half dollars':50,
		'quarters':25,
		'dimes':10,
		'nickels':5,
		'pennies':1
	}

	print "Dollars:", cents/coins['dollars']
	cents = cents % coins['dollars']

	print "Half dollars:", cents/coins['half dollars']
	cents = cents % coins['half dollars']

	print "Quarters:", cents/coins['quarters']
	cents = cents % coins['quarters']

	print "Dimes:", cents/coins['dimes']
	cents = cents % coins['dimes']

	print "Nickels:", cents/coins['nickels']
	cents = cents % coins['nickels']

	print "Pennies:", cents

coinChange(49)
