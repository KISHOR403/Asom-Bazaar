const { verifyPayment } = require("../services/payment.service")
const { Order, Transaction } = require("../models")

const verifyPaymentSignature = async (req, res, next) => {
  try {
    const { razorpayPaymentId, razorpayOrderId, razorpaySignature, orderId } = req.body

    const isVerified = verifyPayment(razorpayOrderId, razorpayPaymentId, razorpaySignature)
    if (!isVerified) {
      return res.status(400).json({ message: "Invalid payment signature" })
    }

    const order = await Order.findByPk(orderId)
    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    order.paymentStatus = "paid"
    order.shippingStatus = "processing"
    await order.save()

    const transaction = await Transaction.findOne({ where: { orderId } })
    if (transaction) {
      transaction.razorpayPaymentId = razorpayPaymentId
      transaction.razorpaySignature = razorpaySignature
      transaction.status = "success"
      await transaction.save()
    }

    return res.status(200).json({
      message: "Payment verified and order approved",
      order
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { verifyPaymentSignature }
