import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    typeCategory: {
      type: String,
      required: true,
    },
    imgCategory: {
      type: String,
      required: true,
    },
    urlTypeCategory: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
export default Category;
