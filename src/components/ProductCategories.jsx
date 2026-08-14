import { Link } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";


const ProductCategories = () => {
  const { data: categories, isLoading, isError, error } = useCategories();

  if (isLoading) return <p>Loading categories...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <div data-aos="fade-up">
        <Link to="/categories">
          <p className="font-bold text-2xl hover:text-emerald-500 cursor-pointer transition-colors">
            Categories
          </p>
        </Link>

        <div className="flex gap-4 overflow-x-scroll mt-2 mb-2">
          {categories?.map((category) => (
            <Link key={category.id} to={`/categories/${category.name.toLowerCase()}`}>
              <div className="border-2 shrink-0 border-emerald-500 p-4 min-w-52 hover:shadow-lg transition">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-80 h-40 object-cover mb-2"
                />

                <p className="text-center font-semibold hover:text-emerald-500">
                  {category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
