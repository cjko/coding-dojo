function printLowReturnHigh(arr) {
	var low = arr[0]
	var high = arr[0]
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > high) {
			high = arr[i]
		}
		if (arr[i] < low) {
			low = arr[i]
		}
	}
	console.log(low)
	return high
}
printLowReturnHigh([1,3,4,-6,14,2,10])