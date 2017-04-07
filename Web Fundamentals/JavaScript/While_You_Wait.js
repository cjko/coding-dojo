function birthdayCountdown(num) {
	var daysUntilMyBirthday = num;
	var str = ''

	if (daysUntilMyBirthday == 0) {
		str += '♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪'
	} else if (daysUntilMyBirthday == 1) {
		str += "TOMORROW IS MY BIRTHDAY!!!"
	} else if (daysUntilMyBirthday <= 5 ) {
		str += daysUntilMyBirthday + ' DAYS UNTIL MY BIRTHDAY!!!'
	} else if (daysUntilMyBirthday <= 30) {
		str += daysUntilMyBirthday + ' days until my birthday. Getting closer... :)'
	} if (daysUntilMyBirthday > 30) {
		str += daysUntilMyBirthday + ' days until my birthday. Such a long time... :('
	}
	return str
}
console.log(birthdayCountdown(1))