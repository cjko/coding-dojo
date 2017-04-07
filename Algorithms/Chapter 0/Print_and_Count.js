function printAndCount() {
	var counter = 0
	for (var n = 515; n <= 4096; n = n+5) {
		console.log(n)
		counter++
	}
	console.log('There were ' + counter + ' multiples logged.')
}
printAndCount()