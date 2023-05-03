import Joi from "joi";

const Schema = Joi.object({
  ders: Joi.number(),
  baslangic: Joi.string().required(),
  bitis: Joi.string().required(),
  degistiren: Joi.string(),
});

export default Schema;
