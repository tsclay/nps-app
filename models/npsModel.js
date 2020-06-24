const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: String,
  phoneNum: String,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  premiumUser: Boolean,
  favoriteParks: [
    {
      name: String,
      parkId: String,
      parkImage: String,
      parkUrl: String,
      parkDescription: String,
      parkNotes: String,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
