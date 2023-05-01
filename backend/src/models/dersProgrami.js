import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dersProgramıSchema = new Schema({
  ders: {
    type: Number,
  },
  baslangic: {
    type: String,
    require: true,
    unique: true,
  },
  bitis: {
    type: String,
    require: true,
    unique: true,
  },
  degistiren: {
    type: String,
  },
});

const dersProgramı = mongoose.model("dersProgramı", dersProgramıSchema);

export default dersProgramı;
