function previousLengths(arr) {
	var tempLast = ''
	var tempCurrent = ''

	for(var i = 0; i < arr.length; i++) {
		tempCurrent = arr[i]
		arr[i] = tempLast.length
		tempLast = tempCurrent
	}

	return arr
}
console.log(previousLengths(['Hello','Timmy','Fox','Veritable','Jump']))