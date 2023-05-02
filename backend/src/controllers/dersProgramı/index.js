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

const dersBaslamaBitis = async (req, res, next) => {
  try {
    const dersler = await dersProgramı.find({});
    const baslangıcSaatleri = dersler.map((item) => item.baslangic);
    const bitisSaatleri = dersler.map((item) => item.bitis);
    const birlesikDizi = baslangıcSaatleri.concat(bitisSaatleri);

    console.log("başlangıç: ", baslangıcSaatleri);
    console.log("bitiş: ", bitisSaatleri);
    console.log("hepsi: ", birlesikDizi);

    birlesikDizi.forEach((saat) => {
      const [saatKisim, dakikaKisim] = saat.split(":");
      const saatDegeri = `${dakikaKisim} ${saatKisim} * * *`;

      cron.schedule(saatDegeri, () => {
        if (baslangıcSaatleri.includes(saat)) {
          console.log("Başlama işlemi yapıldı:");
          // Başlama işlemi için yapılacak işlemler
        }

        if (bitisSaatleri.includes(saat)) {
          console.log("Bitiş işlemi yapıldı:");
          // Bitiş işlemi için yapılacak işlemler
        }
      });
    });

    res.status(200).json("başarılı");
  } catch (e) {
    next(e);
  }
};

const getList = async (req, res, next) => {
  try {
    const dersler = await dersProgramı.find({});
    res.status(200).json(dersler);
  } catch (e) {
    next(e);
  }
};

export { create, dersBaslamaBitis, getList };
