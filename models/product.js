const { default: mongoose } = require("mongoose");

const productSchema = {
  brand: String,
  model: String,
  Number,
  createdon: { type: Date, default: Date.now },
  updatedon: { type: Date, default: Date.now },
};

const Product = mongoose.model("product", productSchema);

module.exports = Product;
