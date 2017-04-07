$(document).ready(function(){
	$('form').submit(function(){
		// console.log($(this).serializeArray())

		var userData = {
			firstName: $("input[name='first_name']").val(),
			lastName: $("input[name='last_name']").val(),
			email: $("input[name='email']").val(),
			contact: $("input[name='contact']").val()
		}

		$("input[name='first_name']").val('')
		$("input[name='last_name']").val('')
		$("input[name='email']").val('')
		$("input[name='contact']").val('')

		/*for (var k in userData) {
			var value = $(this).children('div').children('input').val()
			console.log(value)
			userData[k] = value
		}*/

		$('tbody').append('<tr><td>'+userData.firstName+'</td><td>'+userData.lastName+'</td><td>'+userData.email+'</td><td>'+userData.contact+'</td></tr>');

		return false
	})
})