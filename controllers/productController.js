const Product = require('../models/productModel');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products)
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve products", error: err });
  }
};

module.exports = { getAllProducts };
