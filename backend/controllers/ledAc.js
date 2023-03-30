const LedSinif = require("../models/LedSinif");

const ledAc = async (req, res, next) => {
  const durum = false;

  const ledDurum = await LedSinif.create({
    durum,
  });
  res.status(200).json({
    success: true,
    data: ledDurum,
  });
};

module.exports = {
  ledAc,
};
