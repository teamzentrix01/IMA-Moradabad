

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardPen, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';

export default function Welcome() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      tag: "Our Story",
      title: "Mental Health Awareness Campaign | IMA Moradabad",
      image: "/welcome-ima.jpg",
      paragraphs: [
        <>Led by <strong className="text-slate-800 font-semibold">elected office bearers- with Dr. Anant Rana as President and Dr. Dishanter Goel as Secretary for the year 2026-27</strong>, IMA Moradabad continues to champion physician rights and community wellness through meaningful public outreach initiatives.</>,
        <>As part of its <strong className="text-slate-800 font-semibold">15-day Mental Health Awareness Campaign</strong>, launched around World Mental Health Day on October 10, 2026, IMA Moradabad, in collaboration with the Moradabad Neurosciences Association and Mind Body Foundation, is committed to promoting mental well-being among schoolchildren and the wider community.</>,
        <>Through school visits, interactive sessions on emotional and mental changes, responsible mobile and social media use, and dedicated discussions on police personnel's mental health, the initiative aims to encourage awareness, understanding, and a healthier community.</>
      ]
    },
    {
      id: 2,
      tag: "Initiative Update",
      title: "IMA Moradabad Announces School-Based Mental Health Awareness Campaign",
      image: "/9ocotober.jpeg",
      paragraphs: [
        <>On October 9, 2026, during a press conference at IMA Bhawan, Moradabad, <strong className="text-slate-800 font-semibold">elected office bearers- with Dr Anant Rana as President and Dr Dishanter Goel as Secretary for the year 2026-27 IMA Moradabad</strong>, announced that the association would conduct mental health awareness sessions in schools as part of its public outreach initiative.</>,
        <>Beginning October 10, the initiative aims to educate schoolchildren about mental health, emotional and psychological changes, and the responsible use of mobile phones and social media.</>,
        <>In collaboration with the Moradabad Neurosciences Association and Mind Body Foundation, IMA Moradabad is taking this initiative forward to encourage early awareness, emotional well-being, and a healthier future for children.</>
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [stories.length]);

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
        <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100/80">
          <div className="grid md:grid-cols-12 items-stretch min-h-[460px]">
            {/* Left Side - Image */}
            <div className="relative md:col-span-5 w-full h-64 sm:h-72 md:h-auto min-h-[260px] overflow-hidden bg-slate-100 flex items-center justify-center">
              <img
                key={current.image}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105 animate-in fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:hidden" />

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