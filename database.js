const mongoose = require("mongoose");
//la base de datos "db" ya está creada
const URI = "mongodb://localhost:27017/employee";
const OPTIONS = {
  user: "root", //usuario de base de datos
  pass: "root", //contraseña de base de datos
  useUnifiedTopology: true,
  useNewUrlParser: true,
  authSource: "admin", //privilegios de la conexión
};
mongoose
  .connect(URI, OPTIONS)
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));
module.exports = mongoose;