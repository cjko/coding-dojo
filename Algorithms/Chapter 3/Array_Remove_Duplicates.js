function removeDuplicates(arr) {

	var i = 0
	
	while (i < arr.length) {
		if (arr[i] == arr[i+1]) {
			arr[i] = arr[i+1]
		}
	}

	return arr
}
console.log(['Abraham','Becky','Becky','David'])