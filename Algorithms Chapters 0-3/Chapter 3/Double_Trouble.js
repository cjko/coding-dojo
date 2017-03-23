function doubleTrouble(arr) {

	//For each element in array (increment by 2 since dupe value was inserted)
	for (var n = 0; n < arr.length; n+=2) {

		//Shift all following elements right, and insert dupe val
		for (var i = arr.length-1; i > n; i--) {
			arr[i+1] = arr[i]
		}
		arr[n+1] = arr[n]
	}

	return arr
}
console.log(doubleTrouble([4,'Ulysses',42,false]))