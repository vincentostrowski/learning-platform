const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: { type: String, unqiue: true, required: true },
  name: String,
  passwordHash: { type: String, unique: true },
  decks: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "UserDeck",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
