const geocode = (location, callback) => {
  request(
    {
      url:
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(location) +
        ".json?access_token=pk.eyJ1Ijoibm9uaWRheWFsIiwiYSI6ImNraHo2ajZtMTAwb2gydG1oczRwa3V0djgifQ.Ml4KilxwkJKW0F7WQmlVKw",
    },

    (error, response) => {
      callback(response);
    }
  );
};

module.exports = geocode;
