function addSevenToMost(arr) {
	var newArray = []
	for (var i = 1; i < arr.length; i++) {
		newArray.push(arr[i]+7)
	}
	return newArray
}
addSevenToMost([1,3,5,6,7])