import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import Banner from '../components/ui/Banner';

const events = [
    {
        month: 'NOV',
        day: '15',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
        title: 'Continuing Medical Education (CME) Workshop 2025',
        address: 'IMA Bhawan, Medical Road, Moradabad, UP 244001',
        time: '9:00 am — 5:00 pm',
        description: 'Join us for a comprehensive CME workshop featuring renowned medical experts discussing latest advancements in healthcare, clinical practices, and patient care standards. Open to all IMA Moradabad members and practicing physicians.',
        attendees: '200+',
        category: 'Education'
    },
    {
        month: 'DEC',
        day: '10',
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop',
        title: 'Community Blood Donation Camp',
        address: 'IMA Medical Center, Civil Lines, Moradabad, UP 244001',
        time: '8:00 am — 2:00 pm',
        description: 'IMA Moradabad organizes a mega blood donation drive in collaboration with local hospitals. Join us in saving lives by donating blood. Free health check-ups, refreshments, and certificates will be provided to all donors.',
        attendees: '150+',
        category: 'Community'
    },
    {
        month: 'JAN',
        day: '20',
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
        title: 'Free Health Camp for Underprivileged Communities',
        address: 'Community Hall, Majhola, Moradabad, UP 244001',
        time: '10:00 am — 4:00 pm',
        description: 'IMA Moradabad in partnership with local NGOs is conducting a free medical health camp offering consultations, basic health screenings, free medicines, and health awareness sessions for underserved communities in rural Moradabad.',
        attendees: '300+',
        category: 'Healthcare'
    }
];

export default function UpComing_Events() {
    return (
        <>
            <Banner title="UPCOMING EVENTS" />

            <div className="min-h-screen py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Calendar className="w-4 h-4" />
                            <span>Mark Your Calendar</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-libre">
                            Upcoming Events
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-playfair tracking-wide">
                            Join IMA Moradabad's upcoming healthcare initiatives and community programs!
                        </p>
                    </div>

                    {/* Events Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 120}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100"
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                                            {event.category}
                                        </span>
                                    </div>

                                    {/* Date Badge */}
                                    <div className="absolute top-4 right-4 bg-white rounded-xl p-3 text-center shadow-lg">
                                        <div className="text-xs font-semibold text-gray-600">
                                            {event.month}
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">
                                            {event.day}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                        {event.title}
                                    </h3>

                                    {/* Event Info */}
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-start gap-3 text-sm text-gray-600">
                                            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                                            <span>{event.address}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-600">
                                            <Clock className="w-5 h-5 flex-shrink-0 text-blue-500" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-600">
                                            <Users className="w-5 h-5 flex-shrink-0 text-green-500" />
                                            <span>Expected: {event.attendees} attendees</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
