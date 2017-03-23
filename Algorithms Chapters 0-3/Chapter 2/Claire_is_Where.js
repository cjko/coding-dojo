var x = 0
var y = 0

function reset() {
	x = 0
	y = 0
}

function moveBy(xOffset, yOffset) {
	x += xOffset
	y += yOffset
}

function xLocation() {
	return x
}

function yLocation() {
	return y
}

function distFromHome() {
	var z = Math.sqrt((xLocation()*xLocation())+(yLocation()*yLocation()))
	return z
}

reset()
moveBy(1,-2)
moveBy(3,1)
xLocation()
yLocation()
distFromHome()