import { useLocation } from "react-router-dom";
import { FiShoppingCart, FiMenu } from "react-icons/fi";

export const Header = () => {
  const location = useLocation();

  const isCurrentPage = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">FoodApp</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className={`px-3 py-2  text-sm font-medium transition-colors duration-200 relative ${
                isCurrentPage("/")
                  ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Home
            </a>
            <a
              href="/products"
              className={`px-3 py-2  text-sm font-medium transition-colors duration-200 relative ${
                isCurrentPage("/products")
                  ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Products
            </a>
            <a
              href="/order"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                isCurrentPage("/order")
                  ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Order
            </a>
          </nav>

          {/* Cart Icon */}
          <div className="flex-shrink-0">
            <button className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <FiShoppingCart className="h-6 w-6" />
              {/* Cart badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900 p-2">
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
