function fibonacci(index) {
	var x = 1
	var y = 0
	var temp
	while (index > 0) {
		temp = x
		x = x + y
		y = temp
		index--
	}
	return y
}
fibonacci(7)
