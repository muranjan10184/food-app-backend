const express = require("express");
const user = require("../models/user");
const router = express.Router();
const objectId = require("mongodb").ObjectID;

router.post("/signup", async (req, res) => {
  try {
    const user1 = new user({
      userId: req.body.userId,
      email: req.body.email,
      password: req.body.password,
    });
    const users = await user.find({ email: req.body.email });
    if (users.length > 0) {
      res.send("User already registered");
    } else {
      await user1.save();
      res.json({ Message: "Registered successfully" });
    }
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/signin", async (req, res) => {
  console.log(req.body);
  const user1 = {
    email: req.body.email,
    password: req.body.password,
  };
  const users = await user
    .find(user1, (err, data) => {
      if (!err) {
        if (data.length > 0) res.json({ Message: "Login Successful" });
        else res.json({ Message: "User or Password did not match" });
      } else {
        res.send("Login unsuccessful");
      }
    })
    .clone()
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
