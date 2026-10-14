import { Award, Trophy, Heart, Users, Calendar, Star, Medal, Crown } from 'lucide-react';

import Banner from '../components/ui/Banner';
import CTA from '../components/ui/CTA';

export default function Achievements() {
    const majorAchievements = [
        {
            icon: Crown,
            title: "IMA Lifetime Achievement Award Recipients",
            description: "Dr. Vinay Gupta (2024) - Third doctor from Moradabad to receive this prestigious award, following Dr. S.K. Raj and late Dr. J.K. Agarwal",
            year: "2024",
            category: "National Recognition",
            color: "from-amber-400 to-amber-600",
            bgColor: "bg-amber-50"
        },
        {
            icon: Medal,
            title: "Robotic Surgery Excellence Award",
            description: "Dr. Magan Mehrotra and team honored with Lifetime Achievement Award 2025 for groundbreaking work in robotic surgery",
            year: "2025",
            category: "Medical Innovation",
            color: "from-teal-400 to-teal-600",
            bgColor: "bg-teal-50"
        },
        {
            icon: Trophy,
            title: "President's Appreciation Award",
            description: "Recognition for outstanding community service and medical excellence, presented by MLA Ritesh Gupta",
            year: "2024",
            category: "Community Service",
            color: "from-emerald-400 to-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            icon: Heart,
            title: "State-of-the-Art Blood Bank Operations",
            description: "Operating 24/7 blood bank services as one of 40+ advanced IMA blood banks across India",
            year: "Ongoing",
            category: "Healthcare Infrastructure",
            color: "from-red-400 to-red-600",
            bgColor: "bg-red-50"
        }
    ];

    const serviceAchievements = [
        {
            title: "CME Programs Excellence",
            description: "Regular collaboration with RGCIRC for continuing medical education programs",
            impact: "500+ Healthcare Professionals Trained"
        },
        {
            title: "Community Health Initiatives",
            description: "Organizing health camps, awareness drives, and preventive care programs",
            impact: "10,000+ Lives Touched"
        },
        {
            title: "Professional Networking",
            description: "Facilitating doctor networking meets and knowledge exchange programs",
            impact: "200+ Active Members"
        },
        {
            title: "Research & Publications",
            description: "Contributing to medical research and JIMA publications",
            impact: "Multiple Research Papers Published"
        }
    ];

    const milestones = [
        { year: "1928", event: "IMA Foundation (National Level)" },
        { year: "1970s", event: "IMA Moradabad Branch Establishment" },
        { year: "2020", event: "Modern Blood Bank Facility Launch" },
        { year: "2024", event: "Third Lifetime Achievement Award Recipient" },
        { year: "2025", event: "Robotic Surgery Excellence Recognition" }
    ];

    return (
       <>
       <Banner title="ACHIEVEMENTS" />
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
            {/* Hero Section */}
           

            {/* Major Achievements */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-libre">
                            Major <span className="text-teal-600">Achievements</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-playfair tracking-wide">
                            Recognizing outstanding contributions to healthcare and medical excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {majorAchievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <div 
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={(index % 2) * 150}
                                    className={`${achievement.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-teal-200 group cursor-pointer`}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                                            <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-sm font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                                                    {achievement.year}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {achievement.category}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                                {achievement.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Service Achievements */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            Service <span className="text-emerald-600">Excellence</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Committed to advancing healthcare through education, research, and community service
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceAchievements.map((service, index) => (
                            <div 
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-emerald-300"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="bg-emerald-50 rounded-lg p-3">
                                    <span className="text-emerald-700 font-semibold text-sm">
                                        {service.impact}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            Our <span className="text-cyan-600">Journey</span>
                        </h2>
                        <p className="text-gray-600">
                            Key milestones in our continuous journey of healthcare excellence
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-cyan-600 rounded-full"></div>
                        
                        {milestones.map((milestone, index) => (
                            <div 
                                key={index}
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                        <span className="text-2xl font-bold text-teal-600">
                                            {milestone.year}
                                        </span>
                                        <p className="text-gray-700 mt-2">
                                            {milestone.event}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="relative flex-shrink-0">
                                    <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
                                </div>
                                
                                <div className="w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="py-16 px-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Impact <span className="text-yellow-300">By Numbers</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-3xl md:text-4xl font-bold mb-2">3</div>
                            <div className="text-sm opacity-90">Lifetime Achievement Recipients</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                            <div className="text-sm opacity-90">Blood Bank Operations</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                            <div className="text-sm opacity-90">Healthcare Professionals Trained</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
                            <div className="text-sm opacity-90">Active Members</div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Contact Section */}
            <CTA />
        </div>
       </>
    );
}
