"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, Sparkles, Bike, Music, Camera, Maximize2, X, ArrowRight } from 'lucide-react';

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
                {/* Award Photo with Zoom & Badge */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.doctorName} - ${item.awardTitle}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Floating Zoom Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4 text-teal-700" />
                    </div>
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
                    <span className="text-teal-700 font-semibold group-hover:underline inline-flex items-center gap-1">
                      View Citation & Photo →
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

      {/* Lightbox Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-slate-900">
              <img
                src={activeModal.image}
                alt={activeModal.doctorName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                  {activeModal.awardTitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-libre text-white mt-0.5">
                  {activeModal.doctorName}
                </h3>
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                  {activeModal.field}
                </span>
                <span className="text-xs text-slate-400">Honored by IMA Moradabad</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {activeModal.citation}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

