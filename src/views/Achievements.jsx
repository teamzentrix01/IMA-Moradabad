"use client";

import React, { useState } from 'react';
import { Award, Trophy, Heart, Users, Calendar, Star, Medal, Crown, Sparkles, Bike, Music, Camera, Maximize2, X } from 'lucide-react';
import Banner from '../components/ui/Banner';
import CTA from '../components/ui/CTA';

export default function Achievements() {
    const [activeAwardModal, setActiveAwardModal] = useState(null);

    const passionAwards = [
        {
            id: 1,
            doctorName: "Dr. Chandrashekhar",
            awardTitle: "Passion Beyond Clinics Award",
            field: "Biking Expedition & Adventure",
            icon: Bike,
            iconBg: "from-blue-500 to-indigo-600",
            badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
            image: "https://res.cloudinary.com/dbja22ql/image/upload/f_auto,q_auto,w_1200/v1793705488/DSC_5223.JPG-100kb.jpg",
            citation: "Awarded by IMA Moradabad in recognition of his extraordinary enthusiasm and relentless dedication to biking and adventurous cross-country expeditions, inspiring physicians to balance clinical excellence with outdoor vigor."
        },
        {
            id: 2,
            doctorName: "Dr. Amit Rastogi",
            awardTitle: "Passion Beyond Clinics Award",
            field: "Competitive Singing & Performing Arts",
            icon: Music,
            iconBg: "from-purple-500 to-pink-600",
            badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
            image: "https://res.cloudinary.com/dbja22ql/image/upload/f_auto,q_auto,w_1200/v1793705488/DSC_5233.JPG-100kb.jpg",
            citation: "Conferred by IMA Moradabad for his soulful musical talent, excellence in competitive vocal performances, and enriching cultural life while continuously upholding high medical service standards."
        },
        {
            id: 3,
            doctorName: "Dr. Anil Kumar Shrotriya",
            awardTitle: "Passion Beyond Clinics Award",
            field: "Bird Photography & Wildlife Conservation",
            icon: Camera,
            iconBg: "from-emerald-500 to-teal-600",
            badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
            image: "https://res.cloudinary.com/dbja22ql/image/upload/f_auto,q_auto,w_1200/v1793705488/DSC_5215.JPG-100kb.jpg",
            citation: "Honored by IMA Moradabad for his remarkable eye for nature, avian biodiversity, and high-precision bird photography, blending scientific keenness with wildlife photographic artistry."
        }
    ];

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

            {/* =========================================================
                SECTION 1: PASSION BEYOND CLINICS AWARDS (SPECIAL FELICITATIONS)
            ========================================================= */}
            <section className="pt-14 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-xs mb-3">
                            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                            Special Honors & Felicitations
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-libre">
                            Passion Beyond <span className="text-teal-600">Clinics Awards</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-playfair tracking-wide">
                            Celebrating distinguished doctors of IMA Moradabad who achieve brilliance beyond medical boundaries, excelling in art, adventure, and creative endeavors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {passionAwards.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={item.id}
                                    data-aos="fade-up"
                                    data-aos-delay={(index + 1) * 120}
                                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80 hover:-translate-y-1.5 flex flex-col group cursor-pointer"
                                    onClick={() => setActiveAwardModal(item)}
                                >
                                    {/* Award Photo with Zoom & Badge */}
                                    <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={`${item.doctorName} - ${item.awardTitle}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                                        {/* Floating Zoom Action */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                                                <Maximize2 className="w-4 h-4 text-teal-700" />
                                            </div>
                                        </div>

                                        {/* Field Badge */}
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 inline-flex items-center gap-1.5">
                                                <IconComponent className="w-3 h-3 text-amber-400" />
                                                {item.field.split('&')[0].trim()}
                                            </span>
                                        </div>

                                        {/* Doctor Name at bottom of image */}
                                        <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                                            <span className="text-[10px] font-semibold tracking-wider text-amber-300 uppercase block">
                                                Honoree
                                            </span>
                                            <h3 className="text-lg sm:text-xl font-bold font-libre drop-shadow-sm leading-tight text-white">
                                                {item.doctorName}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2.5 shadow-2xs">
                                                <Award className="w-3.5 h-3.5 text-amber-600" />
                                                <span className="text-slate-800">{item.awardTitle}</span>
                                            </div>

                                            <p className="text-slate-600 text-xs sm:text-[13px] font-playfair leading-relaxed">
                                                {item.citation}
                                            </p>
                                        </div>

                                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                            <span className="text-teal-700 font-semibold group-hover:underline inline-flex items-center gap-1">
                                                View Citation & Photo →
                                            </span>
                                            <span className="text-slate-400 text-[11px] font-medium">IMA Moradabad</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Modal for Award Lightbox */}
            {activeAwardModal && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
                    onClick={() => setActiveAwardModal(null)}
                >
                    <div
                        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setActiveAwardModal(null)}
                            className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="relative aspect-[16/10] bg-slate-900">
                            <img
                                src={activeAwardModal.image}
                                alt={activeAwardModal.doctorName}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                                    {activeAwardModal.awardTitle}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold font-libre text-white mt-0.5">
                                    {activeAwardModal.doctorName}
                                </h3>
                            </div>
                        </div>

                        <div className="p-6 bg-white">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                                    {activeAwardModal.field}
                                </span>
                                <span className="text-xs text-slate-400">Honored by IMA Moradabad</span>
                            </div>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                {activeAwardModal.citation}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Major Achievements */}
            <section className="py-16 px-6 border-t border-slate-200/60 bg-white/60">
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

            {/* Contact Section */}
            <CTA />
        </div>
       </>
    );
}
