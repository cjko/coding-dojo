function zeroOutNegativeNumbers(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0
		}
	}
	return arr
}
zeroOutNegativeNumbers([-1,-4,-5,2,4])