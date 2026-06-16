"use client"
import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Check, CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck, Landmark, Store, UserCheck, Eye, EyeOff, Upload, HelpCircle, Loader2 } from "lucide-react"
import useAuth from "../../../hooks/useAuth"
import { useAuthStore } from "../../../store/authStore"
import { api } from "../../../lib/api"

const ASSAM_DISTRICTS = [
  "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo",
  "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao",
  "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup",
  "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar",
  "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar",
  "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri",
  "West Karbi Anglong", "Outside Assam"
]

const CRAFT_CATEGORIES = [
  { id: "silk", label: "Silk & Sarees", emoji: "🥻" },
  { id: "jewellery", label: "Tribal Jewellery", emoji: "💍" },
  { id: "bamboo", label: "Bamboo & Crafts", emoji: "🎍" },
  { id: "gamosa", label: "Gamosa & Fabrics", emoji: "🪡" },
  { id: "spices", label: "Spices & Tea", emoji: "🌿" },
  { id: "other", label: "Other Handcraft", emoji: "✨" },
]

export default function BecomeASellerPage() {
  const router = useRouter()
  const { user, isAuthenticated, register } = useAuth()
  const setUser = useAuthStore((state) => state.setUser)

  // Landing view or form view
  const [showForm, setShowForm] = React.useState(false)
  
  const [currentStep, setCurrentStep] = React.useState(1)
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState("")
  
  // Custom states for interactive elements
  const [uploadedFileName, setUploadedFileName] = React.useState("")
  const [ifscState, setIfscState] = React.useState({ loading: false, verified: false, details: "" })
  const [appId, setAppId] = React.useState("")
  const [showStatusModal, setShowStatusModal] = React.useState(false)

  // Form Fields
  const [formData, setFormData] = React.useState({
    // Step 1
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",

    // Step 2
    shopName: "",
    district: "",
    villageOrTown: "",
    experience: "1-3 years",
    crafts: [],
    description: "",

    // Step 3
    aadhaarPart1: "",
    aadhaarPart2: "",
    aadhaarPart3: "",
    bankAccount: "",
    confirmBankAccount: "",
    ifscCode: "",
    accountHolderName: "",
    gstNumber: "",
    hearAboutUs: "WhatsApp",
    agreeTerms: false,
    agreeAccuracy: false,
    agreeCommission: false
  })

  // Prefill details if user is logged in
  React.useEffect(() => {
    if (isAuthenticated && user) {
      setFormData(prev => ({
        ...prev,
        fullName: user.name || "",
        email: user.email || "",
      }))
      // Automatically skip Step 1 if logged in
      if (currentStep === 1) {
        setCurrentStep(2)
      }
    }
  }, [isAuthenticated, user])

  // Canvas confetti effect
  React.useEffect(() => {
    if (isSubmitted) {
      const canvas = document.getElementById("confetti-canvas")
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      let animationFrameId
      
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight

      const colors = ["#C9A84C", "#1B4332", "#40916C", "#D8F3DC", "#A3B18A"]
      const particles = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleIncremental: Math.random() * 0.07 + 0.02,
        tiltAngle: 0
      }))

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((p, idx) => {
          p.tiltAngle += p.tiltAngleIncremental
          p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2
          p.x += Math.sin(p.tiltAngle)
          p.tilt = Math.sin(p.tiltAngle - idx/3) * 15

          ctx.beginPath()
          ctx.lineWidth = p.r
          ctx.strokeStyle = p.color
          ctx.moveTo(p.x + p.tilt + p.r / 2, p.y)
          ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2)
          ctx.stroke()

          if (p.y > canvas.height) {
            particles[idx] = {
              x: Math.random() * canvas.width,
              y: -20,
              r: p.r,
              d: p.d,
              color: p.color,
              tilt: p.tilt,
              tiltAngleIncremental: p.tiltAngleIncremental,
              tiltAngle: p.tiltAngle
            }
          }
        })
        animationFrameId = requestAnimationFrame(draw)
      }
      draw()

      // Generate random App ID
      const randomDigits = Math.floor(10000 + Math.random() * 90000)
      setAppId(`#AB-2026-${randomDigits}`)

      return () => cancelAnimationFrame(animationFrameId)
    }
  }, [isSubmitted])

  // Password validation rules
  const passRules = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /[0-9]/.test(formData.password)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleCraftToggle = (craftId) => {
    setFormData(prev => ({
      ...prev,
      crafts: prev.crafts.includes(craftId)
        ? prev.crafts.filter(c => c !== craftId)
        : [...prev.crafts, craftId]
    }))
  }

  // Handle auto-tabbing for Aadhaar
  const handleAadhaarChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "")
    const fieldName = `aadhaarPart${index}`
    setFormData(prev => ({ ...prev, [fieldName]: val }))

    if (val.length === 4 && index < 3) {
      const nextField = document.getElementById(`aadhaar-p${index + 1}`)
      if (nextField) nextField.focus()
    }
  }

  // Verify IFSC mock
  const handleVerifyIFSC = () => {
    if (!formData.ifscCode.trim()) return
    setIfscState({ loading: true, verified: false, details: "" })
    setTimeout(() => {
      setIfscState({
        loading: false,
        verified: true,
        details: "State Bank of India, Sualkuchi Branch"
      })
    }, 1500)
  }

  // Validate Steps
  const validateStep = (step) => {
    setErrorMsg("")
    if (step === 1 && !isAuthenticated) {
      if (!formData.fullName.trim()) return "Full name is required"
      if (!formData.phone.trim() || formData.phone.length < 10) return "Valid phone number is required"
      if (!formData.email.trim() || !formData.email.includes("@")) return "Valid email address is required"
      if (!passRules.length || !passRules.uppercase || !passRules.number) return "Please satisfy all password rules"
      if (formData.password !== formData.confirmPassword) return "Passwords do not match"
    } else if (step === 2) {
      if (!formData.shopName.trim()) return "Shop name is required"
      if (!formData.district) return "Please select a district"
      if (!formData.villageOrTown.trim()) return "Village or Town is required"
      if (formData.crafts.length === 0) return "Please select what you make"
      if (!formData.description.trim() || formData.description.length > 300) return "Please write a valid description (max 300 characters)"
    } else if (step === 3) {
      const fullAadhaar = `${formData.aadhaarPart1}${formData.aadhaarPart2}${formData.aadhaarPart3}`
      if (fullAadhaar.length < 12) return "Aadhaar number must be 12 digits"
      if (!formData.bankAccount.trim()) return "Bank account is required"
      if (formData.bankAccount !== formData.confirmBankAccount) return "Bank accounts do not match"
      if (!formData.ifscCode.trim()) return "IFSC Code is required"
      if (!formData.accountHolderName.trim()) return "Account holder name is required"
      if (!formData.agreeTerms || !formData.agreeAccuracy || !formData.agreeCommission) return "You must agree to all seller terms"
    }
    return null
  }

  const handleNext = () => {
    const error = validateStep(currentStep)
    if (error) {
      setErrorMsg(error)
      return
    }
    setCurrentStep(prev => prev + 1)
  }

  const handleBack = () => {
    setErrorMsg("")
    if (isAuthenticated && currentStep === 2) {
      // Cannot go back past first step for logged-in users
      return
    }
    setCurrentStep(prev => prev - 1)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFileName(e.dataTransfer.files[0].name)
    }
  }

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const error = validateStep(3)
    if (error) {
      setErrorMsg(error)
      return
    }

    setIsLoading(true)
    setErrorMsg("")

    try {
      // Step 1: If not logged in, register account
      if (!isAuthenticated) {
        const regRes = await register({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          role: "seller"
        })

        if (!regRes.success) {
          setErrorMsg(regRes.message || "Failed to create user account.")
          setIsLoading(false)
          return
        }
      }

      // Step 2: Create seller profile
      const fullAadhaar = `${formData.aadhaarPart1}${formData.aadhaarPart2}${formData.aadhaarPart3}`
      const sellerData = {
        shopName: formData.shopName,
        district: formData.district,
        villageOrTown: formData.villageOrTown,
        experience: formData.experience,
        crafts: formData.crafts,
        bio: formData.description,
        phone: formData.phone || (user && user.phone),
        aadhaarNumber: fullAadhaar,
        bankAccount: formData.bankAccount,
        ifscCode: formData.ifscCode
      }

      const response = await api.post("/sellers/register", sellerData)
      
      // Update local state role to seller
      if (response.data && response.data.user) {
        setUser(response.data.user)
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
      setErrorMsg(err.response?.data?.message || "Something went wrong during submission.")
    } finally {
      setIsLoading(false)
    }
  }

  // Render pre-form landing page
  if (!showForm) {
    return (
      <div className="min-h-screen bg-ivory pt-24 pb-16 flex flex-col items-center px-4 relative overflow-hidden">
        {/* Style block for animations */}
        <style jsx global>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-15px) scale(1.05); }
          }
          @keyframes float-delay {
            0%, 100% { transform: translateY(0px) scale(1.05); }
            50% { transform: translateY(15px) scale(1); }
          }
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          .animate-float-delay {
            animation: float-delay 8s ease-in-out infinite;
          }
          .btn-press-active:active {
            transform: scale(0.96);
          }
        `}</style>
        
        {/* Decorative Floating Blobs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-muga/10 blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-forest-200/10 blur-3xl animate-float-delay pointer-events-none" />

        <div className="max-w-4xl text-center z-10 mt-12 md:mt-20">
          <span className="text-forest font-heading font-semibold tracking-wider text-xs md:text-sm uppercase bg-forest-50 px-4 py-2 rounded-full border border-forest-100/30">
            🪷 Seller Portal
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-forest mt-6 leading-tight max-w-3xl mx-auto">
            Turn Your Craft <br className="hidden sm:inline" /> Into Sustainable Income
          </h1>
          <p className="text-forest-600 max-w-xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
            Sell your handmade sarees, traditional tribal jewellery, and authentic bamboo crafts directly to buyers across India.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="mt-8 inline-flex items-center gap-2 bg-muga text-white px-8 h-14 rounded-full font-heading font-semibold hover:bg-muga/95 transition-all shadow-lg shadow-muga-900/10 btn-press-active text-base"
          >
            Start Selling Today <ChevronRight className="h-5 w-5" />
          </button>

          {/* 3 Step Visual process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto text-left">
            <div className="bg-white/60 backdrop-blur-md border border-forest-100/10 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest font-bold text-xl flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-heading font-semibold text-lg text-forest mb-2">Apply Online</h3>
              <p className="text-forest-600 text-sm leading-relaxed">
                Fill in details about your craft, location, and bank account in 5 minutes.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-forest-100/10 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest font-bold text-xl flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-heading font-semibold text-lg text-forest mb-2">Get Approved</h3>
              <p className="text-forest-600 text-sm leading-relaxed">
                We review applications and verify details within 48 hours.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-forest-100/10 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest font-bold text-xl flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-heading font-semibold text-lg text-forest mb-2">Start Earning</h3>
              <p className="text-forest-600 text-sm leading-relaxed">
                List products directly and receive secure digital payouts within 7 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Render Submit Success Page
  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-ivory flex items-center justify-center px-4 relative overflow-hidden">
        {/* Style tag for confetti canvas wrapper */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <canvas id="confetti-canvas" className="w-full h-full" />
        </div>
        
        <div className="w-full max-w-xl bg-white border border-forest-100/20 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-forest-900/5 z-10 animate-fade-up relative">
          <div className="text-5xl mb-6">🎉</div>
          <h2 className="font-heading font-bold text-3xl text-forest mb-1">Application Submitted!</h2>
          <p className="text-forest-500 font-medium text-sm mb-6">Thank you, {formData.fullName}!</p>
          
          <p className="text-forest-600 mb-8 text-sm">
            We have received your application. Here is what you can expect next:
          </p>

          {/* Timeline */}
          <div className="text-left space-y-5 max-w-md mx-auto mb-8 border-l-2 border-forest-100 pl-5 ml-4 relative">
            <div className="relative">
              <div className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-forest border-2 border-white" />
              <div className="text-xs font-bold uppercase tracking-wider text-forest-400">Today</div>
              <div className="text-sm font-semibold text-forest mt-0.5">WhatsApp Confirmation</div>
              <div className="text-xs text-forest-500">Sent to {formData.phone}</div>
            </div>

            <div className="relative">
              <div className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-muga border-2 border-white" />
              <div className="text-xs font-bold uppercase tracking-wider text-muga">Within 48 Hours</div>
              <div className="text-sm font-semibold text-forest mt-0.5">Application Review</div>
              <div className="text-xs text-forest-500">Our team evaluates details & category alignments</div>
            </div>

            <div className="relative">
              <div className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-forest-300 border-2 border-white" />
              <div className="text-xs font-bold uppercase tracking-wider text-forest-400">If Approved</div>
              <div className="text-sm font-semibold text-forest mt-0.5">Onboarding Call</div>
              <div className="text-xs text-forest-500">We call to list your first 3 items</div>
            </div>

            <div className="relative">
              <div className="absolute -left-[27px] top-0 w-3 h-3 rounded-full bg-forest-100 border-2 border-white" />
              <div className="text-xs font-bold uppercase tracking-wider text-forest-400">Go Live</div>
              <div className="text-sm font-semibold text-forest mt-0.5">Shop Officially Launched</div>
              <div className="text-xs text-forest-500">Buyers across India can browse your studio</div>
            </div>
          </div>

          <div className="bg-forest-50 border border-forest-100/30 rounded-2xl p-4 mb-6">
            <span className="text-xs font-semibold text-forest-500 block uppercase tracking-wider">Application Reference ID</span>
            <span className="text-lg font-bold text-forest mt-1 block">{appId}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button
              onClick={() => setShowStatusModal(true)}
              className="bg-forest text-white px-6 h-12 rounded-full text-sm font-semibold hover:bg-forest-600 transition-colors shadow-sm"
            >
              Check Application Status
            </button>
            <Link
              href="/"
              className="border border-forest-200 text-forest px-6 h-12 rounded-full text-sm font-semibold hover:bg-forest-50 transition-colors flex items-center justify-center"
            >
              Return to Homepage
            </Link>
          </div>

          <p className="text-xs text-forest-400">
            Questions? WhatsApp us: <span className="font-semibold text-forest-600">+91 98765 00000</span>
          </p>
        </div>

        {/* Mock status modal */}
        {showStatusModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest-900/60 backdrop-blur-sm px-4">
            <div className="bg-white max-w-md w-full rounded-3xl p-6 shadow-xl relative border border-forest-50 animate-fade-up">
              <h3 className="font-heading font-bold text-xl text-forest mb-4">Application Status</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-forest-50 p-3.5 rounded-2xl border border-forest-100/20">
                  <span className="text-xs font-semibold text-forest-500">Reference ID:</span>
                  <span className="text-sm font-bold text-forest">{appId}</span>
                </div>
                <div className="flex justify-between items-center bg-amber-50 p-3.5 rounded-2xl border border-amber-100/20">
                  <span className="text-xs font-semibold text-amber-600">Current Status:</span>
                  <span className="text-sm font-bold text-amber-700 bg-amber-100/50 px-3 py-0.5 rounded-full">Under Review</span>
                </div>
                <div className="flex justify-between items-center bg-forest-50 p-3.5 rounded-2xl border border-forest-100/20">
                  <span className="text-xs font-semibold text-forest-500">Step:</span>
                  <span className="text-sm font-bold text-forest">2 of 3 (Verification)</span>
                </div>
              </div>

              <p className="text-xs text-forest-400 mt-4 leading-relaxed">
                Verification checks typically complete within 48 hours of submission.
              </p>

              <button
                onClick={() => setShowStatusModal(false)}
                className="mt-6 w-full bg-forest text-white h-11 rounded-full font-semibold hover:bg-forest-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 flex flex-col md:flex-row relative">
      {/* Local keyframes for animation */}
      <style jsx global>{`
        @keyframes float-gold-1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(10px, -20px) rotate(5deg); }
        }
        @keyframes float-gold-2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-20px, 20px) rotate(-10deg); }
        }
        .float-blob-1 {
          animation: float-gold-1 12s ease-in-out infinite;
        }
        .float-blob-2 {
          animation: float-gold-2 15s ease-in-out infinite;
        }
        .step-transition {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-press:active {
          transform: scale(0.97);
        }
      `}</style>

      {/* ─── LEFT PANEL (45%): FORM ─── */}
      <div className="w-full md:w-5/12 bg-ivory p-6 md:p-10 flex flex-col justify-start relative z-10 border-r border-forest-100/5">
        <div className="max-w-md mx-auto w-full mt-4">
          
          {/* Stepper Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between items-center relative mb-4">
              <div className="absolute top-[15px] left-0 right-0 h-[2px] bg-forest-100/40 z-0">
                <div 
                  className="h-full bg-forest transition-all duration-300"
                  style={{ width: `${(currentStep - 1) * 50}%` }}
                />
              </div>

              {/* Step 1 marker */}
              <div className="flex flex-col items-center z-10 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  currentStep > 1 
                    ? "bg-forest text-white" 
                    : currentStep === 1 
                      ? "bg-forest text-white shadow-lg shadow-forest-900/10 ring-4 ring-forest/10" 
                      : "bg-forest-100/50 text-forest-400"
                }`}>
                  {currentStep > 1 ? <Check className="h-4 w-4" /> : "1"}
                </div>
                <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider ${
                  currentStep === 1 ? "text-muga" : currentStep > 1 ? "text-forest" : "text-forest-400"
                }`}>
                  Personal Info
                </span>
              </div>

              {/* Step 2 marker */}
              <div className="flex flex-col items-center z-10 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  currentStep > 2 
                    ? "bg-forest text-white" 
                    : currentStep === 2 
                      ? "bg-forest text-white shadow-lg shadow-forest-900/10 ring-4 ring-forest/10" 
                      : "bg-forest-100/50 text-forest-400"
                }`}>
                  {currentStep > 2 ? <Check className="h-4 w-4" /> : "2"}
                </div>
                <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider ${
                  currentStep === 2 ? "text-muga" : currentStep > 2 ? "text-forest" : "text-forest-400"
                }`}>
                  Shop Info
                </span>
              </div>

              {/* Step 3 marker */}
              <div className="flex flex-col items-center z-10 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  currentStep === 3 
                    ? "bg-forest text-white shadow-lg shadow-forest-900/10 ring-4 ring-forest/10" 
                    : "bg-forest-100/50 text-forest-400"
                }`}>
                  3
                </div>
                <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider ${
                  currentStep === 3 ? "text-muga" : "text-forest-400"
                }`}>
                  Verify
                </span>
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="bg-red-50 text-red-700 p-3 rounded-xl text-xs font-medium mb-6 border border-red-100 flex items-center gap-2">
              <span>⚠️</span> {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="step-transition">
            
            {/* STEP 1: PERSONAL INFO */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-forest">Let&apos;s start with you</h2>
                  <p className="text-xs text-forest-500 mt-1">Tell us about yourself</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Purnima Bora"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Phone Number</label>
                  <div className="flex gap-2">
                    <span className="bg-forest-50 border border-forest-100/60 rounded-xl px-4 py-3 text-sm font-semibold text-forest-600 flex items-center justify-center">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="98765 43210"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                      required
                    />
                  </div>
                  <span className="text-[10px] text-forest-400 mt-1 block">We&apos;ll send OTP to verify</span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="purnima@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                    required
                  />
                  <span className="text-[10px] text-forest-400 mt-1 block">For order notifications</span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-white border border-forest-100/60 rounded-xl pl-4 pr-10 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-400 hover:text-forest transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                    </button>
                  </div>
                  
                  {/* Dynamic Password Checklists */}
                  <div className="mt-2 space-y-1 bg-white/50 border border-forest-100/20 rounded-xl p-3">
                    <span className="text-[10px] font-bold text-forest-500 uppercase block mb-1">Password requirements:</span>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className={passRules.length ? "text-forest" : "text-forest-300"}>
                        {passRules.length ? "✓" : "○"}
                      </span>
                      <span className={passRules.length ? "text-forest-700" : "text-forest-400"}>At least 8 characters</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className={passRules.uppercase ? "text-forest" : "text-forest-300"}>
                        {passRules.uppercase ? "✓" : "○"}
                      </span>
                      <span className={passRules.uppercase ? "text-forest-700" : "text-forest-400"}>One uppercase letter</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className={passRules.number ? "text-forest" : "text-forest-300"}>
                        {passRules.number ? "✓" : "○"}
                      </span>
                      <span className={passRules.number ? "text-forest-700" : "text-forest-400"}>One number</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full bg-white border border-forest-100/60 rounded-xl pl-4 pr-10 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-400 hover:text-forest transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-forest text-white h-12 rounded-xl font-semibold hover:bg-forest-600 transition-colors btn-press text-sm"
                  >
                    Continue <ChevronRight className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SHOP INFO */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-forest">Tell us about your craft</h2>
                  <p className="text-xs text-forest-500 mt-1">Help buyers discover your story</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Shop Name</label>
                  <input
                    type="text"
                    name="shopName"
                    placeholder="Purnima&apos;s Silk Studio"
                    value={formData.shopName}
                    onChange={handleChange}
                    className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                    required
                  />
                  <span className="text-[10px] text-forest-400 mt-1 block">This is what buyers will see</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Your District</label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231B4332%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:14px] bg-[right_12px_center] bg-no-repeat"
                      required
                    >
                      <option value="">Select district</option>
                      {ASSAM_DISTRICTS.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Your Village / Town</label>
                    <input
                      type="text"
                      name="villageOrTown"
                      placeholder="Sualkuchi"
                      value={formData.villageOrTown}
                      onChange={handleChange}
                      className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Years of Experience</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231B4332%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:14px] bg-[right_12px_center] bg-no-repeat"
                  >
                    <option value="Just starting out (< 1 year)">Just starting out (&lt; 1 year)</option>
                    <option value="1–3 years">1–3 years</option>
                    <option value="3–5 years">3–5 years</option>
                    <option value="5–10 years">5–10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-2">What do you make? <span className="text-forest-400 font-normal lowercase">(select all that apply)</span></label>
                  <div className="grid grid-cols-2 gap-2">
                    {CRAFT_CATEGORIES.map(cat => {
                      const isSelected = formData.crafts.includes(cat.id)
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleCraftToggle(cat.id)}
                          className={`flex flex-col items-center justify-center p-3 border rounded-xl cursor-pointer text-center transition-all hover:-translate-y-0.5 duration-200 ${
                            isSelected 
                              ? "bg-forest-50/50 border-forest text-forest ring-1 ring-forest/30" 
                              : "bg-white border-forest-100/60 text-forest-500 hover:border-forest-200"
                          }`}
                        >
                          <span className="text-2xl mb-1">{cat.emoji}</span>
                          <span className="text-[11px] font-bold block">{cat.label}</span>
                          {isSelected && (
                            <span className="text-[9px] font-bold text-muga mt-1 flex items-center gap-0.5">
                              ✓ selected
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-600">Brief Description of your work</label>
                    <span className="text-[10px] font-medium text-forest-400">{formData.description.length}/300</span>
                  </div>
                  <textarea
                    name="description"
                    rows={3}
                    maxLength={300}
                    placeholder="Tell buyers about your craft, your village, your story..."
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800 resize-none"
                    required
                  />
                </div>

                {/* Shop / Profile photo upload */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Shop Photo / Profile Photo</label>
                  <div 
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-forest-100 hover:border-forest rounded-xl p-4 bg-white/50 text-center cursor-pointer transition-colors"
                  >
                    <input 
                      type="file" 
                      id="shop-photo-file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleFileSelect}
                    />
                    <label htmlFor="shop-photo-file" className="cursor-pointer block">
                      <Upload className="h-6 w-6 text-forest-400 mx-auto mb-2" />
                      <span className="text-xs font-semibold text-forest block">
                        {uploadedFileName || "📷 Upload your photo"}
                      </span>
                      <span className="text-[10px] text-forest-400 block mt-0.5">
                        Drag & drop or click. Accepted: JPG, PNG — Max 5MB
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-white border border-forest-100 hover:bg-forest-50 text-forest h-12 rounded-xl font-semibold transition-colors btn-press text-sm"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-forest text-white h-12 rounded-xl font-semibold hover:bg-forest-600 transition-colors btn-press text-sm"
                  >
                    Continue <ChevronRight className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: VERIFY & SUBMIT */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-forest">Almost there!</h2>
                  <p className="text-xs text-forest-500 mt-1">We need to verify your identity and set up payments</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5 flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-muga" /> Aadhaar Number
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="aadhaar-p1"
                      maxLength={4}
                      placeholder="0000"
                      value={formData.aadhaarPart1}
                      onChange={(e) => handleAadhaarChange(e, 1)}
                      className="w-full bg-white border border-forest-100/60 rounded-xl px-3 py-3 text-sm text-center outline-none focus:border-forest transition-colors text-forest-800"
                      required
                    />
                    <input
                      type="text"
                      id="aadhaar-p2"
                      maxLength={4}
                      placeholder="0000"
                      value={formData.aadhaarPart2}
                      onChange={(e) => handleAadhaarChange(e, 2)}
                      className="w-full bg-white border border-forest-100/60 rounded-xl px-3 py-3 text-sm text-center outline-none focus:border-forest transition-colors text-forest-800"
                      required
                    />
                    <input
                      type="text"
                      id="aadhaar-p3"
                      maxLength={4}
                      placeholder="0000"
                      value={formData.aadhaarPart3}
                      onChange={(e) => handleAadhaarChange(e, 3)}
                      className="w-full bg-white border border-forest-100/60 rounded-xl px-3 py-3 text-sm text-center outline-none focus:border-forest transition-colors text-forest-800"
                      required
                    />
                  </div>
                  <span className="text-[10px] text-forest-400 mt-1 block">For identity verification only. Not shared publicly.</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5 flex items-center gap-1">
                      <Landmark className="h-3.5 w-3.5 text-muga" /> Bank Account Number
                    </label>
                    <input
                      type="text"
                      name="bankAccount"
                      placeholder="Account number"
                      value={formData.bankAccount}
                      onChange={handleChange}
                      className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Confirm Bank Account</label>
                    <input
                      type="text"
                      name="confirmBankAccount"
                      placeholder="Re-enter account"
                      value={formData.confirmBankAccount}
                      onChange={handleChange}
                      className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">IFSC Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="ifscCode"
                      placeholder="e.g. SBIN0000124"
                      value={formData.ifscCode}
                      onChange={handleChange}
                      className="flex-1 bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800 uppercase"
                      required
                    />
                    <button
                      type="button"
                      onClick={handleVerifyIFSC}
                      disabled={ifscState.loading || !formData.ifscCode}
                      className="bg-forest text-white px-5 rounded-xl text-xs font-semibold hover:bg-forest-600 transition-colors flex items-center justify-center gap-1 disabled:opacity-50"
                    >
                      {ifscState.loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : ifscState.verified ? (
                        "Verified ✓"
                      ) : (
                        "Verify IFSC"
                      )}
                    </button>
                  </div>
                  {ifscState.verified && (
                    <div className="bg-forest-50/60 border border-forest-100/30 text-[10px] text-forest font-semibold p-2 rounded-xl mt-1">
                      🏦 {ifscState.details}
                    </div>
                  )}
                  <span className="text-[10px] text-forest-400 mt-1 block">Find on your cheque book</span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Account Holder Name</label>
                  <input
                    type="text"
                    name="accountHolderName"
                    placeholder="Name in bank records"
                    value={formData.accountHolderName}
                    onChange={handleChange}
                    className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800"
                    required
                  />
                </div>

                <div className="border-t border-forest-100/30 pt-4 mt-2">
                  <span className="text-[10px] font-bold text-forest-400 uppercase tracking-widest block mb-3 text-center">Optional but helpful</span>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">GST Number</label>
                      <input
                        type="text"
                        name="gstNumber"
                        placeholder="Optional"
                        value={formData.gstNumber}
                        onChange={handleChange}
                        className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800 uppercase"
                      />
                      <span className="text-[9px] text-forest-400 mt-1 block">Not required to start selling</span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">How did you hear?</label>
                      <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleChange}
                        className="w-full bg-white border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest transition-colors text-forest-800 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231B4332%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:14px] bg-[right_12px_center] bg-no-repeat"
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Friend / Family">Friend / Family</option>
                        <option value="Google Search">Google Search</option>
                        <option value="NGO / SHG">NGO / SHG</option>
                        <option value="Government Scheme">Government Scheme</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Agreements Checklist */}
                <div className="bg-white/50 border border-forest-100/20 rounded-2xl p-4 space-y-2.5">
                  <span className="text-[10px] font-bold text-forest-500 uppercase tracking-wider block mb-1">Terms & Conditions</span>
                  
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-forest-700">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="accent-forest w-4 h-4 mt-0.5 shrink-0"
                      required
                    />
                    <span>I agree to Asom Bazaar&apos;s Seller Terms</span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-forest-700">
                    <input
                      type="checkbox"
                      name="agreeAccuracy"
                      checked={formData.agreeAccuracy}
                      onChange={handleChange}
                      className="accent-forest w-4 h-4 mt-0.5 shrink-0"
                      required
                    />
                    <span>I confirm all information is accurate</span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-forest-700">
                    <input
                      type="checkbox"
                      name="agreeCommission"
                      checked={formData.agreeCommission}
                      onChange={handleChange}
                      className="accent-forest w-4 h-4 mt-0.5 shrink-0"
                      required
                    />
                    <span>I understand 12% commission per sale</span>
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-white border border-forest-100 hover:bg-forest-50 text-forest h-12 rounded-xl font-semibold transition-colors btn-press text-sm"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-muga text-white h-12 rounded-xl font-semibold hover:bg-muga/95 transition-colors btn-press text-sm disabled:opacity-75"
                  >
                    {isLoading ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
            
          </form>

        </div>
      </div>

      {/* ─── RIGHT PANEL (55%): BRAND ─── */}
      <div className="w-full md:w-7/12 bg-forest text-white p-8 md:p-14 flex flex-col justify-between relative overflow-hidden min-h-[350px] md:min-h-screen">
        {/* Floating Gold Blobs with keyframes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-muga/15 blur-2xl float-blob-1 pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-muga/10 blur-3xl float-blob-2 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-8 md:mb-12">
            <span className="text-2xl">🪷</span>
            <span className="font-heading font-bold text-lg tracking-wider">Asom Bazaar</span>
          </div>

          <h2 className="font-heading font-bold text-3xl md:text-5xl leading-tight max-w-lg mb-8">
            &ldquo;Your craft deserves to reach the world.&rdquo;
          </h2>

          <div className="h-[1px] bg-white/10 max-w-sm mb-8" />

          <h3 className="font-heading font-bold text-base uppercase tracking-wider text-muga mb-4">
            Why sell with us?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-2xl">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <span>💰</span> Earn fair prices
              </div>
              <p className="text-xs text-forest-200 leading-relaxed pl-6">
                No middlemen. Keep 88% of every sale directly.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <span>📦</span> We handle shipping
              </div>
              <p className="text-xs text-forest-200 leading-relaxed pl-6">
                Shiprocket pickup from your doorstep to anywhere in India.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <span>📱</span> Easy on WhatsApp
              </div>
              <p className="text-xs text-forest-200 leading-relaxed pl-6">
                Manage orders and notifications via WhatsApp — no complex apps.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <span>🌍</span> Reach all of India
              </div>
              <p className="text-xs text-forest-200 leading-relaxed pl-6">
                Thousands of buyers in Bangalore, Delhi, and Mumbai waiting.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex items-center gap-4 max-w-md">
          {/* Artisan Testimonial Badge */}
          <div className="w-12 h-12 rounded-full bg-muga flex items-center justify-center font-heading font-bold text-white text-base shrink-0 border border-white/10">
            PB
          </div>
          <div>
            <p className="text-xs italic text-forest-100">
              &ldquo;I earned ₹18,000 last month from my mekhela chadors.&rdquo;
            </p>
            <span className="text-[10px] font-bold text-muga block mt-1">
              — Purnima Bora, Sualkuchi
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
