const express = require("express");
const app = express();
const db = require("./db/db");
const host = process.env.HOST;
const port = process.env.PORT ;
const todos = require("./routes/todos");

app.use(express.json());
app.use(todos);
app.listen(port, host, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
