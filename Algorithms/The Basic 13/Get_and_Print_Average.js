function getAndPrintAverage(arr) {
	var total = 0
	for(var i = 0; i < arr.length; i++) {
		total += arr[i]
	}
	console.log(total/arr.length)
}
getAndPrintAverage([25,23,24,22])