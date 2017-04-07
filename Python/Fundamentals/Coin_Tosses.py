import random

def coinToss():
	print 'Starting the program...'
	
	headCount = 0
	tailCount = 0
	count = 1

	for i in range(1,5001):
		flip = round(random.random())
		if int(flip) == 0:
			side = 'tail'
			tailCount += 1
		else:
			side = 'head'
			headCount += 1
		print "Attempt #"+str(count)+": Throwing a coin... It's a", side + "! ...Got", str(headCount), "head(s) so far and", str(tailCount), "tail(s) so far"
		count += 1

coinToss()