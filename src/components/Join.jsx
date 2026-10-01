import { useState } from 'react';
import { UserPlus, Heart, Award, Users, BookOpen, Calendar, CheckCircle, ArrowRight, Stethoscope, Shield, TrendingUp } from 'lucide-react';

export default function Join() {
  const [selectedMembership, setSelectedMembership] = useState('regular');

  const benefits = [
    {
      icon: Stethoscope,
      title: 'Professional Development',
      description: 'Access to CME programs, workshops, and medical conferences'
    },
    {
      icon: Users,
      title: 'Network & Connect',
      description: 'Join a community of 5000+ medical professionals'
    },
    {
      icon: BookOpen,
      title: 'Resources & Library',
      description: 'Exclusive medical journals, research papers, and publications'
    },
    {
      icon: Shield,
      title: 'Legal Support',
      description: 'Professional indemnity and legal assistance for members'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Awards, certifications, and professional recognition'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Mentorship programs and career advancement opportunities'
    }
  ];

  const membershipTypes = [
    {
      id: 'regular',
      title: 'Regular Membership',
      price: '₹2,500',
      period: 'per year',
      features: [
        'All IMA benefits',
        'Voting rights',
        'CME access',
        'Medical journals',
        'Legal support',
        'Networking events'
      ],
      popular: false
    },
    {
      id: 'life',
      title: 'Life Membership',
      price: '₹25,000',
      period: 'one-time',
      features: [
        'Lifetime benefits',
        'Permanent voting rights',
        'Priority CME access',
        'All journals & publications',
        'Complete legal coverage',
        'Exclusive events',
        'Senior member privileges'
      ],
      popular: true
    },
    {
      id: 'student',
      title: 'Student Membership',
      price: '₹500',
      period: 'per year',
      features: [
        'Student benefits',
        'CME access',
        'Study resources',
        'Mentorship program',
        'Career guidance',
        'Networking opportunities'
      ],
      popular: false
    }
  ];

  const steps = [
    { number: '1', title: 'Choose Plan', description: 'Select your membership type' },
    { number: '2', title: 'Fill Details', description: 'Complete application form' },
    { number: '3', title: 'Payment', description: 'Secure online payment' },
    { number: '4', title: 'Welcome', description: 'Start your journey' }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <UserPlus className="w-5 h-5" />
            <span className="font-semibold">Join Our Community</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-900 mb-4 font-bold font-libre">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-bold">IMA Moradabad</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-4 font-playfair tracking-wide">
            Become part of India's premier medical association serving Moradabad, Uttar Pradesh since decades. Connect, learn, and grow with fellow medical professionals.
          </p>
          <p className="text-gray-500 font-playfair">
            <span className="font-semibold">IMA Moradabad Branch</span> • Uttar Pradesh
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl text-gray-900 text-center mb-10 font-bold font-libre">
            Why Join IMA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>


        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center shadow-2xl">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Join IMA Moradabad?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Take the next step in your medical career. Join thousands of doctors in Moradabad and Uttar Pradesh who trust IMA for professional excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white font-semibold mb-2">Need Help?</p>
            <p className="text-emerald-100">
              📞 Contact IMA Moradabad: +91-XXXXXXXXXX
            </p>
            <p className="text-emerald-100">
              📧 Email: ima.moradabad@gmail.com
            </p>
            <p className="text-emerald-100 mt-2">
              📍 IMA Moradabad Branch, Uttar Pradesh
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">5000+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-gray-600">Years Legacy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
            <div className="text-gray-600">Events/Year</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}