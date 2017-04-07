import random

def scoreGenerator():
	for i in range (1,11):
		score = random.randint(60,100)
		if score >= 90:
			letterGrade = 'A'
		elif score >= 80:
			letterGrade = 'B'
		elif score >= 70:
			letterGrade = 'C'
		else:
			letterGrade = 'D'		
		print 'Score:', str(score) + "; Your grade is",letterGrade

scoreGenerator()