import { Calendar, Heart, Droplet, Users2, Users } from 'lucide-react';


export default function Events() {
    const events = [
        {
            icon: Calendar,
            title: "Continuing Medical Education (CME) Programs",
            description: "Regular educational programs to keep medical professionals updated with latest practices.",
            color: "from-teal-400 to-teal-600",
            bgColor: "bg-teal-50",
            iconBg: "bg-teal-100"
        },
        {
            icon: Heart,
            title: "National Health Days Observance",
            description: "TB Day, Heart Day, and other awareness campaigns for public health.",
            color: "from-emerald-400 to-emerald-600",
            bgColor: "bg-emerald-50",
            iconBg: "bg-emerald-100"
        },
        {
            icon: Droplet,
            title: "Blood Donation & Health Awareness Camps",
            description: "Community service initiatives promoting blood donation and health education.",
            color: "from-green-400 to-green-600",
            bgColor: "bg-green-50",
            iconBg: "bg-green-100"
        },
        {
            icon: Users,
            title: "Networking Meets for Doctors",
            description: "Professional gatherings fostering collaboration and knowledge exchange among doctors.",
            color: "from-cyan-400 to-cyan-600",
            bgColor: "bg-cyan-50",
            iconBg: "bg-cyan-100"
        }
    ];

    return (
        <section className="py-16 px-6 bg-gradient-to-b from-teal-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
                                    < Users2 className="w-5 h-5" />
                                    <span className="font-semibold">Caring Beyond Clinics</span>
                                  </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-libre">
                        Events & <span className="text-teal-600">Activities</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-playfair tracking-wide">
                        Join our vibrant community through various events and educational programs
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <div 
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 120}
                                className={`${event.bgColor} rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-teal-200 group cursor-pointer`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                                        <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
