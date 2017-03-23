function removeRange(arr, start, end) {
	for (var i = start; i <= end; i++) {
		arr[i] = null
	}
	return arr
}

console.log(removeRange([20,30,40,50,60,70],2,4))