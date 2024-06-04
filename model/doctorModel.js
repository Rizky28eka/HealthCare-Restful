import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  practiceLicenseNumber: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  subSpecialization: {
    type: String,
  },
  educationInstitution: {
    type: String,
  },
  graduationYear: {
    type: Number,
  },
  profilePhoto: {
    type: String,
  },
  healthcareFacilityName: {
    type: String,
    required: true,
  },
  healthcareFacilityAddress: {
    type: String,
    required: true,
  },
  practiceHours: {
    type: String,
  },
  healthcareFacilityContact: {
    type: String,
  },
  practiceLocation: {
    type: String,
  },
  consultationFee: {
    type: Number,
    required: true,
  },
  workHistory: {
    type: String,
  },
  certifications: {
    type: [String],
  },
  professionalMemberships: {
    type: [String],
  },
  scientificPublications: {
    type: [String],
  },
  languagesSpoken: {
    type: [String],
  },
  medicalInterests: {
    type: [String],
  },
  profileMedia: {
    type: String,
    default: null,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
