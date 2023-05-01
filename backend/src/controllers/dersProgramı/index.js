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

const dersBaslama = async (req, res, next) => {
  // const saatler = ["19:20", "19:21", "19:22"];
  try {
    const dersler = await dersProgramı.find({});
    const baslangıcSaatleri = dersler.map((item) => item.baslangic);
    console.log("başlangıç: ", baslangıcSaatleri);

    // const saat = baslama.baslangic;
    baslangıcSaatleri.forEach((saat) => {
      const [saatKisim, dakikaKisim] = saat.split(":");
      const saatDegeri = `${dakikaKisim} ${saatKisim} * * *`;

      cron.schedule(saatDegeri, () => {
        console.log("Başlama işlemi yapıldı:");
        // Başlama görevinin işlemlerini burada gerçekleştirin
      });
    });

    res.status(200).json("başarılı");
  } catch (e) {
    next(e);
  }
};

const dersBitme = async (req, res, next) => {
  try {
    const dersler = await dersProgramı.find({});
    const bitisSaatleri = dersler.map((item) => item.bitis);
    console.log("bitis", bitisSaatleri);

    bitisSaatleri.forEach((saat) => {
      const [saatKisim, dakikaKisim] = saat.split(":");
      const saatDegeri = `${dakikaKisim} ${saatKisim} * * *`;

      cron.schedule(saatDegeri, () => {
        console.log("Bitiş işlemi Yapıld:");
        // Başlama görevinin işlemlerini burada gerçekleştirin
      });
    });

    res.status(200).json("başarılı");
  } catch (e) {
    next(e);
  }
};

export { create, dersBaslama, dersBitme };
