function whatHappensToday() {
	var str = ''
	var outcome = Math.trunc(Math.random()*100)+1
	if (outcome <= 10) {
		str = 'Volcano'
	} else if (outcome > 10 && outcome <= 25) {
		str = 'Tsunami'
	} else if (outcome > 25 && outcome <= 45) {
		str = 'Earthquake'
	} else if (outcome > 45 && outcome <= 70) {
		str = 'Blizzard'
	} else {
		str = 'Meteor Strike'
	}
	return str
}
console.log(whatHappensToday())