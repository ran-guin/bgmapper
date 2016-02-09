
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function load_location () {

    var latlng = new google.maps.LatLng(42.354183,-71.065063);
    var options = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

	var map = new google.maps.Map($('#googleMap')[0], options);

    var marker = new google.maps.Marker({
                position: latLng,
                map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);