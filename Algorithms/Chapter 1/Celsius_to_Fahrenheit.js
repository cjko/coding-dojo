function celsiusToFahrenheit(cDegrees) {
	return ((9/5)*cDegrees)+32
}
console.log(celsiusToFahrenheit(100))

for(var n = 200; n > -200; n--) {
	if(n == celsiusToFahrenheit(n)) {
		console.log(n + ' degrees Celsius is the same as ' + celsiusToFahrenheit(n) + ' degrees Fahrenheit')
	}
}