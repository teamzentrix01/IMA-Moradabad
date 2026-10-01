import { Activity, Users, Stethoscope, AlertCircle } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            icon: Activity,
            title: "Community Health Camps",
            description: "Free and subsidized medical check-ups.",
            color: "from-teal-400 to-teal-600"
        },
        {
            icon: Users,
            title: "Awareness Drives",
            description: "Public education on hygiene, preventive care, and lifestyle diseases.",
            color: "from-cyan-400 to-cyan-600"
        },
        {
            icon: Stethoscope,
            title: "Doctor Support",
            description: "Professional networking, workshops, and welfare activities.",
            color: "from-emerald-400 to-emerald-600"
        },
        {
            icon: AlertCircle,
            title: "Emergency Response",
            description: "Coordinating healthcare efforts during crises and epidemics.",
            color: "from-teal-500 to-emerald-600"
        }
    ];

    return (
        <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-3">
                        <span className="text-xs sm:text-sm font-semibold text-teal-700 bg-teal-100/80 px-4 py-1.5 rounded-full">
                            What We Offer
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-libre">
                        Services & <span className="text-teal-600">Initiatives</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div 
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-teal-200 group"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}