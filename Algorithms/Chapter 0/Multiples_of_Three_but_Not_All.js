function multiplesOfThree() {
	for(var n = -300; n <= 0; n = n+3) {
		if(n == -3 || n ==-6) {
			continue;
		}
		console.log(n)
	}
}
multiplesOfThree();