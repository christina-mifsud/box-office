const express = require("express");
const app = express();
const showings = require("./data/showings.json");

app.get("/api/shows/all-open", (req, res, next) => {
  res.status(200).send({ status: "OK", itemCount: showings.length, showings });
});

module.exports = app;
