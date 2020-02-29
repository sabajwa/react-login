const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./models/user");

const config = require("./config/key");

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Db connected"))
  .catch(err => console.error(err));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.json({ success: false, err });
  });
  return res.status(200).json({ success: true });
});
app.get("/", (req, res) => {
  res.json({ "hell hi how": "are you ahdbbcbccckjcec c j  dhcd cd" });
});

app.listen(5000);
