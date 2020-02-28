const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://saeed:abc1234@react-blop-bzo7t.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Db connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
