function factorial(num) {
	var product = 1
	for (var n = 1; n <= num; n++) {
		product *= n
	}
	return product
}
factorial(3)
factorial(5)