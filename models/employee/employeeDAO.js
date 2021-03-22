const Employee = require("./employee");
//objeto con la funcionalidad de acceso a base de datos
const employeeDAO = {
  //funciones de acceso a la base de datos
  getEmpleados: async () => {
    const employees = await Employee.find();
    return employees;
  },
  insertarEmpleado: async () => {
    const employee = await Employee.create({
      name: "Carlota Sáenz",
      position: "Profesor",
      office: "Logroño",
      salary: "1000",
    });
  },
  eliminarEmpleado: async (identifier) => {
    const employee = await Employee.deleteOne({ _id: identifier });
  },
  getEmpleados: async () => {
    const employees = await Employee.find();
  },
  findEmpleado: async (identifier) => {
    const employee = await Employee.findOne({ _id: identifier });
  },
  modificarEmpleado: async (identifier) => {
    const employee = await Employee.updateOne(
      { _id: identifier },
      {
        name: "Carlos Sáenz",
        position: "Profesor",
        office: "Logroño",
        salary: 1000,
      }
    );
  },
};
//exportar el objeto para poder ser requerido desde otros ficheros JS
module.exports = employeeDAO;
