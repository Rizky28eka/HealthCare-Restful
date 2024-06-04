import Doctor from "../model/doctorModel.js";

export const createDoctor = async (req, res) => {
  try {
    const doctorData = new Doctor(req.body);
    const savedDoctor = await doctorData.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found." });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDoctor) {
      return res.status(404).json({ error: "Doctor not found." });
    }
    res.json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ error: "Doctor not found." });
    }
    res.json({ message: "Doctor deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};
