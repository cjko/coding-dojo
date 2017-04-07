function fitTheFirstValue(arr) {
	if (arr[0] > arr.length) {
		console.log('Too big!')
	} else if (arr[0] < arr.length) {
		console.log('Too small!')
	} else {
		console.log('Just right!')
	}
}
fitTheFirstValue([3,2,1])