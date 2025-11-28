const express = require("express");
const app = express();
const cors = require("cors");

require("./db/conn");

app.use(cors());
app.use(express.json());

// Rotas
const router = require("./routes/router");
app.use("/", router);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
