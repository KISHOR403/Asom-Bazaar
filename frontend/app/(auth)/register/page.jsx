"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import useAuth from "../../../hooks/useAuth"
import styles from "./register.module.css"

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuth()
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    setIsLoading(true)
    const res = await register({
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      role: "buyer",
    })
    setIsLoading(false)
    if (res.success) {
      router.push("/")
    } else {
      alert(res.message || "Registration failed")
    }
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
          <p className={styles.cardSubtitle}>Sign up to shop traditional Assamese crafts</p>

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
