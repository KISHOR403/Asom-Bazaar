const { Order, OrderItem, Product, Transaction } = require("../models")
const { createOrder } = require("../services/payment.service")

const placeOrder = async (req, res, next) => {
  try {
    const { addressId, paymentMethod, items } = req.body

    let totalAmount = 0
    const orderItemsDetails = []

    for (const item of items) {
      const prod = await Product.findByPk(item.productId)
      if (!prod || prod.stock < item.quantity) {
        return res.status(400).json({ message: `Product ${item.productId} unavailable or out of stock` })
      }
      totalAmount += prod.price * item.quantity
      orderItemsDetails.push({
        productId: prod.id,
        quantity: item.quantity,
        price: prod.price
      })
    }

    // Create Sequelize Order record
    const order = await Order.create({
      userId: req.user.id,
      addressId,
      totalAmount,
      paymentMethod
    })

    for (const details of orderItemsDetails) {
      await OrderItem.create({
        orderId: order.id,
        ...details
      })
      // Decrement stock
      const prod = await Product.findByPk(details.productId)
      prod.stock -= details.quantity
      await prod.save()
    }

    if (paymentMethod === "razorpay") {
      const razorpayOrder = await createOrder(totalAmount, order.id)
      await Transaction.create({
        orderId: order.id,
        razorpayOrderId: razorpayOrder.id,
        amount: totalAmount
      })

      return res.status(201).json({
        message: "Order placed. Complete transaction online.",
        order,
        razorpayOrderId: razorpayOrder.id
      })
    }

    return res.status(201).json({
      message: "COD Order placed successfully",
      order
    })
  } catch (err) {
    next(err)
  }
}

const getOrdersHistory = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id },
      include: [{ model: OrderItem }]
    })
    return res.status(200).json({ orders })
  } catch (err) {
    next(err)
  }
}

module.exports = { placeOrder, getOrdersHistory }
