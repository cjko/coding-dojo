function arrayWithOdds() {
	var arr = []

	for(var n = 1; n <= 255; n ++) {
		if (n%2 != 0) {
			arr.push(n)
		}
	}
	return arr
}
arrayWithOdds()