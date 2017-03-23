function sweatshirtPricing(num) {
	var cost = 20
	if (num >= 4) {
		cost *= (1-.35)*num
	} else if (num == 3) {
		cost *= (1-.19)*num
	} else if (num == 2) {
		cost *= (1-.09)*num
	}
	return Math.ceil(cost)
}
sweatshirtPricing(3)