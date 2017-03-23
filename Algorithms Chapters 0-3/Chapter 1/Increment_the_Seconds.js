function incrementTheSeconds(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (i%2 != 0) {
			arr[i] += 1
		}
		console.log(arr[i])
	}
	return arr
}
incrementTheSeconds([2,5,7,9,11,15])