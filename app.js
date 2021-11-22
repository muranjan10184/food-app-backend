const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://anjani_kri:asdfasdf@food-order-app.0tnxl.mongodb.net/restdb?retryWrites=true&w=majority";
const app = express();
app.use(express.json());
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    allowedHeaders: "*"
  })
);

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected .. ");
});

const dishRouter = require("./routes/dishRoutes");
const orderRouter = require("./routes/orderRoutes");
const customerRouter = require("./routes/customerRoutes");
const restaurantRouter = require("./routes/restaurantRoutes");
const usersRouter = require("./routes/userRoutes");
app.use("/dish", dishRouter);
app.use("/order", orderRouter);
app.use("/customer", customerRouter);
app.use("/restaurant", restaurantRouter);
app.use("/user", usersRouter);

app.listen(9000, () => {
  console.log("listening ....");
});
