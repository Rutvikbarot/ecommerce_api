const express = require("express");
const bodyParser = require("body-parser");
const User = require("../../models/user");
const app = express();
const bcrypt = require("bcrypt");
const { connect } = require("mongoose");
const jwt = require("jsonwebtoken");
const saltrounds = 10;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/get-all", function (req, res, next) {
  User.find(function (err, foundUser) {
    console.log(foundUser);
    res.send(foundUser);
  });
});

app.post("/create", function (req, res) {
  bcrypt.hash(req.body.password, saltrounds, function (err, hash) {
    const x = {
      ...req.body,
      password: hash,
    };
    User.find({ email: req.body.email }).then((response) => {
      if (response.length > 0 && response[0].email === req.body.email) {
        res.send("already exist");
      } else {
        const newUser = new User(x);
        newUser.save(function (err) {
          {
            if (!err) {
              res.send("Succesfully saved!");
            } else {
              res.send(err);
            }
          }
        });
      }
    });

    // if (!err) {
    //   newUser.email === req.body.email;
    //   res.send("error");
    //   console.log("error");
    //   //           console.log(req.body);
    // } else {
    //   res.send("saved");
    // }
  });
});

app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  User.find({ email: email }).then((foundUser) => {
    if (foundUser) {
      foundUser.forEach((user) => {
        console.log(typeof user, "kjhuitg87tihy");
        let y = user.toJSON();
        delete y.password;
        console.log(y);
        const token = jwt.sign(y, jwtSecretKey);
        console.log(10, "10", parseInt("10"));

        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) res.send(token);
          console.log(req.body);
          console.log("successfully user login");
        });
      });
    }
  });
});

// app.post("/create", function (req, res) {
//   bcrypt.hash(req.body.password, saltrounds, function (err, hash) {
//     const newUser = new User({
//       user: req.body,
//       email: req.body.username,
//       password: hash,
//     });

//     console.log(req.body);
//     newUser.save(function (err) {
//       if (!err) {
//         res.send("Succesfully saved!");
//       } else {
//         res.send(err);
//       }
//     });
//   });
// });

app.put("/update/:id", async (req, res) => {
  console.log(req.params, req.body);
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        ...req?.body,
      },
      { new: true }
    );
    res.status(200).json({
      message: "user updated successfully!",
      user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
});
//modification needed
app.delete("/delete/:id", async (req, res) => {
  console.log(req.params, req.body);
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      message: "successfully Deleted !",
      user,
    });
  } catch (error) {
    res.status(404).json({
      message: " something went wrong !",
      error,
    });
  }
});

//api for get single user

app.get("/getone/:id", async (req, res) => {
  console.log(req.params, req.id);
  try {
    const user = await User.findById({ _id: req.params.id });
    console.log(user);
    res.send(user);
    res.status(200).json({
      message: "got user successfully!",
      product,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
});

module.exports = { userApi: app };
