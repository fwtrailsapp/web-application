server_url = 'http://68.39.46.187:50000/GreenwayCap/DataRelay.svc/Activity/szook';

function getActivities() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		console.log(xmlhttp.responseText);
	}
	xmlhttp.open("GET", server_url, true);
	xmlhttp.send();
}