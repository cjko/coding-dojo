id = 1

class Call(object):

	def __init__(self,name,phoneNumber,time,reason):
		global id
		self.id = id
		self.name = name
		self.phoneNumber = phoneNumber
		self.time = time
		self.reason = reason
		id += 1

	def display(self):
		print 'ID:',self.id
		print 'Name:',self.name
		print 'Phone number:',self.phoneNumber
		print 'Time:',self.time
		print 'Reason:',self.reason
		print ''
		return self

class CallCenter(object):
	
	def __init__(self):
		self.calls = []
		self.queueSize = len(self.calls)

	def add(self,call):
		self.calls.append(call)
		return self

	def remove(self):
		for i in range(0,len(self.calls)):
			self.calls[i] = calls[i+1]
		self.calls.pop()
		return self

	def info(self):
		for i in self.calls:
			print 'Name:',i.name
			print 'Phone number:',i.phoneNumber
			print ''
		print 'Length of queue:',len(self.calls)
		print ''
		return self

	def removeNumber(self, phoneNumber):
		for i in range(0,len(self.calls)-1):
			if self.calls[i].phoneNumber == phoneNumber:
				for n in range (i, len(self.calls)-1):
					self.calls[n] = self.calls[n+1]
				self.calls.pop()
		return self

	def sortQueue(self):
		for i in range(0,len(self.calls)):
			for n in range (i, 0, -1):
				if self.calls[n].time < self.calls[n-1].time:
					self.calls[n],self.calls[n-1] = self.calls[n-1],self.calls[n]
			if i == len(self.calls)-1:
				return self



newCallCenter = CallCenter()

newCallCenter.add(Call('Colin','972-379-9293',95,'IT issues'))

newCallCenter.add(Call('Kyle','555-555-5555',91,'99 problems'))

newCallCenter.add(Call('Tahim','777-777-7777',108,'Oh noooooooooo!!'))

newCallCenter.add(Call('Charles','222-222-2222',101,'Crap'))



newCallCenter.removeNumber('972-379-9293')

newCallCenter.sortQueue()
for i in newCallCenter.calls:
	i.display()

print 'First call in queue after sort:'
newCallCenter.calls[0].display()





