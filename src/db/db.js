const mongoose = require("mongoose");
require("dotenv").config("./variables.env");

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error al conectarse a la bdd"));
db.once("open", () => {
  console.log("Conectado a Mongo");
});

module.exports = db;
