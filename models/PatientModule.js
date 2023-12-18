const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
  {
    PatientID: {
      type: String,
      required: true,
    },
    // surname,other name, gender ,phone number , residential HostAddress,Emergencyname,contact and relationship with patient
    Surname: {
      type: String,
      required: true,
    },
    Othernames: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: Number,
      required: true,
    },
    ResidentialHostAddress: {
      type: String,
      required: true,
    },
    EmergencyName: {
      type: String,
      required: true,
    },
    Contact: {
      type: Number,
      required: true,
    },
    RelationshipWithPatient: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);
module.export = Patient;
