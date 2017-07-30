var currentpos = document.getElementById("currentpos");
var watchpos = document.getElementById("watchpos");
function geo_success(position) {
currentpos.innerHTML="Lat:"+ position.coords.latitude+"<br>"+"Long:"+ position.coords.longitude+"<br>"+"Accuracy:"+ position.coords.accuracy+"<br>"+"Heading:"+ position.coords.heading+"<br>"+"altitude:"+ position.coords.altitude+"<br>"+"Altitude Accuracy:"+ position.coords.altitudeAccuracy+"<br>"+"Speed:"+ position.coords.speed;
}
function wgeo_success(position) {
watchpos.innerHTML="Lat:"+ position.coords.latitude+"<br>"+"Long:"+ position.coords.longitude+"<br>"+"Accuracy:"+ position.coords.accuracy+"<br>"+"Heading:"+ position.coords.heading+"<br>"+"altitude:"+ position.coords.altitude+"<br>"+"Altitude Accuracy:"+ position.coords.altitudeAccuracy+"<br>"+"Speed:"+ position.coords.speed;
}

function geo_error() {
  alert("Sorry, no position available.");
}

var geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 60000, 
  timeout           : 30000
};
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
  var wpid = navigator.geolocation.watchPosition(wgeo_success, geo_error, geo_options);
} else {
  alert("Geolocation not available");
}