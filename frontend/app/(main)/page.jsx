import HeroBanner from "../../components/home/HeroBanner"
import AnnouncementStrip from "../../components/home/AnnouncementStrip"
import CategoryStrip from "../../components/home/CategoryStrip"
import FeaturedProducts from "../../components/home/FeaturedProducts"
import TrustStrip from "../../components/home/TrustStrip"
import ArtisanStories from "../../components/home/ArtisanStories"
import AppDownload from "../../components/home/AppDownload"
import FlashSale from "../../components/home/FlashSale"
import RecommendedProducts from "../../components/home/RecommendedProducts"
import BlogSection from "../../components/home/BlogSection"
import CustomerReviews from "../../components/home/CustomerReviews"
import NewsletterBanner from "../../components/home/NewsletterBanner"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <AnnouncementStrip />
      <CategoryStrip />
      <FeaturedProducts />
      <TrustStrip />
      <ArtisanStories />
      <AppDownload />
      <FlashSale />
      <RecommendedProducts />
      <BlogSection />
      <CustomerReviews />
      <NewsletterBanner />
    </div>
  )
}
