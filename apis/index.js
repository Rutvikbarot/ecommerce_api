const { inventoryApi } = require("./inventory");
const { orderApi } = require("./order");
const { productApi } = require("./product");
const { userApi } = require("./user");
const express = require("express");
const app = express();
app.use(express.json());

app.use("/user", userApi);
app.use("/product", productApi);
app.use("/inventory", inventoryApi);
app.use("/order", orderApi);

module.exports = { apis: app };
