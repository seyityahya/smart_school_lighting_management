const LedSinif = require("../models/LedSinif");

const ledAc = async (req, res, next) => {
  const id = "6425c2214c529c7b2e0ae108";

  try {
    const ledDurumu = await LedSinif.findById(id);
    res.status(200).json(ledDurumu.durum);
  } catch (e) {
    next(e);
  }

  // const ledDurum = await LedSinif.create({
  //   durum,
  // });
  // res.status(200).json({
  //   success: true,
  //   data: ledDurum,
  // });
};

module.exports = {
  ledAc,
};
