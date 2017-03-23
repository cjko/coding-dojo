function maxMinAverage(arr) {
	var max = arr[0]
	var min = arr[0]
	var total = 0
	for (var i = 0; i < arr.length; i++) {
		total += arr[i]
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
	}
	console.log('Max: ' + max)
	console.log('Min: ' + min)
	console.log('Average: ' + total/arr.length)
}
maxMinAverage([4,5,20,18])