import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
} from "@tanstack/react-router";
import { useEffect } from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LocalSEO from "./components/LocalSEO";
import MidPageCTA from "./components/MidPageCTA";
import OnsiteWork from "./components/OnsiteWork";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import YouTubeCarousel from "./components/YouTubeCarousel";
import AreasWeServePage from "./pages/AreasWeServePage";
import BlogPostPage from "./pages/BlogPostPage";
import BlogsPage from "./pages/BlogsPage";
import CityPage from "./pages/CityPage";
import ServicePage from "./pages/ServicePage";
import VastuExperienceCentrePage from "./pages/VastuExperienceCentrePage";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <OnsiteWork />
      <Courses />
      <WhyChooseUs />
      <YouTubeCarousel />
      <Testimonials />
      <MidPageCTA />
      <Blog />
      <LocalSEO />
      <Contact />
    </main>
  );
}

function ScrollRestorer() {
  const { pathname } = useLocation();
  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll to top on every path change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function RootLayout() {
  return (
    <>
      <ScrollRestorer />
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

const servicePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/$slug",
  component: ServicePage,
});

const cityPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vastu-consultant/$slug",
  component: CityPage,
});

const areasWeServeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/areas-we-serve",
  component: AreasWeServePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  blogsRoute,
  blogPostRoute,
  vastuExperienceCentreRoute,
  servicePageRoute,
  cityPageRoute,
  areasWeServeRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: false,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
