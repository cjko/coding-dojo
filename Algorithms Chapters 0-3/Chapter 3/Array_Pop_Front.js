function popFront(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i+1]
	}
	arr.pop()
	return arr[0]
}
popFront([1,3,5,6,7])