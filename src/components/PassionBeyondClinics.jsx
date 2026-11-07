"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, Sparkles, Bike, Music, Camera, Play, X, ArrowRight } from 'lucide-react';

export default function PassionBeyondClinics() {
  const [activeModal, setActiveModal] = useState(null);

  const awards = [
    {
      id: 1,
      doctorName: "Dr. Chandrashekhar",
      awardTitle: "Passion Beyond Clinics Award",
      field: "Biking Expedition & Adventure",
      icon: Bike,
      iconBg: "from-blue-500 to-indigo-600",
      accentBorder: "border-blue-200 hover:border-blue-500",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200/60",
      image: "https://res.cloudinary.com/dbja22ql/image/upload/f_auto,q_auto,w_1200/v1793705488/DSC_5223.JPG-100kb.jpg",
      videoUrl: "https://res.cloudinary.com/dbja22ql/video/upload/f_auto,q_auto,vc_auto,w_1280,c_limit/v1794031128/Snapchat-1057433076.mp4",
      citation: "Awarded by IMA Moradabad in recognition of his extraordinary enthusiasm and relentless dedication to biking and adventurous cross-country expeditions, inspiring physicians to balance clinical excellence with outdoor vigor."
    },
    {
      id: 2,
      doctorName: "Dr. Amit Rastogi",
      awardTitle: "Passion Beyond Clinics Award",
      field: "Competitive Singing & Performing Arts",
      icon: Music,
      iconBg: "from-purple-500 to-pink-600",
      accentBorder: "border-purple-200 hover:border-purple-500",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200/60",
      image: "https://res.cloudinary.com/dbja22ql/image/upload/f_auto,q_auto,w_1200/v1793705488/DSC_5233.JPG-100kb.jpg",
      videoUrl: "https://res.cloudinary.com/dbja22ql/video/upload/f_auto,q_auto,vc_auto,w_1280,c_limit/v1793888458/ima_30_oct.mp4",
      citation: "Conferred by IMA Moradabad for his soulful musical talent, excellence in competitive vocal performances, and enriching cultural life while continuously upholding high medical service standards."
    },
    {
      id: 3,
      doctorName: "Dr. Anil Kumar Shrotriya",
      awardTitle: "Passion Beyond Clinics Award",
      field: "Bird Photography & Wildlife Conservation",
      icon: Camera,
      iconBg: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-200 hover:border-emerald-500",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      image: "https://res.cloudinary.com/dbja22ql/image/upload/f_auto,q_auto,w_1200/v1793705488/DSC_5215.JPG-100kb.jpg",
      videoUrl: "https://res.cloudinary.com/dbja22ql/video/upload/f_auto,q_auto,vc_auto,w_1280,c_limit/v1793888758/bird.mp4",
      citation: "Honored by IMA Moradabad for his remarkable eye for nature, avian biodiversity, and high-precision bird photography, blending scientific keenness with wildlife photographic artistry."
    }
  ];

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50/30 to-amber-50/30 border-y border-slate-200/70 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 border border-amber-300/60 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Special Honors & Felicitations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-libre">
            Passion Beyond <span className="text-teal-600">Clinics Awards</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-playfair tracking-wide">
            Celebrating distinguished doctors of IMA Moradabad who achieve brilliance beyond medical boundaries, excelling in adventure, vocal arts, and wildlife photography.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {awards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 120}
                onClick={() => setActiveModal(item)}
                className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border ${item.accentBorder} hover:-translate-y-2 flex flex-col group cursor-pointer`}
              >
                {/* Award Photo with Play Video Action & Badge */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.doctorName} - ${item.awardTitle}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Play Video Button & Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-xl group-hover:bg-rose-600 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                    <span className="text-white text-xs font-semibold mt-2.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ▶ Click to Watch Video
                    </span>
                  </div>

                  {/* Field Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 inline-flex items-center gap-1.5 shadow-sm">
                      <IconComponent className="w-3.5 h-3.5 text-amber-400" />
                      {item.field.split('&')[0].trim()}
                    </span>
                  </div>

                  {/* Doctor Name at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <span className="text-[10px] font-semibold tracking-wider text-amber-300 uppercase block">
                      Honoree
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-libre drop-shadow-sm leading-tight text-white">
                      {item.doctorName}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2.5 shadow-2xs">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-slate-800">{item.awardTitle}</span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-[13px] font-playfair leading-relaxed">
                      {item.citation}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-rose-600 font-semibold group-hover:underline inline-flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 fill-rose-600" /> Watch Video & Details →
                    </span>
                    <span className="text-slate-400 text-[11px] font-medium">IMA Moradabad</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Achievements Page */}
        <div className="mt-10 text-center">
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm group"
          >
            <span>View All Awards & Honors</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Video Player Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all duration-300 animate-in fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3.5 right-3.5 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition cursor-pointer border border-white/20"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src={activeModal.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support playing this video.
              </video>
            </div>

            {/* Modal Body Info with doctor details & photo thumbnail */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white">
              <div className="flex items-start gap-4">
                {/* Doctor Award Photo thumbnail */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/20 flex-shrink-0 shadow-md">
                  <img
                    src={activeModal.image}
                    alt={activeModal.doctorName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {activeModal.awardTitle}
                    </span>
                    <span className="text-xs text-slate-400">
                      {activeModal.field}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-libre text-white">
                    {activeModal.doctorName}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-playfair mt-1.5 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {activeModal.citation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
