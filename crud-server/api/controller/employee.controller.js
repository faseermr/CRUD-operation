const { response } = require("express");
const Employee = require("../model/employee.model");

// to add employee details
exports.create = (req, res) => {
  console.log("body", req.body);
  const newEmployee = new Employee({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    mobile: req.body.mobile,
    hometown: req.body.hometown,
    date_of_birth: req.body.date_of_birth,
  });

  Employee.create(newEmployee, (err, response) => {
    if (err) res.send(err);

    res.json({
      error: false,
      message: "Employee Added Successfully",
      data: response,
    });
  });
};

// to get all employee details
exports.getAll = (req, res) => {
  Employee.getAll((err, response) => {
    if (err) res.send(err);
    res.json({ error: false, data: response });
  });
};

// to get employee details by id
exports.getById = (req, res) => {
  //  console.log(req.params);
  const { id } = req.params;
  Employee.getById(id, (err, response) => {
    if (err) res.send(err);
    res.json({ error: false, data: response });
  });
};

exports.deleteById = (req, res) => {
  const { id } = req.params;
  Employee.deleteById(id, (err, response) => {
    if (err) res.send(err);

    res.json({
      error: false,
      message: "Employee Deleted Successfully",
      data: response,
    });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const updateEmployee = new Employee({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    mobile: req.body.mobile,
    hometown: req.body.hometown,
    date_of_birth: req.body.date_of_birth,
  });
  Employee.update(id, updateEmployee, (err, response) => {
    if (err) res.send(err);

    res.json({
      error: false,
      message: "Employee Updated Successfully",
      data: response,
    });
  });
};
