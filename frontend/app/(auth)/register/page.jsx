"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./register.module.css"

const ASSAM_DISTRICTS = [
  "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo",
  "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao",
  "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup",
  "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar",
  "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar",
  "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri",
  "West Karbi Anglong"
]

const CRAFT_CATEGORIES = [
  { id: "silk", label: "Silk & Sarees" },
  { id: "jewellery", label: "Jewellery" },
  { id: "bamboo", label: "Bamboo Crafts" },
  { id: "spices", label: "Spices & Tea" },
  { id: "other", label: "Other" },
]

export default function RegisterPage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
    // Seller-specific
    shopName: "",
    district: "",
    crafts: [],
  })

  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const isSeller = formData.role === "seller"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCraftToggle = (craftId) => {
    setFormData((prev) => ({
      ...prev,
      crafts: prev.crafts.includes(craftId)
        ? prev.crafts.filter((c) => c !== craftId)
        : [...prev.crafts, craftId],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    setIsLoading(true)
    console.log("Registration submitted", formData)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className={styles.registerWrapper}>
      {/* ─── LEFT BRAND PANEL (55%) ─── */}
      <div className={styles.brandPanel}>
        {/* Floating Gold Blobs */}
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />

        {/* Absolute Logo */}
        <div className={styles.brandLogo}>
          <span className={styles.logoIcon}>🪷</span>
          <span className={styles.logoText}>Asom Bazaar</span>
        </div>

        <div className={styles.brandContent}>
          {/* Headline */}
          <h1 className={styles.brandQuote}>
            Join <span>Thousands</span> of<br />
            Artisans & Shoppers
          </h1>

          {/* Subtext */}
          <p className={styles.brandSubtext}>
            Whether you craft or collect — Asom Bazaar connects you to 
            the authentic soul of Assam&apos;s heritage.
          </p>

          {/* Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>✦</div>
              <div className={styles.statText}>
                <strong>800+</strong> Artisans from across Assam
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>✦</div>
              <div className={styles.statText}>
                <strong>12,000+</strong> Happy buyers & growing
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>✦</div>
              <div className={styles.statText}>
                <strong>Pan-India</strong> shipping with care
              </div>
            </div>
          </div>
        </div>

        {/* Floating E-commerce Product Card Widget */}
        <div className={styles.productPreviewCard}>
          <div className={styles.productImageContainer}>
            <Image
              src="/images/jonbiri_necklace.png"
              alt="Assamese Jonbiri Necklace"
              width={220}
              height={200}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.productDetails}>
            <span className={styles.productTag}>Traditional Jewelry</span>
            <h3 className={styles.productTitle}>Pure Silver Gold-Plated Jonbiri Necklace</h3>
            <div className={styles.productMeta}>
              <span className={styles.productRating}>★ 4.8 (120+ reviews)</span>
              <span className={styles.productPrice}>₹3,499</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── RIGHT FORM PANEL (45%) ─── */}
      <div className={styles.formPanel}>
        <div className={styles.signupCard}>
          {/* Card Logo */}
          <div className={styles.cardLogo}>
            <div className={styles.cardLogoIcon}>🪷</div>
            <div className={styles.cardLogoText}>Asom Bazaar</div>
          </div>

          <h2 className={styles.cardTitle}>Create an Account</h2>
          <p className={styles.cardSubtitle}>Sign up to shop or sell traditional Assamese crafts</p>

          {/* Progress Indicator */}
          <div className={styles.progressBar}>
            <div className={styles.progressStep}>
              <div className={`${styles.progressDot} ${styles.active}`} />
              <span className={`${styles.progressLabel} ${styles.active}`}>Basic Info</span>
            </div>
            <div className={styles.progressLine} />
            <div className={styles.progressStep}>
              <div className={styles.progressDot} />
              <span className={styles.progressLabel}>Verify</span>
            </div>
            <div className={styles.progressLine} />
            <div className={styles.progressStep}>
              <div className={styles.progressDot} />
              <span className={styles.progressLabel}>Done</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="reg-fullname">
                Full Name
              </label>
              <input
                id="reg-fullname"
                className={styles.input}
                name="fullName"
                type="text"
                placeholder="Priya Borah"
                value={formData.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            {/* Phone Number */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="reg-phone">
                Phone Number
              </label>
              <div className={styles.phoneRow}>
                <div className={styles.phoneCode}>+91</div>
                <input
                  id="reg-phone"
                  className={`${styles.input} ${styles.phoneInput}`}
                  name="phone"
                  type="tel"
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  maxLength={10}
                />
              </div>
            </div>

            {/* Email */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="reg-email">
                Email Address
              </label>
              <input
                id="reg-email"
                className={styles.input}
                name="email"
                type="email"
                placeholder="priya@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="reg-password">
                Password
              </label>
              <div className={styles.passwordWrapper}>
                <input
                  id="reg-password"
                  className={`${styles.input} ${styles.inputWithToggle}`}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  minLength={8}
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  tabIndex={-1}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="reg-confirm-password">
                Confirm Password
              </label>
              <div className={styles.passwordWrapper}>
                <input
                  id="reg-confirm-password"
                  className={`${styles.input} ${styles.inputWithToggle}`}
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Buyer / Seller Toggle */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>I want to join as</label>
              <div className={styles.roleToggle}>
                <button
                  type="button"
                  className={`${styles.roleOption} ${formData.role === "buyer" ? styles.activeRole : ""}`}
                  onClick={() => setFormData({ ...formData, role: "buyer" })}
                  id="role-buyer-btn"
                >
                  <span className={styles.roleIcon}>🛍️</span>
                  <span className={styles.roleLabel}>
                    <span className={styles.roleName}>Buyer</span>
                    <span className={styles.roleDesc}>Shop crafts</span>
                  </span>
                </button>
                <button
                  type="button"
                  className={`${styles.roleOption} ${formData.role === "seller" ? styles.activeRole : ""}`}
                  onClick={() => setFormData({ ...formData, role: "seller" })}
                  id="role-seller-btn"
                >
                  <span className={styles.roleIcon}>👩‍🎨</span>
                  <span className={styles.roleLabel}>
                    <span className={styles.roleName}>Seller</span>
                    <span className={styles.roleDesc}>Sell crafts</span>
                  </span>
                </button>
              </div>
            </div>

            {/* ── Seller Extra Fields (animated slide-in) ── */}
            <div className={`${styles.sellerFields} ${isSeller ? styles.visible : ""}`}>
              <div className={styles.sellerFieldsInner}>
                <div className={styles.sellerFieldsTitle}>
                  ✦ Artisan Details
                </div>

                {/* Shop Name */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="reg-shopname">
                    Shop Name
                  </label>
                  <input
                    id="reg-shopname"
                    className={styles.input}
                    name="shopName"
                    type="text"
                    placeholder="e.g. Muga Silk House"
                    value={formData.shopName}
                    onChange={handleChange}
                    disabled={!isSeller}
                  />
                </div>

                {/* District Dropdown */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="reg-district">
                    Location / District
                  </label>
                  <select
                    id="reg-district"
                    className={styles.select}
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    disabled={!isSeller}
                  >
                    <option value="">Select your district</option>
                    {ASSAM_DISTRICTS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Craft Categories */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>What do you make?</label>
                  <div className={styles.checkboxGrid}>
                    {CRAFT_CATEGORIES.map((cat) => (
                      <label
                        key={cat.id}
                        className={`${styles.checkboxLabel} ${
                          formData.crafts.includes(cat.id) ? styles.checked : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.crafts.includes(cat.id)}
                          onChange={() => handleCraftToggle(cat.id)}
                          disabled={!isSeller}
                        />
                        {cat.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className={styles.signUpBtn}
              disabled={isLoading}
              id="signup-submit-btn"
            >
              {isLoading ? (
                "Creating Account..."
              ) : (
                <>
                  Sign Up <span className={styles.btnArrow}>→</span>
                </>
              )}
            </button>
          </form>

          {/* Social Divider */}
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>or sign up with</span>
            <div className={styles.dividerLine} />
          </div>

          {/* Social Login */}
          <div className={styles.socialRow}>
            <button type="button" className={styles.socialBtn} id="google-signup-btn">
              <svg className={styles.socialIconSvg} width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button type="button" className={styles.socialBtn} id="phone-otp-signup-btn">
              <span className={styles.socialIconEmoji}>📱</span>
              Phone OTP
            </button>
          </div>

          {/* Trust Signal */}
          <div className={styles.trustSignal}>
            <span>🔒 Your data is safe with us</span>
            <span className={styles.trustDivider}>|</span>
            <span>No spam, ever</span>
          </div>

          {/* Already have account */}
          <p className={styles.signinText}>
            Already have an account?{" "}
            <Link href="/login" className={styles.signinLink}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
