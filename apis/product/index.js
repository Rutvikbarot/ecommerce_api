const bodyParser = require("body-parser");
const express = require("express");
const Product = require("../../models/product");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/get-all", function (req, res) {
  Product.find(function (err, foundProduct) {
    console.log(foundProduct);
    res.send(foundProduct);
  });
  // res.send("successfully done!");
});

app.post("/create", function (req, res) {
  const product = req.body;
  const newProduct = new Product(product);

  newProduct.save(function (err) {
    if (!err) {
      res.send("successfully product saved!");
    } else {
      res.send(err);
    }
  });
});

app.put("/update/:id", async (req, res) => {
  console.log(req.params, req.body);
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      {
        ...req?.body,
      },
      { new: true }
    );
    res.status(200).json({
      message: "product updated successfully!",
      product,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
});

//500 - Internal Server Error
//403 - Unauthrized
//404 - not found
//401 - Bad Request error
//200 - sucessfull

app.delete("/delete/:id", async (req, res) => {
  let data = await Product.findByIdAndDelete(req.params.id);
  console.log(data);
  if (data) {
    res.send("successfully product deleted!");
  } else {
    res.send("Error");
  }
});
//api for get single product

app.get("/getone/:id", async (req, res) => {
  console.log(req.params, req.id);
  try {
    const product = await Product.findById({ _id: req.params.id });
    console.log(product);
    res.send(product);
    res.status(200).json({
      message: "got product successfully!",
      product,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
});

module.exports = { productApi: app };
