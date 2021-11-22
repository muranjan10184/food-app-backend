const express = require("express");
const dish = require("../models/dish");
const router = express.Router();
const objectId = require("mongodb").ObjectID;

router.get("/", async (req, res) => {
  try {
    const dishes = await dish.find();
    res.json(dishes);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.get("/find/:dishId", async (req, res) => {
  try {
    const dishId = req.params.dishId;
    const dishes = await dish.find({ _id: new objectId(dishId) });
    res.json(dishes);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.delete("/delete/:dishId", async (req, res) => {
  try {
    const dishId = req.params.dishId;
    const dishes = await dish.deleteOne({ _id: new objectId(dishId) });
    res.json(dishes);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.post("/add", async (req, res) => {
  try {
    const dish1 = new dish({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      offer: req.body.offer,
    });

    const d1 = await dish1.save();
    res.json(d1);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/addwithRestId", async (req, res) => {
  try {
    const dish1 = new dish({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      offer: req.body.offer,
      restaurantId: req.body.restaurantId,
    });

    const d1 = await dish1.save();
    res.json(d1);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
