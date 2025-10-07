import { Hero } from "../components/sections/Hero";
import { CategorySection } from "../components/sections/CategorySection";
import { FeaturedProducts } from "../components/sections/FeaturedProducts";

export const Homepage = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
    </div>
  );
};
