import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Cart from "../comoponents/Cart";
import { mockProducts } from "../assets/MockP";

const ProductPage: React.FC = () => {
  const { addToCart, cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Header with Cart Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">🍴 Retro Diner</h1>
        <div className="flex items-center gap-4">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">{totalItems}</span>
            <button 
              className="btn btn-primary gap-2"
              onClick={() => setIsCartOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              View Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <div key={product.menu_id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="h-48">
              <img 
                src={product.image} 
                alt={product.description} 
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg">{product.description}</h2>
              <p className="text-2xl font-bold text-primary">₹{product.price}</p>
              <div className="card-actions justify-end mt-2">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    addToCart({
                      _id: product.menu_id,
                      menu_id: product.menu_id,
                      image: product.image,
                      description: product.description,
                      price: product.price,
                      quantity: 1,
                    });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      <div className={`modal ${isCartOpen ? 'modal-open' : ''}`}>
        <div className="modal-box max-w-4xl max-h-[90vh] overflow-hidden p-0">
          <div className="flex flex-col h-full">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-base-300 bg-base-100 sticky top-0 z-10">
              <h3 className="text-2xl font-bold text-pink-400">Your Cart</h3>
                <button 
                  className="btn btn-ghost btn-circle"
                  onClick={() => setIsCartOpen(false)}>
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Cart Empty</h3>
                  <p className="text-base-content/70 mb-6">Add some delicious items to get started!</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>  
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <Cart key={item._id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-base-300 bg-base-100 p-6 sticky bottom-0">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-black font-bold">Total:</span>
                  <span className="text-black font-bold">₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex gap-3">
                <button className="btn btn-outline flex-1 border-green-500 text-white hover:bg-white hover:text-pink-300" onClick={() => setIsCartOpen(false)}>
                    Continue Shopping
                </button>
                <button className="btn btn-outline flex-1 border-green-500 text-white hover:bg-white hover:text-pink-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Checkout
                </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductPage;