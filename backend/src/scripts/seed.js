require("dotenv").config({ path: "../../.env" }) // Adjust if needed
const { sequelize, User, Seller, Category, Product } = require("../models")
const { initIndex, indexProduct } = require("../services/search.service")
const bcrypt = require("bcryptjs")

const categoriesData = [
  { name: "Mekhela Chador", slug: "mekhela-chador", description: "Traditional two-piece Assamese attire." },
  { name: "Silk & Stoles", slug: "silk", description: "Muga, Eri, and Pat silk products." },
  { name: "Jewellery", slug: "jewellery", description: "Traditional Assamese brass and silver jewellery." },
  { name: "Bamboo & Cane", slug: "bamboo-cane", description: "Handcrafted bamboo and cane items." },
  { name: "Spices & Tea", slug: "spices", description: "Authentic Assam tea and organic spices." },
  { name: "Handicrafts", slug: "handicrafts", description: "Bell metal, water hyacinth, and other crafts." },
]

const productsData = [
  { title: "Pure Muga Silk Mekhela Chador", description: "Authentic handcrafted Muga silk mekhela chador with traditional motifs.", price: 18500, categorySlug: "mekhela-chador" },
  { title: "Eri Silk Winter Stole", description: "Warm and cozy Eri silk (Ahimsa silk) stole with natural dyes.", price: 2499, categorySlug: "silk" },
  { title: "Gold Plated Jonbiri Necklace", description: "Traditional Assamese half-moon shaped pendant.", price: 1899, categorySlug: "jewellery" },
  { title: "Bamboo Lamp Shade", description: "Handwoven bamboo lamp shade for home decor.", price: 1299, categorySlug: "bamboo-cane" },
  { title: "Premium Assam CTC Tea", description: "Strong and robust Assam tea leaves, 500g.", price: 499, categorySlug: "spices" },
  { title: "Bell Metal Bota (Tray)", description: "Traditional serving tray made of authentic bell metal.", price: 3200, categorySlug: "handicrafts" },
  { title: "Cotton Gamusa Set", description: "Set of 3 pure cotton handwoven gamusas.", price: 699, categorySlug: "handicrafts" },
  { title: "Pat Silk Saree with Guna Work", description: "Elegant white Pat silk with intricate gold thread (guna) work.", price: 12000, categorySlug: "silk" },
  { title: "Water Hyacinth Storage Basket", description: "Eco-friendly storage basket handwoven from water hyacinth.", price: 850, categorySlug: "bamboo-cane" },
  { title: "Bhut Jolokia (Ghost Pepper) Pickle", description: "Spicy and fiery ghost pepper pickle from organic farms.", price: 250, categorySlug: "spices" },
  { title: "Silver Dholbiri Pendant", description: "Dhol shaped traditional silver pendant.", price: 2100, categorySlug: "jewellery" },
  { title: "Mix Silk Mekhela Chador", description: "Affordable and durable mix silk mekhela chador.", price: 3500, categorySlug: "mekhela-chador" },
]

async function seed() {
  try {
    await sequelize.authenticate()
    console.log("Database connected.")

    // Initialize ES index
    await initIndex()

    // Sync categories
    const categoriesMap = {}
    for (const catData of categoriesData) {
      const [cat] = await Category.findOrCreate({
        where: { slug: catData.slug },
        defaults: catData
      })
      categoriesMap[cat.slug] = cat.id
    }
    console.log("Categories seeded.")

    // Create a dummy seller
    let sellerUser = await User.findOne({ where: { email: "seller@seed.com" } })
    if (!sellerUser) {
      const hashedPassword = await bcrypt.hash("password123", 10)
      sellerUser = await User.create({
        name: "Seed Seller",
        email: "seller@seed.com",
        password: hashedPassword,
        role: "seller",
        phone: "9876543210"
      })
    }

    let seller = await Seller.findOne({ where: { userId: sellerUser.id } })
    if (!seller) {
      seller = await Seller.create({
        userId: sellerUser.id,
        shopName: "Seed Artisan Shop",
        businessType: "individual",
        clusterLocation: "Sualkuchi",
        status: "verified"
      })
    }
    console.log("Seller seeded.")

    // Create and index products
    for (const prodData of productsData) {
      const [product, created] = await Product.findOrCreate({
        where: { title: prodData.title },
        defaults: {
          sellerId: seller.id,
          categoryId: categoriesMap[prodData.categorySlug],
          description: prodData.description,
          price: prodData.price,
          stock: 10,
          status: "approved"
        }
      })
      
      if (created) {
        // Fetch with category for indexing
        const fullProduct = await Product.findByPk(product.id, { include: [Category] })
        await indexProduct(fullProduct)
        console.log(`Indexed product: ${prodData.title}`)
      }
    }
    console.log("Products seeded and indexed.")

    process.exit(0)
  } catch (err) {
    console.error("Seeding error:", err)
    process.exit(1)
  }
}

seed()
