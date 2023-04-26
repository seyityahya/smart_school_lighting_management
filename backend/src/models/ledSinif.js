import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SinifSchema = new Schema({
  durum: {
    type: Boolean,
    default: false,
  },
});

const LedSinif = mongoose.model("ledSinif", SinifSchema);

export default LedSinif;
