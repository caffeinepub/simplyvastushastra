import { Toaster } from "@/components/ui/sonner";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Courses />
        <WhyChooseUs />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
      <Toaster richColors position="top-right" />
    </>
  );
}
