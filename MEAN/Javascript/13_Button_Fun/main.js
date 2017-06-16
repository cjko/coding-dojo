var prevColor;

$(document).ready(function(){
	eventHandler($('#button'))
})

$(document).keydown(function(event) {
	if(event.keyCode == 13) {
		$('.wrapper').append('<button id="newButton">New Button</button>')
		eventHandler($('#newButton'))
	}
})

function eventHandler(button) {
	button.click(function(event) {
		/* Act on the event */
		if ($(this).css('background-color') == 'rgb(255, 0, 0)') {
			$(this).css('background-color', 'blue')
			prevColor = 'red'
		} else if ($(this).css('background-color') == 'rgb(255, 0, 0)'){
			$(this).css('background-color', 'red')
			prevColor = 'blue'
		} else {
			$(this).css('background-color', 'red')
			prevColor = ''
		}
	});

	button.hover(function(event) {
		prevColor = $(this).css('background-color')
		$(this).css('background-color', 'green')

	}, function(event) {
		$(this).css('background-color', prevColor)
	})
}