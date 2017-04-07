function letterGrade(grade) {
	if (grade >= 90) {
		letter = 'A'
	} else if (grade >= 80 && grade < 90) {
		letter = 'B'
	} else if (grade >= 70 && grade < 80) {
		letter = 'C'
	} else if (grade >= 60 && grade < 70) {
		letter = 'D'
	} else {
		letter = 'F'
	}

	console.log('Score: ' + grade + '. Grade: ' + letter)
}
letterGrade(88)
letterGrade(61)