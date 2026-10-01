

import { useNavigate } from 'react-router-dom';
import { ClipboardPen } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';

export default function Welcome() {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/About');
  }
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

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-7 items-stretch bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          {/* Left Side - Image */}
          <div data-aos="fade-right" data-aos-duration="900" className="relative overflow-hidden w-full h-64 sm:h-72 md:h-full min-h-full">
            <img src="/welcome-ima.jpg" alt="IMA Moradabad Bhawan" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>

          {/* Right Side - Content */}
          <div data-aos="fade-left" data-aos-duration="900" className="p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="inline-flex items-center space-x-1.5 bg-emerald-100/80 text-emerald-800 px-3 py-1 rounded-full mb-2.5 text-xs">
              <ClipboardPen className="w-3.5 h-3.5" />
              <span className="font-semibold">Our Story</span>
            </div>

            <div className="text-xs sm:text-[13px] md:text-sm text-slate-700 space-y-2 sm:space-y-2.5 leading-relaxed font-playfair tracking-wide">
              <p>
                The <strong>Indian Medical Association (IMA), Moradabad</strong> is the local branch of the national IMA, serving as a representative body for doctors in the region while also engaging in community health activities.
              </p>

              <p>
                Our office, IMA Bhawan, is located opposite the SSP Office in Kachehri Parisar, Moradabad. The branch has an elected team of office-bearers, with Dr. C. P. Singh as the President-Elect (2025-26) and Dr. Sudeep Kaur as the Secretary.
              </p>

              <p>
                We organize various social and healthcare initiatives, including free OPD camps, awareness campaigns for cancer prevention and vaccination, and cultural programmes on special occasions like Doctors' Day.
              </p>

              <p>
                Through these efforts, IMA Moradabad plays a dual role of safeguarding the rights of medical professionals while actively contributing to public health in the city.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-4 sm:mt-5">
              <button onClick={handleNavigation} className="w-full sm:w-auto cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg sm:rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                Learn More About Us
              </button>
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