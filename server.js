const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "API works",
  });
});

app.use("/api/v1/customer/:customerId/orders", require("./routes/orders.js"));
app.use("/api/v1/customer", require("./routes/customer"));

module.exports = app;
