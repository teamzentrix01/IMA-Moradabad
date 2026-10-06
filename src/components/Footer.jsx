import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart, ArrowRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: "Home", url: '/' },
    { name: "About", url: '/about' },
    { name: "Join IMA", url: '/join-ima' },
    { name: "New Building", url: '/new-ima' },
    { name: "Achievements", url: '/achievements' },
    { name: "Nominate for Award", url: '/nominate' },
    { name: "Gallery", url: '/imagegallery' }
    // { name: "Image Gallery", url: '/Image_Gallery' },
    // { name: "Video Gallery", url: '/Video_Gallery' },
    // { name: "News Gallery", url: '/News_Gallery' }
  ];

  const services = [
    { name: "Donate Blood", url: '/blooddonate' },
    { name: "Request Blood", url: '/requestblood' },
    { name: "Blood Camps", url: '/bloodcamps' },
    { name: "Contact Us", url: '/contactus' }
  ];
  const policies = [
    { name: "Privacy Policy", url: '/Privacy_Policy' },
    { name: "Refund Policy", url: '/Refund_Policy' },
    { name: "Terms and Conditions", url: '/Terms_And_Conditions' },
    { name: "Cookie Policy", url: '/Cookie_Policy' },
    //   'Refund Policy',
    //   'Terms and Conditions',
    //   'Cookie Policy'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-300 overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center p-1.5 shadow-md flex-shrink-0">
                <img
                  src="/IMA_LOGO.png"
                  alt="IMA Moradabad Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">IMA Moradabad</h3>
                {/* <p className="text-sm text-emerald-400">Since 1931</p> */}
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              The Indian Medical Association, Moradabad Branch, is dedicated to advancing medical excellence, supporting healthcare professionals, and serving the community through quality healthcare initiatives.
            </p>

            {/* Newsletter */}
            {/* <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-emerald-500 text-white"
                />
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 rounded-r-lg hover:from-emerald-600 hover:to-teal-600 transition-all">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 transition-all duration-300"></span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Policies */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
            </h3>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  IMA Bhawan, Opp. SSP Office,<br /> Kachehri Parisar, Moradabad <br /> 244001, Uttar Pradesh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>+91 7500470200</p>
                  {/* <p>8928348578</p> */}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>imamoradabad@gmail.com</p>
                  {/* <p>ima_moradabad@rediffmail.com</p> */}
                </div>
              </div>
            </div>

            {/* Policies */}
            {/* <h4 className="text-white font-semibold mb-3">Policies</h4>
            <ul className="space-y-2">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a
                    href={policy.url}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} IMA - Moradabad | Designed And Developend by <span><a href="https://www.zentrixinfotech.com/" className='hover:text-blue-500 transition-all duration-100'> Zentrix Infotech</a></span>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow Us:</span>
              <a
                href="https://www.facebook.com/moradabadima"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a> */}
              <a
                href="https://www.instagram.com/imamoradabad/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a> */}
              <a
                href="https://www.youtube.com/@imamoradabad"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>

            {/* Visitor Counter */}
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-gray-400 text-sm">Visitors:</span>
              <div className="flex space-x-1 font-mono text-emerald-400 font-semibold">
                <span className="bg-gray-900 px-2 py-1 rounded">0</span>
                <span className="bg-gray-900 px-2 py-1 rounded">0</span>
                <span className="bg-gray-900 px-2 py-1 rounded">3</span>
                <span className="bg-gray-900 px-2 py-1 rounded">4</span>
                <span className="bg-gray-900 px-2 py-1 rounded">4</span>
                <span className="bg-gray-900 px-2 py-1 rounded">2</span>
                <span className="bg-gray-900 px-2 py-1 rounded">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}