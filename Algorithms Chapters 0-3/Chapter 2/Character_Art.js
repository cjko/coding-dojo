function drawLeftStars(num, char) {
	var str = ''
	for(var n = 1; n <= num; n++) {
		str += char
	}
	return str
}

function drawRightStars(num,char) {
	var str = ''
	var numSpaces = 75-num
	for(var n = 1; n <= numSpaces; n++) {
		str += ' '
	}
	for(var m = 1; m <= num; m++) {
		str += char
	}
	return str
}

function drawCenterStars(num, char) {
	var str = ''
	var numSpaces = (75-num)/2
	for(var n = 1; n <= numSpaces; n++) {
		str += ' '
	}
	for(var m = 1; m <= num; m++) {
		str += char
	}
	for(var b = 1; b <= numSpaces; b++) {
		str += ' '
	}
	return str
}