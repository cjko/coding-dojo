def draw_stars(arr):
	for val in arr:
		string = ''
		for i in range (0,val):
			string += '*'
		print string

draw_stars([4,6,1,3,5,7,25])

print ''

def draw_stars2(arr):
	for val in arr:
		string = ''

		if type(val) == str:
			for i in range (0,len(val)):
				string += val[0].lower()
		else:
			for i in range (0,val):
				string += '*'
		print string

draw_stars2([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])