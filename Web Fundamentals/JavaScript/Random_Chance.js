function randomChance(quarters, walk) {

	while (quarters > 0) {
		var chance = Math.floor(Math.random()*100+1)
		if (chance > 99) {
			var payout = Math.floor(Math.random()*50+50)
			quarters += payout
			console.log('You won ' + payout + ' quarters! You now have ' + quarters + ' remaining.')
			
		}
		if(quarters >= walk) {
			console.log('You have won ' + quarters + '! Time to walk away!')
			return;
		}
		quarters--
	}
	console.log('You have ' + quarters + ' quarters left. Game over!')
}

randomChance(100, 200);