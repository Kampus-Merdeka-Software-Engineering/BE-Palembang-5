const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hallo Kami Section Palembang Group 5</h1>");
});

app.listen(8080, () => {
  console.log("Server Berhasil Dijalankan di Port 8080");
});
