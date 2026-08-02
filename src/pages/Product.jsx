import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import { useProduct } from "../hooks/useProduct";
import { useCart } from "../contexts/CartContext";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const toCart = () => navigate("/cart");

  const {
    data: product,
    isLoading,
    isError,
  } = useProduct(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-lg text-gray-500">Loading product...</p>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-lg text-red-500">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    toast(
      <div className="flex items-center w-full gap-30">
        <p>Item Added to Cart</p>

        <Button onClick={toCart}>
          View Cart
        </Button>
      </div>,
      {
        position: "bottom-right",
        className: "!bg-emerald-500",
      }
    );
  };

  return (
    <section className="bg-emerald-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}

        <Link
          to="/categories"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8"
        >
          <ChevronLeft size={20} />
          Back to Products
        </Link>

        {/* Product Card */}

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid lg:grid-cols-2 gap-10 p-8">

          {/* Image */}

          <div className="bg-gradient-to-br from-emerald-50 to-gray-100 rounded-2xl flex justify-center items-center p-10">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[500px] max-w-full object-contain transition duration-300 hover:scale-105"
            />
          </div>

          {/* Details */}

          <div className="flex flex-col">

            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-500 text-xl">
                ★★★★★
              </span>

              <span className="text-gray-500">
                4.8 (128 reviews)
              </span>
            </div>

            {product.category?.name && (
              <span className="mt-5 inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full w-fit font-medium">
                {product.category.name}
              </span>
            )}

            <p className="text-5xl font-black text-emerald-600 mt-8">
              ₦{Number(product.price).toLocaleString()}
            </p>

            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h2 className="font-bold text-xl mb-3">
                Description
              </h2>

              <p className="text-gray-600 leading-8">
                {product.description}
              </p>
            </div>

            {/* Quantity */}

            <div className="mt-8">

              <p className="font-semibold mb-3">
                Quantity
              </p>

              <div className="flex items-center w-fit border rounded-xl overflow-hidden">

                <button
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="p-3 hover:bg-red-50 transition"
                >
                  <Minus size={18} />
                </button>

                <span className="px-8 font-bold text-lg">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((q) => q + 1)
                  }
                  className="p-3 hover:bg-emerald-50 transition"
                >
                  <Plus size={18} />
                </button>

              </div>

            </div>

            {/* Add to Cart */}

            <button
              onClick={handleAddToCart}
              className="mt-10 flex items-center justify-center gap-3 w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold py-4 rounded-xl transition shadow-lg shadow-emerald-500/20"
            >
              <ShoppingCart size={22} />
              Add to Cart
            </button>

            {/* Extra Info */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="border rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Availability
                </p>

                <p className="font-bold text-emerald-600">
                  ✔ In Stock
                </p>
              </div>

              <div className="border rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Delivery
                </p>

                <p className="font-bold">
                  Free Delivery
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Product;