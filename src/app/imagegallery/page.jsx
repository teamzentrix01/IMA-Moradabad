import { Suspense } from "react";
import Image_Gallery from "@/views/Image_Gallery";

export const metadata = {
  title: "Image Gallery | IMA Moradabad",
  description:
    "Photo archives of IMA Moradabad medical camps, awareness rallies, conferences, and doctor felicitations.",
};

export default function ImageGalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Loading Gallery...
          </span>
        </div>
      }
    >
      <Image_Gallery />
    </Suspense>
  );
}
