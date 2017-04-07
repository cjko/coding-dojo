function thisLengthThatValue(num1, num2) {
	var arr = []
	for(var i = 1; i <= num1; i++) {
		arr.push(num2)
	}
	if (num1 == num2) {
		console.log('Jinx!')
	}
	return arr
}
thisLengthThatValue(2,2)