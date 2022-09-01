import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { employeeValidationSchema } from "../../validation/employeeValidationSchema";
import EmployeeServices from "../../services/Employee.services";

const AddEmployee = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      date_of_birth: "",
      hometown: "",
    },
    validationSchema: employeeValidationSchema,
    onSubmit: async (e_data) => {
      //e_data.preventDefault();

      const res = await EmployeeServices.addEmployee({
        fname: e_data.fname,
        lname: e_data.lname,
        email: e_data.email,
        mobile: e_data.mobile,
        date_of_birth: e_data.date_of_birth,
        hometown: e_data.hometown,
      });
      alert(res.data.message);
      navigate("/employee-list");
    },
  });
  return (
    <React.Fragment>
      <div className="card-header p-4">
        <h1>Employee Registration</h1>
      </div>
      <div className="card p-4">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              className="form-control"
              name="fname"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.fname && formik.errors.fname ? (
              <div className="text-danger">{formik.errors.fname}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Last Name:</label>
            <input
              className="form-control"
              name="lname"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.lname && formik.errors.lname ? (
              <div className="text-danger">{formik.errors.lname}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Date of Birth:</label>
            <input
              type="date"
              className="form-control"
              max={new Date().toISOString().split("T")[0]}
              name="date_of_birth"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
              <div className="text-danger">{formik.errors.date_of_birth}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Mobile No:</label>
            <input
              className="form-control"
              name="mobile"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <div className="text-danger">{formik.errors.mobile}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label>Hometown:</label>
            <input
              className="form-control"
              name="hometown"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.hometown && formik.errors.hometown ? (
              <div className="text-danger">{formik.errors.hometown}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddEmployee;
