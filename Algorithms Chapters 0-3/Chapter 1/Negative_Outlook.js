function negativeOutlook(arr) {
	var newArray = []
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			newArray.push(arr[i]*-1)
		} else {
			newArray.push(arr[i])
		}
	}
	return newArray
}
negativeOutlook([1,-3,5])