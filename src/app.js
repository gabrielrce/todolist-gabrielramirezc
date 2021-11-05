const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./db/db");
const todos = require("./routes/todos");

app.use(express.json());
app.use(todos);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
