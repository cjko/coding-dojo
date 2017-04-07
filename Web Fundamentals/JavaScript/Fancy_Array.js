function fancyArray(arr, symbol, reverse) {
	if (reverse) {
		var temp;
		for (var j = 0; j < arr.length/2; j++) {
			temp = arr[j]
			arr[j] = arr[arr.length-1-j]
			arr[arr.length-1-j] = temp
		}
	}


	for (var i = 0; i < arr.length; i++) {
		console.log(i + ' ' + symbol + ' ' + arr[i])
	}
}
fancyArray(['James','Jill','Jane','Jack','Jason','Ja Rule'], ':', true)