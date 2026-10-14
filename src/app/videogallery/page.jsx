import { Suspense } from "react";
import Video_Gallery from "@/views/Video_Gallery";

export const metadata = {
  title: "Video Gallery | IMA Moradabad",
  description:
    "Video documentation and highlights of IMA Moradabad CME programs, public health drives, and celebrations.",
};

export default function VideoGalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Loading Video Gallery...
          </span>
        </div>
      }
    >
      <Video_Gallery />
    </Suspense>
  );
}
