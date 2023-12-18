const express = require("express");
const mongoose = require("mongoose");
const Patient = require("./models/PatientModule");
const app = express();

app.use(express.json());

app.post("/patient", async (req, res) => {
  try {
    const Patient = await Patient.create(req.body);
    res.status(200).json(patient);
  } catch (error) {}
});

app.get("/patient", async (req, res) => {
  try {
    const patients = await patient.find({});
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://aminumar112:hospital1234@hospitalsystem.7b3gd47.mongodb.net/"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3001, () => {
      console.log("Node API app is running on port 3001");
    });
  })
  .catch((error) => {
    console.log(error);
  });
