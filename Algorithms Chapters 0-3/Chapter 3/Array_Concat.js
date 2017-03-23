function concat(arr1, arr2) {
	var newArray = []

	for (var i = 0; i < arr1.length; i++) {
		newArray[newArray.length] = arr1[i]
	}
	for (var n = newArray.length; n < (arr2.length+arr1.length); n++) {
		newArray[newArray.length] = arr2[n-arr1.length]
	}

	return newArray
}
console.log(concat(['a','b'],[1,2]))