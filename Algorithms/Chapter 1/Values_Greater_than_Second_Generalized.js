function valuesGreaterThanSecondGeneralized(arr) {
	if (arr.length > 1) {
		var newArray = []
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > arr[1]) {
				newArray.push(arr[i])
			}
		}
		console.log(newArray.length)
		return newArray
	} else {
		return 'The array does not contain at least 2 elements.'
	}
}
console.log(valuesGreaterThanSecondGeneralized([0,2,6,8,9,10]))