function secondLargest(arr) {
	var largest = arr[0]
	var largestTwo = arr[1]

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i]
		}
		if (arr[i] > largestTwo && arr[i] < largest) {
			largestTwo = arr[i]
		}

	}

	if (arr.length < 2) {
		return null
	} else {
		return largestTwo
	}

}
console.log(secondLargest([42,1,4,Math.PI,7]))
console.log(secondLargest([42,1,9]))
console.log(secondLargest([42]))