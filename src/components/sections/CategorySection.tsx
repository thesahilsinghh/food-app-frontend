import React from "react";
import { categories } from "../../assets/data.js/static";

export const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of authentic Indian cuisine across
            different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <p className="text-sm md:text-base opacity-90 drop-shadow-md">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300">
                  Explore {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
