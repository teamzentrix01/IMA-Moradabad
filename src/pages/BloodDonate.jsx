// src/components/BloodDonationPage.jsx

import React from 'react';
import { Mail, Phone, MapPin, Heart, Droplets, Shield, Sparkles, Clock, CalendarDays } from 'lucide-react'; // Using lucide-react for icons
import './BloodDonate.css';

// A simple reusable Button component
const Button = ({ children, primary = true, className = '', ...props }) => (
    <button
        className={`px-6 py-3 font-semibold rounded-lg transition duration-300 ease-in-out shadow-md
      ${primary
                ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300'
                : 'bg-white text-red-600 border border-red-600 hover:bg-red-50 focus:ring-4 focus:ring-red-100'
            }
      ${className}`}
        {...props}
    >
        {children}
    </button>
);

// Eligibility criteria data
const eligibilityCriteria = [
    {
        title: 'Age & Weight',
        icon: <Heart className="w-6 h-6 text-red-600" />,
        description: 'Between 18 and 65 years old, and weigh at least 45 kg for blood donation eligibility.'
    },
    {
        title: 'Health Status',
        icon: <div className="text-red-600 text-2xl font-bold">✓</div>,
        description: 'Must be in good general health, free from cold, flu, infection, or chronic diseases on donation day.'
    },
    {
        title: 'Recent Travel',
        icon: <MapPin className="w-6 h-6 text-red-600" />,
        description: 'Check for travel restrictions to malaria-endemic areas or recent international travel history.'
    },
    {
        title: 'Time Since Last Donation',
        icon: <Clock className="w-6 h-6 text-red-600" />,
        description: 'Minimum of 90 days (3 months) must pass between whole blood donations for safety.'
    },
];

