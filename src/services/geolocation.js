const request = require("request");
const forecast = (lattitude, longitude, callback) => {
  request(
    {
      url:
        "http://api.weatherstack.com/current?access_key=4320595e339ea2f1db7b8f3fe0e9594c&query=" +
        lattitude +
        "," +
        longitude,
    },

    (error, response) => {
      if (error) {
        callback("searched location not found", undefined);
      } else {
        callback(undefined, JSON.parse(response.body));
      }
    }
  );
};

module.exports = forecast;
