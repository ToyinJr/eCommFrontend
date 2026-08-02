import "./style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  const location = useLocation();

   const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";
  window.scrollTo(0, 0);
  return (
    <CartProvider>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          {!hideNavbar && <Navbar />}

          <main className="flex-1">
            <Outlet />
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </CartProvider>
  );
};

export default App;
