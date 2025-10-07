import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MenuPage from "../src/pages/MenuPage.tsx";

function App() {
  

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route
          path="/"
          element={
            <div className="text-primary w-screen h-screen flex flex-col items-center justify-center">
              <h1>working</h1>
            </div>
          }
          />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </>


)}
export default App
