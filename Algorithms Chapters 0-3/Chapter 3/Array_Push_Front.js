function pushFront(arr, num) {
	for (var i = arr.length-1; i >= 0; i--) {
		arr[i+1] = arr[i]
	}
	arr[0] = num
	return arr
}
pushFront([1,3,5],2)
