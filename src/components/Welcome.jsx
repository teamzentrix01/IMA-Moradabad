

import { useNavigate } from 'react-router-dom';
import { ClipboardPen } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';

export default function Welcome() {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/About');
  }
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 mb-3 sm:mb-4 tracking-tight">
            Welcome to <span className="text-blue-600 font-bold">IMA Moradabad</span>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          {/* Left Side - Image */}
          <div data-aos="fade-right" data-aos-duration="900" className="relative max-h-96 md:max-h-none overflow-hidden h-full">
            <img src="/welcome-ima.jpg" alt="IMA Moradabad Bhawan" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>

          {/* Right Side - Content */}
          <div data-aos="fade-left" data-aos-duration="900" className="p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 text-emerald-800 px-3.5 py-1.5 rounded-full mb-4 text-xs sm:text-sm">
              <ClipboardPen className="w-4 h-4" />
              <span className="font-semibold">Our Story</span>
            </div>

            <div className="text-sm sm:text-base text-slate-700 space-y-3 sm:space-y-4 leading-relaxed">
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
            <div className="mt-6 sm:mt-8">
              <button onClick={handleNavigation} className="w-full sm:w-auto cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl sm:rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-16">
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
              <AnimatedCounter target={1500} suffix="+" duration={2000} />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">Patients Served</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
              <AnimatedCounter target={50} suffix="+" duration={2000} />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">Healthcare Events</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
              <AnimatedCounter target={200} suffix="+" duration={2000} />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">Medical Professionals</div>
          </div>
        </div>
      </div>
    </div>
  );
}