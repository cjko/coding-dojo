function theFinalCountdown(param1, param2, param3, param4) {
	var n = param2
	while (n <= param3) {
		if (n%param1 == 0 && n-param4 != 0) {
			console.log(n)
		}
		n += 1
	}
}
theFinalCountdown(3,5,17,9)