const BloodDonate = () => {
    return (
        <div className="blood-donate-page">
            <div
                className="
        blood-donate-hero
        max-w-3xl
        mx-auto
        text-center
        mb-8
        sm:mb-10
        pt-6
        sm:pt-8
        px-4
        py-10
    "
            >
                {/* Heart Icon */}
                <div
                    className="
            inline-flex
            items-center
            justify-center
            w-14
            h-14
            sm:w-16
            sm:h-16
            bg-red-50
            border
            border-red-100
            rounded-full
            mb-3
            sm:mb-4
            shadow-sm
        "
                >
                    <Heart
                        className="
                w-7
                h-7
                sm:w-8
                sm:h-8
                text-red-600
                fill-red-600
                
            "
                    />
                </div>


                {/* Title */}
                <h1
                    className="
            text-3xl
            sm:text-4xl
            md:text-[42px]
            font-bold
            tracking-tight
            text-gray-900
            mb-3
        "
                >
                    DONATE <span className="text-red-600">BLOOD</span>
                </h1>


                {/* Description */}
                <p
                    className="
            text-sm
            sm:text-base
            text-gray-600
            leading-relaxed
            max-w-2xl
            mx-auto
        "
                >
                    Join IMA Moradabad's blood donation initiative. Register as a
                    donor and help save lives in our community. Every donation
                    brings hope to patients in need across Moradabad, UP.
                </p>


                {/* Highlights */}
                <div
                    className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-x-5
            gap-y-2
            sm:gap-x-6
            mt-5
            text-xs
            sm:text-sm
            text-gray-600
        "
                >

                    {/* Quick Response */}
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>

                        <span className="font-medium">
                            Quick Response
                        </span>
                    </div>


                    {/* Verified Donors */}
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>

                        <span className="font-medium">
                            Verified Donors
                        </span>
                    </div>


                    {/* 24/7 Support */}
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>

                        <span className="font-medium">
                            24/7 Support
                        </span>
                    </div>

                </div>

            </div>
            <div className="blood-donate-content min-h-screen bg-gray-50 font-sans">

                {/* --- Eligibility Section --- */}
                <section id="eligibility" className="blood-donate-eligibility py-10 sm:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-5xl font-medium text-center text-gray-900 mb-4">Are You Eligible to Donate?</h2>
                        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                            Most healthy individuals can donate blood. IMA Moradabad follows strict guidelines to ensure the safety of both donors and recipients.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {eligibilityCriteria.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={(index + 1) * 100}
                                    className="bg-red-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-[1.02] duration-300"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-md">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="register" className="blood-donate-register bg-gradient-to-br from-red-50 via-white to-red-50 py-10 relative">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 to-transparent"></div>
                    <div className="absolute top-10 left-10 w-32 h-32 bg-red-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-200/20 rounded-full blur-3xl"></div>

                    <div className="blood-donate-register-inner max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Enhanced Header */}
                        <div className="blood-donate-form-heading text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mb-6">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-medium text-gray-900 mb-4">
                                Register to <span className="text-red-600">Save a Life</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
                                Join IMA Moradabad's donor registry. Your single donation can save up to 3 lives in our community.
                            </p>
                            <p className="text-md text-gray-500 flex items-center justify-center gap-2">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Quick 2-minute form • IMA team will contact you within 24 hours
                            </p>
                        </div>

                        {/* Enhanced Form with FormSubmit Integration */}
                        <form
                            action="https://formsubmit.co/imamoradabad@gmail.com"
                            method="POST"
                            className="blood-donate-form bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-red-100 space-y-8"
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Blood Donor Registration - IMA Moradabad" />
                            <input type="hidden" name="_captcha" value="true" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_next" value="https://your-website.com/thankyou" />
                            {/* Replace above URL with your thank you page, or remove to use FormSubmit default */}
                            <input type="hidden" name="_autoresponse" value="Thank you for registering as a blood donor with IMA Moradabad! Our team will contact you within 24 hours to schedule your donation. Your contribution will help save lives in our community." />

                            {/* Progress indicator */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex space-x-2">
                                    <div className="w-8 h-2 bg-red-500 rounded-full"></div>
                                    <div className="w-8 h-2 bg-red-200 rounded-full"></div>
                                    <div className="w-8 h-2 bg-red-200 rounded-full"></div>
                                </div>
                                <span className="text-sm text-gray-500 font-medium">Step 1 of 3</span>
                            </div>

                            {/* Personal Information Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                name="Full_Name"
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                                            />
                                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                                            />
                                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="Phone_Number"
                                                required
                                                placeholder="+91 XXXXX XXXXX"
                                                pattern="[0-9]{10}"
                                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                                            />
                                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Address in Moradabad <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="address"
                                                name="Address"
                                                required
                                                placeholder="Your address in Moradabad, UP"
                                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                                            />
                                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Medical Information Section */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">Medical Information</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="bloodType" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Blood Type
                                            <span className="text-gray-500 font-normal ml-1">(Optional - we'll test if unknown)</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="bloodType"
                                                name="Blood_Type"
                                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                                            >
                                                <option value="">Select your blood type</option>
                                                <option value="A+">A+ (A Positive)</option>
                                                <option value="A-">A- (A Negative)</option>
                                                <option value="B+">B+ (B Positive)</option>
                                                <option value="B-">B- (B Negative)</option>
                                                <option value="AB+">AB+ (AB Positive)</option>
                                                <option value="AB-">AB- (AB Negative)</option>
                                                <option value="O+">O+ (O Positive)</option>
                                                <option value="O-">O- (O Negative)</option>
                                                <option value="unknown">I don't know</option>
                                            </select>
                                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Age <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                id="age"
                                                name="Age"
                                                required
                                                min="18"
                                                max="65"
                                                placeholder="18-65 years"
                                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                                            />
                                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6 0h6" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Eligible donors are between 18-65 years old</p>
                                    </div>

                                    <div>
                                        <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Weight (in kg) <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                id="weight"
                                                name="Weight_kg"
                                                required
                                                min="45"
                                                placeholder="Minimum 45 kg"
                                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                                            />
                                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Minimum 45 kg required for donation</p>
                                    </div>

                                    <div>
                                        <label htmlFor="lastDonation" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Last Donation Date
                                            <span className="text-gray-500 font-normal ml-1">(Optional)</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                id="lastDonation"
                                                name="Last_Donation_Date"
                                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                                            />
                                            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Leave blank if first-time donor</p>
                                    </div>
                                </div>
                            </div>

                            {/* Consent Section */}
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <div className="flex items-start space-x-3">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        name="Consent"
                                        value="Yes"
                                        required
                                        className="mt-1 w-4 h-4 text-red-600 border-2 border-red-300 rounded focus:ring-red-500 focus:ring-2"
                                    />
                                    <div>
                                        <label htmlFor="consent" className="text-sm font-medium text-gray-700 cursor-pointer">
                                            I consent to be contacted by IMA Moradabad for blood donation scheduling <span className="text-red-500">*</span>
                                        </label>
                                        <p className="text-xs text-gray-500 mt-1">
                                            By checking this box, you agree to IMA Moradabad's privacy policy and consent to being contacted by our medical team to schedule your blood donation appointment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap items-center justify-center gap-6 py-4 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Confidential Data
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    Secure Registration
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    IMA Certified
                                </div>
                            </div>

                            {/* Enhanced Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 text-lg"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    Register to Save Lives
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                                <p className="text-center text-sm text-gray-500 mt-3">
                                    Takes less than 2 minutes • No obligation to donate immediately
                                </p>
                            </div>
                        </form>

                        {/* Additional Information */}
                        <div className="blood-donate-steps mt-3 text-center py-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                                <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center px-2">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3 shadow-sm">
                                        <span className="text-red-600 font-bold text-lg">1</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Quick Registration</h4>
                                    <p className="text-sm font-medium text-red-600 mb-1">Fill out this 2-minute form</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Enter your contact & medical details to join the donor network.
                                    </p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center px-2">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3 shadow-sm">
                                        <span className="text-red-600 font-bold text-lg">2</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">IMA Will Contact You</h4>
                                    <p className="text-sm font-medium text-red-600 mb-1">Within 24 hours to schedule</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Our medical team confirms your availability and appointment.
                                    </p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center px-2">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3 shadow-sm">
                                        <span className="text-red-600 font-bold text-lg">3</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Save Lives</h4>
                                    <p className="text-sm font-medium text-red-600 mb-1">Help patients in Moradabad</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Your single blood donation can save up to 3 emergency patients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default BloodDonate;
