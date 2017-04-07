function alwaysHungry(arr) {
	var hungryCheck = 0
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 'food') {
			console.log('yummy')
			hungryCheck = 1
		}
	}
	if (hungryCheck == 0) {
		console.log("I'm hungry")
	}
}
alwaysHungry(['hello', 'pony', 'food', 'food', 'buddy'])
alwaysHungry(['hello', 'pony', 'buddy'])