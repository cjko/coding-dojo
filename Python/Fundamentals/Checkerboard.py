def checkerboard():
	for row in range(0,8):
		if row%2 == 0:
			print "* * * * "
		else:
			print " * * * *"

checkerboard()