const mongoose = require("mongoose");

const userDeckSchema = mongoose.Schema({
  deckTemplate: {
    type: mongoose.Schema.ObjectId,
    ref: "Deck",
  },
  userCards: {
    type: mongoose.Schema.ObjectId,
    ref: "UserCard",
  },
  user: String,
  amountNew: Number,
});

const UserDeck = mongoose.model("UserDeck", userDeckSchema);

module.exports = UserDeck;
