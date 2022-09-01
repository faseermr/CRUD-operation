import Navbar from "./container/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/employee/Add_Employee";
import Employee_List from "./components/employee/Employee_List";
import Edit_Employee from "./components/employee/Edit_Employee";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/add-employee" exact element={<AddEmployee />} />
          <Route path="/employee-list" exact element={<Employee_List />} />
          <Route path="/edit-employee/:id" exact element={<Edit_Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
