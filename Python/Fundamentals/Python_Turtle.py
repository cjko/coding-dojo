import turtle

DIST = 100
for x in range(0,10):
    print "x", x
    for y in range(1,5):
        print "y", y
        # turn the pointer 90 degrees to the right
        if(y%2 == 0):
        	turtle.right(72)
        	turtle.forward(100)
        # advance according to set distance
    	else:
    		turtle.right(118)
    		turtle.forward(200)
        # turtle.forward(DIST)
    # add  to set distance
    # DIST += 20