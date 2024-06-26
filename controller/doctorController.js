import Doctor from "../model/doctorModel.js";

export const createDoctor = async (req, res) => {
  try {
    const {
      fullName,
      practiceLicenseNumber,
      specialization,
      healthcareFacilityName,
      healthcareFacilityAddress,
      consultationFee,
    } = req.body;

    const existingDoctor = await Doctor.findOne({
      fullName,
      practiceLicenseNumber,
      healthcareFacilityName,
    });

    if (existingDoctor) {
      return res.status(400).json({
        error:
          "Doctor with this name, license number, and healthcare facility already exists.",
      });
    }

    const doctorData = new Doctor(req.body);
    const savedDoctor = await doctorData.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    console.error("Error creating doctor:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
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
    console.error("Error fetching doctor by ID:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { fullName, practiceLicenseNumber, healthcareFacilityName } =
      req.body;
    const { id } = req.params;

    const existingDoctor = await Doctor.findOne({
      _id: { $ne: id },
      fullName,
      practiceLicenseNumber,
      healthcareFacilityName,
    });

    if (existingDoctor) {
      return res.status(400).json({
        error:
          "Doctor with this name, license number, and healthcare facility already exists.",
      });
    }

    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedDoctor) {
      return res.status(404).json({ error: "Doctor not found." });
    }
    res.json(updatedDoctor);
  } catch (error) {
    console.error("Error updating doctor:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const deleteDoctorById = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ error: "Doctor not found." });
    }
    res.json({ message: "Doctor deleted successfully." });
  } catch (error) {
    console.error("Error deleting doctor by ID:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const deleteDoctorByName = async (req, res) => {
  try {
    const { name } = req.params;
    const deletedDoctor = await Doctor.findOneAndDelete({ fullName: name });

    if (!deletedDoctor) {
      return res.status(404).json({ error: "Doctor not found by name." });
    }

    res.json({ message: "Doctor deleted successfully by name." });
  } catch (error) {
    console.error("Error deleting doctor by name:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const deleteAllDoctors = async (req, res) => {
  try {
    const result = await Doctor.deleteMany({});
    res.json({ message: "All doctors have been deleted.", result });
  } catch (error) {
    console.error("Error deleting all doctors:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
