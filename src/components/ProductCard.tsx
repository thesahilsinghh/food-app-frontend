import React from 'react'
// import { useCart } from '../context/CartContext'

type Product = {
  id: string
  name: string
  price: number
  description?: string
  imageUrl?: string
  category?: string
}

const ProductCard: React.FC<{ product: Product; showAdd?: boolean }> = ({ product, showAdd = true }) => {
//   const { addItem } = useCart()

console.log(product)

  return (
    <div className="border rounded p-4 bg-white shadow-sm flex flex-col">
    
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-3 font-semibold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold">₹ {product.price}</div>
        {showAdd && (
          <button  className="px-3 cursor-pointer py-1 bg-blue-600 text-white rounded">Add</button>
        )}
      </div>
    </div>
  )
}

export default ProductCard
