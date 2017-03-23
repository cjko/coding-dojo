function shuffle(arr) {
	var temp
	var randIndex

	for (var i = arr.length-1; i > 0; i--) {
		randIndex = Math.floor(Math.random()*arr.length)
		temp = arr[i]
		arr[i] = arr[randIndex]
		arr[randIndex] = temp
	}

	return arr
}

console.log(shuffle([6,1,5,3,2,7,8]))
console.log(shuffle([6,1,5,3,2,7,8]))
console.log(shuffle([6,1,5,3,2,7,8]))
console.log(shuffle([6,1,5,3,2,7,8]))