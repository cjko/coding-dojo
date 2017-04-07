function mathRandom() {
	var bool = 0;
	var counter = 0;
	while (bool == 0) {
		var rand1 = Math.random()
		var rand2 = Math.random()
		if (rand1 == rand2){
			bool = 1
		}
		counter++;
		console.log(counter)
	}
}
mathRandom();