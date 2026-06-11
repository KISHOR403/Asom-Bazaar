const { sendMail } = require("./email.service")
const { sendSMS } = require("./sms.service")

const notifyOrderPlaced = async (user, order) => {
  // Send email alert
  await sendMail({
    to: user.email,
    subject: "Your order at Asom Bazar has been placed!",
    html: `<p>Hi ${user.name}, your order totaling ₹${order.totalAmount} has been placed successfully.</p>`
  })

  // Send SMS update
  await sendSMS({
    to: user.phone || "9876543210",
    message: `Hi ${user.name}, your order has been received. Thank you for supporting local Assamese artisans!`
  })
}

module.exports = { notifyOrderPlaced }
