

"use client";

import React, { useState, useEffect } from 'react';
import { ClipboardPen, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';
import { cloudinaryAsset } from '../lib/cloudinary';

export default function Welcome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeMediaModal, setActiveMediaModal] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const stories = [
    {
      id: 1,
      tag: "Our Story",
      title: "Mental Health Awareness Campaign | IMA Moradabad",
      image: cloudinaryAsset("/welcome-ima.jpg"),
      paragraphs: [
        <>Led by <strong className="text-slate-800 font-semibold">elected office bearers- with Dr. Anant Rana as President and Dr. Dishanter Goel as Secretary for the year 2026-27</strong>, IMA Moradabad continues to champion physician rights and community wellness through meaningful public outreach initiatives.</>,
        <>As part of its <strong className="text-slate-800 font-semibold">15-day Mental Health Awareness Campaign</strong>, launched around World Mental Health Day on October 10, 2026, IMA Moradabad, in collaboration with the Moradabad Neurosciences Association and Mind Body Foundation, is committed to promoting mental well-being among schoolchildren and the wider community.</>,
        <>Through school visits, interactive sessions on emotional and mental changes, responsible mobile and social media use, and dedicated discussions on police personnel's mental health, the initiative aims to encourage awareness, understanding, and a healthier community.</>
      ]
    },
    {
      id: 2,
      tag: "Press & Media Announcement",
      title: "IMA Moradabad Announces School-Based Mental Health Awareness Campaign",
      image: cloudinaryAsset("/9ocotober.jpeg"),
      mediaItems: [
        { type: "image", src: cloudinaryAsset("/mentalhealth2.jpeg"), title: "Awareness Session" },
        { type: "video", src: cloudinaryAsset("/mentalhealth2.mp4"), title: "Session Video 2" },
        { type: "video", src: cloudinaryAsset("/mentalhealth1.mp4"), title: "Session Video 1" },
        { type: "video", src: cloudinaryAsset("/mentalhealth3.mp4"), title: "Session Video 3" },
        { type: "video", src: cloudinaryAsset("/mentalhealth4.mp4"), title: "Session Video 4" },
        { type: "video", src: cloudinaryAsset("/mentalhealth5.mp4"), title: "Session Video 5" }
      ],
      paragraphs: [
        <>On October 9, 2026, during a press conference held at IMA Bhawan, Moradabad,<strong className="text-slate-800 font-semibold"> the elected office bearers of IMA Moradabad for the year 2026–27— Dr. Anant Rana as President, and Dr. Dishanter Goel as Secretary</strong>, announced that the association would conduct mental health awareness sessions in schools as part of its public outreach initiative.</>,
        <>Beginning October 10, the initiative aims to educate schoolchildren about mental health, emotional and psychological changes, and the responsible use of mobile phones and social media.</>,
        <>In collaboration with the Moradabad Neurosciences Association and Mind Body Foundation, IMA Moradabad is taking this initiative forward to encourage early awareness, emotional well-being, and a healthier future for children.</>
      ]
    },
    {
      id: 3,
      tag: "World Mental Health Day",
      title: "IMA Moradabad Conducts Mental Health Awareness Camps in Schools",
      image: cloudinaryAsset("/561ff335-03db-4316-8247-2814caa5a806.jpg"),
      galleryImages: [
        cloudinaryAsset("/pmsschool.jpeg"),
        cloudinaryAsset("/WhatsApp Image 2026-10-10 at 5.03.59 PM.jpeg"),
        cloudinaryAsset("/WhatsApp Image 2026-10-10 at 5.03.57 PM.jpeg"),
        cloudinaryAsset("/WhatsApp Image 2026-10-10 at 5.03.57 PM (1).jpeg"),
        cloudinaryAsset("/WhatsApp Image 2026-10-10 at 5.03.54 PM.jpeg")
      ],
      paragraphs: [
        <>On October 10, 2026, in observance of World Mental Health Day, IMA Moradabad organized mental health awareness camps at three schools in Moradabad. <strong className="text-slate-800 font-semibold">Dr. Dishanter Goel as Secretary of IMA Moradabad (2026–27)</strong>, conducted the session at CL Gupta World School, <strong className="text-slate-800 font-semibold">Dr. Nimish Gupta</strong> conducted the session at PMS School and<strong className="text-slate-800 font-semibold">Dr. Kartikaya Gupta</strong>, led the session at SS Children’s Academy. </>,
        <>During these sessions, students were educated about the importance of mental health, emotional well-being, and the need to discuss mental health concerns openly.</>,
        <>The initiative aimed to raise awareness among children, dispel misconceptions about mental health, and encourage them to seek guidance and support whenever needed.</>
      ]
    }
  ];

  useEffect(() => {
    // Preload only the next story cover; defer gallery media until it is visible.
    const next = stories[(currentSlide + 1) % stories.length];
    if (next?.image) {
      const img = new Image();
      img.src = next.image;
    }
  }, [currentSlide]);

  useEffect(() => {
    if (isPaused || activeMediaModal) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [stories.length, isPaused, activeMediaModal]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const handleNavigation = (storyId) => {
    navigate(`/About?story=${storyId || current.id}#campaign-story`);
  };

  const current = stories[currentSlide];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-8 sm:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 mb-2 sm:mb-2.5 tracking-normal font-libre">
            Welcome to <span className="text-blue-600 font-bold">IMA Moradabad</span>
          </h1>
          <div className="w-12 sm:w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Section with Slider */}
        <div
          className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100/80 group/slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid md:grid-cols-12 items-stretch min-h-[460px]">
            {/* Left Side - Image (Clickable for popup modal) */}
            <div
              className="relative md:col-span-5 w-full h-64 sm:h-72 md:h-auto min-h-[260px] overflow-hidden bg-slate-100 flex items-center justify-center cursor-pointer group/mainimg"
              onClick={() => setActiveMediaModal({ type: 'image', src: current.image, title: current.title })}
              title="Click to view full photo"
            >
              <img
                key={current.image}
                src={current.image}
                alt={current.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover/mainimg:scale-105 animate-in fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/mainimg:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  🔍 Click to view full image
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:hidden pointer-events-none" />

              {/* Slide Counter Badge */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20">
                {currentSlide + 1} / {stories.length}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-7 p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-500">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-3 py-1 rounded-full text-xs font-semibold tracking-wide w-fit">
                    <ClipboardPen className="w-3.5 h-3.5" />
                    <span>{current.tag}</span>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous story"
                      className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next story"
                      className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-libre leading-snug">
                  {current.title}
                </h2>
                <div className="text-sm sm:text-[15px] text-slate-600 space-y-3 leading-relaxed">
                  {current.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Right-side media previews for Story 2 */}
                {current.mediaItems && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-500 mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">🎥 Campaign Media & Videos:</span>
                      <span className="text-[10px] text-blue-600 font-medium">Click to preview</span>
                    </p>
                    <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
                      {current.mediaItems.map((item, mIdx) => (
                        <div
                          key={mIdx}
                          onClick={() => setActiveMediaModal(item)}
                          className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 group/media cursor-pointer bg-slate-900"
                          title={item.title}
                        >
                          {item.type === 'video' ? (
                            <>
                              <video
                                src={item.src}
                                className="w-full h-full object-cover opacity-80 group-hover/media:opacity-100 group-hover/media:scale-105 transition-all duration-300 pointer-events-none"
                                preload="none"
                                playsInline
                                muted
                              />
                              <div className="absolute inset-0 bg-black/30 group-hover/media:bg-black/10 flex items-center justify-center transition-colors">
                                <div className="w-5 h-5 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xs">
                                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                                </div>
                              </div>
                            </>
                          ) : (
                            <img
                              src={item.src}
                              alt={item.title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover/media:scale-110 transition-transform duration-300"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Right-side gallery thumbnails for Story 3 */}
                {current.galleryImages && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-500 mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">📸 Glimpses from the Sessions:</span>
                      <span className="text-[10px] text-blue-600 font-medium">Click to view</span>
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      {current.galleryImages.map((imgSrc, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 group/thumb cursor-pointer"
                          onClick={() => setActiveMediaModal({ type: 'image', src: imgSrc, title: `School Session Glimpse ${imgIdx + 1}` })}
                          title={`Click to view photo ${imgIdx + 1}`}
                        >
                          <img
                            src={imgSrc}
                            alt={`Camp glimpse ${imgIdx + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer with Dots and CTA */}
              <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleNavigation(current.id)}
                    className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
                  >
                    <span>Learn More</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-1.5 ml-1">
                    {stories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Go to story ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
                  Serving Moradabad with pride
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video / Image Modal */}
        {activeMediaModal && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveMediaModal(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-white/10">
                <span className="text-white text-sm font-semibold truncate">
                  {activeMediaModal.title || "Mental Health Campaign"}
                </span>
                <button
                  onClick={() => setActiveMediaModal(null)}
                  className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative p-2 bg-black flex items-center justify-center min-h-[300px] max-h-[75vh]">
                {activeMediaModal.type === 'video' ? (
                  <video
                    key={activeMediaModal.src}
                    src={activeMediaModal.src}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="max-h-[70vh] w-auto max-w-full rounded-lg"
                    onCanPlay={(e) => {
                      e.currentTarget.play().catch(() => {});
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={activeMediaModal.src}
                    alt={activeMediaModal.title}
                    loading="eager"
                    decoding="async"
                    className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-6 sm:mt-8">
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-0.5 sm:mb-1">
              <AnimatedCounter target={1500} suffix="+" duration={2000} />
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 font-medium">Patients Served</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-0.5 sm:mb-1">
              <AnimatedCounter target={50} suffix="+" duration={2000} />
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 font-medium">Healthcare Events</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-0.5 sm:mb-1">
              <AnimatedCounter target={200} suffix="+" duration={2000} />
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 font-medium">Medical Professionals</div>
          </div>
        </div>
      </div>
    </div>
  );
}
