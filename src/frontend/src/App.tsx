import { Toaster } from "@/components/ui/sonner";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import BlogPostPage from "./pages/BlogPostPage";
import BlogsPage from "./pages/BlogsPage";

function HomePage() {
  return (
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
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
      <ScrollToTop />
      <Toaster richColors position="top-right" />
    </>
  );
}
