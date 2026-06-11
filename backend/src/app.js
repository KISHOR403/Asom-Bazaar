const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const apiRoutes = require("./routes")
const errorHandler = require("./middleware/errorHandler")

const app = express()

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// API endpoint mapping
app.use("/api", apiRoutes)

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date() })
})

// Error interceptor middleware
app.use(errorHandler)

module.exports = app
