function tellTime(HOUR, MINUTE, PERIOD) {
	var str = "It's "
	if (MINUTE > 30) {
		HOUR += 1
		str += "almost "
		HOUR -= 1
	} else if (MINUTE == 15) {
		str += "a quarter after "
	} else if (MINUTE == 30) {
		str += "half past "
	} else if (MINUTE == 5 || MINUTE == 10) {
		str += MINUTE + " after "
	} else {
		str += "just after "
	}

	if (HOUR == 12 && PERIOD == 'PM') {
		str += 'noon.'
	} else if (HOUR == 12 && PERIOD == 'AM') {
		str += 'midight.'
	} else if (PERIOD == 'AM') {
		str += HOUR + ' in the morning.'
	} else if (PERIOD == 'PM' && HOUR >= 1 && HOUR <= 5) {
		str += HOUR + ' in the afternoon.'
	} else if (PERIOD == 'PM' && HOUR > 5 && HOUR <= 7) {
		str += HOUR + ' in the evening.'
	} else if (PERIOD == 'PM' && HOUR > 7 && HOUR < 12) {
		str += HOUR + ' at night.'
	}
	return str
}

console.log(tellTime(12,15,'AM'))

