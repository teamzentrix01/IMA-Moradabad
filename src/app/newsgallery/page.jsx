import { Suspense } from "react";
import News_Gallery from "@/views/News_Gallery";

export const metadata = {
  title: "News & Media Coverage | IMA Moradabad",
  description:
    "Press releases, newspaper headlines, and media reports documenting IMA Moradabad initiatives and events.",
};

export default function NewsGalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Loading News Gallery...
          </span>
        </div>
      }
    >
      <News_Gallery />
    </Suspense>
  );
}
