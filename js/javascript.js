// JavaScript Document
$(window).scroll(function () {
    // Get scroll position
    var s = $(window).scrollTop(),
        // scroll value and opacity
        blurVal = (s / 150.0);
    let opacityVal = (1 - (s / 7000.0));
    let scrollTop = $(window).scrollTop();

    $('#blur').css('filter', "blur(" + blurVal + "px)")
    $('#blur').css("opacity", Math.max(0.3, 1 - scrollTop / 1000));
    $('#logo').css("width", Math.max(30, 30 + scrollTop / 20) + "%");
    $('#logo').css("opacity", Math.min(1, 1 - scrollTop / 800));

    // remove #logo from page after scroll past 800px
    if (scrollTop > 800) {
        $('#logo').hide();
    }
    if (scrollTop < 800) {
        $('#logo').show();
    }

    if (scrollTop > 600) {
        $('#toggleButton').hide();
    }
    if (scrollTop < 600) {
        $('#toggleButton').show();
    }

});

/* Map */

(g => {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document,
        b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams,
        u = () => h || (h = new Promise(async (f, n) => {
            await (a = m.createElement("script"));
            e.set("libraries", [...r] + "");
            for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
            e.set("callback", c + ".maps." + q);
            a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
            d[q] = f;
            a.onerror = () => h = n(Error(p + " could not load."));
            a.nonce = m.querySelector("script[nonce]")?.nonce || "";
            m.head.append(a)
        }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
})({
    key: "AIzaSyAKJIlXXl9OqMYGy-Tym2OyFSRmp5_R_UU",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
});

// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = {lat: 47.39699429444219, lng: 8.549995817283069};
    // Request needed libraries.
    //@ts-ignore
    const {Map} = await google.maps.importLibrary("maps");
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 17,
        center: position,
        mapId: "9b092662b4ac79a9",
    });

    // The marker
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Tanz am Irchel",
    });
}

initMap();


/* Music of Video */
// Get the video element and the button
const video = document.getElementById('blur');
const icon = document.getElementById('icon-sound');

// Function to toggle video sound
function toggleSound() {
    video.muted = !video.muted; // Toggle the muted property
    if (video.muted) {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    } else {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    }
}

// Add click event listener to the button
toggleButton.addEventListener('click', toggleSound);
