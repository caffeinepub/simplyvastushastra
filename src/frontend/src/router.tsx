import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
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
import TransformationStrip from "./components/TransformationStrip";
import WhyChooseUs from "./components/WhyChooseUs";
import BlogPostPage from "./pages/BlogPostPage";
import BlogsPage from "./pages/BlogsPage";
import VastuExperienceCentrePage from "./pages/VastuExperienceCentrePage";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <TransformationStrip />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <FloatingWhatsApp />
      <Footer />
      <ScrollToTop />
      <Toaster richColors position="top-right" />
    </>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const blogsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blogs",
  component: BlogsPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blogs/$slug",
  component: BlogPostPage,
});

const vastuExperienceCentreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vastu-experience-centre",
  component: VastuExperienceCentrePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  blogsRoute,
  blogPostRoute,
  vastuExperienceCentreRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
