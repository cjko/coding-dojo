function greaterThanY(arr, Y) {
	var counter = 0
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > Y) {
			counter += 1
		}
	}
	console.log(counter)
}
greaterThanY([1,2,6,8,9,20,23], 4)