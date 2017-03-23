function ThreesFives() {
	var sum = 0
	for(var n = 100; n <= 4000000; n++) {
		if (n%3 == 0 && n%5 == 0) {
			continue
		} else if (n%3 == 0 || n%5 == 0) {
			sum += n
		}
	}
	console.log(sum)
}

function BetterThreesFives(start, end) {
	var sum = 0
	for (var n = start; n <= end; n++) {
		if (n%3 == 0 && n%5 == 0) {
			continue
		} else if (n%3 == 0 || n%5 == 0) {
			sum += n
		}
	}
	console.log(sum)
}