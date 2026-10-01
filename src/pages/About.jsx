import { useState } from 'react';
import { Award, Users, BookOpen, Shield, TrendingUp, CheckCircle, ArrowRight, Stethoscope, Heart, Calendar, Video, FileText, Briefcase, Globe } from 'lucide-react';
import AnimatedCounter from '../components/ui/AnimatedCounter';

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
          <div className="space-y-12">
            {/* History Section */}
            <div data-aos="fade-up" className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-slate-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Legacy</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  Indian Medical Association (IMA) is the largest represented organization of doctors practicing modern system of medicine in India. The IMA Moradabad Branch has been serving the medical community in Moradabad, Uttar Pradesh - 244001 for decades, fostering excellence in healthcare.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  In 1928, the name Indian Medical Association was coined and since then, IMA has traversed a long path, contributing substantially to the medical profession. In 1956, IMA played a crucial role in organizing the World Body of Medical Associations across the globe.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Today, IMA has grown to become the voice of the medical profession with over <span className="font-semibold text-emerald-600">300,000+ members</span> spread across <span className="font-semibold text-emerald-600">28 states and Union territories</span>, with more than <span className="font-semibold text-emerald-600">1,702 active local branches</span> including our Moradabad chapter.
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div data-aos="fade-up" data-aos-delay="150" className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 text-white">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Heart className="w-10 sm:w-12 h-10 sm:h-12" />
                <h2 className="text-2xl sm:text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-sm sm:text-lg text-emerald-100 leading-relaxed">
                IMA Moradabad is a democratic forum working to maintain dignity, honor and social security of the medical fraternity in our region. We strive to provide quality healthcare to each and every citizen of Moradabad and surrounding areas. We are committed to preserving the autonomy of the medical profession while ensuring the highest standards of care.
              </p>
            </div>
          </div>
        )}

        {/* Objectives Tab */}
        {activeTab === 'objectives' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Objectives</h2>
              </div>
              <div className="grid gap-6">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Publications</h2>
              </div>
              <p className="text-gray-600 mb-6">IMA regularly publishes journals, news and other publications for the general public in Hindi and English:</p>
              <div className="grid md:grid-cols-3 gap-6">
                {publications.map((pub, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
                    <h3 className="font-bold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-gray-600 text-sm">{pub.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Social Schemes */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Social Security Schemes</h2>
              </div>
              <p className="text-gray-600 mb-8">IMA Moradabad looks after the interests of its members through various social schemes:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {schemes.map((scheme, index) => {
                  const Icon = scheme.icon;
                  return (
                    <div key={index} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all group">
                      <Icon className="w-10 h-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-gray-900">{scheme.name}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Academic Wings */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Academic Excellence</h2>
              </div>
              <p className="text-gray-600 mb-8">IMA Moradabad provides knowledge updates through academic wings:</p>
              <div className="space-y-6">
                {wings.map((wing, index) => (
                  <div key={index} className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500 hover:shadow-lg transition-all">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{wing.name}</h3>
                    <p className="text-gray-600">{wing.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospital Board */}
            <div className="bg-gradient-to-br from-rose-600 to-red-600 rounded-3xl shadow-xl p-8 md:p-12 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-12 h-12" />
                <h2 className="text-3xl font-bold">IMA Hospital Board</h2>
              </div>
              <p className="text-lg text-rose-100 leading-relaxed">
                IMA Hospital Board of India provides services related to hospitals and nursing homes, especially focusing on patient care and safety standards throughout Moradabad and surrounding regions.
              </p>
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
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}