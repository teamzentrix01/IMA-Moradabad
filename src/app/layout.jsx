import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "IMA Moradabad | Indian Medical Association Branch Moradabad",
  description:
    "Indian Medical Association (IMA) Moradabad Branch - Promoting medical excellence, healthcare community service, and professional solidarity since 1928.",
  keywords: [
    "IMA Moradabad",
    "Indian Medical Association Moradabad",
    "Doctors in Moradabad",
    "Blood Bank Moradabad",
    "Medical Association Uttar Pradesh",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#047857",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollToTop />
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
