const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
require('dotenv').config()

const registerModel = require("./models/login_signup");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.MONGODB_URI,
  { dbName: "login_signup" }
);

app.post("/login", (req, res) => {
  const {email, password} = req.body;
  registerModel.findOne({email: email}).then(user => {
    if (user) {
      if(user.password === password) {
        res.json("Login Success")
      } else {
        res.json("Incorrect Password") 
      }
    } else {
      res.json("No record found")
    }
  })
})

app.post("/register", (req, res) => {
  registerModel
    .create(req.body)
    .then((register) => res.json(register))
    .catch((err) => console.log(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
