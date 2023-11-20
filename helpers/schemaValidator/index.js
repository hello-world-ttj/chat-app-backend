const Joi = require("joi");

exports.registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  image: Joi.string(),
});

exports.authUserSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  