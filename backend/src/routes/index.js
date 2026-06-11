const express = require("express")
const authRoutes = require("./auth.routes")
const sellerRoutes = require("./seller.routes")
const productRoutes = require("./product.routes")
const categoryRoutes = require("./category.routes")
const cartRoutes = require("./cart.routes")
const orderRoutes = require("./order.routes")
const paymentRoutes = require("./payment.routes")
const adminRoutes = require("./admin.routes")

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/sellers", sellerRoutes)
router.use("/products", productRoutes)
router.use("/categories", categoryRoutes)
router.use("/cart", cartRoutes)
router.use("/orders", orderRoutes)
router.use("/payments", paymentRoutes)
router.use("/admin", adminRoutes)

module.exports = router
