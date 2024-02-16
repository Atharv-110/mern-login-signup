const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  password: String,
});

const registerModel =
  mongoose.models.register ||
  mongoose.model("register", registerSchema);

module.exports = registerModel;
