import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/categories", element: <Categories /> },
      { path: "/cart", element: <Cart /> },
      {  path:"/categories/:name" ,element:<Categories />},
      { path: "/products/:id", element: <Product /> },
      {path: "/register", element: <Register /> },
      {path: "/login", element: <Login /> }

    ],
  },
]);

export default router;
