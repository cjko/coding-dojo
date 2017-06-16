var a = function(x, y) {
	sum = 0
	for(var i=x; i<=y; i++) {
		sum += i
	}
	return sum
}

var b = function(arr) {
	min = arr[0]
	for(var i=0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}
	}
	return min
}

var c = function(arr) {
	sum = 0
	for(var i=0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum/arr.length
}

var obj = {
	a: function(x, y) {
		sum = 0
		for(var i=x; i<=y; i++) {
			sum += i
		}
		return sum
	},
	b: function(arr) {
		min = arr[0]
		for(var i=0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i]
			}
		}
		return min
	},
	c: function(arr) {
		sum = 0
		for(var i=0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum/arr.length
	}
}

obj.a(4,8)
obj.b([1,2,4,5,6])
obj.c([1,2,4,5,6])

var person = {
	name: "Colin",
	distance_traveled: 0,
	say_name: function() {
		console.log(this.name)
	},
	say_something: function(something) {
		console.log(something)
	},
	
}

person.say_name()
