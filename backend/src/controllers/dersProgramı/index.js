import dersProgramı from "../../models/dersProgrami";
import Boom from "boom";
import cron from "node-cron";
import ValidationSchema from "./validation";
import axios from "axios";

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

      cron.schedule(saatDegeri, async () => {
        if (baslangıcSaatleri.includes(saat)) {
          console.log("Başlama işlemi yapıldı:");
          try {
            const response = await axios.put(
              "http://localhost:5000/api/siniflar/allUpdate",
              { durum: true }
            );
            console.log("POST isteği başarıyla gönderildi");
          } catch (error) {
            console.error(
              "POST isteği sırasında bir hata oluştu:",
              error.message
            );
          }
        }

        if (bitisSaatleri.includes(saat)) {
          console.log("Bitiş işlemi yapıldı:");
          try {
            const response = await axios.put(
              "http://localhost:5000/api/siniflar/allUpdate",
              { durum: false }
            );
            console.log("POST isteği başarıyla gönderildi");
          } catch (error) {
            console.error(
              "POST isteği sırasında bir hata oluştu:",
              error.message
            );
          }
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

const Update = async (req, res, next) => {
  const { ders_id } = req.params;

  try {
    const updated = await dersProgramı.findByIdAndUpdate(ders_id, req.body, {
      new: true,
    });

    res.status(200).json(updated);
  } catch (e) {
    next(e);
  }
};

const Delete = async (req, res, next) => {
  const { ders_id } = req.params;

  try {
    const deleted = await dersProgramı.findByIdAndDelete(ders_id);

    if (!deleted) {
      throw Boom.badRequest("Ders not found");
    }

    res.json(deleted);
  } catch (e) {
    next(e);
  }
};

export { create, dersBaslamaBitis, getList, Update, Delete };
