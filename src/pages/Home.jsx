import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  return (
    <div className="">
        <Hero />
        <div className="px-8 md:px-16">
          <ProductGrid />
        </div>
    </div>
  );
};

export default Home;
