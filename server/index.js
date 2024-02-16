const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

const registerModel = require("./models/login_signup");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "URI",
  { dbName: "login_signup" }
);

app.post("/register", (req, res) => {
  registerModel
    .create(req.body)
    .then((register) => res.json(register))
    .catch((err) => console.log(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
