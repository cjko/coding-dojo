function rollOne() {
	return Math.trunc((Math.random()*6)+1)
}

function playFives(num) {
	for(var n = 1; n <= num; n++) {
		var roll = rollOne()
		if(roll == 5) {
			console.log("That's good luck!")
		}
	}
}

function playStatistics() {
	for(var n = 1; n <= 8; n++) {
		var roll = rollOne()
		if (n == 1) {
			var high = roll
			var low = roll
		} else if (roll > high) {
			high = roll
		} else if (roll < low) {
			low = roll
		}
	}
	console.log('High: ' + high + '. Low: ' + low)
}

function playStatistics2() {
	var sum = 0
	for(var n = 1; n <= 8; n++) {
		var roll = rollOne()
		sum += roll
		if (n == 1) {
			var high = roll
			var low = roll
		} else if (roll > high) {
			high = roll
		} else if (roll < low) {
			low = roll
		}
	}
	console.log('High: ' + high + '. Low: ' + low + '. Sum: ' + sum)
}

function playStatistics3(num) {
	var sum = 0
	for(var n = 1; n <= num; n++) {
		var roll = rollOne()
		sum += roll
		if (n == 1) {
			var high = roll
			var low = roll
		} else if (roll > high) {
			high = roll
		} else if (roll < low) {
			low = roll
		}
	}
	console.log('High: ' + high + '. Low: ' + low + '. Sum: ' + sum)
}

function playStatistics4(num) {
	var sum = 0
	for(var n = 1; n <= num; n++) {
		var roll = rollOne()
		sum += roll
		if (n == 1) {
			var high = roll
			var low = roll
		} else if (roll > high) {
			high = roll
		} else if (roll < low) {
			low = roll
		}
	}
	console.log('High: ' + high + '. Low: ' + low + '. Average: ' + (sum/num))
}
