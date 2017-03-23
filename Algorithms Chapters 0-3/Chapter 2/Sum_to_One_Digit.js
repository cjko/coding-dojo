function sumToOne(num) {
	var sum = 0
	
	while (num) {
		sum += num % 10
		num = Math.floor(num/10)
		console.log(sum)
	}

	return sum
}
console.log(sumToOne(928))