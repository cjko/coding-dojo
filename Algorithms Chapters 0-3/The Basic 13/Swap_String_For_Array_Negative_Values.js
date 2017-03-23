function swapStringForArrayNegativeValues(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 'Dojo'
		}
	}
	return arr
}
swapStringForArrayNegativeValues([2,-4,6,-10,2])