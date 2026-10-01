import React from 'react';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Heart, 
    Droplets, 
    Shield, 
    Clock, 
    CalendarDays, 
    User, 
    CheckCircle2, 
    AlertCircle, 
    Scale, 
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Stethoscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './BloodDonate.css';

// Eligibility criteria data
const eligibilityCriteria = [
    {
        title: 'Age & Weight',
        icon: Scale,
        badge: '18-65 Yrs | 45+ Kg',
        description: 'Donors must be aged between 18 and 65 years, and weigh at least 45 kg for safe donation.'
    },
    {
        title: 'General Health',
        icon: Stethoscope,
        badge: 'Normal Vitals',
        description: 'Free from acute illness, fever, flu, or infection on the donation day. Hemoglobin should be >= 12.5 g/dL.'
    },
    {
        title: 'Donation Interval',
        icon: Clock,
        badge: '90 Days Gap',
        description: 'At least 3 months (90 days) must have elapsed since your last whole blood donation.'
    },
    {
        title: 'Safe & Monitored',
        icon: ShieldCheck,
        badge: '100% Sterile',
        description: 'Conducted under direct doctor supervision using new, disposable single-use sterile medical kits.'
    },
];

const preDonationTips = [
    {
        title: "Hydrate Well",
        desc: "Drink 500ml of water or fresh juice 30 minutes before your appointment."
    },
    {
        title: "Eat a Light Meal",
        desc: "Have a healthy, low-fat snack or meal 2-3 hours prior. Avoid donating on an empty stomach."
    },
    {
        title: "Carry Photo ID",
        desc: "Bring a valid government-issued photo ID (Aadhaar, Voter ID, or Driving License)."
    }
];

