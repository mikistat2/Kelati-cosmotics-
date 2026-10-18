import Hero from './components/Hero';
import Testmonial from './components/Testemonial';
import Products from './components/Products';
import CtaBanner from './components/CtaBanner';
import Ritual from './components/Ritual';
import Footer from './layout/Fiiter';
import Navbar from './layout/NavBar';
import Marquee from './components/Marquee';
import Features from './components/Feautures';
import Contact from './components/Contact';
import BeforeAndAfter from './components/BeforeAndAfter';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <BeforeAndAfter />
      <Features />
      <Products />
      <Ritual />
      <Testmonial />
      <Contact />
      <CtaBanner />
      <Footer />
    </>
  );
}

export default Home;
