function printNames() {
	var students = [ 
	     {first_name:  'Michael', last_name : 'Jordan'},
	     {first_name : 'John', last_name : 'Rosales'},
	     {first_name : 'Mark', last_name : 'Guillen'},
	     {first_name : 'KB', last_name : 'Tonel'}
	]

	for(var student in students) {
		console.log(students[student].first_name + " " + students[student].last_name);
	}
}
printNames()

console.log()



function printNamesAndLengths() {
	var users = {
 		'Students': [ 
     		{first_name:  'Michael', last_name : 'Jordan'},
		    {first_name : 'John', last_name : 'Rosales'},
		    {first_name : 'Mark', last_name : 'Guillen'},
		    {first_name : 'KB', last_name : 'Tonel'}
  		],
 		'Instructors': [
     		{first_name : 'Michael', last_name : 'Choi'},
     		{first_name : 'Martin', last_name : 'Puryear'}
  		]
 	}

 	for(var u in users) {
 		console.log(u)
 		for(var i=0; i < users[u].length; i++){
	 		var str = users[u][i].first_name + users[u][i].last_name
	 		console.log((i+1) + " - " + users[u][i].first_name.toUpperCase() + " " + users[u][i].last_name.toUpperCase() + " - " + str.length)
 		}
 	}
}
printNamesAndLengths()