
import FeaturedProductCard from "./FeaturedProductCard";
import ProductCategories from "./ProductCategories.jsx";

const ProductGrid = () => {
 


  return (
    <section className="mt-4">
      <div className="">
        <h2 className="font-bold text-2xl">Featured Products</h2>

            <FeaturedProductCard  />
            <ProductCategories />

      </div>
    </section>
  );
};

export default ProductGrid;
