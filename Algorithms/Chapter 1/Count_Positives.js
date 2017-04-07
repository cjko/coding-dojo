function countPositives(arr) {
	var counter = 0
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			counter += 1
		}
	}
	arr[arr.length-1] = counter
	return arr
}
countPositives([-1,1,1,3])