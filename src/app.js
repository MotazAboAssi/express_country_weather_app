const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const path = require("path");
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.set("view engine", "hbs");
const viewsPath = path.join(__dirname, "../UI/views");
app.set("views", viewsPath);

app.get("/", (req, res) => {
  res.render("index", {
    title_tab: "weather",
  });
});

const forecast = require("./tools/forecastFile");
const geocode = require("./tools/geocode");
app.get("/weather", (req, res) => {
  const { country } = req.query;
  geocode(country, (err, dat) => {
    if (err) return res.status(400).json({ error: err });
    if (dat)
      forecast(dat.latitude, dat.longitude, (error, data) => {
        if (err) return res.status(400).json({ error });
        if (data) return res.status(200).json(data);
      });
  });
});

// app.get("*", (req, res) => {});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
