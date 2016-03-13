server_url = 'http://68.39.46.187:50000/';

function ping() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		console.log(xmlhttp.responseText);
	}
	xmlhttp.open("GET", server_url, true);
	xmlhttp.send();
}