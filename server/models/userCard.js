const mongoose = require("mongoose");

const userCardSchema = mongoose.Schema({
  cardTemplate: {
    type: mongoose.Schema.ObjectId,
    ref: "Card",
  },
  userFront: String,
  userBack: String,
  userPrompt: String,
  interval: Number,
  easeFactor: Number,
  repetitions: Number,
  lapses: Number,
  nextDue: Date,
  learningStage: { type: String, enum: ["new", "learning", "reviewing"] },
  reviewHistory: [
    {
      date: Date,
      performance: { type: String, enum: ["easy", "good", "hard", "again"] },
    },
  ],
  userDeck: {
    type: mongoose.Schema.ObjectId,
    ref: "UserDeck",
  },
});

const UserCard = mongoose.model("UserCard", userCardSchema);

module.exports = UserCard;
