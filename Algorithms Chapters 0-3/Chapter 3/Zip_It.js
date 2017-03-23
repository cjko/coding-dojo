function zipIt(arr1, arr2) {
	var newArray = []

	if (arr2.length > arr1.length) {
		for (var i = 0; i < arr2.length; i++) {
			if (i < arr1.length) { 
				newArray[newArray.length] = arr1[i]
				newArray[newArray.length] = arr2[i]
			} else {
				newArray[newArray.length] = arr2[i]
			}

		}
	} else {
		for (var i = 0; i < arr1.length; i++) {
			if (i < arr2.length) { 
				newArray[newArray.length] = arr1[i]
				newArray[newArray.length] = arr2[i]
			} else {
				newArray[newArray.length] = arr1[i]
			}

		}
	}

	
	return newArray
}
console.log(zipIt([1,2],[10,20,30,40]))
console.log(zipIt([10,20,30,40],[1,2]))