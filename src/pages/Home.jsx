import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Product from "../components/Product";
import Discover from "../components/Discover";
import Client from "../components/Client";
import WhyChooseUs from "../components/Features";
import Contact from "../components/Contact"
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Product/>
      <Discover/>
      <WhyChooseUs/>
      <Client/>
      <Contact/>
      
    </>
  );
};

export default Home;
