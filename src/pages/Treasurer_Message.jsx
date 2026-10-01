import { useState } from 'react';
import Banner from '../components/ui/Banner';
import AnimatedCounter from '../components/ui/AnimatedCounter';

export default function Treasurer_Message() {
    const [selectedSection, setSelectedSection] = useState('vision');
    const [imageHover, setImageHover] = useState(false);

    const sections = {
        vision: {
            title: 'Our Vision',
            content: 'As  Treasurer  of IMA Moradabad, I envision an organization that serves as the backbone of medical excellence in our city. Our vision is to create a unified platform where every medical professional feels empowered, supported, and connected. We aim to build a healthcare community that prioritizes continuous learning, embraces technological advancement, and remains steadfast in its commitment to serve the people of Moradabad with compassion and clinical excellence.'
        },
        mission: {
            title: 'Our Mission',
            content: 'My mission as  Treasurer  is to strengthen the organizational framework of IMA Moradabad by facilitating seamless communication among our members, coordinating impactful medical programs, and ensuring efficient execution of our association\'s objectives. We are committed to organizing regular CME programs, workshops, and health camps that benefit both our medical community and the general public. I strive to maintain transparency in all our operations while fostering a spirit of collaboration and mutual respect among healthcare providers across Moradabad.'
        },
        values: {
            title: 'Our Values',
            content: 'The core values that guide my role as  Treasurer  include dedication to professional development, unwavering commitment to medical ethics, and service-oriented leadership. I believe in open communication, accountability, and creating opportunities for every member to contribute meaningfully to our association. We uphold the principles of inclusivity, ensuring that whether you are a senior practitioner or a young doctor, your voice matters in shaping the future of healthcare in Moradabad. Together, we maintain the dignity of our noble profession while adapting to changing healthcare landscapes.'
        },
        future: {
            title: 'Looking Ahead',
            content: 'Looking forward, my focus is on digitizing IMA Moradabad\'s operations to enhance member engagement and streamline administrative processes. We are planning to establish better coordination with hospitals, diagnostic centers, and healthcare institutions across the city. Our upcoming initiatives include specialized training programs for young doctors, medical research collaborations, and community health awareness campaigns targeting preventive healthcare. I am committed to strengthening our emergency response network, building strategic partnerships with medical colleges, and creating platforms for interdisciplinary medical discussions. Together, we will elevate IMA Moradabad to new heights of professional excellence and community service.'
        }
    };

    return (
        <>
            <Banner title=" TRESURER MESSAGE" />
            <div className="bg-gray-50 py-10 sm:py-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                        {/* Image Section */}
                        <div data-aos="fade-right" data-aos-duration="800" className="w-full lg:flex-1 lg:max-w-sm">
                            <div
                                className={`w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 border-8 rounded-full overflow-hidden shadow-2xl cursor-pointer mx-auto transition-all duration-300 ${imageHover ? 'border-pink-600 scale-105' : 'border-purple-300'
                                    }`}
                                onMouseEnter={() => setImageHover(true)}
                                onMouseLeave={() => setImageHover(false)}
                            >
                                <img
                                    src="file_0000000063b08208b822b0557b714332.png"
                                    alt="Treasurer  of IMA Moradabad"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Quick Info Cards */}
                            <div className="mt-6 space-y-3 max-w-sm mx-auto">
                                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer border-l-4 border-green-500 transition-all">
                                    <p className="text-sm font-semibold text-gray-800">Role</p>
                                    <p className="text-xs text-gray-700 font-medium">Honorary Treasurer, IMA Moradabad</p>
                                    <p className="text-[11px] text-gray-500 mt-0.5">Session: 2026-27</p>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer border-l-4 border-purple-500 transition-all">
                                    <p className="text-sm font-semibold text-gray-800">Qualifications</p>
                                    <p className="text-xs text-gray-700 font-medium">MBBS, DCH</p>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer border-l-4 border-rose-500 transition-all">
                                    <p className="text-sm font-semibold text-gray-800">Clinic Address</p>
                                    <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                                        B-818, Lajpat Nagar,<br />
                                        Near Saini Mandir, Katghar Mahabulla Ganj,<br />
                                        Moradabad
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div data-aos="fade-left" data-aos-duration="800" className="w-full lg:flex-1">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left uppercase">
                                Treasurer <span className="text-pink-600">MESSAGE</span>
                            </h2>

                            {/* Tab Navigation */}
                            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
                                {Object.keys(sections).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedSection(key)}
                                        className={`px-4 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-medium cursor-pointer transition-all duration-200 ${selectedSection === key
                                            ? 'bg-pink-600 text-white shadow-lg shadow-pink-200 scale-105'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                                            }`}
                                    >
                                        {sections[key].title}
                                    </button>
                                ))}
                            </div>

                            {/* Content Display */}
                            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                    {sections[selectedSection].title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {sections[selectedSection].content}
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                    <p className="text-xl sm:text-2xl font-bold text-pink-600">
                                        <AnimatedCounter target={150} suffix="+" duration={2000} />
                                    </p>
                                    <p className="text-[11px] sm:text-xs text-gray-600 font-medium">CME Programs</p>
                                </div>
                                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                    <p className="text-xl sm:text-2xl font-bold text-blue-600">
                                        <AnimatedCounter target={50} suffix="+" duration={2000} />
                                    </p>
                                    <p className="text-[11px] sm:text-xs text-gray-600 font-medium">Health Camps</p>
                                </div>
                                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                    <p className="text-xl sm:text-2xl font-bold text-green-600">
                                        <AnimatedCounter target={2000} suffix="+" duration={2000} />
                                    </p>
                                    <p className="text-[11px] sm:text-xs text-gray-600 font-medium">Active Members</p>
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-12 bg-gray-100/80 p-5 sm:p-6 rounded-2xl border border-gray-200">
                                <p className="font-semibold text-gray-800">Warm Regards,</p>
                                <p className="text-gray-800 font-bold mt-1 text-base sm:text-lg">Dr. Anurag Dubey</p>
                                <p className="text-pink-600 text-xs sm:text-sm font-semibold">MBBS, DCH</p>
                                <p className="text-gray-700 text-xs sm:text-sm font-medium">Honorary Treasurer, IMA Moradabad (2026-27)</p>
                                <p className="text-gray-600 text-xs sm:text-sm">Uttar Pradesh - 244001</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
