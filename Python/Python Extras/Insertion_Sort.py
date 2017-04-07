def insertionSort(arr):

	
	for n in range (0, len(arr)): # Go through each element in list

		# min = arr[n]

		for i in range (n, 0, -1): # Takes current number and compares it to the one before it,

			if arr[i] < arr[i-1]: # If current number is less, then swap it. Go backwards in the array until no longer less than value before it.

				arr[i],arr[i-1] = arr[i-1],arr[i]

		if n == len(arr)-1:

			return arr

print insertionSort([5,3,6234,8,9,1,4,6])

