function swapPairs(arr) {
	var temp
	for (var i = 0; i < arr.length-1; i = i+2) {
		temp = arr[i]
		arr[i] = arr[i+1]
		arr[i+1] = temp
	}
	return arr
}
console.log(swapPairs([1,3,5,7,8,9,1]))