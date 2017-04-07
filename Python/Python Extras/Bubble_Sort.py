def bubbleSort(arr): 

	for i in range (0, len(arr)-1): # Goes through each element in the array and compares number to the right

		for n in range (0, len(arr)-1):
			# print arr[n]
			# print arr[n+1]

			if arr[n] > arr[n+1]: # If the number to the right is smaller than the current number, then swap positions
				arr[n],arr[n+1] = arr[n+1],arr[n]

			else:
				continue;

		if i == len(arr)-2:
			return arr

print bubbleSort([5,3,619,1,8,7,2,4,1234,66])