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

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}