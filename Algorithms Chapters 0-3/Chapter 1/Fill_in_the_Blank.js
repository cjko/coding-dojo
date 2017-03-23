var questionArray = ['San Francisco is in what state?', 
					 'What color is the sky?',
					 'What animal goes moo?',
					 'Bangkok is in what country?']
var answerArray = ['California',
				   'Blue',
				   'Cow',
				   'Thailand']
var userAnswers = []
var correct = 0
var answer = ''

var name = prompt('Hi! What is your name?')

if (name == null) {
	endGame()
} else {
	askQuestions()
}

function askQuestions() {

	for (var i = 0; i < questionArray.length; i++) {

		answer = prompt(questionArray[i])

		if (answer == "Q" || answer == null) {
			endGame()
			break;
		} else {
			userAnswers.push(answer)
			if (userAnswers[i] == answerArray[i]) {
				correct += 1
			}
		}

		if (i == questionArray.length-1) {
			endGame()
		}

	}
}

function endGame() {
	console.log('Name: ' + name)
	console.log('Total questions answered: ' + userAnswers.length)
	console.log('Correctly answered: ' + correct)
}