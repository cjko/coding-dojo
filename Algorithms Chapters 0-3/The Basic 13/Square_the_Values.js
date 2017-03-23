function squareTheValues(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] *= arr[i]
	}
	return arr
}
squareTheValues([2,5,7,12])