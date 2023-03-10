const bodyParser = require("body-parser");
const express = require("express");
const Inventory = require("../../models/inventory");
const Order = require("../../models/order");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/get-all", function (req, res) {
  Inventory.find(function (err, foundInventory) {
    res.send(foundInventory);
    console.log(foundInventory);
  });
});

app.post("/create", function (req, res) {
  const inventory = req.body;
  const newInventory = new Inventory(inventory);
  if (inventory.instock > 0) {
    newInventory.set("outofstock", false);
  } else {
    newInventory.set("outofstock", true);
  }

  newInventory.save(function (err) {
    if (!err) {
      res.send("successfully product saved!");
    } else {
      res.send(err);
    }
  });
});

app.put("/update/:id", async (req, res) => {
  console.log(req.params, req.id);
  try {
    // Step1 => get data for the document you are looking for ---> <Schema>.findById(_id: red.params.id}) Optional when the data is needed
    // Step2.1 => if there is any condition where do you want to update the data for example
    /**
     *
     * let x = is my inventory data
     * if x.stock > 0 ; set x.outofstock = false
     * else x.outofstock = true
     *
     */
    //Step 2.2 => if you want to update the data based on req.body so
    /**
     * let body = req.body
     * let x = is my inventory data
     * if body.stock > 0 ; x.outofstock = false
     * else if x.stock > 0 ; x.outofstock = false
     * else x.outofstock = true
     *
     */
    //Step 3  Update the data base base on the body i.e update req.body or x i.e document from the db with the new value
    // ------  <Schema>.findByIdAndUpdate({_id:<id>},{body || x }, {new :true})
    // Step 4 Send response to client

    let body = req.body;

    if (body.instock > 0) {
      body = { ...body, outofstock: false };
    } else {
      body = { ...body, outofstock: true };
    }
    let data = await Inventory.findByIdAndUpdate({ _id: req.params.id }, body, {
      new: true,
    });
    res.status(200).json({
      message: "successfully updated !",
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: "sorry not updated!",
      error,
    });
  }
});

app.delete("/delete/:id", async (req, res) => {
  let data = await Inventory.findByIdAndDelete(req.params.id);
  console.log(data);
  if (data) {
    res.send("successfully product deleted!");
  } else {
    res.send("Error");
  }
});

//api for get put and get

app.get("/getone/:id", async (req, res) => {
  console.log(req.params, req.id);
  try {
    const inventory = await Inventory.findById({ _id: req.params.id });
    console.log(inventory);
    res.send(inventory);
    res.status(200).json({
      message: "got it successfully!",
      inventory,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong!",
      error,
    });
  }
});

module.exports = { inventoryApi: app };
