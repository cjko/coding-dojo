function weekdayName(weekdayNum) {
	switch (weekdayNum) {
		case 1:
			console.log('Sunday')
			break
		case 2:
			console.log('Monday')
			break
		case 3:
			console.log('Tuesday')
			break
		case 4:
			console.log('Wednesday')
			break
		case 5:
			console.log('Thursday')
			break
		case 6:
			console.log('Friday')
			break
		case 7: 
			console.log('Saturday')
			break
		default:
			console.log(null)
			break
	}
}

//TO DO
function weekdayName2(dayNum) {
	switch weekdayNum {
		case 1:
			console.log('Sunday')
		case 2:
			console.log('Monday')
		case 3:
			console.log('Tuesday')
		case 4:
			console.log('Wednesday')
		case 5:
			console.log('Thursday')
		case 6:
			console.log('Friday')
		case 7: 
			console.log('Saturday')
		default:
			console.log(null)
	}
}

//TO DO
function someDays() {
	for(var n = 1; n <= 17; n++) {
		var day = weekDayName2(Math.trunc(Math.random()*365)+1)
		if (day == ) {
			console.log('Work hard!')
		} else {
			console.log('Enjoy your day off!')
		}
	}
}

function monthName(monthNum) {
	var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December']
	return monthArray[monthNum-1]
}

function monthToDays(monthNum) {
	var daysInMonth

	switch (monthNum) {
		case 1:
			daysInMonth = 31
			break
		case 2:
			daysInMonth = 28
			break
		case 3:
			daysInMonth = 31
			break
		case 4:
			daysInMonth = 30
			break
		case 5:
			daysInMonth = 31
			break
		case 6:
			daysInMonth = 30
			break
		case 7:
			daysInMonth = 31
			break
		case 8:
			daysInMonth = 31
			break
		case 9:
			daysInMonth = 30
			break
		case 10:
			daysInMonth = 31
			break
		case 11:
			daysInMonth = 30
			break
		case 12:
			daysInMonth = 31
			break
		default:
			daysInMonth = null
			break
	}
	return daysInMonth
}

function dayToMonth(dayNum) {
	var monthNum = 
}

