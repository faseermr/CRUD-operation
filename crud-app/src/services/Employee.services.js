import http from "./http-common";

// add employee details
const addEmployee = (data) => {
  return http.post(`/employee`, data);
};

// get all employees details
const getAllEmployee = () => {
  return http.get(`/employee`);
};

// get all employees details
const getEmployeeById = (id) => {
  return http.get(`/employee/${id}`);
};

// update employee details
const updateEmployee = (id, data) => {
  return http.put(`/employee/${id}`, data);
};

// delete employee details
const deleteEmployeeById = (id) => {
  return http.delete(`/employee/${id}`);
};

export default {
  addEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployeeById,
};
