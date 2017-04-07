 function generateCoinChanges(cents) {
 	var dollars = 0
 	var halfDollars = 0
 	var quarters = 0
 	var dimes = 0
 	var nickels = 0
 	var pennies = 0

 	
 	while (cents > 0) {
 		if (cents%100 == 0 || cents > 100) {
 			dollars += 1
 			cents -= 100
 		} else if (cents%50 ==0 || cents>50) {
 			halfDollars += 1
 			cents -= 50
 		} else if (cents%25 == 0 || cents>25) {
 			quarters += 1
 			cents -= 25
 		} else if (cents%10 == 0 || cents>10) {
 			dimes += 1
 			cents -= 10
 		} else if (cents%5 == 0 || cents>5) {
 			nickels += 1
 			cents -= 5
 		} else {
 			pennies += 1
 			cents -= 1
 		}

 	}

 	//console.log(cents)
 	console.log('Dollars: ' + dollars)
 	console.log('Half Dollars: ' + halfDollars)
 	console.log('Quarters: ' + quarters)
 	console.log('Dimes: ' + dimes)
 	console.log('Nickels: ' + nickels)
 	console.log('Pennies: ' + pennies)
 }
 generateCoinChanges(194)