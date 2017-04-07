function mostSignificantDigit(num) {

	while (num > 0) {
		num = num%10
	}

	return num
}
mostSignificantDigit(12495)