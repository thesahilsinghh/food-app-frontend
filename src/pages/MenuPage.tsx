import React, { useState } from "react";
import products from "../products.json"; 
import ProductCard from "../components/ProductCard";

const MenuPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<"All" | string>("All");

//   const product = 
//     {
//     "id": "MC004",
//     "name": "Dal Makhani",
//     "price": 450,
//     "description": "Slow-cooked black lentils and kidney beans in a creamy, buttery base. Comfort food at its best.",
//     "imageUrl": "https://media.istockphoto.com/id/1397973112/photo/assortment-of-various-kinds-of-indian-cousine-on-dark-rusty-table.jpg?s=612x612&w=0&k=20&c=R5XnXgP1jWnGM5PF7OUfvLW_NQhAcaGuJlWp6hl0SoQ=",
//     "category": "Main Course"
//   }
  
  const filteredMenu = products.filter((item) => {
    const matchesCategory =
      filterCategory === "All" ? true : item.category === filterCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-1/2"
        />

        <div className="flex gap-2">
          {["All", "Dessert", "Extra", "Main Course"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`btn ${
                filterCategory === cat ? "btn-secondary-content" : "btn-outline"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No items found
          </p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
