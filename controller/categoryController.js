import Category from "../model/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const categoryData = new Category(req.body);
    const savedCategory = await categoryData.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }
    res.json(category);
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }
    res.json(category);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }
    res.json({ message: "Category deleted successfully." });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const searchCategories = async (req, res) => {
  try {
    const query = {};
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" };
    }
    const categories = await Category.find(query);
    res.json(categories);
  } catch (error) {
    console.error("Error searching categories:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
