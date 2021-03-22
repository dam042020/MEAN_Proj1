const EmployeeDAO = require("../models/employee/employeeDAO");
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
  const employees = await Employee.getEmpleados();
  res.json(employees);
};

module.exports = employeeCtrl;

// ----------------------

var express = require("express");
var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/xwww-form-urlencoded
app.post("/profile", function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
