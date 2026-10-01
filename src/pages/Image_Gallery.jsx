import React, { useState } from 'react';

import { Heart, Award, Sparkles, Users ,ThumbsUp} from 'lucide-react';
import Banner from '../components/ui/Banner';


export default function Image_Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: '/gallery-3.jpg',
      category: 'MEDICAL CAMP',
      title: 'Free Health Checkup Camp',
      description: 'Over 1500 patients benefited from our comprehensive health screening program',
      featured: true,
      size: 'large-wide'
    },
    {
      id: 2,
      image: '/gallery-2.jpg',
      category: 'AWARENESS',
      title: 'Cancer Awareness Campaign',
      description: 'Educational sessions on early detection and prevention',
      hasVideo: true,
      size: 'large'
    },
    {
      id: 3,
      image: '/gallery-1.jpg',
      category: 'COMMUNITY',
      title: 'Vaccination Drive 2025',
      description: 'Protecting our community through immunization programs',
      size: 'medium'
    },
    {
      id: 4,
      image: '/gallery-5.jpg',
      category: 'EVENTS',
      title: 'Doctors Day Celebration',
      description: 'Honoring medical professionals with cultural programs and recognition',
      size: 'medium'
    },
    {
      id: 5,
      image: '/gallery-6.jpg',
      category: 'INSPIRATION',
      title: 'Serving With Compassion',
      description: 'Dedicated to providing quality healthcare to every member of our community',
      quote: true,
      size: 'medium'
    },
    {
      id: 6,
      image: '/gallery-7.jpg',
      category: 'COMMUNITY',
      title: 'Girls Day Health Initiative',
      description: 'Free consultations and medicines for over 1500 daughters',
      hasVideo: true,
      size: 'medium',
      featured: true
    },
    {
      id: 7,
      image: '/gallery-8.jpg',
      category: 'EDUCATION',
      title: 'Medical Training Workshops',
      description: 'Continuous professional development for healthcare excellence',
      size: 'large-wide'
    },
    {
      id: 8,
      image: '/gallery-9.jpg',
      category: 'SEMINARS',
      title: 'Healthcare Symposium 2025',
      description: 'Leading experts sharing knowledge on modern medical practices',
      size: 'medium'
    },
    {
      id: 9,
      image: '/gallery-10.jpg',
      category: 'EVENTS',
      title: 'Community Blood Donation',
      description: 'Saving lives through generous donations and community support',
      size: 'medium'
    },
    {
      id: 10,
      image: '/gallery-11.jpg',
      category: 'INSPIRATION',
      title: 'Excellence In Healthcare',
      description: 'Committed to the highest standards of medical care and patient wellbeing',
      quote: true,
      size: 'medium'
    }
  ];

  return (
    <>
      <Banner title="IMAGE GALLERY" />

      <div className="min-h-screen bg-gray-50">



        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-10 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 font-libre">Image Gallery</h1>
            <p className="text-base sm:text-lg text-slate-600 font-playfair tracking-wide">Every picture tells a story</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function GalleryCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const getGridClass = () => {
    switch (item.size) {
      case 'large':
        return 'md:col-span-2 md:row-span-1';
      case 'large-wide':
        return 'md:col-span-2 lg:col-span-3';
      default:
        return '';
    }
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="600"
      className={`relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer group ${getGridClass()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Featured Badge */}
      {item.featured && (
        <div className="absolute top-4 right-4 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
          FEATURED
        </div>
      )}

      {/* Video Icon */}
      {item.hasVideo && (
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-teal-600 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>
      )}

      {/* Default Content (Always Visible) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-xs font-semibold tracking-wider mb-2 opacity-90">{item.category}</p>
        <h3 className="text-xl font-bold">{item.title}</h3>
        {/* <div className="flex items-center mt-3 space-x-2">
          <div className="w-8 h-8 rounded-full -ml-2"> <Heart /></div>
          <div className="w-8 h-8 rounded-full -ml-2"> <ThumbsUp /></div>
        </div> */}
      </div>

      {/* Hover Content (Center) */}
      {/* <div
        className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-8 text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <p className="text-xs font-semibold tracking-widest mb-3 text-teal-400">{item.category}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">{item.title}</h3>
        <p className="text-center text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
          {item.description}
        </p>
      </div> */}
    </div>
  );
}