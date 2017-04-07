function rotateArr(arr, shiftBy) {

	//Shifts array to the right
	for (var i = arr.length-1; i >= 0; i--) {
		arr[i+shiftBy] = arr[i]

	}

	//Loop for wrap around numbers
	var n = shiftBy
	for (var m = 0; m < shiftBy; m++) {
		arr[m] = arr[arr.length-n]
		n--
	}

	//Remove values exceeding original array length
	for (var x = 0; x < shiftBy; x++) {
		arr.pop()
	}

	/*
	arr[0] = arr[arr.length-shiftBy]
	arr[1] = arr[arr.length-2]
	arr[2] = arr[arr.length-1]

	arr.pop()
	arr.pop()
	arr.pop()
	*/

	return arr
}
//console.log(rotateArr([1,2,3,4,8,9],3))

/*

[4,2,3,1,8,9]
[4,8,3,1,2,9]
[4,8,9,1,2,3]



[1,3,6,8,9,10,12,15], 4
[9,3,6,8,1,10,12,15]
[9,10,6,8,1,3,12,15]
[9,10,12,8,1,3,6,15]
[9,10,12,15,1,3,6,8]

*/

function shit(arr, shiftBy) {
	var temp
	var offset = shiftBy%7

	//while (num > 0) {
		for (var i = 0; i < offset; i++) {
			temp = arr[i]
			arr[i] = arr[i+offset]
			arr[i+offset] = temp
		}
		//num--
	//}
	return arr
}
console.log(shit([1,3,6,8,9,10,12,15],101))


