const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// set port
const port = process.env.PORT || 4000;

// database connection
const dbConn = require("./api/config/db-config");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const employeeRoutes = require("./api/routes/employee.routes");

app.use("/api/employee", employeeRoutes);

// listen for request
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
