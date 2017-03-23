function removeAt(arr, index) {
	for (var i = index; i < arr.length; i++) {
		arr[i] = arr[i+1]
	}
	arr.pop()
	return arr
}
removeAt([1,3,5,7], 2)