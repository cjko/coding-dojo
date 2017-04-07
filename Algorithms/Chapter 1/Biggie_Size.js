function makeItBig(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			arr[i] = 'big'
		}
	}
	return arr
}
console.log(makeItBig([-1,3,5,-5]))