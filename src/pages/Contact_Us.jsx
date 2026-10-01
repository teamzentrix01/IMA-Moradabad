import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Banner from '../components/ui/Banner';

export default function Contact_Us() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Banner title="CONTACT US" />

      <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 px-4 font-libre" style={{ color: '#0B0B42' }}>
            Contact Us
          </h1>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
            {/* Left Side - Form */}
            <div data-aos="fade-right" data-aos-duration="800" className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg order-2 lg:order-1 border border-slate-100">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 font-libre" style={{ color: '#0B0B42' }}>
                Send us a message
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 font-playfair tracking-wide">
                Do you have an query?
              </p>

              {/* FormSubmit.co Integration */}
              <form 
                action="https://formsubmit.co/imamoradabad@gmail.com" 
                method="POST" 
                className="space-y-5 sm:space-y-6"
              >
                {/* FormSubmit Configuration - Hidden Fields */}
                <input type="hidden" name="_subject" value="New Contact Form Submission from IMA Moradabad!" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://your-website.com/thankyou" />
                {/* Replace above URL with your actual thank you page URL, or remove it to use FormSubmit's default */}
                
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm sm:text-base font-semibold mb-2" style={{ color: '#0B0B42' }}>
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="First_Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-semibold mb-2" style={{ color: '#0B0B42' }}>
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="Last_Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold mb-2" style={{ color: '#0B0B42' }}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all"
                    required
                  />
                </div>

                {/* Contact Details */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold mb-2" style={{ color: '#0B0B42' }}>
                    Contact Details <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2 sm:gap-3">
                    <select
                      name="Country_Code"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all"
                    >
                      <option value="+971">+971</option>
                      <option value="+1">+1</option>
                      <option value="+91">+91</option>
                      <option value="+44">+44</option>
                    </select>
                    <input
                      type="tel"
                      name="Contact_Number"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                      pattern="[0-9]{10}"
                      className="flex-1 px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold mb-2" style={{ color: '#0B0B42' }}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="5"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base transition-all"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center sm:justify-end pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3.5 sm:py-4 rounded-full text-white font-semibold hover:opacity-90 transition-all text-sm sm:text-base lg:text-lg"
                    style={{ backgroundColor: '#0B0B42' }}
                  >
                    Send a Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div data-aos="fade-left" data-aos-duration="800" className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white order-1 lg:order-2 h-fit lg:sticky lg:top-8 shadow-xl" style={{ backgroundColor: '#1A3A52' }}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 leading-relaxed">
                Hi! We are always here<br />to help you.
              </h2>

              <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                <a href="tel:+917500470200" className="flex items-center gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-opacity-20 transition-all" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm opacity-80 mb-1">Hotline:</p>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg">+91 7500470200</p>
                  </div>
                </a>

                <a href="https://wa.me/917500470200" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-opacity-20 transition-all" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm opacity-80 mb-1">SMS / Whatsapp</p>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg">+91 7500470200</p>
                  </div>
                </a>

                <a href="mailto:imamoradabad@gmail.com" className="flex items-center gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-opacity-20 transition-all" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm opacity-80 mb-1">Email:</p>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg break-all">imamoradabad@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="border-t border-white border-opacity-20 pt-6 sm:pt-8">
                <p className="text-sm sm:text-base mb-4 sm:mb-5 opacity-90 font-medium">Connect with us</p>
                <div className="flex gap-3 sm:gap-4 flex-wrap">
                  <a 
                    href="https://www.facebook.com/moradabadima" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-opacity-10 hover:bg-opacity-25 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/imamoradabad/" 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-opacity-10 hover:bg-opacity-25 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@imamoradabad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-opacity-10 hover:bg-opacity-25 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
