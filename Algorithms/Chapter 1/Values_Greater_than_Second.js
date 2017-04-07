function greaterThanSecond(arr) {
	var counter = 0
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[1]) {
			console.log(arr[i])
			counter += 1
		}
	}
	return counter
}
greaterThanSecond([1,3,5,7,9,13])