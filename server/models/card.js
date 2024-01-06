const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  front: { type: String, required: true },
  back: { type: String, required: true },
  prompt: { type: String, required: true },
  deck: {
    type: mongoose.Schema.ObjectId,
    ref: "Deck",
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
