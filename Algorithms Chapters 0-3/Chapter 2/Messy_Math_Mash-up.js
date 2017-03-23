function messyMath(num) {
	var sum = 0
	for (var i = 0; i <= num; i++) {
		if (i%3 == 0) {
			continue
		} else if (i%7 == 0) {
			sum += (2*i)
		} else if (i == (1/3)*num) {
			return -1
		} else {
			sum += i
		}
	}
	return sum
}
messyMath(4)
messyMath(8)
messyMath(15)