const onSearch = function (e) {
  e.preventDefault();
  document.getElementById("p1").innerHTML = "loading...";
  document.getElementById("p2").innerHTML = "";
  const location = document.getElementById("location").value;
  if (location) {
    fetch(
      "http://localhost:3000/weather?location=" + encodeURIComponent(location)
    ).then((response) => {
      response.json().then((data) => {
        console.log(data);
        if (data.error) {
          return;
        } else if (data) {
          var olocation =
            data.location.name +
            ", " +
            data.location.region +
            ", " +
            data.location.country;
          var ocurrentdata = data.current;
          document.getElementById("p1").innerHTML =
            "You have searched for " + olocation;
          document.getElementById("p2").innerHTML =
            "Temperature is " +
            ocurrentdata.temperature +
            " degree/cel and it is expected to have " +
            ocurrentdata.weather_descriptions[0] +
            " today";
        } else {
          document.getElementById("p1").innerHTML =
            "Location not found. Please try another search";
        }
      });

      // response.json().then((data) => {

      // });
    });
  } else {
    document.getElementById("p1").innerHTML =
      "Please enter a location to search";
  }
};
