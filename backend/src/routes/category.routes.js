const express = require("express")
const { getCategories, createCategory } = require("../controllers/category.controller")
const { protect } = require("../middleware/auth.middleware")
const { authorize } = require("../middleware/role.middleware")

const router = express.Router()

router.get("/", getCategories)
router.post("/", protect, authorize("admin"), createCategory)

module.exports = router
