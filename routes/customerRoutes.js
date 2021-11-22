const express = require("express");
const customer = require("../models/customer");
const router = express.Router();
const objectId = require("mongodb").ObjectID;

router.get("/", async (req, res) => {
  try {
    const customers = await customer.find();
    res.json(customers);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.get("/find/:customerId", async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const customers = await dish.find({ customerId: customerId });
    res.json(customers);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.delete("/delete/:customerId", async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const customer = await customerId.deleteOne({ customerId: customerId });
    res.json(customer);
  } catch (err) {
    res.send("Error : " + err);
  }
});

router.post("/add", async (req, res) => {
  try {
    const customer1 = new customer({
      customerId: req.body.customerId,
      name: req.body.name,
      customerType: req.body.customerType,
    });

    const d1 = await dish1.save();
    res.json(d1);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
