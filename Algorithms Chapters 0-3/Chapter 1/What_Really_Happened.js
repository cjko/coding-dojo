function whatReallyHappensToday() {

	var str = ''
	var outcomeArr = ['Volcano','Tsunami','Earthquake','Blizzard','Meteor Strike']
	var chanceArr = [10,15,20,25,30]
	var chance = 0

	for (var i = 0; i < outcomeArr.length; i++) {
		chance = Math.trunc(Math.random() * 100)+1
		if(chance <= chanceArr[i]) {
			str += outcomeArr[i] + ' '
		}
	}

	if (str.length != 0) {
		return str
	} else {
		return 'Nothing happened!'
	}
}

console.log(whatReallyHappensToday())