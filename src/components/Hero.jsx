
import 'animate.css';

const Hero = () => {
  return (
  <div className="h-[50vh] w-full flex flex-col justify-center items-center bg-black/50 bg-[url('https://images.unsplash.com/photo-1515940175183-6798529cb860?w=1920&auto=format&fit=crop&q=60')] bg-no-repeat bg-cover bg-center bg-blend-multiply text-white px-4">
  <h1 className="text-2xl md:text-6xl text-center mb-4">E-Comm</h1>
  <p className="text-4xl md:text-8xl font-bold text-center animate__animated animate__fadeInLeft">Your One Stop Gadget Shop</p>
</div>
  );
};

export default Hero;
