const crypto = require("crypto")
const razorpay = require("../config/razorpay")
require("dotenv").config()

const createOrder = async (amountInRupees, receiptId) => {
  try {
    const options = {
      amount: amountInRupees * 100, // razorpay works in paise
      currency: "INR",
      receipt: receiptId
    }
    const order = await razorpay.orders.create(options)
    return order
  } catch (err) {
    console.error("Razorpay order creation error:", err.message)
    throw err
  }
}

const verifyPayment = (razorpayOrderId, razorpayPaymentId, signature) => {
  const secret = process.env.RAZORPAY_KEY_SECRET || "rzp_test_secret_placeholder"
  const generatedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex")

  return generatedSignature === signature
}

module.exports = { createOrder, verifyPayment }
