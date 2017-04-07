function printRange(start, end, skip) {	
	if (skip == undefined) {
		skip = 1
	}

	if (end == undefined) {
		end = start
		start = 0
	}

	if(end >= start) {
		for (var i=start; i<end; i = i+skip) {
			console.log(i)
		}
	} else {
		for (var i=start; i>end; i = i-skip) {
			console.log(i)
		}
	}
}
printRange(2,-8,2)