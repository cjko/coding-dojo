#FIND AND REPLACE
str = "It's thanksgiving day. It's my birthday,too!"

for i in range (0,len(str)):
	if str[i:i+3] == 'day':
		print str[0:i] + 'month' + str[i+3:len(str)]
		break


#MIN AND MAX
x = [2,54,-2,7,12,98]
min = x[0]
max = x[0]

for i in x:
	if i < min:
		min = i
	if i > max:
		max = i
print 'Max:',max,'Min:',min


#FIRST AND LAST
y = ['hello',2,54,-2,7,12,98,'world']
z = []
z.append(y[0])
z.append(y[len(y)-1])
print z


#NEW LIST
a = [19,2,54,-2,7,12,98,32,10,-3,6]
b = []
c = []
a.sort()
print a
for i in range(0,len(a)/2):
	b.append(a[i])
c.append(b)
for i in range(len(a)/2, len(a)):
	c.append(a[i])
print c



