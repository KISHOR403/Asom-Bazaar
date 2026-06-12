"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./login.module.css"

export default function LoginPage() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log("Login submitted", { email, password })
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className={styles.loginWrapper}>
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
            Wear the Soul<br />
            of <span>Assam</span>
          </h1>

          {/* Subtext */}
          <p className={styles.brandSubtext}>
            Discover authentic mekhela chadors, muga silk, tribal jewellery 
            and rare handcrafts — made by real artisan women in Assam, 
            delivered anywhere in India.
          </p>

          {/* Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>✦</div>
              <div className={styles.statText}>
                <span className={styles.statNumber}>800+</span>
                <span className={styles.statLabel}>Artisans</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>✦</div>
              <div className={styles.statText}>
                <span className={styles.statNumber}>2,400+</span>
                <span className={styles.statLabel}>Products</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>✦</div>
              <div className={styles.statText}>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statLabel}>Customers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating E-commerce Product Card Widget */}
        <div className={styles.productPreviewCard}>
          <div className={styles.productImageContainer}>
            <Image
              src="/images/mekhela_silk_hero.png"
              alt="Assamese Mekhela Chador Silk"
              width={220}
              height={200}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.productDetails}>
            <span className={styles.productTag}>Artisan Handloom</span>
            <h3 className={styles.productTitle}>Pure Golden Muga Silk Mekhela</h3>
            <div className={styles.productMeta}>
              <span className={styles.productRating}>★ 4.9 (240+ reviews)</span>
              <span className={styles.productPrice}>₹12,499</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── RIGHT FORM PANEL (45%) ─── */}
      <div className={styles.formPanel}>
        <div className={styles.loginCard}>
          {/* Card Logo */}
          <div className={styles.cardLogo}>
            <div className={styles.cardLogoIcon}>🪷</div>
            <div className={styles.cardLogoText}>Asom Bazaar</div>
          </div>

          <h2 className={styles.cardTitle}>Login to Asom Bazar</h2>
          <p className={styles.cardSubtitle}>Enter your credentials to access your account</p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="login-email">
                Email Address
              </label>
              <input
                id="login-email"
                className={styles.input}
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className={styles.fieldGroup}>
              <div className={styles.fieldLabelRow}>
                <label className={styles.fieldLabel} htmlFor="login-password">
                  Password
                </label>
                <Link href="/forgot-password" className={styles.forgotLink}>
                  Forgot Password?
                </Link>
              </div>
              <input
                id="login-password"
                className={styles.input}
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className={styles.signInBtn}
              disabled={isLoading}
            >
              {isLoading ? (
                "Signing In..."
              ) : (
                <>
                  Sign In <span className={styles.btnArrow}>→</span>
                </>
              )}
            </button>
          </form>

          {/* Social Divider */}
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>or continue with</span>
            <div className={styles.dividerLine} />
          </div>

          {/* Social Login */}
          <div className={styles.socialRow}>
            <button type="button" className={styles.socialBtn} id="google-login-btn">
              <svg className={styles.socialIcon} width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button type="button" className={styles.socialBtn} id="phone-otp-btn">
              <span className={styles.socialIcon}>📱</span>
              Phone OTP
            </button>
          </div>

          {/* Sign Up */}
          <p className={styles.signupText}>
            Don&apos;t have an account?{" "}
            <Link href="/register" className={styles.signupLink}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
