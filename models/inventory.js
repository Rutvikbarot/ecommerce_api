const { default: mongoose } = require("mongoose");

const inventorySchema = {
  brand: String,
  model: String,
  Number,
  instock: Number,
  outofstock: { type: Boolean, default: false },
  createdon: { type: Date, default: Date.now },
  updatedon: { type: Date, default: Date.now },
};

const Inventory = mongoose.model("inventory", inventorySchema);

module.exports = Inventory;
