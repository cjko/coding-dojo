function scaleTheArray(arr, num) {
	for(var i = 0; i < arr.length; i++) {
		arr[i] *= num
	}
	return arr
}
scaleTheArray([2,4,6], 4)