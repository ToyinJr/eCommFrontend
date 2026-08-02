import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useCategories } from "../hooks/useCategories";
import { useCategoryProducts } from "../hooks/useProductCategories";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../contexts/CartContext";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const Categories = () => {
  const { name } = useParams();
  const navigate = useNavigate();

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useCart();

  const {
    data: categories = [],
    isLoading: categoriesLoading,
  } = useCategories();

  const {
    data: allProducts = [],
    isLoading: productsLoading,
  } = useProducts();

  const category = categories.find(
    (c) => slugify(c.name) === name
  );

  const {
    data: categoryProducts = [],
    isLoading: categoryProductsLoading,
  } = useCategoryProducts(category?.id);

  const products = category ? categoryProducts : allProducts;

  const toCart = () => navigate("/cart");

  if (
    categoriesLoading ||
    productsLoading ||
    (category && categoryProductsLoading)
  ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  

  return (
    <div className="flex min-h-screen max-[850px]:flex-col">
      {/* Sidebar */}

      <aside className="bg-emerald-500/20 w-64 p-6 max-[850px]:w-full">
        <Link to="/" className="inline-flex mb-6">
          <ChevronLeft />
        </Link>

        <h2 className="text-3xl font-bold text-center mb-8">
          Categories
        </h2>

        <div className="flex flex-col gap-3 max-[850px]:flex-row max-[850px]:flex-wrap">
          <Link
            to="/categories"
            className={`rounded-lg px-3 py-2 transition font-medium ${
              !name
                ? "bg-emerald-500 text-white"
                : "hover:bg-emerald-100"
            }`}
          >
            All Products
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${slugify(cat.name)}`}
              className={`rounded-lg px-3 py-2 transition font-medium ${
                slugify(cat.name) === name
                  ? "bg-emerald-500 text-white"
                  : "hover:bg-emerald-100"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </aside>

      {/* Products */}

      <main className="flex-1 bg-emerald-100 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            {category ? category.name : "All Products"}
          </h1>

          <p className="text-gray-500 mt-2">
            {products.length} product{products.length !== 1 && "s"} found
          </p>
        </div>

        {products.length === 0 ? (
          <div className="flex justify-center items-center h-60 bg-white rounded-xl shadow">
            <p className="text-gray-500">
              No products found.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col overflow-hidden"
              >
                
                <Link to={`/products/${product.id}`}><div className="h-56 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div></Link>

                <div className="flex flex-col flex-1 p-4">
                  <h2 className="font-semibold line-clamp-2">
                    {product.name}
                  </h2>

                  <p className="text-emerald-600 text-2xl font-bold mt-2">
                    ₦{Number(product.price).toLocaleString()}
                  </p>

                  <button
                    onClick={() => {
                      addToCart(product);

                      toast(
                        <div className="flex justify-between items-center gap-30 w-full">
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
                    }}
                    className="btn bg-emerald-500 hover:bg-emerald-600 border-none mt-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Categories;