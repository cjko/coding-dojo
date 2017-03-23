function skylines(arr) {
	var newArray = []
	var max = arr[0]
	var maxIndex = 0
	var min = 0
	var minIndex = 0

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
			maxIndex = i
		}
		if (arr[i] < min) {
			min = arr[i]
			minIndex = i
		}
	}
	for (var n = minIndex; n <= maxIndex; n++) {
		if (arr[n] > 0 && arr[n] <= max && arr[n] > min && arr[n+1] != arr[n]) {
			newArray[newArray.length] = arr[n]
		} 
	}

	return newArray
}
console.log(skylines([-2,-1,1,7,3]))
console.log(skylines([0,4]))
console.log(skylines([-2,-1,1,1,7,9,12]))
console.log(skylines([1,7,3,4]))