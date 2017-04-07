students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def printStudents(arr):
	for i in range(0,len(arr)):
		print arr[i]['first_name'], arr[i]['last_name']

printStudents(students)

print ''

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def printStudentsAndInstructors(users):
	for k in users:
		print k
		for i in range(0,len(users[k])):
			print i+1,'-',users[k][i]['first_name'].upper(), users[k][i]['last_name'].upper(),'-',len(users[k][i]['first_name']+users[k][i]['last_name'])

printStudentsAndInstructors(users)





















