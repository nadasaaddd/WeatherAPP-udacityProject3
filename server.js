//importing packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// instance creation
const app = express();

//server port
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("website")); //for website folder

// projectData - API endpoint
let projectData = {};

// Routes
app.get("/data", (req, res) => {
  //for debugging
  console.log("Current projectData:", JSON.stringify(projectData, null, 2));

  res.send(projectData); //send res to client
});

// POST route to add data to projectData
app.post("/addData", (req, res) => {
  const { temperature, date, userResponse } = req.body;
  projectData = { temperature, date, userResponse };
  res.send({ message: "Data added successfully" });
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
