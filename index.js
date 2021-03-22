const { mongoose } = require("./database"); //conectar con la base de datos
//const employeeDAO = require('./models/employee/employeeDAO'); //importo funcionalidad

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//ejecuto funcionalidad sobre BD
//employeeDAO.getEmpleados().then( rtn => console.log(rtn));

const app = express();
const port = 3000;
// configuracion
app.set("port", port);
// Middlewares
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
//rutas
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
