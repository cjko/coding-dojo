function lastFew(arr, X) {
	var diff = arr.length - X
	while(diff > 0) {
		//Shift the rest of the array
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i+1]
		}
		arr.pop()
		diff--
	}
	return arr
}
console.log(lastFew([2,4,6,8,10],3))