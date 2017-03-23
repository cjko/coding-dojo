function insertAt(arr, index, val) {
	for (var i = arr.length-1; i >= index; i--) {
		arr[i+1] = arr[i]
		if (i == index) {
			arr[i] = val
		}
	}
	return arr
}
insertAt([1,3,5,7],2,81)