var arr = [1,13,14,15,16,17,18,37,38,70]

function bookIndex(arr) {
	var str = '';
	for (var i = 0; i < arr.length; i++) { //loop through array
	  str += arr[i]
    if (arr[i+1] - arr[i] == 1) { //if a consecutive number is found, then
      var check = []
      var n = i;
      while (arr[n+1] - arr[n] == 1) { 
        check.push(arr[n])
        n++
      }
      check.push(arr[n])
      //console.log("check: " + check)
      str += '-' + check[check.length-1]
      i = n
    }
    if (i == arr.length-1) {
      return str
    }
    str += ','
	}
}

console.log(bookIndex(arr))