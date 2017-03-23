function countingTheDojoWay() {
	for (var n=1; n <= 100; n++){
		if(n%10 == 0) {
			console.log('Coding Dojo')
		} else if (n%5 == 0) {
			console.log('Coding')
		} else {
			console.log(n)
		}
	}
}
countingTheDojoWay()