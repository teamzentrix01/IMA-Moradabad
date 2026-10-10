

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
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 items-stretch bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100/80">
          {/* Left Side - Image */}
          <div data-aos="fade-right" data-aos-duration="900" className="relative md:col-span-5 w-full h-64 sm:h-72 md:h-auto min-h-[260px] overflow-hidden bg-slate-100 flex items-center justify-center">
            <img
              src="/welcome-ima.jpg"
              alt="IMA Moradabad Office Bearers and Event"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:hidden" />
          </div>

          {/* Right Side - Content */}
          <div data-aos="fade-left" data-aos-duration="900" className="md:col-span-7 p-6 sm:p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-3 py-1 rounded-full mb-3.5 text-xs font-semibold tracking-wide w-fit">
                <ClipboardPen className="w-3.5 h-3.5" />
                <span>Our Story</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-libre leading-snug">
                Dedicated to Healthcare Excellence & Community Welfare
              </h2>
              <div className="text-sm sm:text-[15px] text-slate-600 space-y-3 leading-relaxed">
                <p>
                  The <strong className="text-slate-800 font-semibold">Indian Medical Association (IMA), Moradabad</strong> is the premier representative body of medical professionals in the brass city, working steadfastly to elevate local healthcare standards and public welfare.
                </p>

                <p>
                  Operating from <strong className="text-slate-800 font-semibold">IMA Bhawan</strong> (Opposite SSP Office, Kachehri Parisar), the branch organizes regular free OPD camps, specialized cancer awareness drives, voluntary blood donation camps, and academic CME programs.
                </p>
                <p>
                  Led by elected office bearers- with <span className="text-slate-800 font-medium">Dr. Anant Rana</span> as President and <span className="text-slate-800 font-medium">Dr. Dishanter Goel</span> as Secretary year 2026–27—IMA Moradabad champions both physician rights and community wellness.
                </p>
              </div>
            </div>
            {/* CTA Button */}
            <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
              <button
                onClick={handleNavigation}
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>Learn More</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
                Serving Moradabad with pride
              </span>
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