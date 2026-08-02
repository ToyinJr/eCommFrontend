import { Button } from "./ui/button";
import { toast } from "sonner";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useFeaturedProducts } from "../hooks/useFeaturedProducts";
import { Link } from "react-router-dom";

const FeaturedProductCard = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const {
    data: products = [],
    isLoading,
    isError,
  } = useFeaturedProducts();

  const toCart = () => {
    navigate("/cart");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <p className="text-gray-500">Loading featured products...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center py-10">
        <p className="text-red-500">Failed to load featured products.</p>
      </div>
    );
  }

  return (
    <div className="flex gap-6 overflow-x-auto p-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="card bg-emerald-200 w-60 shadow-sm shrink-0 rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <Link to={`/products/${item.id}`}>
          <figure className="h-60 bg-white flex items-center justify-center p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-xl "
            />
          </figure>
          </Link>
          

          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title line-clamp-2">{item.name}</h2>

            <p className="text-xl font-bold text-emerald-700">
              ₦{Number(item.price).toLocaleString()}
            </p>

            <button
              onClick={() => {
                addToCart(item);

                toast(
                  <div className="flex items-center justify-between gap-30 w-full">
                    <p>Item Added to Cart</p>

                    <Button onClick={toCart}>View Cart</Button>
                  </div>,
                  {
                    position: "bottom-right",
                    className: "!bg-emerald-500",
                  }
                );
              }}
              className="btn bg-emerald-500 hover:bg-emerald-600 border-none mt-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductCard;