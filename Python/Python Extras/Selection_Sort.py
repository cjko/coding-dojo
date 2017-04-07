def selectionSort(arr): # Tracks 2 numbers at a time
	
	for i in range(0, len(arr)):

		num1 = [arr[i],i] # First number to compare is current i. An array was used to track both the value and the index.

		for n in range(i, len(arr)):

			num2 = (arr[n],n) # Second number to compare will search remainder of array to compare to num1

			if num2[0] < num1[0]: # If second number is less than first number, then first number now becomes the new "minimum" which is num2

				num1[0] = num2[0]
				num1[1] = n

		arr[i],arr[num1[1]] = arr[num1[1]],arr[i]

		if i == len(arr)-1:
			return arr

print selectionSort([5,3,6234,8,9,1,4,6])