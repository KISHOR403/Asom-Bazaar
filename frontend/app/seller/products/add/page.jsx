"use client"
import * as React from "react"
import { useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Upload, 
  Info, 
  ShoppingBag, 
  AlertCircle,
  Camera,
  Image as ImageIcon,
  CheckCircle,
  HelpCircle
} from "lucide-react"

export default function AddProductPage() {
  const router = useRouter()
  const [step, setStep] = React.useState(1) // 1 to 4
  const [successSubmitted, setSuccessSubmitted] = React.useState(false)

  // Step 1 Form Data
  const [basicInfo, setBasicInfo] = React.useState({
    name: "",
    category: "Silk & Sarees",
    subcategory: "Mekhela Chador",
    description: "",
    material: "",
    occasions: [],
    sizes: []
  })

  // Step 2 Form Data (Mock image slots)
  const [uploadedPhotos, setUploadedPhotos] = React.useState({
    main: null,
    side: null,
    detail: null,
    extra1: null
  })

  // Step 3 Form Data
  const [pricingInfo, setPricingInfo] = React.useState({
    price: "",
    compareAtPrice: "",
    stock: "",
    weight: "",
    processingTime: "Ready to ship (1-2 days)",
    shippingFrom: "Sualkuchi, Assam"
  })

  // Step 4 Checklist
  const [checklist, setChecklist] = React.useState({
    handmade: false,
    actualPhotos: false,
    qualityStandard: false
  })

  // Dynamic Subcategory lists
  const subcategoriesMap = {
    "Silk & Sarees": ["Mekhela Chador", "Sari", "Stole", "Shawl"],
    "Jewellery": ["Necklaces", "Earrings", "Bangles", "Assamese Traditional Set"],
    "Bamboo & Cane": ["Wall Decor", "Baskets", "Furniture", "Handicrafts"],
    "Tea & Food": ["Assam Orthodox Tea", "Green Tea", "Traditional Snacks", "Spices"]
  }

  // Handle input changes
  const handleBasicChange = (e) => {
    const { name, value } = e.target
    setBasicInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleOccasionChange = (occ) => {
    setBasicInfo(prev => {
      const exists = prev.occasions.includes(occ)
      return {
        ...prev,
        occasions: exists 
          ? prev.occasions.filter(o => o !== occ)
          : [...prev.occasions, occ]
      }
    })
  }

  const handleSizeChange = (size) => {
    setBasicInfo(prev => {
      const exists = prev.sizes.includes(size)
      return {
        ...prev,
        sizes: exists 
          ? prev.sizes.filter(s => s !== size)
          : [...prev.sizes, size]
      }
    })
  }

  // Auto upload mock image when clicking a slot
  const handlePhotoClick = (slot, imgName, fallbackEmoji) => {
    setUploadedPhotos(prev => ({
      ...prev,
      [slot]: {
        name: imgName,
        emoji: fallbackEmoji,
        url: true
      }
    }))
  }

  // Dynamic Profit calculator
  const commissionRate = 0.12
  const priceVal = parseFloat(pricingInfo.price) || 0
  const calculatedCommission = Math.round(priceVal * commissionRate)
  const shippingCost = priceVal > 0 ? 80 : 0
  const sellerEarnings = Math.max(0, priceVal - calculatedCommission - shippingCost)

  const handlePublish = (e) => {
    e.preventDefault()
    setSuccessSubmitted(true)
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">Upload New Creation</h1>
        <p className="text-sm text-slate-500 mt-1">Submit your handcrafted masterpiece for approval on Asom Bazaar</p>
      </div>

      {/* Wizard Step Indicator */}
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 select-none">
          {[
            { stepNum: 1, label: "Basic Info" },
            { stepNum: 2, label: "Photos" },
            { stepNum: 3, label: "Pricing" },
            { stepNum: 4, label: "Publish" }
          ].map((s, idx) => (
            <React.Fragment key={s.stepNum}>
              <div className="flex flex-col items-center space-y-1">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                  step === s.stepNum 
                    ? "bg-[#1E4D34] text-white ring-4 ring-emerald-100 font-extrabold"
                    : step > s.stepNum
                      ? "bg-emerald-600 text-white font-extrabold"
                      : "bg-slate-100 text-slate-400"
                }`}>
                  {step > s.stepNum ? <Check className="h-4 w-4" /> : s.stepNum}
                </span>
                <span className={`mt-1 font-semibold ${step === s.stepNum ? "text-[#1E4D34]" : "text-slate-500"}`}>
                  {s.label}
                </span>
              </div>
              {idx < 3 && (
                <div className="flex-1 h-1 mx-2 bg-slate-100 rounded-full relative overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 bottom-0 bg-[#C9A84C] transition-all duration-500" 
                    style={{ width: step > s.stepNum ? "100%" : step === s.stepNum ? "50%" : "0%" }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* STEP 1: BASIC INFO */}
      {step === 1 && (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <h3 className="font-extrabold font-heading text-lg text-slate-800 border-b border-slate-50 pb-3">Step 1 — Basic Info</h3>
          
          <div className="space-y-4">
            {/* Product Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Product Name</label>
              <input
                type="text"
                name="name"
                value={basicInfo.name}
                onChange={handleBasicChange}
                placeholder="Eri Silk Mekhela Chador — Red & Gold"
                className="w-full h-11 border border-slate-200 rounded-xl px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700"
                required
              />
            </div>

            {/* Category & Subcategory */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category</label>
                <select
                  name="category"
                  value={basicInfo.category}
                  onChange={(e) => {
                    const cat = e.target.value
                    setBasicInfo(prev => ({
                      ...prev,
                      category: cat,
                      subcategory: subcategoriesMap[cat][0]
                    }))
                  }}
                  className="w-full h-11 border border-slate-200 rounded-xl px-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700 bg-transparent"
                >
                  <option>Silk & Sarees</option>
                  <option>Jewellery</option>
                  <option>Bamboo & Cane</option>
                  <option>Tea & Food</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subcategory</label>
                <select
                  name="subcategory"
                  value={basicInfo.subcategory}
                  onChange={handleBasicChange}
                  className="w-full h-11 border border-slate-200 rounded-xl px-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700 bg-transparent"
                >
                  {subcategoriesMap[basicInfo.category].map((sub) => (
                    <option key={sub}>{sub}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Description */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Product Description</label>
                <span className="text-[10px] text-slate-400 font-bold">{basicInfo.description.length} / 1000</span>
              </div>
              <textarea
                name="description"
                rows="4"
                maxLength={1000}
                value={basicInfo.description}
                onChange={handleBasicChange}
                placeholder="Tell buyers about this product. Fabric? Occasion? How to care?"
                className="w-full border border-slate-200 rounded-xl p-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700 resize-none"
              />
            </div>

            {/* Material */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Material</label>
              <input
                type="text"
                name="material"
                value={basicInfo.material}
                onChange={handleBasicChange}
                placeholder="Pure Eri Silk / Bamboo Cane"
                className="w-full h-11 border border-slate-200 rounded-xl px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700"
              />
            </div>

            {/* Occasion */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Occasion</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-slate-600">
                {["Daily Wear", "Wedding", "Bihu Festival", "Gifting", "Office", "Party"].map((occ) => (
                  <label key={occ} className="flex items-center space-x-2 p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-xl cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={basicInfo.occasions.includes(occ)}
                      onChange={() => handleOccasionChange(occ)}
                      className="accent-[#1E4D34] h-4 w-4"
                    />
                    <span>{occ}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Sizes Available (if applicable)</label>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                {["S", "M", "L", "XL", "Free Size"].map((size) => (
                  <label key={size} className="flex items-center space-x-2 p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-xl cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={basicInfo.sizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                      className="accent-[#1E4D34] h-4 w-4"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end pt-4 border-t border-slate-50">
            <button
              onClick={() => {
                if (!basicInfo.name) {
                  alert("Please fill in the Product Name.")
                  return
                }
                setStep(2)
              }}
              className="flex items-center space-x-2 bg-[#1E4D34] hover:bg-[#122A1E] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-950/10 btn-3d"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: PHOTOS */}
      {step === 2 && (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <div>
            <h3 className="font-extrabold font-heading text-lg text-slate-800">Step 2 — Photos</h3>
            <p className="text-xs text-slate-400 mt-1">Upload 3 to 8 photos from different angles to showcase craftsmanship</p>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Main Photo */}
            <div 
              onClick={() => handlePhotoClick("main", "Red Mekhela Main.jpg", "👗")}
              className={`aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all ${
                uploadedPhotos.main 
                  ? "border-emerald-500 bg-emerald-50/20" 
                  : "border-slate-200 hover:border-[#C9A84C] bg-slate-50/50 hover:bg-slate-50"
              }`}
            >
              {uploadedPhotos.main ? (
                <div className="space-y-1">
                  <span className="text-4xl block">👗</span>
                  <p className="text-[10px] font-bold text-emerald-800 truncate max-w-[120px]">{uploadedPhotos.main.name}</p>
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Main Photo</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <Camera className="h-6 w-6 text-slate-400 mx-auto" />
                  <p className="text-xs font-bold text-slate-700">Main Photo</p>
                  <span className="text-[9px] text-slate-400 leading-normal block">Click to upload</span>
                </div>
              )}
            </div>

            {/* Side View */}
            <div 
              onClick={() => handlePhotoClick("side", "Red Mekhela Side.jpg", "🧣")}
              className={`aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all ${
                uploadedPhotos.side 
                  ? "border-emerald-500 bg-emerald-50/20" 
                  : "border-slate-200 hover:border-[#C9A84C] bg-slate-50/50 hover:bg-slate-50"
              }`}
            >
              {uploadedPhotos.side ? (
                <div className="space-y-1">
                  <span className="text-4xl block">🧣</span>
                  <p className="text-[10px] font-bold text-emerald-800 truncate max-w-[120px]">{uploadedPhotos.side.name}</p>
                  <span className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">Side View</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <Camera className="h-6 w-6 text-slate-400 mx-auto" />
                  <p className="text-xs font-bold text-slate-700">Side View</p>
                  <span className="text-[9px] text-slate-400 leading-normal block">Click to upload</span>
                </div>
              )}
            </div>

            {/* Detail Shot */}
            <div 
              onClick={() => handlePhotoClick("detail", "Red Mekhela Border CloseUp.jpg", "🧶")}
              className={`aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all ${
                uploadedPhotos.detail 
                  ? "border-emerald-500 bg-emerald-50/20" 
                  : "border-slate-200 hover:border-[#C9A84C] bg-slate-50/50 hover:bg-slate-50"
              }`}
            >
              {uploadedPhotos.detail ? (
                <div className="space-y-1">
                  <span className="text-4xl block">🧶</span>
                  <p className="text-[10px] font-bold text-emerald-800 truncate max-w-[120px]">{uploadedPhotos.detail.name}</p>
                  <span className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">Detail Shot</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <Camera className="h-6 w-6 text-slate-400 mx-auto" />
                  <p className="text-xs font-bold text-slate-700">Detail Shot</p>
                  <span className="text-[9px] text-slate-400 leading-normal block">Texture / Borders</span>
                </div>
              )}
            </div>

            {/* Add More */}
            <div 
              onClick={() => handlePhotoClick("extra1", "Packaging Box.jpg", "📦")}
              className={`aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all ${
                uploadedPhotos.extra1 
                  ? "border-emerald-500 bg-emerald-50/20" 
                  : "border-slate-200 hover:border-[#C9A84C] bg-slate-50/50 hover:bg-slate-50"
              }`}
            >
              {uploadedPhotos.extra1 ? (
                <div className="space-y-1">
                  <span className="text-4xl block">📦</span>
                  <p className="text-[10px] font-bold text-emerald-800 truncate max-w-[120px]">{uploadedPhotos.extra1.name}</p>
                  <span className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">Optional Extra</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <Upload className="h-6 w-6 text-slate-400 mx-auto" />
                  <p className="text-xs font-bold text-slate-700">+ Add More</p>
                  <span className="text-[9px] text-slate-400 leading-normal block">Click to add</span>
                </div>
              )}
            </div>
          </div>

          {/* Photo Guidelines */}
          <div className="bg-amber-50/40 border border-amber-100 rounded-2xl p-5 space-y-2 text-slate-600">
            <h4 className="text-xs font-bold text-amber-800 flex items-center uppercase tracking-wider">
              <Info className="h-4 w-4 mr-2" />
              💡 Tips for better photos:
            </h4>
            <ul className="text-xs space-y-1.5 font-medium pl-6 list-disc">
              <li>Use natural daylight instead of dark flashlights</li>
              <li>Use plain white, light background, or natural environment backgrounds</li>
              <li>Show the full product clearly in the main photo</li>
              <li>Include close-up photos of texture, embroidery, and weaving detail</li>
            </ul>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-50">
            <button
              onClick={() => setStep(1)}
              className="flex items-center space-x-1 hover:bg-slate-100 text-slate-650 font-bold text-xs px-4 py-2.5 rounded-xl border border-slate-200 transition-all"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back</span>
            </button>

            <button
              onClick={() => {
                if (!uploadedPhotos.main || !uploadedPhotos.side || !uploadedPhotos.detail) {
                  alert("Minimum 3 photos required: Main Photo, Side View, and Detail Shot. Please click the boxes to auto-simulate uploads.")
                  return
                }
                setStep(3)
              }}
              className="flex items-center space-x-2 bg-[#1E4D34] hover:bg-[#122A1E] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-950/10 btn-3d"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: PRICING */}
      {step === 3 && (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <h3 className="font-extrabold font-heading text-lg text-slate-800 border-b border-slate-50 pb-3">Step 3 — Pricing</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input pricing */}
            <div className="space-y-4">
              {/* Sale Price */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sale Price (₹)</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-slate-400 font-bold">₹</span>
                  <input
                    type="number"
                    value={pricingInfo.price}
                    onChange={(e) => setPricingInfo(prev => ({ ...prev, price: e.target.value }))}
                    placeholder="2499"
                    className="w-full h-11 border border-slate-200 rounded-xl pl-8 pr-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700"
                    required
                  />
                </div>
              </div>

              {/* Compare Price */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Compare At Price (MRP)</label>
                  <span className="text-[10px] text-slate-400 font-semibold">Crossed-out price shown to buyers</span>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-slate-400 font-bold">₹</span>
                  <input
                    type="number"
                    value={pricingInfo.compareAtPrice}
                    onChange={(e) => setPricingInfo(prev => ({ ...prev, compareAtPrice: e.target.value }))}
                    placeholder="3200"
                    className="w-full h-11 border border-slate-200 rounded-xl pl-8 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-750"
                  />
                </div>
              </div>

              {/* Stock Quantity */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stock Quantity</label>
                <input
                  type="number"
                  value={pricingInfo.stock}
                  onChange={(e) => setPricingInfo(prev => ({ ...prev, stock: e.target.value }))}
                  placeholder="5"
                  className="w-full h-11 border border-slate-200 rounded-xl px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700"
                  required
                />
              </div>

              {/* Weight */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Weight (grams)</label>
                <input
                  type="number"
                  value={pricingInfo.weight}
                  onChange={(e) => setPricingInfo(prev => ({ ...prev, weight: e.target.value }))}
                  placeholder="600"
                  className="w-full h-11 border border-slate-200 rounded-xl px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700"
                />
              </div>

              {/* Processing Time */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Processing Time</label>
                <select
                  value={pricingInfo.processingTime}
                  onChange={(e) => setPricingInfo(prev => ({ ...prev, processingTime: e.target.value }))}
                  className="w-full h-11 border border-slate-200 rounded-xl px-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-750 bg-transparent"
                >
                  <option>Ready to ship (1-2 days)</option>
                  <option>Made to order (7-10 days)</option>
                  <option>Made to order (15-20 days)</option>
                </select>
              </div>

              {/* Shipping From */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Shipping From (Auto-filled)</label>
                <input
                  type="text"
                  value={pricingInfo.shippingFrom}
                  disabled
                  className="w-full h-11 border border-slate-200 bg-slate-50 text-slate-500 rounded-xl px-4 text-sm font-semibold cursor-not-allowed"
                />
              </div>
            </div>

            {/* Earnings Preview */}
            <div className="bg-[#0F2318] text-white p-6 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden self-start w-full">
              <span className="absolute top-0 right-0 w-24 h-24 bg-[#C9A84C]/20 rounded-full blur-xl"></span>
              
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest border-b border-emerald-900 pb-2 flex items-center">
                  <span className="mr-1.5">📊</span> Your Earnings Preview
                </h4>

                <div className="space-y-3 text-xs text-slate-300 font-medium">
                  <div className="flex justify-between">
                    <span>Sale price:</span>
                    <span className="text-white font-bold">₹{priceVal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commission (12%):</span>
                    <span className="text-red-400 font-semibold">-₹{calculatedCommission.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping cost:</span>
                    <span className="text-red-400 font-semibold">-₹{shippingCost}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-900 flex justify-between items-center">
                  <span className="text-xs font-bold text-[#C9A84C]">You earn per sale:</span>
                  <span className="text-xl font-extrabold text-emerald-400">₹{sellerEarnings.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 font-medium mt-6 leading-normal">
                * Shipping cost depends on weight and buyer location. Platform rates are standardized to maintain trust.
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-50">
            <button
              onClick={() => setStep(2)}
              className="flex items-center space-x-1 hover:bg-slate-100 text-slate-650 font-bold text-xs px-4 py-2.5 rounded-xl border border-slate-200 transition-all"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back</span>
            </button>

            <button
              onClick={() => {
                if (priceVal <= 0 || !pricingInfo.stock) {
                  alert("Please fill in price and stock quantities.")
                  return
                }
                setStep(4)
              }}
              className="flex items-center space-x-2 bg-[#1E4D34] hover:bg-[#122A1E] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-950/10 btn-3d"
            >
              <span>Preview & Publish</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: PREVIEW & PUBLISH */}
      {step === 4 && (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <div>
            <h3 className="font-extrabold font-heading text-lg text-slate-800">Step 4 — Preview & Publish</h3>
            <p className="text-xs text-slate-400 mt-1">Review how your craft will look to buyers and confirm compliance.</p>
          </div>

          {/* Product Cards Live Preview */}
          <div className="bg-slate-50/60 p-5 rounded-2xl border border-dashed border-slate-200 space-y-4">
            <span className="text-[10px] font-extrabold text-[#C9A84C] tracking-widest uppercase bg-[#C9A84C]/10 px-2 py-0.5 rounded-full">Buyer Page Preview</span>
            
            <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden card-3d">
              <div className="aspect-square bg-slate-100 flex items-center justify-center text-6xl relative">
                {uploadedPhotos.main ? uploadedPhotos.main.emoji : "👗"}
                <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-[9px] px-2 py-0.5 rounded-full font-bold text-emerald-800 border border-emerald-100">
                  Handmade
                </span>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  <span>{basicInfo.subcategory}</span>
                  <span className="text-[#C9A84C] font-bold">4.8 ★</span>
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{basicInfo.name || "Eri Silk Mekhela Chador"}</h4>
                <div className="flex items-center space-x-2 pt-1">
                  <span className="text-base font-extrabold text-slate-900">₹{priceVal.toLocaleString("en-IN")}</span>
                  {pricingInfo.compareAtPrice && (
                    <span className="text-xs text-slate-405 line-through">₹{parseFloat(pricingInfo.compareAtPrice).toLocaleString("en-IN")}</span>
                  )}
                  <span className="text-[10px] text-emerald-600 font-semibold">
                    ({Math.round(((pricingInfo.compareAtPrice - priceVal) / pricingInfo.compareAtPrice) * 100) || 0}% Off)
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 leading-normal pt-1.5 border-t border-slate-50 line-clamp-2">
                  {basicInfo.description || "Beautifully woven piece straight from Sualkuchi hub."}
                </p>
                <div className="pt-2 flex justify-between text-[10px] text-slate-500 font-semibold">
                  <span>Material: {basicInfo.material || "Pure Silk"}</span>
                  <span className="text-emerald-700">Stock: {pricingInfo.stock} left</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Checkboxes */}
          <form onSubmit={handlePublish} className="space-y-3.5 pt-2">
            <label className="flex items-start space-x-3 p-3.5 bg-slate-50 hover:bg-slate-100/50 rounded-xl cursor-pointer select-none border border-slate-100 transition-colors">
              <input
                type="checkbox"
                required
                checked={checklist.handmade}
                onChange={() => setChecklist(prev => ({ ...prev, handmade: !prev.handmade }))}
                className="accent-[#1E4D34] h-4.5 w-4.5 mt-0.5 shrink-0"
              />
              <span className="text-xs font-semibold text-slate-600 leading-normal">
                I confirm this product is handmade by local weavers/artisans of Assam.
              </span>
            </label>

            <label className="flex items-start space-x-3 p-3.5 bg-slate-50 hover:bg-slate-100/50 rounded-xl cursor-pointer select-none border border-slate-100 transition-colors">
              <input
                type="checkbox"
                required
                checked={checklist.actualPhotos}
                onChange={() => setChecklist(prev => ({ ...prev, actualPhotos: !prev.actualPhotos }))}
                className="accent-[#1E4D34] h-4.5 w-4.5 mt-0.5 shrink-0"
              />
              <span className="text-xs font-semibold text-slate-600 leading-normal">
                I confirm photos are of the actual product and represent its authentic texture/design accurately.
              </span>
            </label>

            <label className="flex items-start space-x-3 p-3.5 bg-slate-50 hover:bg-slate-100/50 rounded-xl cursor-pointer select-none border border-slate-100 transition-colors">
              <input
                type="checkbox"
                required
                checked={checklist.qualityStandard}
                onChange={() => setChecklist(prev => ({ ...prev, qualityStandard: !prev.qualityStandard }))}
                className="accent-[#1E4D34] h-4.5 w-4.5 mt-0.5 shrink-0"
              />
              <span className="text-xs font-semibold text-slate-600 leading-normal">
                I agree to Asom Bazaar quality standards and understand that substandard products will be returned.
              </span>
            </label>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-5 border-t border-slate-50">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex items-center space-x-1 hover:bg-slate-100 text-slate-650 font-bold text-xs px-4 py-2.5 rounded-xl border border-slate-200 transition-all"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="flex items-center space-x-2 bg-[#1E4D34] hover:bg-[#122A1E] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-950/20 btn-3d"
              >
                <span>Submit for Approval</span>
                <CheckCircle className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Success Submitted Modal */}
      {successSubmitted && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl w-full max-w-md border border-slate-100 shadow-2xl text-center space-y-5 transform scale-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner border border-emerald-100">
              🎉
            </div>
            <div>
              <h3 className="font-extrabold font-heading text-xl text-slate-800">Creation Submitted!</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Your product <span className="font-bold text-slate-700">&ldquo;{basicInfo.name}&rdquo;</span> has been submitted to the Asom Bazaar admin panel.
              </p>
              <p className="text-xs text-[#C9A84C] font-semibold mt-1">
                Estimated review time: 24 Hours.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 text-xs font-semibold text-slate-600 text-left border border-slate-100 space-y-1">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Fulfillment Details</span>
              <p>Category: <span className="text-slate-800 font-bold">{basicInfo.subcategory}</span></p>
              <p>Quantity listed: <span className="text-slate-800 font-bold">{pricingInfo.stock} units</span></p>
              <p>Calculated payout: <span className="text-[#1E4D34] font-extrabold">₹{sellerEarnings} per sale</span></p>
            </div>

            <button
              onClick={() => {
                setSuccessSubmitted(false)
                router.push("/seller/products")
              }}
              className="w-full py-3.5 bg-[#1E4D34] hover:bg-[#122A1E] text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-950/20 transition-all btn-3d"
            >
              Back to My Creations
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

