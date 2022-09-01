import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="text-decoration-none fs-2">
          Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto" style={{ marginLeft: "850px" }}>
            <li className="nav-item m-2">
              <Link
                to="/add-employee"
                className="text-decoration-none text-white"
              >
                Add Employee
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link
                to="/employee-list"
                className="text-decoration-none text-white"
              >
                Employee List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
