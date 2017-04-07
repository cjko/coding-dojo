function swapTowardTheCenter(arr) {
	var temp1 = arr[0]
	var temp2 = arr[2]

	arr[0] = arr[arr.length-1]
	arr[2] = arr[arr.length-3]

	arr[arr.length-1] = temp1
	arr[arr.length-3] = temp2

	return arr
}
swapTowardTheCenter([true,42,"Ada",2,"pizza"])
swapTowardTheCenter([1,2,3,4,5,6])