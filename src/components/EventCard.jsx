import { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatEventDate } from '../data/events';

export default function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date(`${event.startDate}T00:00:00+05:30`);

  return (
    <>
      <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:-translate-y-1 flex flex-col justify-between">
        <div>
          {/* Clickable Image Container */}
          <div
            onClick={() => setIsOpen(true)}
            className="relative overflow-hidden h-48 sm:h-56 bg-slate-900 cursor-pointer group/img"
            title="Click to view details"
          >
            <img
              src={event.image}
              alt={`${event.title} poster`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                Click to Expand
              </span>
            </div>
            <span className="absolute top-3 left-3 bg-slate-900/80 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {event.category}
            </span>
            <div className="absolute top-3 right-3 bg-white/95 rounded-xl px-2.5 py-1.5 text-center shadow-md min-w-[50px]">
              <div className="text-[10px] font-bold text-blue-700 uppercase">
                {date.toLocaleString('en-US', { month: 'short', timeZone: 'Asia/Kolkata' })}
              </div>
              <div className="text-lg font-bold text-slate-900 leading-tight">
                {date.getDate()}
              </div>
            </div>
            <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded-md">
              ● {event.status}
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <h3
              onClick={() => setIsOpen(true)}
              className="text-sm sm:text-base font-bold text-slate-900 mb-2.5 font-libre leading-snug line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
            >
              {event.title}
            </h3>
            <div className="space-y-1.5 mb-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>{event.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>{formatEventDate(event)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{event.audience}</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 font-playfair line-clamp-3 leading-relaxed">
              {event.shortDescription}
            </p>
          </div>
        </div>

        <div className="p-4 pt-0">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            View Event Details <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </article>

      {/* POPUP MODAL: Left Side Image, Right Side Description */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden my-auto max-h-[92vh] flex flex-col md:flex-row border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
              className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Image Poster */}
            <div className="md:w-1/2 bg-slate-900 flex items-center justify-center p-3 sm:p-4 min-h-[260px] md:min-h-[460px]">
              <img
                src={event.image}
                alt={event.title}
                className="max-h-[300px] md:max-h-[500px] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Right Side: Description & Details */}
            <div className="md:w-1/2 p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[580px] bg-white">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    {event.category}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    ● {event.status}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-libre leading-snug mb-4">
                  {event.title}
                </h2>

                <div className="space-y-3 mb-5 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Date & Schedule</div>
                      <div>{formatEventDate(event)}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Venue</div>
                      <div>{event.venue}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Target Audience</div>
                      <div>{event.audience}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    About This Initiative
                  </h3>
                  <p className="text-sm text-slate-700 font-playfair leading-relaxed">
                    {event.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <Link
                  to={event.registrationLink}
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold text-sm transition-all text-center shadow-md shadow-teal-700/20"
                >
                  Inquire & Register Now
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
