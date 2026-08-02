import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    cart,
    getCartTotal,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();
  const { user, logout } = useAuth();
  return (
    <nav className="grid grid-cols-4 items-center bg-emerald-400 text-black p-2 sticky top-0 z-99">
      <div>
        <Link to={"/"}>
          <h2 className="logo max-sm:text-xs">EComm Gadget Store</h2>
        </Link>
      </div>

      <div className="col-span-2 max-sm:w-3/4 max-sm:mx-auto md:w-full text-emerald-500 place-content-center">
        {" "}
        <input className="input w-full" placeholder="Search products..." />
      </div>

      <div className="flex items-center gap-4 place-content-end text-xl md:text-4xl">
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <button className="cursor-pointer relative md:text-4xl text-xl ">
              🛒
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </DrawerTrigger>

          <DrawerContent className="z-100 bg-emerald-200 data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
            <DrawerHeader>
              <DrawerTitle>
                <p className="text-center text-4xl">Cart</p>
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>

            <div className="p-4 flex flex-col gap-4 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty</p>
              ) : (
                cart.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="relative flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <button
                      onClick={() => removeFromCart(cartItem.id)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <X size={18} />
                    </button>

                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                      className="w-20 h-16 object-cover rounded-md"
                    />

                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {cartItem.name}
                      </h4>

                      <p className="text-sm text-gray-600">
                        ₦{Number(cartItem.price).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrementQuantity(cartItem.id)}
                        className="p-1 rounded-full bg-red-600 hover:bg-red-700"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="font-semibold w-6 text-center">
                        {cartItem.quantity}
                      </span>

                      <button
                        onClick={() => incrementQuantity(cartItem.id)}
                        className="p-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Dynamic Total Price Box */}
            {cart.length > 0 && (
              <div className="p-4 border-t border-emerald-300 bg-emerald-100 flex justify-between items-center font-bold text-xl">
                <span>Total:</span>
                <span>₦{getCartTotal().toLocaleString()}</span>
              </div>
            )}

            <DrawerFooter>
              <Link to="/cart" onClick={() => setOpen(false)}>
                <button className="btn bg-emerald-500 border-none w-full">
                  Go to cart
                </button>
              </Link>
              <DrawerClose asChild>
                <button className="btn bg-red-500 border-none">Close</button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <div className="dropdown dropdown-hover dropdown-end">
          <button>{user ? user.username : "🙍‍♂️"}</button>

          <ul className="dropdown-content menu bg-emerald-200 rounded-box w-52">
            {user ? (
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
