import React, { useMemo, useState } from 'react'
// import { useCart } from '../context/CartContext'
import products from '../products.json'

type ProductType = {
  id: string
  name: string
  price: number
  description: string
  imageUrl?: string
  category?: string
}

// For now the app renders a single product. We'll pick the first product as a demo.
const Product: React.FC = () => {
//   const demo: ProductType = useMemo(() => (products as ProductType[])[0], [])
//   const [quantity, setQuantity] = useState<number>(1)
//   const { addItem } = useCart()

//   const onAdd = () => {
//     addItem({ id: demo.id, name: demo.name, price: demo.price, imageUrl: demo.imageUrl }, quantity)
//     // simple feedback: reset quantity
//     setQuantity(1)
//     // optionally could show toast - keep minimal
//   }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0">
        <img src={demo.imageUrl} alt={demo.name} className="w-80 h-64 object-cover rounded-lg" />
      </div>

      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800">{demo.name}</h2>
        <p className="mt-3 text-gray-600">{demo.description}</p>
        <p className="mt-4 text-2xl font-semibold text-gray-900">₹ {demo.price}</p>

        <div className="mt-6 flex items-center gap-4">
          <label className="font-medium">Quantity</label>
          {/* <div className="flex items-center border rounded">
            <button aria-label="decrease" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-1">-</button>
            <input aria-label="quantity" value={quantity} onChange={(e) => setQuantity(Math.max(1, Number(e.target.value || 1)))} className="w-16 text-center" />
            <button aria-label="increase" onClick={() => setQuantity((q) => q + 1)} className="px-3 py-1">+</button>
          </div> */}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {/* <button onClick={onAdd} className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add to cart</button> */}
        </div>
      </div>
    </div>
  )
}

export default Product