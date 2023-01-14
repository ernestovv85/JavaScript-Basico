var marker, map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: -25.363,
      lng: 131.044,
    },
  });

  addMark({
    lat: 19.6333,
    lng: -101.6333,
  });
  addMark({
    lat: 46.533333,
    lng: -84.349998,
  });
  addMark({
    lat: 43.769562,
    lng: 11.255814,
  });
  addMark()

  function addMark(coords) {
    marker = new google.maps.Marker({
      position: coords,
      map,
    });
  }
  geoPosiciona();
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000 };
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
  } else {
    alert("Tu navegador no admite geolocalización");
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  marker.setPosition(nuevaPos);
  map.setCenter(nuevaPos);
}

function onError(error) {
  console.log("Se ha producido un error y lo hemos gestionado");
  console.error(error);
}
