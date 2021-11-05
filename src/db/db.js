const URI =
  process.env.NODE_ENV === "production"
    ? //production DB
      process.env.DB_URL
    : //dev DB
      "mongodb+srv://dbMaster:Deathstroke1912@ormpracticedb.r9b4u.mongodb.net/todoDB?retryWrites=true&w=majority";

const mongoose = require("mongoose");
mongoose.connect(URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error al conectarse a la bdd"));
db.once("open", () => {
  console.log("Conectado a Mongo");
});

module.exports = db;
