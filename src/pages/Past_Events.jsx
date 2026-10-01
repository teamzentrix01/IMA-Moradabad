import React from 'react';
import { ArrowRight, Heart, Award, Users, Sparkles } from 'lucide-react';
import Banner from '../components/ui/Banner';

const events = [
    {
        month: 'SEP',
        day: '28',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
        title: 'World Heart Day - Free Cardiac Screening Camp',
        address: 'IMA Medical Center, Civil Lines, Moradabad, UP 244001',
        time: '9:00 am — 3:00 pm',
        description: 'IMA Moradabad successfully organized a free cardiac screening camp on World Heart Day, providing ECG tests, blood pressure monitoring, and cholesterol checks to over 300 patients. Expert cardiologists offered consultations and health awareness sessions.'
    },
    {
        month: 'AUG',
        day: '15',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
        title: 'Independence Day Health Camp & Blood Donation Drive',
        address: 'IMA Bhawan, Medical Road, Moradabad, UP 244001',
        time: '8:00 am — 2:00 pm',
        description: 'Celebrating 78th Independence Day, IMA Moradabad conducted a mega health camp with free medical check-ups for 500+ citizens and collected 150 units of blood. The event included health awareness sessions on preventive healthcare and nutrition.'
    },
    {
        month: 'JUL',
        day: '12',
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
        title: 'Rural Healthcare Outreach Program - Majhola',
        address: 'Community Hall, Majhola Village, Moradabad, UP 244001',
        time: '10:00 am — 5:00 pm',
        description: 'IMA Moradabad medical team visited Majhola village providing free medical consultations, basic health screenings, and medicines to 400+ villagers. The camp focused on maternal health, child vaccination awareness, and common disease prevention in rural areas.'
    }
];

export default function Past_Events() {
    return (
        <>
            {/* Hero section */}
            <Banner title="PAST EVENTS" />

            <div className="min-h-screen py-8 md:py-16 px-4" style={{ backgroundColor: '#F5F5F5' }}>

                <div className="max-w-4xl mx-auto">
                    <div className="mb-10 sm:mb-12">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 font-libre">Past Events</h1>
                        <p className="text-base sm:text-lg text-slate-600 font-playfair tracking-wide">Relive the moments of IMA Moradabad's impactful healthcare initiatives and community service programs!</p>
                    </div>

                    {events.map((event, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                            className="mb-6 md:mb-8 last:mb-0 group cursor-pointer"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 md:pb-8 border-b border-gray-300 transition-all duration-300 hover:border-gray-400">
                                {/* Date Section with Hover Animation */}
                                <div className="flex sm:flex-col items-center sm:items-center justify-start sm:justify-start flex-shrink-0 sm:text-center sm:w-20 transition-transform duration-300 group-hover:scale-110">
                                    <div className="flex flex-col items-center bg-white rounded-xl p-3 shadow-sm group-hover:shadow-lg transition-all duration-300" style={{ borderLeft: '4px solid #0B0B42' }}>
                                        <div className="text-xs sm:text-sm font-semibold tracking-wider" style={{ color: '#0B0B42' }}>
                                            {event.month}
                                        </div>
                                        <div className="text-2xl sm:text-4xl md:text-5xl font-bold mt-1" style={{ color: '#0B0B42' }}>
                                            {event.day}
                                        </div>
                                    </div>
                                </div>

                                {/* Event Content */}
                                <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6">
                                    {/* Event Image with Hover Effect */}
                                    <div className="flex-shrink-0 order-1 lg:order-none overflow-hidden rounded-lg">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full sm:w-64 h-48 sm:h-40 lg:w-64 lg:h-40 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                                        />
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-1 flex flex-col order-2 lg:order-none">
                                        <h3 className="text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-green-600" style={{ color: '#0B0B42' }}>
                                            {event.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-500 mb-1 flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1">
                                            <span className="inline-block mt-0.5">📍</span>
                                            <span>{event.address}</span>
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1">
                                            <span className="inline-block mt-0.5">🕐</span>
                                            <span>{event.time}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3 lg:line-clamp-none transition-colors duration-300 group-hover:text-gray-800">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
