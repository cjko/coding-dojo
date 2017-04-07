function numbersOnly(arr) {
	var newArray = []
	for (var i=0; i < arr.length; i++) {
		if (typeof(arr[i])=='number') {
			newArray.push(arr[i])
		}
	}
	return newArray
}
console.log(numbersOnly([1,5,'push','cat',21,'dojo',45]))

function numbersOnly2(arr) {
	for (var i=0; i < arr.length; i++) {
		if (typeof(arr[i]) != 'number') {
			for (var j = i; j < arr.length; j++) {
				arr[j] = arr[j+1]
			}
			arr.pop()
			i -= 1
		}
	}
	return arr
}

console.log(numbersOnly2([1,5,'push','cat',21,'dojo',45]))