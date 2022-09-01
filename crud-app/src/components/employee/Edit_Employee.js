import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { employeeValidationSchema } from "../../validation/employeeValidationSchema";
import EmployeeServices from "../../services/Employee.services";

const Edit_Employee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    date_of_birth: "",
    hometown: "",
  });
  const formik = useFormik({
    initialValues: {
      fname: employeeData.fname,
      lname: employeeData.lname,
      email: employeeData.email,
      mobile: employeeData.mobile,
      date_of_birth: employeeData.date_of_birth,
      hometown: employeeData.hometown,
    },
    validationSchema: employeeValidationSchema,
    enableReinitialize: true,
    onSubmit: async (e_data) => {
      //data.preventDefault();
      //  console.log(e_data);
      const res = await EmployeeServices.updateEmployee(id, {
        fname: e_data.fname,
        lname: e_data.lname,
        email: e_data.email,
        mobile: e_data.mobile,
        date_of_birth: e_data.date_of_birth,
        hometown: e_data.hometown,
      });
      alert(res.data.message);
      setEmployeeData({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        date_of_birth: "",
        hometown: "",
      });
      navigate("/employee-list");
    },
  });

  const getEmployeeById = async (id) => {
    const res = await EmployeeServices.getEmployeeById(id);
    setEmployeeData({
      fname: res.data.data[0].fname,
      lname: res.data.data[0].lname,
      email: res.data.data[0].email,
      mobile: res.data.data[0].mobile,
      date_of_birth: res.data.data[0].date_of_birth,
      hometown: res.data.data[0].hometown,
    });
  };

  useEffect(() => {
    getEmployeeById(id);
    // console.log(id);
  }, [id]);

  return (
    <React.Fragment>
      <div className="card-header p-4">
        <h1>Edit Employee Details </h1>
      </div>
      <div className="card p-4">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              className="form-control"
              name="fname"
              defaultValue={employeeData.fname}
              onChange={formik.handleChange}
            />
            {formik.errors.fname ? (
              <div className="text-danger">{formik.errors.fname}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Last Name:</label>
            <input
              className="form-control"
              name="lname"
              defaultValue={employeeData.lname}
              onChange={formik.handleChange}
            />
            {formik.errors.lname ? (
              <div className="text-danger">{formik.errors.lname}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Date of Birth:</label>
            <input
              type="date"
              className="form-control"
              name="date_of_birth"
              defaultValue={employeeData.date_of_birth}
              onChange={formik.handleChange}
            />
            {formik.errors.date_of_birth ? (
              <div className="text-danger">{formik.errors.date_of_birth}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              defaultValue={employeeData.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Mobile No:</label>
            <input
              className="form-control"
              name="mobile"
              defaultValue={employeeData.mobile}
              onChange={formik.handleChange}
            />
            {formik.errors.mobile ? (
              <div className="text-danger">{formik.errors.mobile}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Hometown:</label>
            <input
              className="form-control"
              name="hometown"
              defaultValue={employeeData.hometown}
              onChange={formik.handleChange}
            />
            {formik.errors.hometown ? (
              <div className="text-danger">{formik.errors.hometown}</div>
            ) : null}
          </div>
          <button className="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Edit_Employee;
