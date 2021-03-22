const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  summary: String,
  isbn: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Book", bookSchema);
