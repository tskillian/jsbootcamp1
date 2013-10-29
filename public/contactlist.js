
function makeContactRowClickable() {
  $(".table > tbody > tr").click(function() {
    var newUrl = window.location.href;
    if(newUrl.charAt(newUrl.length) != "/") {
      newUrl = newUrl + "/";
    }
    newUrl = newUrl + $(this).data("contact-guid");
    window.location.href = newUrl;
  });
}




function sortTable() {
	var tbl = $('#table');
}


$(document).ready(function() {
	toSort = [];
	data = $('.last_name');
	for (var i = 0; i < data.length; i++) {
		toSort.push($(data[i]).text());
	sorted = toSort.sort();
	}
	tbl = $('tbody');
  makeContactRowClickable();
    $('th').on('click', function() {
      alert('work');
    });
});

