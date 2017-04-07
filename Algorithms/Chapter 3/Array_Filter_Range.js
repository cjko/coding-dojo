function filterRange(arr, min, max) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > min && arr[i] < max) {
			for (var n = i; n < arr.length; n++) {
				arr[n] = arr[n+1]
			}
		}
	}
	return arr
}
console.log(filterRange([1,3,5,6,7,8,9,10,11,12],6,10))