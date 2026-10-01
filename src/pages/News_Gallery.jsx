import React from 'react';
import { MessageCircle, Eye } from 'lucide-react';
import { Heart, Award, Sparkles, Users } from 'lucide-react';
import Banner from '../components/ui/Banner';

const News_Gallery = () => {
    const featuredArticles = [
        {
            id: 1,
            title: "IMA Moradabad Leads Initiative for Universal Healthcare Access in Uttar Pradesh",
            excerpt: "In a landmark initiative this month, IMA Moradabad has partnered with government bodies and healthcare organizations to ensure accessible medical services for all citizens across Moradabad district and surrounding regions.",
            author: "Dr. Rajesh Kumar",
            date: "20 October 2025",
            image: "/news-1.jpg",
            large: true
        }
    ];

    const sideArticles = [
        {
            id: 2,
            category: "HEALTHCARE",
            title: "Medical professionals unite for community health programs across Moradabad region",
            author: "Dr. Priya Sharma",
            date: "18 October 2025",
            image: "/news-2.jpg",
            dark: true
        },
        {
            id: 3,
            quote: "Together we stand committed to providing quality healthcare to every citizen of Moradabad, ensuring no one is left behind in accessing medical services",
            author: "Dr. Amit Verma, IMA Secretary",
            image: "/news-3.jpg",
            isQuote: true
        }
    ];

    const recentArticles = [
        {
            id: 4,
            title: "Annual medical conference brings together 500+ doctors in Moradabad for knowledge exchange",
            author: "Dr. Sunita Gupta",
            image: "/news-4.jpg",
            category: null,
            comments: 0,
            views: 563,
            large: true,
            dark: true
        },
        {
            id: 5,
            title: "Free health camp conducted in rural areas serves 1000+ patients",
            category: "COMMUNITY",
            image: "/news-5.jpg",
            comments: 0,
            views: 563
        },
        {
            id: 6,
            title: "IMA Moradabad launches COVID vaccination awareness drive",
            category: "PUBLIC HEALTH",
            image: "/news-6.jpg",
            comments: 0,
            views: 242
        },
        {
            id: 7,
            title: "Blood donation camp organized at IMA headquarters saves multiple lives",
            category: "SOCIAL SERVICE",
            image: "/news-7.jpg",
            comments: 0,
            views: 433
        },
        {
            id: 8,
            title: "Medical education workshop for young doctors held successfully",
            category: "EDUCATION",
            image: "/news-8.jpg",
            comments: 0,
            views: 276
        }
    ];

    const bottomArticles = [
        {
            id: 9,
            category: "PUBLIC HEALTH",
            title: "IMA Moradabad Spearheads Preventive Healthcare Initiative Across District",
            excerpt: "In collaboration with local hospitals and healthcare centers, IMA Moradabad has launched a comprehensive preventive healthcare program targeting diabetes and hypertension screening",
            author: "Dr. Vikram Singh",
            comments: 0,
            views: "1.62K",
            image: "/news-9.jpg"
        },
        {
            id: 10,
            category: "MEDICAL CONFERENCE",
            title: "State-level CME program attracts medical professionals from across Uttar Pradesh",
            excerpt: "On behalf of the medical community and healthcare professionals across Moradabad, IMA organized a successful Continuing Medical Education program focusing on latest medical advancements",
            author: "Dr. Neha Agarwal",
            comments: 0,
            views: 438,
            image: "/news-10.jpg"
        },
        {
            id: 11,
            category: "COMMUNITY HEALTH",
            title: "IMA Moradabad provides free medical consultations to underprivileged communities in UP",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
            large: true
        }
    ];

    const smallArticles = [
        { id: 12, category: "HEALTHCARE", title: "New medical facility inaugurated", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=150&fit=crop" },
        { id: 13, category: "AWARDS", title: "IMA honors senior doctors", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&h=150&fit=crop" },
        { id: 14, category: "NEWS", title: "Health awareness campaign", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=200&h=150&fit=crop" },
        { id: 15, category: "COMMUNITY", title: "Medical outreach program", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=150&fit=crop" },
        { id: 16, category: "EVENTS", title: "World Health Day celebration", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=200&h=150&fit=crop" }
    ];

    return (
        <>
            <Banner title="NEWS GALLERY" />
            <div className="bg-white">
                {/* MAIN CONTENT */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="mb-10 sm:mb-12">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 font-libre">News Gallery</h1>
                        <p className="text-base sm:text-lg text-slate-600 font-playfair tracking-wide">Discover the latest news, milestones, and stories that showcase our dedication</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
                        {/* Main Featured Article */}
                        <div data-aos="fade-right" data-aos-duration="800" className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    src={featuredArticles[0].image}
                                    alt={featuredArticles[0].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-2 sm:mb-3 leading-tight">
                                        {featuredArticles[0].title}
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                                        {featuredArticles[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop"
                                            alt={featuredArticles[0].author}
                                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                                        />
                                        <div>
                                            <p className="text-sm sm:text-base font-medium">{featuredArticles[0].author}</p>
                                            <p className="text-xs sm:text-sm text-gray-300">{featuredArticles[0].date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Articles */}
                        <div data-aos="fade-left" data-aos-duration="800" className="space-y-4 sm:space-y-6">
                            {sideArticles.map((article) => (
                                <div key={article.id} className="relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-md">
                                    <img
                                        src={article.image}
                                        alt={article.title || article.quote}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                                        {article.isQuote ? (
                                            <>
                                                <p className="text-base sm:text-lg font-serif italic mb-2 sm:mb-3 leading-relaxed line-clamp-3">
                                                    "{article.quote}"
                                                </p>
                                                <p className="text-xs sm:text-sm font-medium">{article.author}</p>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                                                    {article.category}
                                                </span>
                                                <h3 className="text-base sm:text-lg font-serif font-bold mb-2 leading-tight line-clamp-2">
                                                    {article.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                                    <p className="font-medium">{article.author}</p>
                                                    <span>•</span>
                                                    <p className="text-gray-300">{article.date}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recently Added Section */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                            <h2 className="text-xl sm:text-2xl font-serif font-bold">Recently Added</h2>
                            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                                {/* <button className="font-semibold text-gray-900 border-b-2 border-gray-900 pb-1">ALL</button>
                                <button className="text-gray-500 hover:text-gray-900">TRENDING</button>
                                <button className="text-gray-500 hover:text-gray-900 hidden sm:inline">INTERNATIONAL</button>
                                <button className="text-gray-500 hover:text-gray-900">POLITICS</button>
                                <button className="text-gray-500 hover:text-gray-900">BUSINESS</button> */}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {recentArticles.map((article, index) => (
                                <div
                                    key={article.id}
                                    data-aos="fade-up"
                                    data-aos-delay={(index % 3) * 120}
                                    className={`${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''} rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}
                                >
                                    <div className="relative h-48 sm:h-64 lg:h-full group cursor-pointer">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 ${article.dark ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' : 'bg-black/20 group-hover:bg-black/40'} transition-all duration-300`} />
                                        <div className={`absolute ${index === 0 ? 'bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8' : 'bottom-4 left-4 right-4'} text-white`}>
                                            {article.category && (
                                                <span className="text-xs font-semibold uppercase tracking-wider mb-2 inline-block text-blue-400">
                                                    {article.category}
                                                </span>
                                            )}
                                            <h3 className={`${index === 0 ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-base sm:text-lg lg:text-xl'} font-serif font-bold mb-2 sm:mb-3 leading-tight line-clamp-3`}>
                                                {article.title}
                                            </h3>
                                            {index === 0 && (
                                                <div className="flex items-center gap-2 text-xs sm:text-sm mb-2">
                                                    <p className="font-medium">{article.author}</p>
                                                </div>
                                            )}
                                            {article.comments !== undefined && (
                                                <div className="flex items-center gap-4 text-xs sm:text-sm">
                                                    <span className="flex items-center gap-1">
                                                        <MessageCircle size={12} className="sm:w-4 sm:h-4" />
                                                        {article.comments}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Eye size={12} className="sm:w-4 sm:h-4" />
                                                        {article.views}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Articles Grid */}
                    {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                        {bottomArticles.map((article, index) => (
                            <div key={article.id} className={`${index === 2 ? 'lg:row-span-2' : ''}`}>
                                {index < 2 ? (
                                    <div className="border-b pb-6">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 inline-block">
                                            {article.category}
                                        </span>
                                        <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 leading-tight hover:text-blue-600 cursor-pointer line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                                                    alt={article.author}
                                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                                                />
                                                <span className="text-xs sm:text-sm font-medium">{article.author}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <MessageCircle size={12} className="sm:w-4 sm:h-4" />
                                                    {article.comments}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Eye size={12} className="sm:w-4 sm:h-4" />
                                                    {article.views}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative h-48 sm:h-64 lg:h-full group cursor-pointer">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                                            <span className="text-xs font-semibold uppercase tracking-wider mb-2 inline-block text-blue-400">
                                                {article.category}
                                            </span>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold leading-tight line-clamp-3">
                                                {article.title}
                                            </h3>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div> */}

                    {/* Small Articles Carousel */}
                    {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                        {smallArticles.map((article) => (
                            <div key={article.id} className="cursor-pointer group">
                                <div className="relative h-24 sm:h-28 lg:h-32 mb-2 overflow-hidden rounded">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1 inline-block">
                                    {article.category}
                                </span>
                                <h4 className="text-xs sm:text-sm font-serif font-bold leading-tight group-hover:text-blue-600 line-clamp-2">
                                    {article.title}
                                </h4>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default News_Gallery;
