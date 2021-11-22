const express = require("express");
const restaurant = require("../models/restaurant");
const router = express.Router();
const objectId = require("mongodb").ObjectID;

router.get("/", async (req, res) => {
  try {
    const restaurants = await restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.get("/find/:restaurantID", async (req, res) => {
  try {
    const restaurantID = req.params.restaurantID;
    const restaurant = await restaurant.find({
      _id: new objectId(restaurantID),
    });
    res.json(restaurant);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.delete("/delete/:restaurantID", async (req, res) => {
  try {
    const restaurantID = req.params.restaurantID;
    const restaurant = await order.deleteOne({
      _id: new objectId(customerId),
    });
    res.json(restaurant);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.post("/add", async (req, res) => {
  try {
    const restaurant1 = new restaurant({
      name: req.body.name,
      restaurantId: req.body.restaurantId,
      location: req.body.location,
      cuisineType: req.body.cuisineType,
      opensAt: req.body.opensAt,
    });

    const r1 = await restaurant.save(restaurant1);
    res.json(r1);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
