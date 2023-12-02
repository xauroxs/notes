import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  MONGO_DB_URI: Joi.string().required(),
});
