import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Calendar,
  Award,
  Users,
  ArrowRight
} from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      title: `Our Journey In Care`,
      subtitle: "Since 1928",
      description:
        "Moradabad's premier medical association dedicated to advancing healthcare standards and supporting medical professionals",
      cta: "Learn More",
      ctaLink: "/about",
      ctaSecondary: "Join IMA",
      ctaSecondaryLink: "/join-ima",
      gradient: "from-emerald-600 to-teal-600",
      icon: Heart,
      image: "/ima-hero-image-1.jpg"
    },
    {
      title: "Blood Donation Drives",
      subtitle: "Save Lives Today",
      description:
        "Join our regular blood donation camps and be a hero. Every donation can save up to three lives",
      cta: "Donate Now",
      ctaLink: "/blooddonate",
      ctaSecondary: "Find Camps",
      ctaSecondaryLink: "/upcomingevents",
      gradient: "from-rose-600 to-red-600",
      icon: Heart,
      image: "/ima-hero-image-1.jpg"
    },
    {
      title: "CME Programs & Events",
      subtitle: "Continuous Learning",
      description:
        "Participate in our world-class Continuing Medical Education programs and stay updated with latest medical advances",
      cta: "View Events",
      ctaLink: "/upcomingevents",
      ctaSecondary: "Register",
      ctaSecondaryLink: "/contactus",
      gradient: "from-blue-600 to-indigo-600",
      icon: Calendar,
      image: "/ima-hero-image-1.jpg"
    },
    {
      title: "Young Doctors Forum",
      subtitle: "Shape Your Future",
      description:
        "Connect with peers, access mentorship, and accelerate your medical career with exclusive resources and guidance",
      cta: "Join Forum",
      ctaLink: "/contactus",
      ctaSecondary: "Resources",
      ctaSecondaryLink: "/newsgallery",
      gradient: "from-purple-600 to-pink-600",
      icon: Users,
      image: "/ima-hero-image-1.jpg"
    },
    {
      title: "Awards & Recognition",
      subtitle: "Celebrating Excellence",
      description:
        "Honoring outstanding contributions to medical science and healthcare service in our community",
      cta: "View Awards",
      ctaLink: "/achievements",
      ctaSecondary: "Nominate",
      ctaSecondaryLink: "/nominate",
      gradient: "from-amber-600 to-orange-600",
      icon: Award,
      image: "/ima-hero-image-1.jpg"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handlePrimaryCta = (link) => {
    navigate(link);
  };

  const handleSecondaryCta = (secondaryLink) => {
    navigate(secondaryLink);
  };

  return (
    <div className="relative min-h-[350px] sm:min-h-[380px] md:h-[420px] overflow-hidden bg-gray-900">

      {/* Slides */}
      {slides.map((slide, index) => {
        const Icon = slide.icon;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 transform ${index === currentSlide
              ? 'translate-x-0 opacity-100'
              : index < currentSlide
                ? '-translate-x-full opacity-0'
                : 'translate-x-full opacity-0'
              }`}
          >

            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
            >
              {/* Animated Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}
                />
              </div>
            </div>


            {/* Content Container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">

              <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 items-center w-full">

                {/* Left Side - Text Content */}
                <div className="flex flex-col justify-center text-center lg:text-left py-6 lg:py-0">

                  {/* Subtitle Badge */}
                  <div
                    className="
                      inline-flex items-center space-x-2
                      bg-white/20 backdrop-blur-sm
                      px-3 py-1
                      rounded-full
                      mb-3 md:mb-4
                      w-fit mx-auto lg:mx-0
                      animate-in fade-in zoom-in duration-700
                    "
                  >
                    <Icon className="w-3.5 h-3.5 text-white" />

                    <span className="text-white text-[11px] sm:text-xs font-semibold">
                      {slide.subtitle}
                    </span>
                  </div>


                  {/* Title */}
                  <h1
                    className="
                      text-xl
                      sm:text-2xl
                      md:text-3xl
                      lg:text-4xl
                      font-bold
                      text-white
                      mb-2 sm:mb-3
                      leading-tight
                      font-libre
                      tracking-normal
                      animate-in
                      fade-in
                      slide-in-from-bottom-8
                      duration-700
                      delay-100
                    "
                  >
                    {slide.title}
                  </h1>


                  {/* Description */}
                  <p
                    className="
                      text-xs
                      sm:text-sm
                      md:text-base
                      text-white/95
                      mb-4 md:mb-5
                      leading-relaxed
                      max-w-xl
                      mx-auto lg:mx-0
                      font-playfair
                      tracking-wide
                      animate-in
                      fade-in
                      slide-in-from-bottom-8
                      duration-700
                      delay-200
                    "
                  >
                    {slide.description}
                  </p>


                  {/* CTAs */}
                  <div
                    className="
                      flex flex-wrap
                      gap-2.5 sm:gap-3
                      justify-center lg:justify-start
                      animate-in
                      fade-in
                      slide-in-from-bottom-8
                      duration-700
                      delay-300
                    "
                  >
                    <button
                      onClick={() => handlePrimaryCta(slide.ctaLink)}
                      className="
                        group
                        bg-white
                        text-gray-900
                        px-5 sm:px-6
                        py-2.5 sm:py-3
                        rounded-full
                        font-semibold
                        hover:bg-gray-100
                        transition-all
                        duration-300
                        shadow-lg
                        hover:shadow-xl
                        transform
                        hover:-translate-y-0.5
                        flex
                        items-center
                        space-x-2
                        text-xs sm:text-sm
                        active:scale-95
                      "
                    >
                      <span>{slide.cta}</span>

                      <ArrowRight
                        className="
                          w-3.5 h-3.5 sm:w-4 sm:h-4
                          group-hover:translate-x-1
                          transition-transform
                        "
                      />
                    </button>


                    <button
                      onClick={() =>
                        handleSecondaryCta(slide.ctaSecondaryLink)
                      }
                      className="
                        bg-white/20
                        backdrop-blur-sm
                        text-white
                        border-2
                        border-white
                        px-5 sm:px-6
                        py-2.5 sm:py-3
                        rounded-full
                        font-semibold
                        hover:bg-white/30
                        transition-all
                        duration-300
                        text-xs sm:text-sm
                        active:scale-95
                      "
                    >
                      {slide.ctaSecondary}
                    </button>
                  </div>


                  {/* Stats */}
                  <div
                    className="
                      flex flex-wrap
                      gap-4 sm:gap-6
                      justify-center lg:justify-start
                      mt-5 md:mt-6
                      animate-in
                      fade-in
                      slide-in-from-bottom-8
                      duration-700
                      delay-500
                    "
                  >

                    <div className="text-white text-center lg:text-left">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                        5000+
                      </div>

                      <div className="text-white/80 text-[10px] sm:text-xs">
                        Members
                      </div>
                    </div>


                    <div className="text-white text-center lg:text-left">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                        95+
                      </div>

                      <div className="text-white/80 text-[10px] sm:text-xs">
                        Years Legacy
                      </div>
                    </div>


                    <div className="text-white text-center lg:text-left">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                        500+
                      </div>

                      <div className="text-white/80 text-[10px] sm:text-xs">
                        Events/Year
                      </div>
                    </div>

                  </div>
                </div>


                {/* Right Side - Image */}
                <div
                  className="
                    hidden lg:flex
                    items-center
                    justify-center
                    animate-in
                    fade-in
                    slide-in-from-right-8
                    duration-700
                    delay-300
                  "
                >
                  <div className="relative w-full max-w-md">
                    {/* Main Image Card */}
                    <div
                      className="
      relative
      rounded-3xl
      overflow-hidden
      shadow-2xl
      transform
      hover:scale-105
      transition-transform
      duration-300
    "
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-[330px] object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Portrait / Icon Badge - Same Look */}
                      <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl">
                        <Icon className="w-8 h-8 text-gray-900" />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full" />

                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full" />

                    {/* Bottom Tag / Info Card - Same Look */}
                    <div className="absolute -bottom-5 left-6 bg-white rounded-xl p-3 shadow-xl max-w-[230px]">
                      <div className="flex items-center space-x-2.5">

                        <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                          <Heart className="w-4 h-4 text-white" />
                        </div>

                        <div>
                          <div className="text-xs font-semibold text-gray-900">
                            IMA Moradabad
                          </div>

                          <div className="text-[10px] text-gray-600">
                            Serving Since 1928
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}


      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-3 sm:left-4
          top-1/2
          -translate-y-1/2
          bg-white/20
          backdrop-blur-sm
          text-white
          p-2.5 sm:p-3
          rounded-full
          hover:bg-white/30
          transition-all
          duration-300
          group
          z-10
        "
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
      </button>


      <button
        onClick={nextSlide}
        className="
          absolute
          right-3 sm:right-4
          top-1/2
          -translate-y-1/2
          bg-white/20
          backdrop-blur-sm
          text-white
          p-2.5 sm:p-3
          rounded-full
          hover:bg-white/30
          transition-all
          duration-300
          group
          z-10
        "
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
      </button>


      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2.5 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
              ? 'bg-white w-10 h-2.5'
              : 'bg-white/50 w-2.5 h-2.5 hover:bg-white/75'
              }`}
          />
        ))}
      </div>


      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

    </div>
  );
}