var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request,response) {

	if(request.url==='/') {
		fs.readFile('views/index.html','utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'})
			response.write(contents)
			response.end()

		})
	} else if(request.url==='/cars') {
		fs.readFile('views/cars.html','utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'})
			response.write(contents)
			response.end()

		})
	} else if(request.url==='/images/McLaren-650S.jpg') {
		fs.readFile('images/McLaren-650S.jpg', function(errors, data) {
			response.writeHead(200, {'Content-Type': 'image/*'})
			response.end(data)

		})
	} else if(request.url==='/images/SCG003S-FRONTHP-600x338.jpg') {
		fs.readFile('images/SCG003S-FRONTHP-600x338.jpg', function(errors, data) {
			response.writeHead(200, {'Content-Type': 'image/*'})
			response.end(data)

		})
	} else if(request.url==='/images/lamborghini-huracan.jpg') {
		fs.readFile('images/lamborghini-huracan.jpg', function(errors, data) {
			response.writeHead(200, {'Content-Type': 'image/*'})
			response.end(data)

		})
	} else if(request.url==='/cars/new') {
		fs.readFile('views/newcar.html','utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'})
			response.write(contents)
			response.end()

		})
	} 


	else if(request.url==='/cats') {
		fs.readFile('views/cats.html','utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'})
			response.write(contents)
			response.end()

		})
	} else if(request.url==='/images/cat1.jpg') {
		fs.readFile('images/cat1.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/*'})
			response.end(contents)

		})
	} else if(request.url==='/images/cat2.jpg') {
		fs.readFile('images/cat2.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/*'})
			response.end(contents)

		})
	} else if(request.url==='/images/cat3.jpg') {
		fs.readFile('images/cat3.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/*'})
			response.end(contents)

		})
	} 

	else if(request.url==='/stylesheets/style.css') {
		fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/css'})
			response.write(contents)
			response.end()
		})
	} 

	else {
		response.writeHead(404)
		response.end('The URL requested is not available.')
	}
})
server.listen(6789)
console.log("Running on localhost:6789")