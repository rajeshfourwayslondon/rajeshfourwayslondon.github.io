/*!
 * pro-fed v1.0.1: advance frontend framework
 * (c) 2018 
 * MIT License
 */

"use strict";

/*
 * Google Map
 */
var mapConfig = {
    lat: 51.4673777,
    lng: -0.3716066,
    zoom: 12,
    mapMarker: "assets/images/map-icon-2.png",
    title: "Fourway Trading",
    addresss: ""
};

var myLatlng = new google.maps.LatLng(mapConfig.lat, mapConfig.lng);

var mapOptions = { zoom: mapConfig.zoom, center: myLatlng, styles: [{ featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }] }, { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }] }, { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#fefefe" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }] }, { featureType: "administrative", elementType: "labels.icon", stylers: [{ saturation: "39" }, { lightness: "24" }, { gamma: "5.54" }, { weight: "5.45" }, { invert_lightness: true }, { visibility: "on" }, { hue: "#0200ff" }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 20 }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 21 }] }, { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#dedede" }, { lightness: 21 }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#53b079" }, { lightness: 17 }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#8b6f6f" }, { lightness: 29 }, { weight: 0.2 }] }, { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ saturation: "-39" }, { lightness: "-86" }, { gamma: "2.25" }, { weight: "4.58" }] }, { featureType: "road.highway", elementType: "labels.text.stroke", stylers: [{ saturation: "-53" }, { lightness: "85" }, { gamma: "7.31" }, { weight: "10.00" }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 18 }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 16 }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#f2f2f2" }, { lightness: 19 }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }, { lightness: 17 }] }] };

var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title: mapConfig.title,
    icon: mapConfig.mapMarker
});

var infowindow = new google.maps.InfoWindow({
    content: mapConfig.addresss
});

google.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
});

// To add the marker to the map, call setMap();
marker.setMap(map);
//# sourceMappingURL=map.js.map
