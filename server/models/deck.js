const mongoose = require("mongoose");
const User = require("./user");

const deckSchema = mongoose.Schema({
  name: { type: String, required: true },
  genre: String,
  author: { type: mongoose.Schema.ObjectId, ref: "User" },
  cards: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Card",
    },
  ],
});

const Deck = mongoose.model("Deck", deckSchema);

module.exports = Deck;
