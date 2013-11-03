$(document).ready(function () {
	$('#reset_button').click(function () {
		$('.form-control').each(function() {
			$(this).val("");
		});
	});
});