function printOneReturnAnother(arr) {
	console.log(arr[arr.length -2])
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]%2 != 0) {
			return arr[i]
		}
	}
}
printOneReturnAnother([2,4,7,8,23])