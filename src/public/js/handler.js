const onSearch = function (e) {
  e.preventDefault();
  document.getElementById("p1").innerHTML = "loading...";
  document.getElementById("p2").innerHTML = "";
  const location = document.getElementById("location").value;
  if (location) {
    fetch(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(location) +
        ".json?access_token=pk.eyJ1Ijoibm9uaWRheWFsIiwiYSI6ImNraHo2ajZtMTAwb2gydG1oczRwa3V0djgifQ.Ml4KilxwkJKW0F7WQmlVKw"
    ).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          return;
        } else if (data.features.length > 0) {
          fetch(
            "http://api.weatherstack.com/current?access_key=4320595e339ea2f1db7b8f3fe0e9594c&query=" +
              data.features[0].center[1] +
              "," +
              data.features[0].center[0]
          ).then((locationdata) => {
            locationdata.json().then((olocationdetails) => {
              var olocation = data.features[0].place_name;
              var ocurrentdata = olocationdetails.current;
              document.getElementById("p1").innerHTML =
                "You have searched for " + olocation;
              document.getElementById("p2").innerHTML =
                "Temperature is " +
                ocurrentdata.temperature +
                " degree/cel and it is expected to have " +
                ocurrentdata.weather_descriptions[0] +
                " today";
            });
          });
        } else {
          document.getElementById("p1").innerHTML =
            "Location not found. Please try another search";
        }
      });
    });
  } else {
    document.getElementById("p1").innerHTML =
      "Please enter a location to search";
  }
};
