const express = require("express")
const { placeOrder, getOrdersHistory } = require("../controllers/order.controller")
const { protect } = require("../middleware/auth.middleware")
const validate = require("../middleware/validate.middleware")
const { createOrderSchema } = require("../validations/order.validation")

const router = express.Router()

router.use(protect)

router.post("/", validate(createOrderSchema), placeOrder)
router.get("/history", getOrdersHistory)

module.exports = router
