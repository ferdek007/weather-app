const CENTRE_OF_EUROPE = [48, 21];
const DEFAULT_ZOOM = 7;

const TILE_LAYER = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const map = L.map('map')

if (localStorage.getItem('lat') && localStorage.getItem('lng')) {
    const SELECTED_COORDS = [localStorage.getItem('lat'), localStorage.getItem('lng')];
    map.setView(SELECTED_COORDS, DEFAULT_ZOOM);
} else {
    const ZOOM = 5;
    map.setView(CENTRE_OF_EUROPE, ZOOM);
};

const tiles = L.tileLayer(TILE_LAYER, {
    maxZoom: 19,
    attribution: ATTRIBUTION
}).addTo(map);

const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const popupMarker = L.marker([], { icon: greenIcon });

const setMarker = () => {
    const latlng = localStorage.getItem('location').split(',');

    popupMarker
        .setLatLng(latlng)
        .addTo(map)
};

if (localStorage.getItem('location')) {
    setMarker();
}

const onMapClick = (e) => {
    const latitude = e.latlng.lat.toFixed(4);
    const longitude = e.latlng.lng.toFixed(4);

    const popupText = `LAT: ${latitude}, LNG: ${longitude}<br><button id="selectButton" type="button" class="btn btn-primary"
    onclick="selectLocation()">Wybierz</button>`;

    popupMarker
        .setLatLng(e.latlng)
        .addTo(map)
        .bindPopup(popupText)
        .openPopup();

    localStorage.setItem('location', `${latitude},${longitude}`);
    localStorage.setItem('lat', latitude);
    localStorage.setItem('lng', longitude);

    //console.log(e);
}

map.on('click', onMapClick);

const selectLocation = () => {
    window.location.href = "index.html";
};
