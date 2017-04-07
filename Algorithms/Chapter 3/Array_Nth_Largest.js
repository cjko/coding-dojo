function nthLargest(arr, N) {
	var largest = arr[0]
	var largestN = arr[1]

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i]
		}
		if (arr[i] > largestTwo && arr[i] < largest) {
			largestTwo = arr[i]
		}

	}

	if (arr.length < 2) {
		return null
	} else {
		return largestTwo
	}
}