import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SiniflarSchema = new Schema({
  sinif: {
    type: String,
    require: true,
    unique: true,
  },
  durum: {
    type: Boolean,
    default: false,
  },
});

const sinifDurum = mongoose.model("sinifDurum", SiniflarSchema);

export default sinifDurum;
