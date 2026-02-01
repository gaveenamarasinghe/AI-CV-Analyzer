import CTA from "./Components/CTA";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";



export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <CTA/>
      <Testimonials/>
      <Footer/>      
    </>
  );
}
