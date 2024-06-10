import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  searchCategories, // Ensure this is imported if you want to include search functionality
} from "../controller/categoryController.js";

const router = express.Router();

// Route for creating a new category
router.post("/", createCategory);

// Route for getting all categories
router.get("/", getAllCategories);

// Route for getting a category by ID
router.get("/:id", getCategoryById);

// Route for updating a category by ID
router.put("/:id", updateCategory);

// Route for deleting a category by ID
router.delete("/:id", deleteCategory);

// Optional: Route for searching categories based on query parameters
router.get("/search", searchCategories);

export default router;
