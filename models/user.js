const { default: mongoose } = require("mongoose");

const User = mongoose.model("user", {
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  dateofbirth: { type: String | Date },
  createdon: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
  updated: { type: Date, default: Date.now },
  role: { type: String, enum: ["admin", "customer"] },
});

module.exports = User;
