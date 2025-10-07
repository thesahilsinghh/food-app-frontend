import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Homepage } from "./pages/Homepage";
import MenuPage from "./pages/MenuPage";
import Product from "./components/Product";

function App() {
  return (
    <div className="text-secondary-content w-screen flex flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
