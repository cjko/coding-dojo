function fahrenheitToCalsius(fDegrees) {
	return (fDegrees - 32) * (5/9)
}
fahrenheitToCalsius(32)

for(var n = 200; n > 0; n--) {
	if(n == fahrenheitToCalsius(n)) {
		console.log('They match!')
	}
	//console.log(n + ',' + fahrenheitToCalsius(n))
}