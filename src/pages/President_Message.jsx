import { useState } from 'react';
import Banner from '../components/ui/Banner';
import AnimatedCounter from '../components/ui/AnimatedCounter';

export default function President_Message() {
  const [selectedSection, setSelectedSection] = useState('vision');
  const [imageHover, setImageHover] = useState(false);

  const sections = {
    vision: {
      title: 'Our Vision',
      content: 'To establish IMA Moradabad as a leading medical association that champions excellence in healthcare delivery, promotes ethical medical practices, and ensures accessible quality healthcare for every citizen of Moradabad and surrounding regions. We envision a healthcare ecosystem where medical professionals collaborate seamlessly to advance medical science, enhance patient care standards, and contribute meaningfully to public health initiatives across Uttar Pradesh.'
    },
    mission: {
      title: 'Our Mission',
      content: 'Our mission is to unite medical practitioners of Moradabad under one platform, fostering professional development through continuous medical education, research opportunities, and knowledge sharing. We are committed to advocating for healthcare policies that benefit both medical professionals and patients, while maintaining the highest standards of medical ethics. IMA Moradabad strives to bridge the gap between healthcare providers and the community through health awareness programs, free medical camps, and emergency response initiatives.'
    },
    values: {
      title: 'Our Values',
      content: 'Integrity, compassion, and professional excellence form the cornerstone of IMA Moradabad. We believe in evidence-based medicine, ethical practice, and patient-centered care. Our values emphasize continuous learning, mutual respect among medical professionals, and service to humanity above all. We are committed to transparency in healthcare delivery, accountability in medical practice, and fostering a culture of innovation that keeps pace with global medical advancements while respecting local healthcare needs and cultural sensitivities.'
    },
    future: {
      title: 'Looking Ahead',
      content: 'As we look towards the future, IMA Moradabad is dedicated to expanding our healthcare infrastructure, establishing state-of-the-art medical facilities, and creating robust networks for medical emergencies. We plan to launch comprehensive health screening programs, digital health initiatives, and telemedicine services to reach underserved areas. Our focus includes strengthening doctor-patient relationships, combating medical misinformation, and preparing the next generation of healthcare professionals through mentorship programs. We are committed to making Moradabad a healthcare hub in Western Uttar Pradesh by collaborating with government bodies, educational institutions, and international medical organizations. Our upcoming initiatives include specialized training workshops, research collaborations, and community health outreach programs that will transform healthcare accessibility and quality in our region. Together, we will build a healthier Moradabad where every individual has access to compassionate, affordable, and world-class medical care.'
    }
  };

  return (
    <>
      <Banner title="PRESIDENT MESSAGE" />
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
                  src="file_0000000014848208836ddf30894e8069 (1).png"
                  alt="President of IMA Moradabad"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quick Info Cards */}
              <div className="mt-6 space-y-3 max-w-sm mx-auto">
                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer border-l-4 border-green-500 transition-all">
                  <p className="text-xs text-gray-700 font-medium">President, IMA Moradabad</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Session: 2026-27</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer border-l-4 border-purple-500 transition-all">
                  <p className="text-sm font-semibold text-gray-800">Qualifications</p>
                  <p className="text-xs text-gray-700 font-medium">MBBS, MD (Psychiatry)</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer border-l-4 border-rose-500 transition-all">
                  <p className="text-sm font-semibold text-gray-800">Clinic / Hospital</p>
                  <p className="text-xs font-semibold text-gray-800 mt-0.5">Adwik Health Center</p>
                  <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                    Z 39-40, Ashiyana Phase 2,<br />
                    Moradabad
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div data-aos="fade-left" data-aos-duration="800" className="w-full lg:flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left uppercase">
                President'S <span className="text-pink-600">MESSAGE</span>
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
                    <AnimatedCounter target={2000} suffix="+" duration={2000} />
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-600 font-medium">Active Members</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">
                    <AnimatedCounter target={500} suffix="+" duration={2000} />
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-600 font-medium">Practitioners</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <p className="text-xl sm:text-2xl font-bold text-green-600">
                    <AnimatedCounter target={75} suffix="+" duration={2000} />
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-600 font-medium">Years Service</p>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 bg-gray-100/80 p-5 sm:p-6 rounded-2xl border border-gray-200">
                <p className="font-semibold text-gray-800">With warm regards,</p>
                <p className="text-gray-800 font-bold mt-1 text-base sm:text-lg">Dr. Anant Rana</p>
                <p className="text-pink-600 text-xs sm:text-sm font-semibold">MBBS, MD (Psychiatry)</p>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">President, IMA Moradabad (2026-27)</p>
                <p className="text-gray-600 text-xs sm:text-sm">Uttar Pradesh - 244001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
