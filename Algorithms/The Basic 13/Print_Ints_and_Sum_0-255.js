function printIntsAndSum() {
	var sum = 0;
	for (var i = 0; i < 255; i++) {
		console.log(i)
		sum += i
		console.log('Sum: ' + sum)
	}
}
printIntsAndSum()