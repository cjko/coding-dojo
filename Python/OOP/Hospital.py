class Hospital(object):
	def __init__(self, name, capacity):
		self.patients = []
		self.name = name
		self.capacity = capacity

	def admit(self, patient):
		if len(self.patients) < self.capacity:
			self.patients.append(patient)
			self.patients[len(self.patients)-1].bedNumber = self.patients[len(self.patients)-2].bedNumber + 1
			print patient.name,'has been admitted and is at bed #' + str(self.patients[len(self.patients)-1].bedNumber)
		else:
			print 'This hospital is at capacity!!'
		return self

	def discharge(self, patientName):
		for i in range(0,len(self.patients)-1):
			if self.patients[i].name == patientName:
				self.patients[i].bedNumber = 0
				for n in range(i,len(self.patients)-2):
					self.patients[n] = self.patients[n+1]
				self.patients.pop()
				print patientName, "has been discharged. Stay healthy!"
				# print self.patients
			if i == len(self.patients)-1:
				print "Patient not found!"
		return self

patient_id = 1

class Patient(object):
	def __init__(self,name,allergies):
		global patient_id
		self.id = patient_id
		self.name = name
		self.allergies = allergies
		self.bedNumber = 0
		patient_id += 1

sacredHeart = Hospital('Sacred Heart Hospital',3)
patient1 = Patient('Colin','None')
patient2 = Patient('Kyle','Peanut Butter')
patient3 = Patient('Charles','Cheese')
patient4 = Patient('Tahim','Milk')

sacredHeart.admit(patient1).admit(patient2).admit(patient3).admit(patient4)
sacredHeart.discharge('Kyle')
sacredHeart.discharge('Tony')