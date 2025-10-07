import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MenuPage from "../src/pages/MenuPage.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
