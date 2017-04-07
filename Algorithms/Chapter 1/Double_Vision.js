function doubleVision(arr) {
	var newArray = []
	for(var i = 0; i < arr.length; i++) {
		newArray.push(arr[i]*2)
	}
	return newArray
}
doubleVision([1,2,3])