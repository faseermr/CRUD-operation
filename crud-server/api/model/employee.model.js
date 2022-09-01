const e = require("cors");
const dbConn = require("../config/db-config");

// constructor
const Employee = function (employee) {
  this.fname = employee.fname;
  this.lname = employee.lname;
  this.date_of_birth = employee.date_of_birth;
  this.hometown = employee.hometown;
  this.email = employee.email;
  this.mobile = employee.mobile;
};

// add employee details into the database
Employee.create = (employee, result) => {
  dbConn.query("Insert into employees set ?", employee, (err, res) => {
    if (err) {
      result(err);
    } else {
      result(null, res);
    }
  });
};

// get all employee details
Employee.getAll = (result) => {
  dbConn.query("Select * From employees", (err, res) => {
    if (err) {
      result(err);
    } else {
      result(null, res);
    }
  });
};

// get employee details by id
Employee.getById = (id, result) => {
  dbConn.query("Select * From employees where id =?", id, (err, res) => {
    if (err) {
      result(err);
    } else {
      result(null, res);
    }
  });
};

// delete employee details by id
Employee.deleteById = (id, result) => {
  dbConn.query("Delete From employees where id =?", id, (err, res) => {
    if (err) {
      result(err);
    } else {
      result(null, res);
    }
  });
};

// update employee details
Employee.update = (id, employee, result) => {
  const { fname, lname, email, mobile, date_of_birth, hometown } = employee;
  dbConn.query(
    `Update employees SET fname=?,lname=?,date_of_birth=?,email=?,mobile=?,hometown=? 
    where id=?`,
    [fname, lname, date_of_birth, email, mobile, hometown, id],
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Employee;
