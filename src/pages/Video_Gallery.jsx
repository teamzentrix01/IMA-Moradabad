import Banner from '../components/ui/Banner';

const Video_Gallery = () => {
  const videos = [
    {
      id: 1,
      title: "IMA Moradabad Health Camp 2024",
      embedUrl: "https://www.youtube.com/embed/4SwOZwuNtEw",
      description: "Community health camp organized by IMA Moradabad for preventive healthcare and medical check-ups."
    },
    {
      id: 2,
      title: "Annual Medical Conference Highlights",
      embedUrl: "https://www.youtube.com/embed/NUobEk-aV9I",
      description: "Key highlights from IMA Moradabad's annual medical conference featuring renowned healthcare professionals."
    },
    {
      id: 3,
      title: "Blood Donation Drive Success",
      embedUrl: "https://www.youtube.com/embed/xq6UEqixQFo",
      description: "Successful blood donation camp conducted by IMA Moradabad saving multiple lives in the community."
    },
    {
      id: 4,
      title: "COVID-19 Vaccination Awareness",
      embedUrl: "https://www.youtube.com/embed/d5dp03lniB0",
      description: "IMA Moradabad's COVID-19 vaccination drive and public health awareness campaign across UP."
    },
    {
      id: 5,
      title: "World Health Day 2024 Celebration",
      embedUrl: "https://www.youtube.com/embed/F3FUBrhgvLI",
      description: "World Health Day celebrations with free medical consultations and health screening programs."
    },
    {
      id: 6,
      title: "CME Workshop for Doctors",
      embedUrl: "https://www.youtube.com/embed/-nz179qIZJI",
      description: "Continuing Medical Education workshop on latest medical technologies and treatment protocols."
    },
    {
      id: 7,
      title: "Rural Healthcare Outreach",
      embedUrl: "https://www.youtube.com/embed/-nz179qIZJI",
      description: "IMA Moradabad's medical outreach program providing healthcare services in rural Uttar Pradesh."
    },
    {
      id: 8,
      title: "Medical Ethics Conference",
      embedUrl: "https://www.youtube.com/embed/NUobEk-aV9I",
      description: "Seminar on medical ethics, patient care standards, and professional conduct for doctors in Moradabad."
    },
  ];

  return (
    <>
      <Banner title="VIDEO GALLERY" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Hero Section */}
          <div className="mb-10 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 font-libre">Video Gallery</h1>
            <p className="text-base sm:text-lg text-slate-600 font-playfair tracking-wide">Explore IMA Moradabad's activities, events, and healthcare initiatives</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                {/* YouTube Shorts iframe - Vertical format */}
                <div className="relative overflow-hidden bg-slate-900" style={{ aspectRatio: '9/16' }}>
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Video_Gallery;
