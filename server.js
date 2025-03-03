require("dotenv").config();

//dependencia para correr el api
const express = require("express");
//express ejecuta lo que esta en el servidor 

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const usuarioRoutes = require("./routes/usuarioRoutes");

//inicializador servicio
const app = express();

//middleware
app.use(cors());
app.use(helmet());  
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
});