const BloodDonate = () => {
    return (
        <div className="blood-donate-page font-sans">
            {/* =========================================================
                1. HERO / BANNER SECTION
            ========================================================= */}
            <section className="relative bg-gradient-to-b from-rose-50/80 via-white to-slate-50/60 border-b border-rose-100/70 pt-8 pb-10 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-red-100/80 border border-red-200/60 text-red-700 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 shadow-xs">
                        <Heart className="w-3.5 h-3.5 fill-red-600 text-red-600 animate-pulse" />
                        <span>IMA Moradabad Voluntary Blood Donor Registry</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-libre tracking-normal text-slate-900 mb-2.5">
                        DONATE <span className="text-red-600">BLOOD</span>, SAVE PRECIOUS LIVES
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-playfair tracking-wide max-w-2xl mx-auto mb-5">
                        Join IMA Moradabad's voluntary blood donor network. Your single donation provides critical red cells, platelets, and plasma that can save up to 3 emergency patients in our community.
                    </p>

                    {/* Highlights Strip */}
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            <span className="font-medium text-slate-700">Quick 2-Min Registration</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            <span className="font-medium text-slate-700">Confidential & IMA Certified</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            <span className="font-medium text-slate-700">24/7 Moradabad Network</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                2. MAIN CONTENT: 2-COLUMN BALANCED REGISTRATION
            ========================================================= */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    
                    {/* LEFT COLUMN: IMPACT, 3-STEP FLOW & EMERGENCY HELPLINE (5 cols) */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                        
                        {/* Why Donate Card */}
                        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                                    <Droplets className="w-4 h-4" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 font-libre">Why Donate Blood?</h3>
                            </div>
                            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-playfair">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>1 Donation Saves 3 Lives:</strong> Separated into RBCs, Platelets, and Plasma for trauma, cancer, and surgery patients.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Free Mini Health Check:</strong> Blood pressure, pulse, hemoglobin, and blood grouping checked prior to donation.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Cardiovascular Benefits:</strong> Regular voluntary donation helps regulate body iron levels and stimulates new cell production.</span>
                                </li>
                            </ul>
                        </div>

                        {/* 3 Simple Steps */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 sm:p-6 shadow-md">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-300 mb-3 flex items-center gap-2">
                                <Clock className="w-4 h-4" /> How It Works
                            </h3>
                            <div className="space-y-3.5 text-xs">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 text-rose-200 flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <p className="font-semibold text-white">Fill Registration</p>
                                        <p className="text-slate-300 text-[11px] font-playfair">Takes 2 minutes with your basic contact & blood group info.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 text-rose-200 flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <p className="font-semibold text-white">IMA Medical Team Coordinates</p>
                                        <p className="text-slate-300 text-[11px] font-playfair">Our coordinator contacts you to schedule at IMA Bhawan or upcoming camp.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 text-rose-200 flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div>
                                        <p className="font-semibold text-white">Safe 15-Min Donation</p>
                                        <p className="text-slate-300 text-[11px] font-playfair">Completely safe, followed by rest, refreshments, and donor certificate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Blood Requirement Box */}
                        <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3">
                            <div>
                                <p className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                                    <AlertCircle className="w-3.5 h-3.5 text-rose-600" /> Need Blood Urgently?
                                </p>
                                <p className="text-[11px] text-rose-700 mt-0.5 font-playfair">
                                    Request verified donors immediately through our emergency channel.
                                </p>
                            </div>
                            <Link 
                                to="/requestblood"
                                className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xs hover:shadow-sm whitespace-nowrap transition-all"
                            >
                                Request Blood <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: COMPACT, PROFESSIONAL REGISTRATION FORM (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 p-5 sm:p-7 md:p-8">
                            
                            {/* Form Header */}
                            <div className="border-b border-slate-100 pb-4 mb-5">
                                <div className="flex items-center justify-between mb-1">
                                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-libre flex items-center gap-2">
                                        <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                                        Donor Registration Form
                                    </h2>
                                    <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                                        Active Drive
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 font-playfair">
                                    Please enter your accurate contact and medical details. Fields marked with <span className="text-red-500 font-bold">*</span> are required.
                                </p>
                            </div>

                            {/* FormSubmit.co Integrated Form */}
                            <form
                                action="https://formsubmit.co/imamoradabad@gmail.com"
                                method="POST"
                                className="space-y-4"
                            >
                                {/* FormSubmit Configuration Hidden Fields */}
                                <input type="hidden" name="_subject" value="New Blood Donor Registration - IMA Moradabad" />
                                <input type="hidden" name="_captcha" value="true" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />
                                <input type="hidden" name="_autoresponse" value="Thank you for registering as a blood donor with IMA Moradabad! Our medical team will connect with you shortly to confirm your schedule." />

                                {/* SECTION 1: PERSONAL INFORMATION */}
                                <div>
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                                        1. Personal Information
                                    </p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="Full_Name"
                                                    required
                                                    placeholder="e.g. Dr. Rajesh Sharma"
                                                    className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                                />
                                                <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                            </div>
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="Phone_Number"
                                                    required
                                                    placeholder="+91 98765 43210"
                                                    pattern="[0-9]{10}"
                                                    title="Please enter a valid 10-digit mobile number"
                                                    className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                                />
                                                <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                            </div>
                                        </div>

                                        {/* Email Address */}
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="name@domain.com"
                                                    className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                                />
                                                <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                            </div>
                                        </div>

                                        {/* Address in Moradabad */}
                                        <div>
                                            <label htmlFor="address" className="block text-xs font-semibold text-slate-700 mb-1">
                                                Address in Moradabad <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="Address"
                                                    required
                                                    placeholder="Civil Lines, Kachehri, etc."
                                                    className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                                />
                                                <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SECTION 2: MEDICAL & DONATION DETAILS */}
                                <div className="pt-2">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                                        2. Medical & Donation Details
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {/* Blood Group */}
                                        <div>
                                            <label htmlFor="bloodType" className="block text-xs font-semibold text-slate-700 mb-1">
                                                Blood Group
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="bloodType"
                                                    name="Blood_Type"
                                                    className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 cursor-pointer"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="A+">A+</option>
                                                    <option value="A-">A-</option>
                                                    <option value="B+">B+</option>
                                                    <option value="B-">B-</option>
                                                    <option value="AB+">AB+</option>
                                                    <option value="AB-">AB-</option>
                                                    <option value="O+">O+</option>
                                                    <option value="O-">O-</option>
                                                    <option value="unknown">I don't know</option>
                                                </select>
                                                <Droplets className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-red-500" />
                                            </div>
                                        </div>

                                        {/* Age */}
                                        <div>
                                            <label htmlFor="age" className="block text-xs font-semibold text-slate-700 mb-1">
                                                Age (18-65) <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    id="age"
                                                    name="Age"
                                                    required
                                                    min="18"
                                                    max="65"
                                                    placeholder="Yrs"
                                                    className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                                />
                                                <CalendarDays className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                            </div>
                                        </div>

                                        {/* Weight */}
                                        <div>
                                            <label htmlFor="weight" className="block text-xs font-semibold text-slate-700 mb-1">
                                                Weight (kg) <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    id="weight"
                                                    name="Weight_kg"
                                                    required
                                                    min="45"
                                                    placeholder=">= 45 kg"
                                                    className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                                />
                                                <Scale className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Last Donation Date */}
                                    <div className="mt-3">
                                        <label htmlFor="lastDonation" className="block text-xs font-semibold text-slate-700 mb-1">
                                            Last Donation Date <span className="text-slate-400 font-normal">(Optional — leave blank if first-time donor)</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                id="lastDonation"
                                                name="Last_Donation_Date"
                                                className="w-full sm:w-1/2 h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800"
                                            />
                                            <CalendarDays className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* SECTION 3: CONSENT */}
                                <div className="pt-2">
                                    <div className="bg-red-50/60 border border-red-100/90 rounded-xl p-3 flex items-start gap-2.5">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            name="Consent"
                                            value="Yes"
                                            required
                                            className="mt-0.5 w-4 h-4 text-red-600 border border-red-300 rounded-sm focus:ring-red-500 cursor-pointer"
                                        />
                                        <label htmlFor="consent" className="text-xs text-slate-700 leading-normal cursor-pointer">
                                            I voluntarily agree to be registered with <strong>IMA Moradabad</strong> and consent to receive communication for scheduling blood donation. <span className="text-red-500 font-bold">*</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full h-10 sm:h-11 bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                                    >
                                        <Heart className="w-4 h-4 fill-white" />
                                        <span>Submit Voluntary Registration</span>
                                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                    </button>
                                </div>

                                {/* Trust & Security Footer */}
                                <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 border-t border-slate-100">
                                    <span className="flex items-center gap-1">
                                        <Shield className="w-3.5 h-3.5 text-emerald-600" /> Data Confidential
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% Free & Voluntary
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Stethoscope className="w-3.5 h-3.5 text-emerald-600" /> IMA Moradabad Certified
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* =========================================================
                3. ELIGIBILITY CRITERIA SECTION (CLEAN 4-CARD GRID)
            ========================================================= */}
            <section className="bg-white border-t border-slate-200/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                            Medical Guidelines
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-libre text-slate-900 mt-2.5 mb-2">
                            Are You Eligible to Donate?
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 font-playfair">
                            IMA Moradabad strictly adheres to safety standards set by the National Blood Transfusion Council (NBTC).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {eligibilityCriteria.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div 
                                    key={index}
                                    className="bg-slate-50/70 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-red-200 shadow-xs hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-red-100/70 flex items-center justify-center text-red-600">
                                            <IconComponent className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-600">
                                            {item.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-bold text-slate-900 mb-1 font-libre">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed font-playfair">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                4. PRE-DONATION TIPS & GUIDELINES
            ========================================================= */}
            <section className="bg-gradient-to-b from-slate-50 to-white py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-6">
                        <h3 className="text-lg sm:text-xl font-bold font-libre text-slate-900">
                            Quick Tips Before Donating
                        </h3>
                        <p className="text-xs text-slate-500 font-playfair mt-0.5">
                            Follow these simple preparation steps for a smooth donation experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {preDonationTips.map((tip, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200/70 shadow-xs text-center">
                                <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold mx-auto mb-2 flex items-center justify-center">
                                    {idx + 1}
                                </div>
                                <h4 className="text-xs font-bold text-slate-900 mb-1">{tip.title}</h4>
                                <p className="text-[11px] text-slate-600 font-playfair leading-relaxed">{tip.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Support Banner */}
                    <div className="mt-8 text-center bg-red-50/50 rounded-xl p-4 border border-red-100">
                        <p className="text-xs text-slate-700 font-medium">
                            Have medical questions regarding eligibility? Contact IMA Moradabad Bhawan at <a href="tel:9258834664" className="text-red-600 font-bold hover:underline">9258834664</a> or email <a href="mailto:imamoradabad@gmail.com" className="text-red-600 font-bold hover:underline">imamoradabad@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BloodDonate;
