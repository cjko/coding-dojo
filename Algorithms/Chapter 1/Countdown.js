function countdown(num) {
	var arr = []
	for(var n = num; n >= 0; n--) {
		arr.push(n)
	}
	return arr
}
console.log(countdown(12))
console.log('The array has ' + countdown(12).length + ' elements.')