import React from "react";
import { useCart } from "../context/CartContext";

const Cart: React.FC<{ item: any }> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 p-4 bg-base-100 rounded-xl border border-base-300">
      <img
        src={item.image}
        alt={item.description}
        className="w-16 h-16 rounded-lg object-cover"
      />
    
      <div className="flex-1 min-w-0">
        <h4 className="text-black font-semibold text-lg truncate">{item.description}</h4>
        <p className="text-black font-bold">₹{item.price}</p>
      </div>
    
      {/* Quantity buttons */}
      <div className="flex items-center gap-3 -ml-8">
        <div className="join">
          <button
            onClick={() => decreaseQuantity(item._id)}
            className="btn btn-outline join-item btn-sm text-white hover:bg-white hover:text-pink-300"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="btn btn-sm join-item no-animation bg-base-200 min-w-12 ">
            {item.quantity}
          </span>
          <button
            onClick={() => increaseQuantity(item._id)}
            className="btn btn-outline join-item btn-sm text-white hover:bg-white hover:text-pink-300"
          >
            +
          </button>
        </div>
      </div>
    
      <div className="flex flex-col items-end text-black text-right min-w-20 ml-4">
        <p className="text-black font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeFromCart(item._id)}
          className="btn btn-ghost btn-xs text-red-600 gap-1 mt-1"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;