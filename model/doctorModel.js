import mongoose from "mongoose";

const workExperienceSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  facility: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

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
  workExperience: [workExperienceSchema],
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
  gender: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0,
  },
  reviewCount: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      reviewerName: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      comment: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
