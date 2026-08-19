"use client"
import * as React from "react"
import ProductGrid from "../../../../components/product/ProductGrid"
import Breadcrumb from "../../../../components/common/Breadcrumb"

const sampleProducts = [
  {
    id: 1,
    title: "Handwoven Pure Muga Silk Mekhela Chador",
    price: 18500,
    oldPrice: 22000,
    rating: 5.0,
    reviews: 42,
    category: "mekhela-chador",
    artisan: "Purnima Bora, Sualkuchi",
    image: "/images/mekhela_silk_hero.png",
    badge: "GI Certified",
    origin: "Sualkuchi",
    giTag: true,
  },
  {
    id: 2,
    title: "Authentic Eri Silk Traditional Mekhela",
    price: 8450,
    oldPrice: 10200,
    rating: 4.9,
    reviews: 38,
    category: "mekhela-chador",
    artisan: "Rina Kalita, Sualkuchi",
    image: "/images/eri_silk_mekhela.png",
    badge: "Bestseller",
    origin: "Sualkuchi",
    giTag: true,
  },
  {
    id: 3,
    title: "Handcrafted Brass Jonbiri Pendant & Necklace",
    price: 3200,
    oldPrice: 4100,
    rating: 4.8,
    reviews: 29,
    category: "jewellery",
    artisan: "Mira Devi, Nalbari",
    image: "/images/jonbiri_necklace.png",
    badge: "Traditional",
    origin: "Nalbari",
    giTag: false,
  },
  {
    id: 4,
    title: "Eco-Friendly Bamboo Table Lamp Shade",
    price: 1890,
    oldPrice: 2400,
    rating: 4.7,
    reviews: 19,
    category: "bamboo-cane",
    artisan: "Bimal Boro, Barpeta",
    image: "/images/bamboo_lamp.png",
    badge: "Eco-Craft",
    origin: "Barpeta",
    giTag: false,
  },
  {
    id: 5,
    title: "Traditional Handwoven Cotton Phulam Gamusa Set",
    price: 750,
    oldPrice: 990,
    rating: 5.0,
    reviews: 84,
    category: "handicrafts",
    artisan: "Majuli Weavers Collective",
    image: "/images/handwoven_gamosa.png",
    badge: "Heritage",
    origin: "Majuli",
    giTag: true,
  },
  {
    id: 6,
    title: "Royal Golden Muga Stole with Traditional Motifs",
    price: 4800,
    oldPrice: 5900,
    rating: 4.9,
    reviews: 23,
    category: "silk",
    artisan: "Jorhat Silk Cluster",
    image: "/images/muga_silk_scarf.png",
    badge: "New Arrival",
    origin: "Sualkuchi",
    giTag: true,
  },
  {
    id: 9,
    title: "Organic Assam Orthodox Whole Leaf Black Tea (250g)",
    price: 890,
    oldPrice: 1150,
    rating: 4.9,
    reviews: 58,
    category: "spices",
    artisan: "Dibrugarh Tea Estates, Upper Assam",
    image: "/images/assam_orthodox_tea.png",
    badge: "GI Certified",
    origin: "Karbi Anglong",
    giTag: true,
  },
  {
    id: 10,
    title: "Karbi Anglong Organic Lakadong Turmeric Powder (500g)",
    price: 380,
    oldPrice: 490,
    rating: 5.0,
    reviews: 74,
    category: "spices",
    artisan: "Karbi Organic Farmers Collective",
    image: "/images/karbi_turmeric.png",
    badge: "Organic Certified",
    origin: "Karbi Anglong",
    giTag: true,
  },
  {
    id: 11,
    title: "Artisanal Bhut Jolokia (Ghost Pepper) Chili Pickle (300g)",
    price: 299,
    oldPrice: 399,
    rating: 4.8,
    reviews: 92,
    category: "spices",
    artisan: "Golaghat Agro Artisans",
    image: "/images/bhut_jolokia_pickle.png",
    badge: "Bestseller",
    origin: "Nalbari",
    giTag: true,
  },
  {
    id: 12,
    title: "Kazi Nemu & Wild Cardamom Spiced Assam Chai (500g)",
    price: 540,
    oldPrice: 680,
    rating: 4.9,
    reviews: 35,
    category: "spices",
    artisan: "Tezpur Herbal Blends, Tezpur",
    image: "/images/assam_orthodox_tea.png",
    badge: "Heritage Blend",
    origin: "Majuli",
    giTag: false,
  },
]

export default function CategoryDetailPage({ params }) {
  const slug = params?.slug

  // Format slug to user-friendly title
  const categoryTitleMap = {
    spices: "Spices & Organic Tea",
    "mekhela-chador": "Mekhela Chador",
    silk: "Silk & Stoles",
    jewellery: "Traditional Assamese Jewellery",
    "bamboo-cane": "Bamboo & Cane Crafts",
    handicrafts: "Assamese Handicrafts",
  }

  const categoryTitle = categoryTitleMap[slug] || (slug
    ? slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    : "Category")

  const filtered = sampleProducts.filter(p => p.category === slug)

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb 
        items={[
          { label: "Category" },
          { label: categoryTitle }
        ]} 
      />

      <div className="mt-6">
        <h1 className="text-3xl font-extrabold font-heading text-slate-800 mb-2">{categoryTitle}</h1>
        <p className="text-sm text-slate-500 mb-8">Authentic designs handloomed and handcrafted across Assam</p>
        <ProductGrid products={filtered} />
      </div>
    </div>
  )
}
