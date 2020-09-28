var map = L.map('map', {
    center: [25.044955,121.335579],
    zoom: 10
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//green 旅遊
var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

//red food 
var redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// black pharmacy
var blackIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});




//旅遊
var markers = new L.MarkerClusterGroup().addTo(map);; //新增一圖層，用來放maker群組
var xhr = new XMLHttpRequest();
xhr.open("get","https://raw.githubusercontent.com/a451245124/test/gh-pages/travel.json");
xhr.send();
xhr.onload = function(){
 var data = JSON.parse(xhr.responseText).XML_Head.Infos.Info
 for(let i =0;data.length>i;i++){
  
  markers.addLayer(L.marker([data[i].Py,data[i].Px], {icon: greenIcon}).bindPopup(data[i].Name));
  

  // add more markers here...
  // L.marker().addTo(map)
  //   )
 }
 markers.remove();
 //map.addLayer(markers);
}

//food
var markerf = new L.MarkerClusterGroup().addTo(map);;
var xhr3 = new XMLHttpRequest();
xhr3.open("get","https://raw.githubusercontent.com/a451245124/test/gh-pages/food.json");
xhr3.send();
xhr3.onload = function(){
 var data = JSON.parse(xhr3.responseText).XML_Head.Infos.Info
 for(let i =0;data.length>i;i++){
  
  markerf.addLayer(L.marker([data[i].Py,data[i].Px], {icon: redIcon}).bindPopup(data[i].Name));

 }
 markerf.remove();
 //map.addLayer(markerf);
}

/*

//pharmacy 
var marker2 = new L.MarkerClusterGroup().addTo(map);;
var xhr2 = new XMLHttpRequest();
xhr2.open("get","https://raw.githubusercontent.com/a451245124/test/gh-pages/pharmacy.json");
xhr2.send();
xhr2.onload = function () {
  var data = JSON.parse(xhr2.responseText).features
  for(let i =0;data.length>i;i++){ 
    marker2.addLayer(L.marker([data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]], {icon: blackIcon}).bindPopup(data[i].properties.name));
  }
  map.addLayer(marker2);
}

*/


function food() {
  var v = document.getElementById("Btnfood").id;
  //history.back() 回上一頁
  map.removeLayer(markers)
  map.addLayer(markerf)
  
}
function travel() {
  var v = document.getElementById("Btnfood").id;
  //history.back() 回上一頁
  map.removeLayer(markerf)
  map.addLayer(markers)
}