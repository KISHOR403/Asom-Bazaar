const express = require("express")
const { registerSeller, getSellerProducts } = require("../controllers/seller.controller")
const { protect } = require("../middleware/auth.middleware")
const { authorize } = require("../middleware/role.middleware")

const router = express.Router()

router.post("/register", protect, registerSeller)
router.get("/products", protect, authorize("seller"), getSellerProducts)

module.exports = router
