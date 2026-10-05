import React from 'react';
import { Building2, Sparkles, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Banner from '../components/ui/Banner';

export default function NewIMA() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-between">
      <div>
        {/* Banner */}
        <Banner 
          title="NEW BUILDING" 
          tagline="State-of-the-art infrastructure & medical complex for IMA Moradabad" 
        />

        {/* Coming Soon Section - 40% Compressed & Compact */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-2xl mx-auto text-center">
          <div 
            data-aos="zoom-in" 
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 relative overflow-hidden"
          >
            {/* Ambient decorative glows */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-teal-100/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Icon badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 mb-3.5 group hover:scale-105 transition-transform duration-300">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              {/* Tag pill */}
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 text-emerald-700 px-3 py-0.5 rounded-full text-[11px] font-semibold mb-3 shadow-xs">
                <Sparkles className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                <span>Project In Progress</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold font-libre tracking-tight text-slate-900 mb-2.5">
                Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">Soon</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-playfair mb-5">
                The architectural blueprints, facilities, and milestone updates for the upcoming <strong>IMA Bhawan & Medical Complex</strong> will be unveiled here shortly.
              </p>

              {/* Status pill */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200/70 rounded-full text-[11px] text-slate-600 font-medium mb-6">
                <Clock className="w-3 h-3 text-emerald-600" />
                <span>Stay tuned for official updates</span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <Link
                  to="/"
                  className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xs rounded-full shadow-sm hover:shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </Link>
                <Link
                  to="/contactus"
                  className="px-5 py-2 bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 font-semibold text-xs rounded-full transition-all duration-300 shadow-xs hover:shadow-sm"
                >
                  <span>Contact Office</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
