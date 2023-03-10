// Express package  Main Package for Node APi development
const express = require("express");
const mongoose = require("mongoose");
const { apis } = require("./apis");
const { db } = require("./utils/urls");
const dotenv = require("dotenv");

let PORT = process.env.PORT || 30001;
dotenv.config();
const app = express(); // App is a variable that store the ref of express package
app.use(express.json()); // express.json() is to convert the res.body in json for accessing the params and payload
app.use(express.Router()); // express.Router() is used for managing routing for api example localhost:30001/user/getAll

app.use("/apis", apis);

app.use((req, res) => {
  res.json({
    data: null,
    message: "api not found",
  });
});

mongoose.set("strictQuery", false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then((res) => {
    console.log(`
        Database connected successfully
    `);
    app.listen(PORT, () => {
      console.log(`
        Server started ${PORT}
    `);
    });
  })
  .catch((err) => {
    console.log(err);
  });
