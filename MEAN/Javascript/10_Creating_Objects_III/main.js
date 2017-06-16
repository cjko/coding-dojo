function VehicleConstructor(name, numOfWheels, numOfPassengers, speed) {
	this.name = name
	this.numOfWheels = numOfWheels
	this.numOfPassengers = numOfPassengers
	this.speed = speed
	var distance_travelled = 0
	function updateDistanceTravelled() {
		distance_travelled += speed
	}
	this.makeNoise = function() {
		console.log("SKRRT SKRRT")
		return this
	}
	this.move = function() {
		updateDistanceTravelled()
		this.makeNoise()
	}
	this.checkMiles = function() {
		console.log(distance_travelled)
	}
}

var myCar = new VehicleConstructor("My Car", 4, 5, 60)
myCar.move()
myCar.checkMiles()

