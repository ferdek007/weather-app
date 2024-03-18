const map = L.map('map').setView([52.231164, 21], 12);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const popupMarker = L.marker();
let latitude;
let longitude;

function onMapClick(e) {
    latitude = e.latlng.lat.toFixed(4);
    longitude = e.latlng.lng.toFixed(4);

    popupMarker
        .setLatLng(e.latlng)
        .addTo(map)
        // .bindPopup(`<a href='index.html'>LAT: ${latitude}, LNG: ${longitude}</a>`)
        .bindPopup(`LAT: ${latitude}, LNG: ${longitude}`)
        .openPopup();

    console.log(e);
}

map.on('click', onMapClick);