let map;

function initMap() {
    // Initialize the map
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7608, lng: -111.8910 }, // Salt Lake City coordinates
        zoom: 10
    });

    // Add marker for Salt Lake City
    const marker = new google.maps.Marker({
        position: { lat: 40.7608, lng: -111.8910 },
        map: map,
        title: "Salt Lake City Marker"
    });
}