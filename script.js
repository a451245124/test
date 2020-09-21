var map = L.map('map', {
    center: [22.604799,120.2976256],
    zoom: 16
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var markers = new L.MarkerClusterGroup().addTo(map);;

var xhr = new XMLHttpRequest();
xhr.open("get","https://raw.githubusercontent.com/listennn08/travelmap/master/static/sightdata.json");
xhr.send();
xhr.onload = function(){
 var data = JSON.parse(xhr.responseText).XML_Head.Infos.Info
 for(let i =0;data.length>i;i++){
  
  markers.addLayer(L.marker([data[i].Py,data[i].Px], {icon: greenIcon}).bindPopup(data[i].Name));
// add more markers here...
  // L.marker().addTo(map)
  //   )
 }
 map.addLayer(markers);
}