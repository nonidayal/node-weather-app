const request = require("request");

request(
  {
    url: "http://api.weatherstack.com/current?access_key=4320595e339ea2f1db7b8f3fe0e9594c&query=12.9716,77.5946",
  },

  (error, response) => {
    console.log(response.body);
  }
);
