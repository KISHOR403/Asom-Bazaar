const Joi = require("joi")

const createProductSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().integer().positive().required(),
  stock: Joi.number().integer().min(0).default(1),
  categoryId: Joi.number().integer().required(),
  images: Joi.array().items(Joi.string()).default([])
})

module.exports = { createProductSchema }
