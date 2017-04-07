function isCreditCardValid(digitArr) {
	//var lastDigit = digitArr[digitArr.length-1]
	var sum = 0

	//Step 1 & 2
	for (var i = digitArr.length-2; i > 0; i=i-2) {
		digitArr[i] *= 2

		//Step 3
		if (digitArr[i] > 9) {
			digitArr[i] -= 9
		}

	}
	//console.log(digitArr)

	//Step 4: Add all numbers together
	for (var n = 0; n < digitArr.length; n++) {
		sum += digitArr[n]
	}
	//console.log(digitArr)

	//Step 5: multiple of 10
	if (sum%10 == 0) {
		return true
	} else {
		return false
	}
}

console.log(isCreditCardValid([5,2,2,8,2]))
console.log(isCreditCardValid([5,2,2,8,3]))
