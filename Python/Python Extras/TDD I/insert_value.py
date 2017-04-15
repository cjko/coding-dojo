def insert_val_at(index, my_list, value):
	try:
		my_list.append(value)
		# print my_list
		for i in range(len(my_list)-1,index,-1):
			my_list[i] = my_list[i-1]
		my_list[index] = value
		# print my_list
		return my_list
	except:
		return False

# print insert_val_at(2, [0,1,2,3,4], 100)
print insert_val_at(6, [0,1,2,3,4], 100)
