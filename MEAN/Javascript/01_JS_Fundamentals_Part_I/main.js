var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

// #1
for(var i in x) {
	console.log(x[i])
}

// #2
x.push(100)

// #3
x.push(["hello", "world", "JavaScript is Fun"])
console.log(x)

// #4
var sum = 0
for(var i=1; i<=500; i++) {
	sum += i
}
console.log(sum)

// #5
var arr = [1, 5, 90, 25, -3, 0]
var min = arr[0]
for(var j=0; j < arr.length; j++) {
	if (arr[j] < min) {
		min = arr[j]
	}
}
console.log("Min: " + min)

// #6
sum = 0
for(var k=0; k < arr.length; k++) {
	sum += arr[k]
}
console.log("Average: " + sum/arr.length)

// #7
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for(key in newNinja) {
	console.log("Key: " + key + ", Value: " + newNinja[key])
}