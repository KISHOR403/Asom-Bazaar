const express = require("express")
const { verifySeller, approveProduct } = require("../controllers/admin.controller")
const { protect } = require("../middleware/auth.middleware")
const { authorize } = require("../middleware/role.middleware")

const router = express.Router()

router.use(protect)
router.use(authorize("admin"))

router.put("/sellers/:sellerId/verify", verifySeller)
router.put("/products/:productId/approve", approveProduct)

module.exports = router
