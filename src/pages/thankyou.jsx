import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        // Optional: Auto-redirect to home after 10 seconds
        // const timer = setTimeout(() => {
        //   navigate('/');
        // }, 10000);
        // return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gradient-to-br from-red-50 via-white to-red-50 min-h-screen flex items-center justify-center p-4">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-100/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-2xl w-full relative z-10">
                {/* Card Container */}
                <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 text-center border border-red-100 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Success Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <svg className={`w-24 h-24 md:w-32 md:h-32 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`} viewBox="0 0 100 100">
                                {/* Circle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="#fee2e2"
                                    stroke="#dc2626"
                                    strokeWidth="3"
                                    className="animate-pulse"
                                />
                                {/* Checkmark */}
                                <path
                                    d="M30 50 L45 65 L70 35"
                                    fill="none"
                                    stroke="#dc2626"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                                    style={{
                                        strokeDasharray: 100,
                                        strokeDashoffset: isVisible ? 0 : 100,
                                    }}
                                />
                            </svg>
                            {/* Sparkle effects */}
                            <div className="absolute -top-2 -right-2 text-red-500 text-2xl animate-pulse">✨</div>
                            <div className="absolute -bottom-2 -left-2 text-red-400 text-xl animate-pulse" style={{ animationDelay: '0.3s' }}>✨</div>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className={`text-2xl md:text-4xl font-bold font-libre text-gray-900 mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        Thank You!
                    </h1>

                    {/* Subheading */}
                    <h2 className={`text-lg md:text-xl font-semibold font-libre text-red-600 mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        Your Message Has Been Received
                    </h2>

                    {/* Description */}
                    <p className={`text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto font-playfair tracking-wide transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        Thank you for reaching out to <span className="font-semibold text-gray-900">IMA Moradabad</span>.
                        We have successfully received your submission and our team will get back to you within
                        <span className="font-semibold text-red-600"> 24 hours</span>.
                    </p>

                    {/* Info Box */}
                    <div className={`bg-red-50 border border-red-100 rounded-xl p-6 mb-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <div className="flex items-start gap-4 text-left">
                            <div className="flex-shrink-0 mt-1">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>You'll receive a confirmation email shortly</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Our team will review your information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>We'll contact you within 24 hours</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <button
                            onClick={() => navigate('/')}
                            className="w-full cursor-pointer sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Back to Home
                        </button>

                        {/* <button
                            onClick={() => navigate('/contact')}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-red-600 border-2 border-red-600 hover:bg-red-50 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us Again
                        </button> */}
                    </div>

                    {/* Contact Information */}
                    <div className={`mt-10 pt-8 border-t border-gray-200 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <p className="text-sm text-gray-600 mb-4">Need immediate assistance?</p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <a href="tel:+917500470200" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +91 7500470200
                            </a>
                            <a href="mailto:imamoradabad@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                imamoradabad@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-xs text-gray-500">
                        <p>Indian Medical Association, Moradabad</p>
                        <p>Uttar Pradesh - 244001</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
