const { default: mongoose } = require("mongoose");

const orderSchema = {
  orderid: Number,
  brand: String,
  model: String,
  color: String,
};

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
