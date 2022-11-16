const mongoose = require("mongoose");

const subscriptionsSchema = mongoose.Schema({
  memberId: String,
  movies: [Object],
});

module.exports = mongoose.model("subscriptions", subscriptionsSchema);
