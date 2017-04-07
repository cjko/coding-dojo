function nthToLast(arr, n) {
	if (arr.length < n) {
		return null
	} else {
		return arr[arr.length-n]
	}
}
console.log(nthToLast([5,2,3,6,4,9,7],3))
console.log(nthToLast([5,2],3))