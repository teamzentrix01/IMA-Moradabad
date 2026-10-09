import React, { useState, useEffect } from 'react';
import { 
    X, 
    ZoomIn, 
    ChevronLeft, 
    ChevronRight, 
    Calendar, 
    Tag, 
    Download, 
    Maximize2,
    Sparkles,
    Eye
} from 'lucide-react';
import Banner from '../components/ui/Banner';
import { useSearchParams } from 'react-router-dom';

export default function Image_Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [selectedYear, setSelectedYear] = useState('ALL');
    const [searchParams] = useSearchParams();
    const [activeImageIndex, setActiveImageIndex] = useState(null);

    const galleryItems = [
        {
            id: 1,
            image: '/gallery-3.jpg',
            category: 'MEDICAL CAMP',
            title: 'Free Health Checkup Camp',
            description: 'Over 1500 patients benefited from our comprehensive health screening, blood testing, and specialized consultation program.',
            date: '15 Jan 2025',
            featured: true,
            aspect: 'aspect-[4/3]'
        },
        {
            id: 2,
            image: '/gallery-2.jpg',
            category: 'AWARENESS',
            title: 'Cancer Awareness Campaign',
            description: 'Specialists imparting critical knowledge regarding early cancer detection, self-examination, and preventive steps.',
            date: '04 Feb 2025',
            hasVideo: true,
            aspect: 'aspect-[3/4]'
        },
        {
            id: 3,
            image: '/gallery-1.jpg',
            category: 'COMMUNITY',
            title: 'Vaccination Drive 2025',
            description: 'Protecting the local community and underprivileged families through timely immunization and booster doses.',
            date: '12 Apr 2025',
            aspect: 'aspect-[4/5]'
        },
        {
            id: 4,
            image: '/gallery-5.jpg',
            category: 'EVENTS',
            title: 'Doctors Day Celebration',
            description: 'Honoring senior medical practitioners and healthcare pioneers with awards, cultural events, and dinner.',
            date: '01 Jul 2025',
            aspect: 'aspect-square'
        },
        {
            id: 5,
            image: '/gallery-6.jpg',
            category: 'INSPIRATION',
            title: 'Serving With Compassion',
            description: 'Dedicated healthcare teams visiting remote clusters of Moradabad to ensure healthcare access for every family.',
            date: '19 Aug 2025',
            aspect: 'aspect-[3/2]'
        },
        {
            id: 6,
            image: '/gallery-7.jpg',
            category: 'COMMUNITY',
            title: 'Girls Day Health Initiative',
            description: 'Free pediatric and gynecological consultations alongside nutritional supplements distribution for 1500+ daughters.',
            date: '15 Jan 2026',
            hasVideo: true,
            featured: true,
            aspect: 'aspect-[4/3]'
        },
        {
            id: 7,
            image: '/gallery-8.jpg',
            category: 'EDUCATION',
            title: 'Medical Training Workshops',
            description: 'Advanced hands-on surgical and diagnostic workshops enhancing clinical skills for upcoming doctors.',
            date: '10 Feb 2026',
            aspect: 'aspect-[16/10]'
        },
        {
            id: 8,
            image: '/gallery-9.jpg',
            category: 'SEMINARS',
            title: 'Healthcare Symposium 2026',
            description: 'Eminent medical professors delivering keynote sessions on modern clinical interventions and digital health.',
            date: '22 Mar 2026',
            aspect: 'aspect-[4/5]'
        },
        {
            id: 9,
            image: '/gallery-10.jpg',
            category: 'EVENTS',
            title: 'Community Blood Donation',
            description: 'Voluntary donors step forward in record numbers to bolster Moradabad blood banks for trauma and emergency patients.',
            date: '14 May 2026',
            aspect: 'aspect-square'
        },
        {
            id: 10,
            image: '/gallery-11.jpg',
            category: 'INSPIRATION',
            title: 'Excellence In Healthcare',
            description: 'Upholding highest medical ethics, patient dignity, and comprehensive care standards across all hospitals in Moradabad.',
            date: '18 Jun 2026',
            aspect: 'aspect-[4/3]'
        }
    ];

    // Map calendar years in the archive to IMA session labels.
    const getYearFromDate = (dateStr) => {
        const match = dateStr?.match(/\b(20\d{2})\b/);
        if (!match) return '';
        const year = Number(match[1]);
        return `${year}/${String(year + 1).slice(-2)}`;
    };

    // Extract all distinct years from the gallery items dynamically, sorted
    const distinctYears = Array.from(
        new Set(galleryItems.map(item => getYearFromDate(item.date)).filter(Boolean))
    ).sort();

    const years = ['ALL', ...Array.from(new Set([...distinctYears, '2025/26', '2026/27']))].sort((a, b) => a === 'ALL' ? -1 : b === 'ALL' ? 1 : a.localeCompare(b));
    const categories = ['ALL', 'MEDICAL CAMP', 'COMMUNITY', 'EVENTS', 'EDUCATION', 'AWARENESS'];

    useEffect(() => {
        setSelectedYear(searchParams.get('year') || 'ALL');
    }, [searchParams]);

    const filteredItems = galleryItems.filter(item => {
        const itemYear = getYearFromDate(item.date);
        const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
        const matchesYear = selectedYear === 'ALL' || itemYear === selectedYear;
        return matchesCategory && matchesYear;
    });

    // Keyboard navigation in lightbox modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeImageIndex === null) return;
            if (e.key === 'Escape') setActiveImageIndex(null);
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeImageIndex, filteredItems.length]);

    const openLightbox = (index) => {
        setActiveImageIndex(index);
    };

    const closeLightbox = () => {
        setActiveImageIndex(null);
    };

    const nextImage = () => {
        setActiveImageIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const prevImage = () => {
        setActiveImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

    return (
        <>
            <Banner title="IMAGE GALLERY" />

            <div className="min-h-screen bg-slate-50/70 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-xs">
                            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                            Visual Archives
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2.5 mb-2 font-libre">
                            Memories & Highlights
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-600 font-playfair tracking-wide max-w-xl mx-auto">
                            A curated Pinterest-style showcase of IMA Moradabad's medical camps, conventions, health drives, and celebrations. Click any photo to view in high definition.
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
                                            ? 'bg-teal-700 text-white shadow-md scale-105 ring-2 ring-teal-700/30'
                                            : 'bg-white text-slate-700 hover:bg-teal-50 border border-slate-200 hover:border-teal-300'
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

                    {/* Pinterest Masonry Grid */}
                    <div className="masonry-grid">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="masonry-item group"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                    
                                    {/* Image with compact sizing & zoom on hover */}
                                    <div className="relative overflow-hidden bg-slate-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-full h-auto object-cover max-h-[380px] transition-transform duration-500 ease-out group-hover:scale-105"
                                        />

                                        {/* Hover Overlay with Lightbox trigger */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                                <Maximize2 className="w-4 h-4 text-teal-700" />
                                            </div>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-2.5 left-2.5">
                                            <span className="bg-slate-900/75 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/20">
                                                {item.category}
                                            </span>
                                        </div>

                                        {item.featured && (
                                            <div className="absolute top-2.5 right-2.5 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                                                Featured
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Details Footer */}
                                    <div className="p-3.5 sm:p-4">
                                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1 font-medium">
                                            <Calendar className="w-3 h-3 text-teal-600" />
                                            <span>{item.date}</span>
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-900 font-libre group-hover:text-teal-700 transition-colors leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 font-playfair line-clamp-2 mt-1 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                            <p className="text-sm text-slate-500">No photos available under this category.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* =========================================================
                POPUP LIGHTBOX MODAL (Full View & Navigation)
            ========================================================= */}
            {activeItem && (
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
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 cursor-pointer"
                        title="Previous Image (←)"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Next Arrow */}
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 cursor-pointer"
                        title="Next Image (→)"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Modal Content Box */}
                    <div 
                        className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Lightbox Image (High quality display) */}
                        <div className="relative flex-1 bg-black/60 flex items-center justify-center min-h-[300px] max-h-[60vh] md:max-h-[85vh] overflow-hidden">
                            <img
                                src={activeItem.image}
                                alt={activeItem.title}
                                className="w-full h-full max-h-[80vh] object-contain"
                            />
                        </div>

                        {/* Lightbox Info Panel */}
                        <div className="w-full md:w-80 p-5 sm:p-6 bg-slate-900 text-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2.5 py-0.5 rounded-full border border-teal-800/60">
                                        {activeItem.category}
                                    </span>
                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {activeItem.date}
                                    </span>
                                </div>

                                <h2 className="text-lg sm:text-xl font-bold font-libre mb-2 text-white">
                                    {activeItem.title}
                                </h2>

                                <p className="text-xs sm:text-sm text-slate-300 font-playfair leading-relaxed">
                                    {activeItem.description}
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                                <span>{activeImageIndex + 1} of {filteredItems.length} photos</span>
                                <span className="text-slate-500 text-[11px]">Use ← → keys</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
