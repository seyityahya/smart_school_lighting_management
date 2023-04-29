import LedSinif from "../../models/ledSinif";

const sinifDurumPost = async (req, res, next) => {
  const { sinif, durum } = req.body;

  try {
    const ledDurumu = await LedSinif.findById(id);
    res.status(200).json(ledDurumu.durum);
  } catch (e) {
    next(e);
  }
};

export { sinifDurumPost };
