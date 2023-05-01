import dersProgramı from "../../models/dersProgrami";
import Boom from "boom";
import cron from "node-cron";
import ValidationSchema from "./validation";

const create = async (req, res, next) => {
  const input = req.body;

  const { error } = ValidationSchema.validate(input);

  if (error) {
    return next(Boom.badRequest(error.details[0].message));
  }

  try {
    const ders = new dersProgramı(input);
    const data = await ders.save();

    res.status(200).json({
      siniflar: data,
    });
  } catch (e) {
    next(e);
  }
};

const createBaslama = async (req, res, next) => {
  const input = req.body;

  const { error } = ValidationSchema.validate(input);

  if (error) {
    return next(Boom.badRequest(error.details[0].message));
  }

  try {
    const ders = new dersProgramı(input);
    const data = await ders.save();

    res.status(200).json({
      siniflar: data,
    });
  } catch (e) {
    next(e);
  }
};

const dersBaslama = async (req, res, next) => {
  const id = "644fe4cf1f6e833f64603066";
  const saatler = ["19:20", "19:21", "19:22"];
  try {
    const baslama = await dersProgramı.findById(id);
    // const saat = baslama.baslangic;
    saatler.forEach((saat) => {
      const [saatKisim, dakikaKisim] = saat.split(":");
      const saatDegeri = `${dakikaKisim} ${saatKisim} * * *`;

      cron.schedule(saatDegeri, () => {
        console.log("Başlama görevi çalıştı:");
        // Başlama görevinin işlemlerini burada gerçekleştirin
      });
    });

    res.status(200).json("başarılı");
  } catch (e) {
    next(e);
  }
};

export { create, createBaslama, dersBaslama };
