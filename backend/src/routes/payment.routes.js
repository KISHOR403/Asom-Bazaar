const express = require("express")
const { verifyPaymentSignature } = require("../controllers/payment.controller")
const { protect } = require("../middleware/auth.middleware")

const router = express.Router()

router.post("/verify", protect, verifyPaymentSignature)

module.exports = router
