import React, { useState, useEffect } from "react";
import EmployeeServices from "../../services/Employee.services";
import { useNavigate } from "react-router-dom";
const Employee_List = () => {
  const navigate = useNavigate();
  const [employee_List, setEmployee_List] = useState([]);

  // get all employee details
  const getAllEmployee = async () => {
    const res = await EmployeeServices.getAllEmployee();
    setEmployee_List(res.data.data);
  };

  // delete employee details by id
  const deleteEmployee = async (id) => {
    var option = window.confirm("Are you want to delete");
    if (option) {
      const res = await EmployeeServices.deleteEmployeeById(id);
      alert(res.data.message);
    }
  };

  useEffect(() => {
    getAllEmployee();
  });
  return (
    <React.Fragment>
      <div className="card-header p-4">
        <h1>Employee Details</h1>
      </div>
      <div>
        {employee_List.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Hometown</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee_List.map((val, idx) => {
                return (
                  <tr key={idx}>
                    <td>{val.id}</td>
                    <td>{val.fname}</td>
                    <td>{val.lname}</td>
                    <td>{val.date_of_birth}</td>
                    <td>{val.email}</td>
                    <td>{val.mobile}</td>
                    <td>{val.hometown}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => navigate(`/edit-employee/${val.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteEmployee(val.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div>No Data</div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Employee_List;
