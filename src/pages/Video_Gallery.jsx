import React, { useState, useEffect } from 'react';
import { 
    X, 
    Play, 
    ChevronLeft, 
    ChevronRight, 
    Video as VideoIcon, 
    Calendar, 
    Sparkles, 
    ExternalLink 
} from 'lucide-react';
import Banner from '../components/ui/Banner';

const Video_Gallery = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            id: 1,
            title: "IMA Moradabad Health Camp 2024",
            embedUrl: "https://www.youtube.com/embed/4SwOZwuNtEw",
            videoId: "4SwOZwuNtEw",
            category: "HEALTH CAMP",
            date: "2024",
            description: "Community health camp organized by IMA Moradabad for preventive healthcare, free vital check-ups, and medicine distribution."
        },
        {
            id: 2,
            title: "Annual Medical Conference Highlights",
            embedUrl: "https://www.youtube.com/embed/NUobEk-aV9I",
            videoId: "NUobEk-aV9I",
            category: "CONFERENCE",
            date: "2024",
            description: "Key highlights from IMA Moradabad's annual medical conference featuring renowned healthcare professionals and keynote addresses."
        },
        {
            id: 3,
            title: "Blood Donation Drive Success",
            embedUrl: "https://www.youtube.com/embed/xq6UEqixQFo",
            videoId: "xq6UEqixQFo",
            category: "BLOOD DRIVE",
            date: "2024",
            description: "Successful voluntary blood donation camp conducted by IMA Moradabad saving multiple critical lives across the community."
        },
        {
            id: 4,
            title: "COVID-19 Vaccination Awareness",
            embedUrl: "https://www.youtube.com/embed/d5dp03lniB0",
            videoId: "d5dp03lniB0",
            category: "AWARENESS",
            date: "2024",
            description: "IMA Moradabad's vaccination drive and comprehensive public health awareness campaign across Moradabad and Western UP."
        },
        {
            id: 5,
            title: "World Health Day 2024 Celebration",
            embedUrl: "https://www.youtube.com/embed/F3FUBrhgvLI",
            videoId: "F3FUBrhgvLI",
            category: "CELEBRATION",
            date: "2024",
            description: "World Health Day celebrations with free medical consultations, walkathons, and public health screening programs."
        },
        {
            id: 6,
            title: "CME Workshop for Doctors",
            embedUrl: "https://www.youtube.com/embed/-nz179qIZJI",
            videoId: "-nz179qIZJI",
            category: "CME WORKSHOP",
            date: "2024",
            description: "Continuing Medical Education workshop on latest medical technologies, emergency trauma protocols, and surgical advancements."
        },
        {
            id: 7,
            title: "Rural Healthcare Outreach",
            embedUrl: "https://www.youtube.com/embed/-nz179qIZJI",
            videoId: "-nz179qIZJI",
            category: "OUTREACH",
            date: "2024",
            description: "IMA Moradabad's mobile healthcare mission providing specialist consultations and diagnostics in rural Uttar Pradesh villages."
        },
        {
            id: 8,
            title: "Medical Ethics Conference",
            embedUrl: "https://www.youtube.com/embed/NUobEk-aV9I",
            videoId: "NUobEk-aV9I",
            category: "SEMINAR",
            date: "2024",
            description: "Symposium on medical jurisprudence, ethical patient care standards, and doctor-patient trust building for Moradabad physicians."
        }
    ];

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedVideo(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const openModal = (video) => {
        setSelectedVideo(video);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    return (
        <>
            <Banner title="VIDEO GALLERY" />
            <div className="min-h-screen bg-slate-50/70 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                            <VideoIcon className="w-3.5 h-3.5 text-rose-600" />
                            Video Archives
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2.5 mb-2 font-libre">
                            Featured Video Highlights
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-600 font-playfair tracking-wide max-w-xl mx-auto">
                            Watch recorded sessions, health drives, awareness talks, and celebrations of IMA Moradabad. Click any card to play in high-definition popup player.
                        </p>
                    </div>

                    {/* Videos Grid - Pinterest / Sleek Card Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {videos.map((video, index) => (
                            <div
                                key={video.id}
                                data-aos="fade-up"
                                data-aos-delay={(index % 4) * 80}
                                onClick={() => openModal(video)}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:-translate-y-1 cursor-pointer flex flex-col"
                            >
                                {/* Thumbnail Container with Play Overlay */}
                                <div className="relative aspect-[9/14] bg-slate-950 overflow-hidden">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                                        alt={video.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
                                    />
                                    
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Category Pill */}
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/20">
                                            {video.category}
                                        </span>
                                    </div>

                                    {/* Pulsing Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                                            <Play className="w-5 h-5 fill-white ml-0.5" />
                                        </div>
                                    </div>

                                    {/* Bottom Title on Thumbnail */}
                                    <div className="absolute bottom-3 left-3 right-3 text-white">
                                        <p className="text-[11px] text-rose-300 font-semibold mb-0.5">Click to Play</p>
                                        <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2 drop-shadow-sm font-libre">
                                            {video.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Video Info Footer */}
                                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between bg-white">
                                    <p className="text-slate-600 text-xs line-clamp-2 font-playfair leading-relaxed">
                                        {video.description}
                                    </p>
                                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-rose-600" /> {video.date}
                                        </span>
                                        <span className="text-rose-600 font-semibold group-hover:underline">
                                            Watch Now →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* =========================================================
                POPUP VIDEO PLAYER MODAL
            ========================================================= */}
            {selectedVideo && (
                <div 
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all duration-300 animate-in fade-in"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 cursor-pointer"
                        title="Close (Esc)"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Modal Content Box */}
                    <div 
                        className="relative max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* 16:9 Responsive Video Player */}
                        <div className="relative aspect-video bg-black">
                            <iframe
                                src={`${selectedVideo.embedUrl}?autoplay=1`}
                                title={selectedVideo.title}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Video Info under Player */}
                        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-start justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-2.5 py-0.5 rounded-full border border-rose-800/60">
                                        {selectedVideo.category}
                                    </span>
                                    <span className="text-xs text-slate-400">
                                        {selectedVideo.date}
                                    </span>
                                </div>
                                <h2 className="text-base sm:text-lg font-bold font-libre text-white">
                                    {selectedVideo.title}
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-300 font-playfair mt-1 leading-relaxed">
                                    {selectedVideo.description}
                                </p>
                            </div>

                            <a
                                href={`https://www.youtube.com/watch?v=${selectedVideo.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-rose-300 hover:text-white bg-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors"
                            >
                                Open on YouTube <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Video_Gallery;
