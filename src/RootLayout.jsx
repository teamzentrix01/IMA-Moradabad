import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import AnnouncementBar from "./components/AnnouncementBar";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: false,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    // Refresh AOS animations on route transitions
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
