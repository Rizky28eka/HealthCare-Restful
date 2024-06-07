import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  subText: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
