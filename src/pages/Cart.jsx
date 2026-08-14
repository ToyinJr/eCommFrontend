import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ChevronLeft, Plus, Minus, X } from "lucide-react";
import PaystackPop from "@paystack/inline-js";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cart,
    getCartTotal,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  } = useCart();

  const { user } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePayment = () => {
    if (!user) {
      toast(
        <div>
          <p className="font-semibold">You need to be logged in to make payment</p>
          <p className="text-sm">Redirecting you to login...</p>
        </div>,
        {
          position: "bottom-right",
          className: "!bg-red-500 !text-white",
          duration: 3000,
        },
      );

      setTimeout(() => {
        navigate("/login");
      }, 3000);

      return;
    }

    const popup = new PaystackPop();

    popup.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: user.email,
      amount: Math.round(getCartTotal() * 100),
      currency: "NGN",

      onSuccess: (transaction) => {
        console.log("Payment successful:", transaction);

        toast.success("Payment successful!", {
          description: `Reference: ${transaction.reference}`,
          className: "!bg-emerald-500 !text-white",
        });
        clearCart();
      },

      onCancel: () => {
        toast("Payment cancelled.", {
          position: "bottom-right",
          className: "!bg-red-500 !text-white",
        });
      },
    });
  };
  return (
    <div className="min-h-screen bg-emerald-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-emerald-700 hover:text-emerald-500 font-semibold transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center gap-4">
              <span className="text-6xl">🛒</span>
              <p className="text-gray-500 text-lg">
                Your basket feels light! It's currently empty.
              </p>
              <Link
                to="/"
                className="btn bg-emerald-500 hover:bg-emerald-600 text-white border-none px-6 mt-2"
              >
                Browse Store
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-emerald-50/40 border border-emerald-100 transition-all hover:shadow-md"
                >
                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(cartItem.id)}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition"
                  >
                    <X size={18} />
                  </button>

                  {/* Product */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                      className="w-30 h-20 object-cover rounded-xl border border-emerald-200 shrink-0"
                    />

                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">
                        {cartItem.name}
                      </h3>

                      <p className="text-emerald-600 font-semibold">
                        ₦{Number(cartItem.price).toLocaleString()} each
                      </p>

                      <p className="text-sm text-gray-500">
                        Subtotal: ₦
                        {(
                          Number(cartItem.price) * cartItem.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-lg border border-emerald-100 shadow-sm">
                    <button
                      onClick={() => decrementQuantity(cartItem.id)}
                      className="p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-bold text-lg w-8 text-center">
                      {cartItem.quantity}
                    </span>

                    <button
                      onClick={() => incrementQuantity(cartItem.id)}
                      className="p-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 h-fit sticky top-24">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Order Summary
          </h2>

          <div className="flex flex-col gap-4 border-b border-emerald-100 pb-4">
            <div className="flex justify-between text-gray-600">
              <span>Unique Products</span>
              <span className="font-medium">{cart.length}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Total Basket Units</span>
              <span className="font-medium">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span className="text-emerald-600 font-medium font-mono">
                FREE
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center my-6 font-bold text-2xl text-gray-800">
            <span>Total:</span>
            <span className="text-emerald-600">
              ₦{getCartTotal().toLocaleString()}
            </span>
          </div>

          <button
            disabled={cart.length === 0}
            onClick={handlePayment}
            className="w-full btn bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-md shadow-emerald-500/20 border-none uppercase tracking-wide"
          >
            💳 Pay Now
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Secure payment systems integrated powered via Escrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
