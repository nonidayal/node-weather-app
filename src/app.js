const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const staticpath = path.join(__dirname, "../src/public");

const viewpath = path.join(__dirname, "../src/views");
const partialpath = path.join(__dirname, "../src/partials");
const port = process.env.PORT || 3000;
hbs.registerPartials(partialpath);
app.set("view engine", "hbs");
app.set("views", viewpath);
//setting static path
app.use(express.static(staticpath));
app.get("/weather", (req, res) => {
  res.render("weather", {
    title: "Weather Update",
    name: "Noni",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Noni",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Noni",
  });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help",
    name: "Noni",
    reason: "Requested resource cannot be found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "Help",
    name: "Noni",
    reason: "Please provide right search",
  });
});

app.listen(port, () => {
  console.log("listening at port " + port);
});
