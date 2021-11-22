const express = require("express");
const order = require("../models/order");
const router = express.Router();
const objectId = require("mongodb").ObjectID;

router.get("/", async (req, res) => {
  try {
    const orders = await order.find();
    res.json(orders);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.get("/find/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orders = await dish.find({ _id: new objectId(orderId) });
    res.json(orders);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.delete("/delete/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await order.deleteOne({
      _id: new objectId(customerId),
    });
    res.json(order);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.post("/add", async (req, res) => {
  try {
    const order1 = new order({
      customerName: req.body.customerName,
      customerId: req.body.customerId,
      restaurantId: req.body.restaurantId,
      dish: req.body.dish,
      amountPaid: req.body.amountPaid,
      status: req.body.status,
    });

    const d1 = await order1.save();
    res.json(d1);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
