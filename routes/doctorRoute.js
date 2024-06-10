import express from "express";
import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctorById,
  deleteDoctorByName,
  deleteAllDoctors,
} from "../controller/doctorController.js";

const router = express.Router();

router.post("/", createDoctor);
router.get("/", getAllDoctors);
router.get("/:id", getDoctorById);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctorById);
router.delete("/name/:name", deleteDoctorByName);
router.delete("/", deleteAllDoctors);

export default router;
