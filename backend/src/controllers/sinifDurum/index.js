import sinifDurum from "../../models/Siniflar";
import Boom from "boom";
import ValidationSchema from "./validation";
import dersProgramı from "../../models/dersProgrami";

const create = async (req, res, next) => {
  const input = req.body;

  const { error } = ValidationSchema.validate(input);

  if (error) {
    return next(Boom.badRequest(error.details[0].message));
  }

  try {
    const isExists = await sinifDurum.findOne({ sinif: input.sinif });

    if (isExists) {
      return next(Boom.conflict("This sinif already using."));
    }

    const sinif = new sinifDurum(input);
    const data = await sinif.save();

    res.status(200).json({
      siniflar: data,
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  const { sinif_id } = req.params;
  if (!sinif_id) {
    return next(Boom.badRequest("Missing paramter (:sinif_id)"));
  }
  try {
    const sinif = await sinifDurum.findById(sinif_id);
    res.status(200).json(sinif.durum);
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  const { sinif_id } = req.params;
  try {
    const updated = await sinifDurum.findByIdAndUpdate(sinif_id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (e) {
    next(e);
  }
};

const updateFiveMinute = async (req, res, next) => {
  const { sinif_id } = req.params;
  try {
    const update = await sinifDurum.findByIdAndUpdate(
      sinif_id,
      { durum: true },
      { new: true }
    );
    res.json(update);

    setTimeout(async () => {
      const secondUpdate = await sinifDurum.findByIdAndUpdate(
        sinif_id,
        { durum: false },
        { new: true }
      );
    }, 15000);
  } catch (e) {
    next(e);
  }
};

const getList = async (req, res, next) => {
  try {
    const siniflar = await sinifDurum.find({});
    res.status(200).json(siniflar);
  } catch (e) {
    next(e);
  }
};

const allUpdate = async (req, res, next) => {
  const guncellemeVerileri = req.body;
  try {
    const siniflar = await sinifDurum.find({});

    await Promise.all(
      siniflar.map(async (belge, index) => {
        await sinifDurum.findByIdAndUpdate(belge._id, guncellemeVerileri, {
          new: true,
        });
      })
    );

    res.status(200).json({ message: "başarılı" });
  } catch (e) {
    next(e);
  }
};

export { create, get, getList, update, allUpdate, updateFiveMinute };
