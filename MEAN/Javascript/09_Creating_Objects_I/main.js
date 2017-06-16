function VehicleConstructor(name, numOfWheels, numOfPassengers) {
	this.name = name
	this.numOfWheels = numOfWheels
	this.numOfPassengers = numOfPassengers
	this.makeNoise = function() {
		console.log("SKRRT SKRRT")
		return this
	}
}

var bike = new VehicleConstructor("Colin's Bike", 2, 1)
bike.makeNoise = function() {
	console.log("ring ring!")
}
bike.makeNoise()

var sedan = new VehicleConstructor("A sedan", 4, 5)
sedan.makeNoise = function() {
	console.log("Honk Honk!")
}
sedan.makeNoise()

var bus = new VehicleConstructor("Bus", 4, 16)
bus.addPassengers = function(additionalPassengers) {
	return this.numOfPassengers + additionalPassengers
}
console.log(bus.makeNoise().addPassengers(4))