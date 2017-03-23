var numRolls = 0
var total = 0
var min
var max
var lastRoll
var n = 0

while (n == 0) {
	rollDie()
}

function rollDie() {
	var roll = Math.trunc(Math.random()*20)+1

	numRolls += 1
	total += roll

	if (numRolls == 1) {
		min = roll
		max = roll
	} else if (roll > max) {
		max = roll
	} else if (roll < min) {
		min = roll
	}

	if(roll == lastRoll) {
		n = 1
		console.log('Number of rolls: ' + numRolls)
		console.log('Min: ' + min)
		console.log('Max: ' + max)
		console.log('Average: ' + (total/numRolls))
	}

	lastRoll = roll
}