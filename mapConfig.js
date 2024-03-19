const CENTRE_OF_EUROPE = [48, 21];
const DEFAULT_ZOOM = 7;

const SELECTED_COORDS = [localStorage.getItem('lat'), localStorage.getItem('lng')];

const map = L.map('map').setView(SELECTED_COORDS, DEFAULT_ZOOM);

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
        .bindPopup(`<a href='index.html'>LAT: ${latitude}, LNG: ${longitude}</a>`)
        // .bindPopup(`LAT: ${latitude}, LNG: ${longitude}`)
        .openPopup();

    localStorage.setItem('location', `${latitude},${longitude}`);

    //console.log(e);
}

map.on('click', onMapClick);

function success(pos) {
    const crd = pos.coords;

    console.log(crd);

    latitude = crd.latitude.toFixed(4);
    longitude = crd.longitude.toFixed(4);

    const latlng = {
        lat: latitude,
        lng: longitude
    }

    popupMarker
        .setLatLng(latlng)
        .addTo(map)
        .bindPopup(`<a href='index.html'>LAT: ${latitude}, LNG: ${longitude}</a>`)
        // .bindPopup(`LAT: ${latitude}, LNG: ${longitude}`)
        .openPopup();

    localStorage.setItem('location', `${latitude},${longitude}`);



    // fetchForecastData(`${crd.latitude},${crd.longitude}`).then((data) => {
    //     console.log(data);
    //     updateHTML(data);
    // });
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);

    // default
    // let city = "Berlin";

    // fetchForecastData(city).then((data) => {
    //     console.log(data);
    //     updateHTML(data);
    // });
}

navigator.geolocation.getCurrentPosition(success, error);