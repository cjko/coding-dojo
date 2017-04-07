function reverse(arr) {
	var temp
	for (var i = 0; i < arr.length/2; i++) {
		temp = arr[i]
		arr[i] = arr[arr.length-1-i]
		arr[arr.length-1-i] = temp
	}
	return arr
}
console.log(reverse([1,3,5,7,9,11,13,17,21]))


// WITHOUT NESTED LOOPS
function swap(arr,i1,i2) {
  var temp=arr[i1];
  arr[i1]=arr[i2];
  arr[i2]=temp;
}

function removeNegs(arr) {
  var lastpositive=-1
  for (var i=1;i<arr.length;i++) {
    if (arr[i]>0&&i>lastpositive&&arr[i-1]<0) {
      swap(arr,i,lastpositive+1)
      lastpositive++
    }
    else if (arr[i]>0) {
      lastpositive=i
    }
  }
  while (arr[arr.length-1]<0){
    arr.pop()
  }
  return arr
}