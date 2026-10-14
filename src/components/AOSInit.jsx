"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => AOS.refresh());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
