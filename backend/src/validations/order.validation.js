const Joi = require("joi")

const createOrderSchema = Joi.object({
  addressId: Joi.string().uuid().required(),
  paymentMethod: Joi.string().valid("razorpay", "cod").default("razorpay"),
  items: Joi.array().items(
    Joi.object({
      productId: Joi.string().uuid().required(),
      quantity: Joi.number().integer().positive().required()
    })
  ).min(1).required()
})

module.exports = { createOrderSchema }
