import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Shield, TrendingUp, CheckCircle, ArrowRight, Stethoscope, Heart, Calendar, Video, FileText, Briefcase, Globe, Target, Sparkles, Building2, ChevronRight, CheckCircle2 } from 'lucide-react';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import MembersDirectorySection from '../components/MembersDirectorySection';

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { target: 5000, suffix: '+', label: 'Active Members', icon: Users },
    { target: 95, suffix: '+', label: 'Years Legacy', icon: Award },
    { target: 500, suffix: '+', label: 'Events Annually', icon: Calendar },
    { target: 1702, suffix: '+', label: 'Active Branches', icon: Globe }
  ];

  const objectives = [
    'Promote and advance medical sciences in all branches across Moradabad',
    'Maintain the honor, dignity and interest of the medical profession',
    'Work towards abolishing compartmentalization in medical education and services',
    'Achieve equality among all members of the medical profession',
    'Promote public health and medical education throughout the region'
  ];

  const publications = [
    {
      title: 'Journal of Indian Medical Association',
      desc: 'Monthly scientific journal indexed in Index Medicus'
    },
    {
      title: 'Aadya Swasthya',
      desc: 'Monthly publication for general public in Hindi'
    },
    {
      title: 'Your Health',
      desc: 'Monthly publication for general public in English'
    }
  ];

  const schemes = [
    { name: 'IMA National Social Security Scheme', icon: Shield },
    { name: 'IMA National Family Welfare Scheme', icon: Users },
    { name: 'IMA National PP Scheme', icon: Heart },
    { name: 'IMA National Health Scheme', icon: Stethoscope },
    { name: 'IMA National Pension Scheme', icon: Briefcase }
  ];

  const wings = [
    { name: 'IMA College of General Practitioners', desc: 'For specialists and general practitioners' },
    { name: 'IMA Academy of Medical Specialties', desc: 'Advanced medical education' },
    { name: 'Sinha Institute', desc: 'Keeping members abreast of latest technologies' }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Hero Section */}
      {/* =========================================================
    HERO / BANNER SECTION
========================================================= */}

      <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px"
            }}
          />
        </div>

        {/* Decorative Blur */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-72 h-72 bg-emerald-300/10 rounded-full blur-3xl" />


        <div className="relative max-w-6xl mx-auto py-14 px-4 sm:px-6 lg:px-8">

          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="700"
          >

            {/* Badge */}
            <div
              className="
                    inline-flex
                    items-center
                    gap-2
                    bg-white/15
                    backdrop-blur-md
                    border border-white/20
                    px-4
                    py-2
                    rounded-full
                    mb-4
                    shadow-sm
                "
            >
              <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />

              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Since 1928
              </span>
            </div>


            {/* Title */}
            <h1
              className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-bold
                    font-libre
                    tracking-normal
                    mb-3
                "
            >
              About IMA Moradabad
            </h1>


            {/* Description */}
            <p
              className="
                    text-sm
                    sm:text-base
                    md:text-lg
                    text-emerald-100
                    max-w-2xl
                    mx-auto
                    leading-relaxed
                    font-playfair
                    tracking-wide
                    mb-6
                "
            >
              India's largest and most trusted medical association
              serving Moradabad, Uttar Pradesh - 244001
            </p>


            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">

              {/* Overview */}
              <button
                onClick={() => setActiveTab("overview")}
                className={`
                        px-5
                        py-2
                        sm:px-6
                        sm:py-2.5
                        rounded-full
                        text-sm
                        sm:text-base
                        font-semibold
                        transition-all
                        duration-300
                        ${activeTab === "overview"
                    ? "bg-white text-emerald-600 shadow-lg"
                    : "bg-white/15 text-white border border-white/20 hover:bg-white/25"
                  }
                    `}
              >
                Overview
              </button>


              {/* Objectives */}
              <button
                onClick={() => setActiveTab("objectives")}
                className={`
                        px-5
                        py-2
                        sm:px-6
                        sm:py-2.5
                        rounded-full
                        text-sm
                        sm:text-base
                        font-semibold
                        transition-all
                        duration-300
                        ${activeTab === "objectives"
                    ? "bg-white text-emerald-600 shadow-lg"
                    : "bg-white/15 text-white border border-white/20 hover:bg-white/25"
                  }
                    `}
              >
                Objectives
              </button>


              {/* Services */}
              <button
                onClick={() => setActiveTab("services")}
                className={`
                        px-5
                        py-2
                        sm:px-6
                        sm:py-2.5
                        rounded-full
                        text-sm
                        sm:text-base
                        font-semibold
                        transition-all
                        duration-300
                        ${activeTab === "services"
                    ? "bg-white text-emerald-600 shadow-lg"
                    : "bg-white/15 text-white border border-white/20 hover:bg-white/25"
                  }
                    `}
              >
                Services
              </button>

            </div>

          </div>

        </div>

      </div>



      {/* =========================================================
    COMPACT STATS SECTION
========================================================= */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                data-aos-duration="600"
                className="
                        group
                        bg-white
                        rounded-xl
                        sm:rounded-2xl
                        shadow-lg
                        hover:shadow-xl
                        border
                        border-emerald-50
                        px-3
                        py-4
                        sm:px-4
                        sm:py-5
                        md:px-5
                        md:py-5
                        text-center

                        transition-all
                        duration-300
                        ease-out

                        hover:-translate-y-1.5
                    "
              >

                {/* Icon */}
                <div
                  className="
                            w-9
                            h-9
                            sm:w-10
                            sm:h-10
                            mx-auto
                            mb-2
                            rounded-full
                            bg-emerald-50
                            flex
                            items-center
                            justify-center

                            transition-all
                            duration-300

                            group-hover:bg-emerald-600
                            group-hover:scale-110
                        "
                >
                  <Icon
                    className="
                                w-5
                                h-5
                                sm:w-5.5
                                sm:h-5.5
                                text-emerald-600

                                transition-colors
                                duration-300

                                group-hover:text-white
                            "
                  />
                </div>


                {/* Counter */}
                <div
                  className="
                            text-xl
                            sm:text-2xl
                            md:text-2xl
                            font-bold
                            text-gray-900
                            leading-tight
                            mb-1
                        "
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>


                {/* Label */}
                <div
                  className="
                            text-[11px]
                            sm:text-xs
                            md:text-sm
                            text-gray-500
                            font-medium
                            leading-tight
                        "
                >
                  {stat.label}
                </div>

              </div>

            );

          })}

        </div>

      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* =========================================================
                SECTION 1: OUR LEGACY & OUR VISION (Compressed & Compact)
            ========================================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Left Card: Our Legacy */}
              <div 
                data-aos="fade-right" 
                data-aos-duration="700"
                className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />
                
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-sm shadow-emerald-200">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Heritage & Roots
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-libre mt-0.5">
                        Our Legacy
                      </h2>
                    </div>
                  </div>

                  <div className="text-slate-600 leading-relaxed space-y-2.5 text-xs sm:text-sm">
                    <p>
                      Founded nationally in <strong>1928</strong>, the <strong>Indian Medical Association (IMA)</strong> is India's premier body of modern medicine doctors. The Moradabad Branch has proudly championed healthcare standards in Uttar Pradesh for decades.
                    </p>
                    <p>
                      Today, IMA unites over <span className="font-semibold text-emerald-600">300,000+ doctors</span> across 28 states and <span className="font-semibold text-emerald-600">1,702+ local branches</span>, fostering clinical excellence and ethical medical practice.
                    </p>
                  </div>
                </div>

                {/* Compact Micro Stat Bar */}
                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <div className="bg-slate-50/80 px-3 py-2 rounded-xl text-center">
                    <div className="text-lg sm:text-xl font-bold text-emerald-600 leading-tight">
                      <AnimatedCounter target={95} suffix="+" duration={1800} />
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">Years Legacy</div>
                  </div>
                  <div className="bg-slate-50/80 px-3 py-2 rounded-xl text-center">
                    <div className="text-lg sm:text-xl font-bold text-teal-600 leading-tight">
                      <AnimatedCounter target={1702} suffix="+" duration={1800} />
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">Active Branches</div>
                  </div>
                </div>
              </div>

              {/* Right Card: Our Vision */}
              <div 
                data-aos="fade-left" 
                data-aos-duration="700"
                className="bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />

                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-11 h-11 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center text-yellow-300 shadow-sm">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 bg-white/10 px-2 py-0.5 rounded-full">
                        Future & Purpose
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold font-libre mt-0.5">
                        Our Vision
                      </h2>
                    </div>
                  </div>

                  <div className="text-emerald-50 leading-relaxed space-y-2.5 text-xs sm:text-sm">
                    <p className="font-medium text-white/95">
                      To safeguard medical fraternity honor and autonomy while making compassionate, state-of-the-art healthcare accessible to every citizen of Moradabad.
                    </p>
                    <p>
                      Through regular free OPD camps, accredited CME programs, emergency blood bank services, and young doctor mentorship, we aim to build a healthier society.
                    </p>
                  </div>
                </div>

                {/* Compact Micro Stat Bar */}
                <div className="mt-5 pt-4 border-t border-white/20 grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-center border border-white/15">
                    <div className="text-lg sm:text-xl font-bold text-white leading-tight">
                      <AnimatedCounter target={5000} suffix="+" duration={1800} />
                    </div>
                    <div className="text-[11px] text-emerald-100 font-medium">Fraternity Doctors</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-center border border-white/15">
                    <div className="text-lg sm:text-xl font-bold text-yellow-300 leading-tight">
                      <AnimatedCounter target={500} suffix="+" duration={1800} />
                    </div>
                    <div className="text-[11px] text-emerald-100 font-medium">Health Events</div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
                SECTION 2: LEADERSHIP MESSAGES (President, Secretary, Treasurer)
            ========================================================= */}
            <div>
              <div 
                className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
                data-aos="fade-up"
              >
                <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-semibold mb-3">
                  <Award className="w-3.5 h-3.5" />
                  <span>Leadership Messages</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-libre tracking-tight text-gray-900">
                  Words from{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                    Our Office Bearers
                  </span>
                </h2>
                <div className="w-14 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2.5 rounded-full" />
                <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2.5 max-w-xl mx-auto">
                  Guiding IMA Moradabad towards clinical excellence, physician welfare, and impactful community outreach.
                </p>
              </div>

              {/* 3 Leadership Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
                
                {/* 1. PRESIDENT MESSAGE CARD */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay="100"
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Doctor Avatar Header */}
                    <div className="flex items-center space-x-3.5 mb-3.5 pb-3.5 border-b border-slate-100">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-emerald-200 group-hover:ring-emerald-500 transition-all flex-shrink-0 shadow-sm">
                        <img 
                          src="/file_0000000014848208836ddf30894e8069 (1).png" 
                          alt="Dr. Anant Rana - President IMA Moradabad" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">
                          President (2026-27)
                        </span>
                        <h3 className="text-base font-bold text-gray-900 mt-0.5 truncate">
                          Dr. Anant Rana
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium truncate">
                          MBBS, MD (Psychiatry)
                        </p>
                      </div>
                    </div>

                    {/* Excerpt Message (Compact) */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-3">
                      "To establish IMA Moradabad as a premier medical association championing clinical excellence, ethical practices, and accessible quality healthcare for every citizen."
                    </p>

                    <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-[11px] text-slate-500 mb-3 truncate">
                      Adwik Health Center, Ashiyana Phase 2
                    </div>
                  </div>

                  {/* Read More Link (Router Link) */}
                  <Link 
                    to="/presidentmessage" 
                    className="inline-flex items-center justify-between w-full pt-3 text-xs font-bold text-emerald-600 hover:text-emerald-700 border-t border-slate-100 transition-colors"
                  >
                    <span>Read Full Message</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 2. SECRETARY MESSAGE CARD */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Doctor Avatar Header */}
                    <div className="flex items-center space-x-3.5 mb-3.5 pb-3.5 border-b border-slate-100">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-200 group-hover:ring-teal-500 transition-all flex-shrink-0 shadow-sm">
                        <img 
                          src="/Pi7_dr-dishantar-goel-moradabad-ho-moradabad-psychiatrists-8ivtob85g6.jpeg" 
                          alt="Dr. Dishanter Goel - Secretary IMA Moradabad" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">
                          Hon. Secretary (2026-27)
                        </span>
                        <h3 className="text-base font-bold text-gray-900 mt-0.5 truncate">
                          Dr. Dishanter Goel
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium truncate">
                          MBBS, MD (Psychiatry) • K.G.M.C.
                        </p>
                      </div>
                    </div>

                    {/* Excerpt Message (Compact) */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-3">
                      "Our focus is on transparent administration, regular accredited CME sessions, digital member outreach, and impactful community health drives."
                    </p>

                    <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-[11px] text-slate-500 mb-3 truncate">
                      Pragyan Health Center, Gandhi Nagar
                    </div>
                  </div>

                  {/* Read More Link (Router Link) */}
                  <Link 
                    to="/secretarymessage" 
                    className="inline-flex items-center justify-between w-full pt-3 text-xs font-bold text-teal-600 hover:text-teal-700 border-t border-slate-100 transition-colors"
                  >
                    <span>Read Full Message</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 3. TREASURER MESSAGE CARD */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay="300"
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Doctor Avatar Header */}
                    <div className="flex items-center space-x-3.5 mb-3.5 pb-3.5 border-b border-slate-100">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-cyan-200 group-hover:ring-cyan-500 transition-all flex-shrink-0 shadow-sm">
                        <img 
                          src="/file_0000000063b08208b822b0557b714332.png" 
                          alt="Dr. Anurag Dubey - Treasurer IMA Moradabad" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">
                          Hon. Treasurer (2026-27)
                        </span>
                        <h3 className="text-base font-bold text-gray-900 mt-0.5 truncate">
                          Dr. Anurag Dubey
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium truncate">
                          MBBS, DCH
                        </p>
                      </div>
                    </div>

                    {/* Excerpt Message (Compact) */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-3">
                      "To establish fiscal discipline, absolute transparency, and sustainable resource management that powers our vital community relief initiatives."
                    </p>

                    <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-[11px] text-slate-500 mb-3 truncate">
                      B-818, Lajpat Nagar, Moradabad
                    </div>
                  </div>

                  {/* Read More Link (Router Link) */}
                  <Link 
                    to="/treasurer-message" 
                    className="inline-flex items-center justify-between w-full pt-3 text-xs font-bold text-cyan-600 hover:text-cyan-700 border-t border-slate-100 transition-colors"
                  >
                    <span>Read Full Message</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Objectives Tab */}
        {activeTab === 'objectives' && (
          <div className="space-y-12">
            {/* Core Objectives Section */}
            <div data-aos="fade-up" className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-100/40 to-teal-100/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-13 h-13 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        <span>Core Mandate</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-libre text-slate-900">
                        Our Mission & Objectives
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full w-fit">
                    Established under National Constitution
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {objectives.map((objective, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                      className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white hover:from-emerald-50/60 hover:to-white border border-slate-200/80 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white border border-emerald-200/60 flex items-center justify-center flex-shrink-0 shadow-xs transition-colors duration-300 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-emerald-700 tracking-wider uppercase">
                          Objective 0{index + 1}
                        </span>
                        <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mt-1">
                          {objective}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Publications Section */}
            <div data-aos="fade-up" className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-indigo-100/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-13 h-13 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full mb-1">
                        <BookOpen className="w-3 h-3 text-blue-600" />
                        <span>Academic Discourse</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-libre text-slate-900">
                        Official Publications
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full w-fit">
                    Hindi & English Periodicals
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                  IMA regularly publishes peer-reviewed research journals, clinical reviews, and healthcare bulletins dedicated to both modern medicine practitioners and community health awareness.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {publications.map((pub, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 120}
                      className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white hover:from-blue-50/50 hover:to-white border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {pub.desc}
                        </p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                        <span>Read Circulation</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-12">
            {/* Social Security Schemes */}
            <div data-aos="fade-up" className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-pink-100/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-13 h-13 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 uppercase tracking-wider bg-purple-50 px-2.5 py-0.5 rounded-full mb-1">
                        <Users className="w-3 h-3 text-purple-600" />
                        <span>Member Welfare</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-libre text-slate-900">
                        Social Security Schemes
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full w-fit">
                    Fraternity Welfare & Lifelong Security
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                  IMA Moradabad safeguards the interests, family welfare, and financial solidarity of member doctors through structured national security schemes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {schemes.map((scheme, index) => {
                    const Icon = scheme.icon;
                    return (
                      <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 90}
                        className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white hover:from-purple-50/50 hover:to-white border border-slate-200/80 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                      >
                        <div>
                          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-xs">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Fraternity Benefit
                          </span>
                          <h3 className="font-bold text-slate-900 text-base mt-2.5 group-hover:text-purple-700 transition-colors">
                            {scheme.name}
                          </h3>
                        </div>
                        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                          <span>Active Enrollment</span>
                          <ChevronRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Academic Wings */}
            <div data-aos="fade-up" className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-100/40 to-orange-100/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-13 h-13 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-0.5 rounded-full mb-1">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        <span>Continuous Learning</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-libre text-slate-900">
                        Academic Wings of IMA
                      </h2>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full w-fit">
                    CME & Specialty Certification
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                  Keeping clinicians at the forefront of modern medical science through accredited continuing medical education, clinical masterclasses, and research workshops.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {wings.map((wing, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 110}
                      className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white hover:from-amber-50/50 hover:to-white border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-700 transition-colors">
                          {wing.name}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {wing.desc}
                        </p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-amber-700">
                        <span>Academic Program</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hospital Board of India - Slim & Aesthetic */}
            <div data-aos="zoom-in" className="bg-gradient-to-r from-rose-700 via-red-600 to-rose-700 rounded-2xl shadow-lg p-5 sm:p-7 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-semibold mb-2.5 text-white">
                  <Heart className="w-3 h-3 fill-white" />
                  <span>Clinical Standard & Accreditation</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-libre mb-2 text-white">
                  IMA Hospital Board of India
                </h2>
                <p className="text-rose-100 text-xs sm:text-sm leading-relaxed mb-4 max-w-2xl">
                  IMA Hospital Board of India guides private clinics, nursing homes, and corporate hospitals in Moradabad and Western Uttar Pradesh on biomedical waste regulations, NABH protocols, medicolegal compliance, and highest patient safety benchmarks.
                </p>
                <div>
                  <Link
                    to="/contactus"
                    className="px-5 py-2 bg-white text-rose-700 font-bold text-xs rounded-full shadow-md hover:bg-rose-50 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>Contact Hospital Board Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center">
          <Stethoscope className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Join IMA Moradabad Today</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Be part of India's premier medical association serving Moradabad - 244001, Uttar Pradesh. Connect with fellow professionals and advance your medical career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <span>Become a Member</span>
              <ArrowRight className="w-5 h-5" />
            </button>
      {/* Members Directory Section at the bottom with search bar */}
      <MembersDirectorySection />
    </div>
  );
}