import mongoose from "mongoose";
import express from "express";
import Category from "../models/categorySchema.mjs"; 
const router = express.Router();

// Get a category by ID
router.get("/:id", async (req, res) => {
  try {
    const categoryID = req.params.id;
    const category = await Category.findById(categoryID);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: `Get ERROR: ${err.message}` });
  }
});

// Create a new category
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: `Create ERROR: ${err.message}` });
  }
});

// Delete a category by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: `Delete ERROR: ${err.message}` });
  }
});

export default router;
