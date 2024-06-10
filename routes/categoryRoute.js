import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  searchCategories,
} from "../controller/categoryController.js";

const router = express.Router();

router.post("/", createCategory);

router.get("/", getAllCategories);

router.get("/:id", getCategoryById);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

router.get("/search", searchCategories);

export default router;
