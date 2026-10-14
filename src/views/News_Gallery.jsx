import React, { useState, useEffect } from 'react';
import { 
    X, 
    ChevronLeft, 
    ChevronRight, 
    Calendar, 
    Eye, 
    Sparkles, 
    Maximize2, 
    Newspaper, 
    User,
    ArrowUpRight
} from 'lucide-react';
import Banner from '../components/ui/Banner';
import { useSearchParams } from 'react-router-dom';

const News_Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [selectedYear, setSelectedYear] = useState('ALL');
    const [searchParams] = useSearchParams();
    const [activeNewsIndex, setActiveNewsIndex] = useState(null);

    const newsArticles = [
        {
            id: 1,
            title: "IMA Moradabad Leads Initiative for Universal Healthcare Access in UP",
            excerpt: "In a landmark initiative, IMA Moradabad has partnered with government health bodies and leading multi-specialty hospitals to ensure accessible emergency medical services across Moradabad district and Western UP.",
            fullStory: "The initiative includes setting up mobile rural diagnostic clinics, subsidizing critical surgeries, and streamlining inter-hospital bed availability during emergencies. Over 500 member physicians have volunteered their services for weekly free rural consultation blocks.",
            author: "Dr. Rajesh Kumar",
            role: "President, IMA Moradabad",
            date: "20 Oct 2025",
            year: "2025",
            category: "HEALTHCARE",
            image: "/news-1.jpg",
            views: "2.4K",
            featured: true
        },
        {
            id: 2,
            title: "Medical Professionals Unite for Community Health Programs Across Moradabad",
            excerpt: "Over 200 doctors gathered at IMA Bhawan to formulate an integrated public health outreach program for communicable diseases.",
            fullStory: "The multi-phase campaign targets seasonal epidemic control, dengue surveillance, clean water advocacy, and early screening for diabetic retinopathy in peri-urban slums around Moradabad.",
            author: "Dr. Priya Sharma",
            role: "Vice President",
            date: "18 Oct 2025",
            year: "2025",
            category: "COMMUNITY",
            image: "/news-2.jpg",
            views: "1.8K"
        },
        {
            id: 3,
            title: "Executive Message on Healthcare Dignity & Ethical Practice",
            excerpt: "'Together we stand committed to providing ethical, compassionate healthcare to every citizen of Moradabad without discrimination.'",
            fullStory: "Addressing the general body, office bearers highlighted the necessity of legal defense protocols, violence prevention in hospitals, and upholding medical ethics in clinical trials.",
            author: "Dr. Amit Verma",
            role: "IMA Honorary Secretary",
            date: "12 Oct 2025",
            year: "2025",
            category: "EDITORIAL",
            image: "/news-3.jpg",
            views: "980"
        },
        {
            id: 4,
            title: "Annual Medical Conference Brings 500+ Doctors for Knowledge Exchange",
            excerpt: "Keynote lectures on interventional cardiology, robotic surgery, and AI in diagnostic pathology were delivered by leading faculty.",
            fullStory: "Delegates from across the country participated in 14 specialized CME symposiums, debating clinical protocols, new oncology medications, and pediatric life support standards.",
            author: "Dr. Sunita Gupta",
            role: "Academic Coordinator",
            date: "05 Feb 2026",
            year: "2026",
            category: "CONFERENCE",
            image: "/news-4.jpg",
            views: "3.1K",
            featured: true
        },
        {
            id: 5,
            title: "Free Rural Health Camp Serves 1000+ Underprivileged Patients",
            excerpt: "Free general medicine, pediatric, and gynecological examinations along with free medication distribution were held in rural blocks.",
            fullStory: "A total of 1,124 patients were screened. Blood sugar, ECG, and hemoglobin tests were provided completely free of charge under IMA sponsorship.",
            author: "Dr. CP Singh",
            role: "President-Elect",
            date: "18 Mar 2026",
            year: "2026",
            category: "COMMUNITY",
            image: "/news-5.jpg",
            views: "1.5K"
        },
        {
            id: 6,
            title: "IMA Moradabad Launches Vaccination & Preventive Immunization Drive",
            excerpt: "Focusing on pediatric immunization and adult flu vaccination ahead of winter, specialized clinics were deployed.",
            fullStory: "Over 800 children received crucial booster shots while awareness seminars on cervical cancer vaccination were conducted in local Moradabad colleges.",
            author: "Dr. Sudeep Kaur",
            role: "Secretary",
            date: "22 Apr 2026",
            year: "2026",
            category: "PUBLIC HEALTH",
            image: "/news-6.jpg",
            views: "1.2K"
        },
        {
            id: 7,
            title: "Mega Blood Donation Camp at IMA Headquarters Collects 250+ Units",
            excerpt: "A landmark voluntary donation drive coordinated with district government blood banks to prevent critical shortages.",
            fullStory: "Doctors, youth volunteers, and local citizens participated in large numbers. Donors received certified health recognition cards and honorary badges.",
            author: "Dr. Manoj Saxena",
            role: "Blood Bank Incharge",
            date: "15 May 2026",
            year: "2026",
            category: "SOCIAL SERVICE",
            image: "/news-7.jpg",
            views: "2.1K"
        },
        {
            id: 8,
            title: "Continuing Medical Education Workshop for Resident & Young Doctors",
            excerpt: "Hands-on emergency trauma resuscitation and ultrasound-guided procedures demonstrated by senior consultants.",
            fullStory: "Young resident doctors from across Western UP medical colleges practiced emergency airway management, CPR, and trauma triage in state-of-the-art simulation labs.",
            author: "Dr. Arvind Pathak",
            role: "CME Director",
            date: "10 Jun 2026",
            year: "2026",
            category: "EDUCATION",
            image: "/news-8.jpg",
            views: "1.7K"
        }
    ];

    // Map calendar years in the archive to IMA session labels.
    const getYearFromDate = (dateStr) => {
        const match = dateStr?.match(/\b(20\d{2})\b/);
        if (!match) return '';
        const year = Number(match[1]);
        return `${year}/${String(year + 1).slice(-2)}`;
    };

    const distinctYears = Array.from(
        new Set(newsArticles.map(item => getYearFromDate(item.date)).filter(Boolean))
    ).sort();

    const years = ['ALL', ...Array.from(new Set([...distinctYears, '2025/26', '2026/27']))].sort((a, b) => a === 'ALL' ? -1 : b === 'ALL' ? 1 : a.localeCompare(b));
    const categories = ['ALL', 'HEALTHCARE', 'COMMUNITY', 'CONFERENCE', 'PUBLIC HEALTH', 'SOCIAL SERVICE', 'EDUCATION'];

    useEffect(() => {
        setSelectedYear(searchParams.get('year') || 'ALL');
    }, [searchParams]);

    const filteredNews = newsArticles.filter(item => {
        const itemYear = getYearFromDate(item.date);
        const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
        const matchesYear = selectedYear === 'ALL' || itemYear === selectedYear;
        return matchesCategory && matchesYear;
    });

    // Keyboard navigation in lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeNewsIndex === null) return;
            if (e.key === 'Escape') setActiveNewsIndex(null);
            if (e.key === 'ArrowRight') nextNews();
            if (e.key === 'ArrowLeft') prevNews();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeNewsIndex, filteredNews.length]);

    const openLightbox = (index) => {
        setActiveNewsIndex(index);
    };

    const closeLightbox = () => {
        setActiveNewsIndex(null);
    };

    const nextNews = () => {
        setActiveNewsIndex((prev) => (prev + 1) % filteredNews.length);
    };

    const prevNews = () => {
        setActiveNewsIndex((prev) => (prev - 1 + filteredNews.length) % filteredNews.length);
    };

    const activeNews = activeNewsIndex !== null ? filteredNews[activeNewsIndex] : null;

    return (
        <>
            <Banner title="NEWS GALLERY" />

            <div className="min-h-screen bg-slate-50/70 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                            <Newspaper className="w-3.5 h-3.5 text-rose-600" />
                            Press & Media Coverage
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2.5 mb-2 font-libre">
                            News & Press Gallery
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-600 font-playfair tracking-wide max-w-xl mx-auto">
                            Explore media reports, press releases, and milestones of Indian Medical Association Moradabad in a sleek Pinterest layout. Click any news photo to view details in full popup.
                        </p>

                        {/* Year Filter Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider self-center mr-1">Year:</span>
                            {years.map((yr) => (
                                <button
                                    key={yr}
                                    onClick={() => setSelectedYear(yr)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                                        selectedYear === yr
                                            ? 'bg-rose-700 text-white shadow-md scale-105 ring-2 ring-rose-700/30'
                                            : 'bg-white text-slate-700 hover:bg-rose-50 border border-slate-200 hover:border-rose-300'
                                    }`}
                                >
                                    {yr === 'ALL' ? 'All Years' : yr}
                                </button>
                            ))}
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3.5">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                        selectedCategory === cat
                                            ? 'bg-slate-900 text-white shadow-sm'
                                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 hover:text-slate-900'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Pinterest Masonry Grid for News */}
                    <div className="masonry-grid">
                        {filteredNews.map((item, index) => (
                            <div
                                key={item.id}
                                className="masonry-item group"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    
                                    {/* Compressed Image container */}
                                    <div className="relative overflow-hidden bg-slate-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-full h-auto object-cover max-h-[340px] transition-transform duration-500 ease-out group-hover:scale-105"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                            <div className="w-10 h-10 rounded-full bg-white/95 text-rose-700 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                                <Maximize2 className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-2.5 left-2.5">
                                            <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/20">
                                                {item.category}
                                            </span>
                                        </div>

                                        {item.featured && (
                                            <div className="absolute top-2.5 right-2.5 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                                                Top Story
                                            </div>
                                        )}
                                    </div>

                                    {/* News Details Footer */}
                                    <div className="p-4 sm:p-5">
                                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-medium">
                                            <span className="flex items-center gap-1 text-slate-500">
                                                <Calendar className="w-3 h-3 text-rose-600" />
                                                {item.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Eye className="w-3 h-3" />
                                                {item.views}
                                            </span>
                                        </div>

                                        <h3 className="text-sm font-bold text-slate-900 font-libre group-hover:text-rose-700 transition-colors leading-snug line-clamp-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-xs text-slate-600 font-playfair line-clamp-3 mt-1.5 leading-relaxed">
                                            {item.excerpt}
                                        </p>

                                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                            <span className="font-semibold text-slate-700 truncate max-w-[170px]">{item.author}</span>
                                            <span className="text-rose-600 font-semibold inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                                                Read More <ArrowUpRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredNews.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                            <p className="text-sm text-slate-500">No news articles found in this category.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* =========================================================
                POPUP LIGHTBOX MODAL FOR NEWS
            ========================================================= */}
            {activeNews && (
                <div 
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all duration-300 animate-in fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 cursor-pointer"
                        title="Close (Esc)"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Prev Arrow */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevNews(); }}
                        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 cursor-pointer"
                        title="Previous News (←)"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Next Arrow */}
                    <button
                        onClick={(e) => { e.stopPropagation(); nextNews(); }}
                        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 cursor-pointer"
                        title="Next News (→)"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Modal Content Box */}
                    <div 
                        className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* News Image Display */}
                        <div className="relative flex-1 bg-black/70 flex items-center justify-center min-h-[280px] max-h-[50vh] md:max-h-[85vh] overflow-hidden">
                            <img
                                src={activeNews.image}
                                alt={activeNews.title}
                                className="w-full h-full max-h-[80vh] object-contain"
                            />
                        </div>

                        {/* News Story Panel */}
                        <div className="w-full md:w-96 p-5 sm:p-6 bg-slate-900 text-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto max-h-[40vh] md:max-h-[85vh]">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-2.5 py-0.5 rounded-full border border-rose-800/60">
                                        {activeNews.category}
                                    </span>
                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {activeNews.date}
                                    </span>
                                </div>

                                <h2 className="text-base sm:text-lg font-bold font-libre mb-2.5 text-white leading-snug">
                                    {activeNews.title}
                                </h2>

                                <div className="space-y-2 text-xs sm:text-[13px] text-slate-300 font-playfair leading-relaxed">
                                    <p className="font-semibold text-rose-200">
                                        {activeNews.excerpt}
                                    </p>
                                    <p className="text-slate-300/90 pt-1">
                                        {activeNews.fullStory}
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-full bg-rose-900/60 border border-rose-700/50 flex items-center justify-center text-rose-300 text-xs font-bold">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-white">{activeNews.author}</p>
                                        <p className="text-[11px] text-slate-400">{activeNews.role}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                                <span>{activeNewsIndex + 1} of {filteredNews.length} articles</span>
                                <span className="text-slate-500 text-[11px]">Use ← → keys</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default News_Gallery;
