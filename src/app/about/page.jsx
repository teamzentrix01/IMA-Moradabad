import { Suspense } from "react";
import About from "@/views/About";

export const metadata = {
  title: "About Us | IMA Moradabad - History, Leadership & Mission",
  description:
    "Learn about the legacy of the Indian Medical Association Moradabad Branch since 1928, our leadership team, vision, and healthcare commitments.",
};

export default function AboutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Loading About IMA Moradabad...
          </span>
        </div>
      }
    >
      <About />
    </Suspense>
  );
}
