function removeNegatives(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			for (var n = i; n < arr.length; n++) {
				arr[n] = arr[n+1]
			}
			arr.pop()
		}
	}
	return arr
}
console.log(removeNegatives([-4,-3,-1,2,-1,3,-4]))


function removeNegatives2(arr) {



	var temp

	for (var i = 0; i < arr.length; i++) {
		if(arr[i] > 0) {
			temp = arr[i]
			arr[i] = arr[i+1]
			arr[i+1] = temp
		}
		
	} 

}
console.log(removeNegatives2([-4,-3,-1,2,-1,3,-4]))
