function extractDigit(num, digitNum) {
	var val

	1 10
	2 100
	3 1000
	4 10000
	
	(digitNum*100)/digitNum

	if (digitNum == 0) {
		val = num%10
	} else if (digitNum == 1) {
		val = (num%100)/10
	} else if (digitNum == 2) {
		val = (num%1000)/100
	}
	return Math.floor(val)
}
extractDigit(1824,2)