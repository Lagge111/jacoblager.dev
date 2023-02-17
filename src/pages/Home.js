import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Nav from "../sections/Nav";
import Work from "../sections/Work";

const Home = () => {
  return (
    <div className="bg-primary h-full flex justify-center flex-col cursor-default">
      <Nav />
      <div className="px-10">
        <Hero />
        <About />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
