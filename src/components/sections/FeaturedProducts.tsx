import { useEffect, useState } from "react";
import { products } from "../../assets/data.js/static";
import { ProductCard } from "../ProductCard";

export const FeaturedProducts = () => {
  // Select 8 featured products (mix of different categories)
  const featuredProducts = [
    products.find((p) => p.id === "MC001"), // Butter Chicken
    products.find((p) => p.id === "MC003"), // Chicken Biryani
    products.find((p) => p.id === "MC005"), // Rogan Josh
    products.find((p) => p.id === "MC007"), // Masala Dosa
    products.find((p) => p.id === "D001"), // Gulab Jamun
    products.find((p) => p.id === "D003"), // Jalebi with Rabri
    products.find((p) => p.id === "E002"), // Garlic Naan
    products.find((p) => p.id === "E007"), // Masala Fries
  ].filter(Boolean);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(featuredProducts.length / 4)
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [featuredProducts.length]);

  const handleAddToCart = (productId: string) => {
    // TODO: Implement add to cart functionality
    console.log(`Adding product ${productId} to cart`);
  };

  const totalSlides = Math.ceil(featuredProducts.length / 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular dishes, carefully selected for your dining
            pleasure
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Products Grid Container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProducts
                    .slice(slideIndex * 4, (slideIndex + 1) * 4)
                    .map((product) =>
                      product ? (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={handleAddToCart}
                        />
                      ) : null
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
