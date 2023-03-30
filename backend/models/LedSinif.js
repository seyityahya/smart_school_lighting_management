const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SinifSchema = new Schema({
  durum: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ledSinif", SinifSchema);
