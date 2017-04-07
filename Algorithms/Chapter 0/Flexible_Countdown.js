function flexibleCountdown(lowNum, highNum, mult) {
	for (var n = highNum; n >= lowNum; n--) {
		if(n%mult==0) {
			console.log(n)
		}
	}
}
flexibleCountdown(2,9,3)