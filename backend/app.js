const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/router")

app.use(cors());
app.use(express.json());
app.use(routes);

require("./db/conn");

// Inicia o servidor!
app.listen(3000, function () {
  console.log(`Servidor Online!`);
});
