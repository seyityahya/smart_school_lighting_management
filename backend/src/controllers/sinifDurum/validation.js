import Joi from "joi";

const Schema = Joi.object({
  sinif: Joi.string().required(),
  durum: Joi.boolean(),
});

export default Schema;
