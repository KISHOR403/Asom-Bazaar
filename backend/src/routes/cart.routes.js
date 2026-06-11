const express = require("express")
const { getCart, addToCart, updateCart } = require("../controllers/cart.controller")
const { protect } = require("../middleware/auth.middleware")

const router = express.Router()

router.use(protect)

router.get("/", getCart)
router.post("/", addToCart)
router.put("/:productId", updateCart)

module.exports = router
