def pushFront(arr, val):
	arr.append(val)
	temp = arr[len(arr)-1]
	for i in range(len(arr)-1,0,-1):
		arr[i] = arr[i-1]
	arr[0] = temp
	return arr

print pushFront([1,5,7,8,10], 123)
