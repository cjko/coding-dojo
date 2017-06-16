var _ = {
	 map: function(arr, callback) {
		//code here;
		for(var i = 0; i < arr.length; i++) {
			callback(arr[i])
		}
		return
	},
	reduce: function(arr, callback) { 
		// code here;
		var memo = 0;
		for(var i = 0; i < arr.length; i++) {
			var memo = callback(memo, arr[i])
		}
		return memo
	},
	find: function(arr, callback) {   
		// code here;
		for(var i = 0; i < arr.length; i++) {
			if(callback(arr[i])) {
				return arr[i]
			}
		}
	},
	filter: function(arr,callback) { 
		// code here;
		var newArr = []
		for(var i = 0; i < arr.length; i++) {
			var returnValue = callback(arr[i])
			if(returnValue){
				newArr.push(arr[i])
			}
		}
		return newArr
	},
	reject: function(arr, callback) { 
		// code here;
		var newArr = []
		for(var i = 0; i < arr.length; i++) {
			var returnValue = callback(arr[i])
			if(!returnValue){
				newArr.push(arr[i])
			}
		}
		return newArr
	}
}

// console.log(_.map([1,3,4,6],function(x){console.log(x*5)}))
// console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
// console.log(_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
// console.log(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
console.log(_.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0))