function moreAccurateGrades(grade) {
	if (grade >= 93) {
		letter = 'A'
	} else if (grade >= 90) {
		letter = 'A-'
	} else if (grade >= 87 && grade < 90) {
		letter = 'B+'
	} else if (grade >= 83 && grade < 87) {
		letter = 'B'
	} else if (grade >= 80 && grade < 83) {
		letter = 'B-'
	} else if (grade >= 77 && grade < 80) {
		letter = 'C+'
	} else if (grade >= 73 && grade < 77) {
		letter = 'C'
	} else if (grade >= 70 && grade < 73) {
		letter = 'C-'
	} else if (grade >= 67 && grade < 70) {
		letter = 'D+'
	} else if (grade >= 63 && grade < 67) {
		letter = 'D'
	} else if (grade >= 60 && grade < 63) {
		letter = 'D-'
	} else {
		letter = 'F'
	}

	console.log('Score: ' + grade + '. Grade: ' + letter)
}
moreAccurateGrades(88)
moreAccurateGrades(61)