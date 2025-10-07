import './App.css'
import ProductPage from './page/ProductPage'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <CartProvider>
      <ProductPage />
    </CartProvider>
  )
}

export default App
