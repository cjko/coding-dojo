function minToFront(arr) {
	var min = arr[0]
	var minIndex = 0

	//Finds min
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
			minIndex = i
		}
	}

	//Removes min value
	for(var m = minIndex; m < arr.length-1; m++) {
		arr[m] = arr[m+1]
	}
	arr.pop()

	//Shifts array right one
	for (var n = arr.length-1; n >= 0; n--){
		arr[n+1] = arr[n]
	}

	//Sets 0 to minimum value
	arr[0] = min

	return arr
}

console.log(minToFront([4,2,3,5,10,1,12]))