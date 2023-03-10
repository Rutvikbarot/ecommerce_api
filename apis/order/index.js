const bodyParser = require("body-parser");
const express = require("express");
const { findByIdAndUpdate } = require("../../models/order");
const Order = require("../../models/order");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/get-all", function (req, res) {
  Order.find(function (err, foundOrder) {
    console.log(foundOrder);
    res.send(foundOrder);
  });
});

app.post("/create", function (req, res) {
  const order = req.body;
  const newOrder = new Order(order);

  newOrder.save(function (err) {
    if (!err) {
      res.send("successfully order saved");
    } else {
      res.send(err);
    }
  });
});

app.put("/update/:id", async (req, res) => {
  console.log(req.params, req.body);
  try {
    const order = await Order.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json({
      message: "order successfully updated!",
      order,
    });
  } catch (error) {
    res.status(404).json({
      message: "not updated",
      error,
    });
  }
});

app.delete("/delete/:id", function (req, res) {
  Order.deleteOne(function (err) {
    if (!err) {
      res.send("successfully order deleted");
    } else {
      res.send(err);
    }
  });
});

app.get("/getone/:id", async (req, res) => {
  console.log(req.params, req.body);
  try {
    const order = await Order.findOne({ _id: req.params.id });
    res.status(200).json({
      message: "got order succesfully!",
      order,
    });
  } catch (error) {
    res.status(404).json({
      message: "something went wrong !",
      error,
    });
  }
});

module.exports = { orderApi: app };
