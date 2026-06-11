const app = require("./src/app")
const { sequelize } = require("./src/models")
require("dotenv").config()

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    // Test DB connection and sync schemas
    await sequelize.authenticate()
    console.log("Database connection established successfully.")

    // Sync database models (in dev, we can use alter: true or force: false)
    await sequelize.sync({ alter: true })
    console.log("Database synchronized successfully.")

    app.listen(PORT, () => {
      console.log(`Server is running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`)
    })
  } catch (error) {
    console.error("Unable to connect to the database or start server:", error)
    process.exit(1)
  }
}

startServer()
