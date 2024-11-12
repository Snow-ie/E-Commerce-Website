import Category from "../components/Category";

import HeroSection from "../components/homepage/herosection/HeroSection";
import FlashSale from "../components/homepage/flashcard/FlashSale";
import BestSelllingProduct from "../components/homepage/sellingproduct/BestSelllingProduct";
import BannerJbl from "../components/homepage/herosection/BannerJbl";
import NewArrival from "../components/homepage/newarrival/NewArrival";
import FeaturesSection from "../components/FeaturesSection";
import OurProducts from "../components/ourproduct/OurProducts";

function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSale />
      <Category />
      <BestSelllingProduct />
      <OurProducts />
      <BannerJbl />
      <NewArrival />
      <FeaturesSection />
    </div>
  );
}
export default Home;
