function secondToLast(arr) {
	if (arr.length < 2) {
		return null
	} else {
		return arr[arr.length-2]
	}
}
console.log(secondToLast([42,true,4,'Liam', 7]))
console.log(secondToLast([42]))