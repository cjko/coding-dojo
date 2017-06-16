function runningLogger() {
	console.log('I am running!')
}

function multiplyByTen(val) {
	return val*10
}

multiplyByTen(5)

function stringReturnOne() {
	return "First string."
}

function stringReturnTwo() {
	return "Second string."
}

function caller(param) {
	if(typeof(param) == 'function') {
		param()
	}
}

function myDoubleConsoleLog(param1, param2) {
	if(typeof(param1) == 'function' && typeof(param2) == 'function') {
		console.log(param1)
		console.log(param2)
	}
}

function caller2(param) {
	console.log('Starting')
	if(typeof(param) == 'function') {
		setTimeout(param, 2000)
	}
	console.log('Ending?')
	return 'Interesting'
}

caller2(stringReturnOne)