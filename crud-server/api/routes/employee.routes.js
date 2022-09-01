const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  getById,
  deleteById,
  update,
} = require("../controller/employee.controller");

// to add employee details
router.post("/", create);

// to get all employee details
router.get("/", getAll);

// to get employee details by id
router.get("/:id", getById);

// to delete employee details by id
router.delete("/:id", deleteById);

// to update employee details
router.put("/:id", update);

module.exports = router;
