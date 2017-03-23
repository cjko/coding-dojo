function reverse(arr) {
	var temp
	for (var i = 0; i < arr.length/2; i++) {
		temp = arr[i]
		arr[i] = arr[arr.length-1-i]
		arr[arr.length-1-i] = temp
	}
	return arr
}
console.log(reverse([1,3,5,7,9,11,13,17,21]))