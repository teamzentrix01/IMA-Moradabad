import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Banner from '../components/ui/Banner';
import { Link } from 'react-router-dom';

const events = [
    {
        month: 'NOV',
        day: '15',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
        title: 'Continuing Medical Education (CME) Workshop 2025',
        address: 'IMA Bhawan, Medical Road, Moradabad, UP 244001',
        time: '9:00 AM — 5:00 PM',
        description: 'Comprehensive CME workshop featuring renowned medical faculty discussing advancements in healthcare, digital health, and critical patient care protocols.',
        attendees: '200+ Doctors',
        category: 'Education',
        status: 'Registrations Open'
    },
    {
        month: 'DEC',
        day: '10',
        year: '2025',
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop',
        title: 'Community Blood Donation & Health Camp',
        address: 'IMA Medical Center, Civil Lines, Moradabad, UP 244001',
        time: '8:00 AM — 2:00 PM',
        description: 'Mega voluntary blood donation drive organized in collaboration with district hospitals. Free health check-ups, vital screenings, and donor certificates provided.',
        attendees: '150+ Donors',
        category: 'Community',
        status: 'Open to Public'
    },
    {
        month: 'JAN',
        day: '20',
        year: '2026',
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
        title: 'Free Health Screening for Rural & Underserved Communities',
        address: 'Community Hall, Majhola, Moradabad, UP 244001',
        time: '10:00 AM — 4:00 PM',
        description: 'Dedicated outreach initiative providing specialist consultations, basic diagnostic tests, free medicines, and health counseling for underserved families.',
        attendees: '300+ Patients',
        category: 'Healthcare',
        status: 'Free Entry'
    }
];

export default function UpComing_Events() {
    return (
        <>
            <Banner title="UPCOMING EVENTS" />

            <div className="min-h-screen py-8 sm:py-12 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header Section - Compressed & Balanced */}
                    <div className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-200/60 px-3 py-1 rounded-full text-xs font-semibold mb-2.5 shadow-xs">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Official Calendar</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-libre">
                            Upcoming Events & Conferences
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-600 font-playfair tracking-wide leading-relaxed">
                            Participate in IMA Moradabad's upcoming healthcare initiatives, Continuing Medical Education symposiums, and community outreach programs.
                        </p>
                    </div>

                    {/* Events Grid - Compact, Professional Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 80}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:-translate-y-1 flex flex-col justify-between"
                            >
                                {/* Top Image with Date Pill */}
                                <div>
                                    <div className="relative overflow-hidden h-44 sm:h-48 bg-slate-900">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                        {/* Category Badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20">
                                                {event.category}
                                            </span>
                                        </div>

                                        {/* Compact Date Badge */}
                                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-xl px-2.5 py-1.5 text-center shadow-md border border-slate-100 min-w-[50px]">
                                            <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                                                {event.month}
                                            </div>
                                            <div className="text-lg font-bold text-slate-900 leading-tight">
                                                {event.day}
                                            </div>
                                        </div>

                                        {/* Status Badge Bottom */}
                                        <div className="absolute bottom-2.5 left-3">
                                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 backdrop-blur-sm px-2 py-0.5 rounded-md border border-emerald-500/30">
                                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                                                {event.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Section - Compact & Neat */}
                                    <div className="p-4 sm:p-5">
                                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2.5 font-libre group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                                            {event.title}
                                        </h3>

                                        {/* Compact Meta rows */}
                                        <div className="space-y-1.5 mb-3 text-xs text-slate-600">
                                            <div className="flex items-start gap-2">
                                                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-red-500" />
                                                <span className="line-clamp-1">{event.address}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5 flex-shrink-0 text-blue-500" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-3.5 h-3.5 flex-shrink-0 text-emerald-600" />
                                                <span className="font-medium text-slate-700">{event.attendees}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-xs text-slate-600 font-playfair line-clamp-3 leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Footer */}
                                <div className="p-4 pt-0">
                                    <Link
                                        to="/contactus"
                                        className="w-full py-2 px-4 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
                                    >
                                        <span>Inquire & Register</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA Strip */}
                    <div className="mt-10 text-center bg-blue-50/60 rounded-xl p-4 sm:p-5 border border-blue-100 max-w-2xl mx-auto">
                        <p className="text-xs text-slate-700 font-medium">
                            Want to organize or propose a medical camp or CME program with IMA Moradabad?{' '}
                            <Link to="/contactus" className="text-blue-700 font-bold hover:underline">
                                Contact the Secretarial Team →
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
