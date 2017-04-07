function soaringIQ(IQ) {
	var inc = .01
	for (var n = 1; n <= 98; n++) {
		IQ += (n*inc)
	}
	return IQ
}
soaringIQ(101)