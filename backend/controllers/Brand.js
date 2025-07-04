const Brand=require("../models/Brand")

// Get All Brands
exports.getAll = async (req, res) => {
  try {
    const result = await Brand.find({});
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching brands" });
  }
};

// Create Brand
exports.createBrand = async (req, res) => {
  try {
    const { name } = req.body;
    const image = req.file?.path || null; // if you're using multer

    if (!name) {
      return res.status(400).json({ message: "Brand name is required" });
    }

    const newBrand = new Brand({ name, image });
    const saved = await newBrand.save();
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating brand" });
  }
};

// Update Brand
exports.updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const image = req.file?.path;

    const brand = await Brand.findById(id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    brand.name = name || brand.name;
    if (image) brand.image = image;

    const updated = await brand.save();
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating brand" });
  }
};

// Delete Brand
exports.deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Brand.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Brand not found" });
    }

    res.status(200).json({ message: "Brand deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting brand" });
  }
};
