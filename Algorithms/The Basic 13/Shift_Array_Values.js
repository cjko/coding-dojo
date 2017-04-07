function shiftArrayValues(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (i == arr.length-1) {
			arr[i] = 0
		} else {
			arr[i] = arr[i+1]
		}
	}
	return arr
}
shiftArrayValues([2,4,6,7,8,10,12])