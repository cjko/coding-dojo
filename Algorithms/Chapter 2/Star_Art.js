function drawLeftStars(num) {
	var str = ''
	for(var n = 1; n <= num; n++) {
		str += '*'
	}
	return str
}

function drawRightStars(num) {
	var str = ''
	var numSpaces = 75-num
	for(var n = 1; n <= numSpaces; n++) {
		str += ' '
	}
	for(var m = 1; m <= num; m++) {
		str += '*'
	}
	return str
}

function drawCenterStars(num) {
	var str = ''
	var numSpaces = (75-num)/2
	for(var n = 1; n <= numSpaces; n++) {
		str += ' '
	}
	for(var m = 1; m <= num; m++) {
		str += '*'
	}
	for(var b = 1; b <= numSpaces; b++) {
		str += ' '
	}
	return str
}