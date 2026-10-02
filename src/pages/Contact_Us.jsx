import React, { useState } from 'react';
import { 
    Phone, 
    MessageCircle, 
    Mail, 
    Facebook, 
    Instagram, 
    Youtube, 
    MapPin, 
    Clock, 
    Send, 
    CheckCircle2,
    Shield
} from 'lucide-react';
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

    const [contactError, setContactError] = useState('');

    const handleContactNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }

        if (formData.countryCode === '+91' && value.length > 0) {
            const firstDigit = value[0];
            if (!['6', '7', '8', '9'].includes(firstDigit)) {
                alert('Phone number must start with 6, 7, 8, or 9!');
                setContactError('Phone number must start with 6, 7, 8, or 9');
                return;
            }
        }

        setFormData(prev => ({
            ...prev,
            contactNumber: value
        }));

        if (value.length === 10) {
            setContactError('');
        } else if (value.length > 0) {
            setContactError('Phone number must be exactly 10 digits');
        } else {
            setContactError('');
        }
    };

    const handleContactNumberBlur = (e) => {
        const val = e.target.value;
        if (formData.countryCode === '+91' && val && val.length < 10) {
            alert('Phone number must be exactly 10 digits!');
        }
    };

    const handleSubmit = (e) => {
        const phone = formData.contactNumber;
        if (formData.countryCode === '+91') {
            if (!phone || phone.length < 10) {
                e.preventDefault();
                alert('Please enter a valid 10-digit phone number!');
                return;
            }
            if (!['6', '7', '8', '9'].includes(phone[0])) {
                e.preventDefault();
                alert('Phone number must start with 6, 7, 8, or 9!');
                return;
            }
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Banner title="CONTACT US" />

            <div className="min-h-screen bg-slate-50/70 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-xs mb-2.5">
                            <Phone className="w-3.5 h-3.5" />
                            Get In Touch
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-libre">
                            Contact IMA Moradabad
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-600 font-playfair tracking-wide leading-relaxed">
                            Have an inquiry regarding membership, events, health camps, or administrative support? Reach out to our dedicated team.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                        
                        {/* Left Side - Compact Professional Form (7 cols) */}
                        <div 
                            data-aos="fade-right" 
                            data-aos-duration="600" 
                            className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-slate-200/80"
                        >
                            <div className="border-b border-slate-100 pb-3.5 mb-4">
                                <h2 className="text-base sm:text-lg font-bold font-libre text-slate-900">
                                    Send us a Message
                                </h2>
                                <p className="text-xs text-slate-500 font-playfair mt-0.5">
                                    Fill out this quick form and our office team will respond within 24 hours.
                                </p>
                            </div>

                            {/* FormSubmit.co Integration */}
                            <form 
                                action="https://formsubmit.co/imamoradabad@gmail.com" 
                                method="POST" 
                                onSubmit={handleSubmit}
                                className="space-y-3.5"
                            >
                                {/* Hidden Config */}
                                <input type="hidden" name="_subject" value="New Contact Form Submission - IMA Moradabad" />
                                <input type="hidden" name="_captcha" value="true" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />

                                {/* Name Fields - 2 cols */}
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="First_Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                            className="w-full h-9 px-3 text-xs sm:text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="Last_Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                            className="w-full h-9 px-3 text-xs sm:text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone in 2 cols */}
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@domain.com"
                                            className="w-full h-9 px-3 text-xs sm:text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Contact Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex gap-1.5">
                                            <select
                                                name="Country_Code"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                                className="w-20 h-9 px-2 text-xs rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all outline-hidden text-slate-800 cursor-pointer"
                                            >
                                                <option value="+91">+91 (IN)</option>
                                                <option value="+1">+1 (US)</option>
                                                <option value="+44">+44 (UK)</option>
                                                <option value="+971">+971 (UAE)</option>
                                            </select>
                                            <input
                                                type="tel"
                                                name="Contact_Number"
                                                value={formData.contactNumber}
                                                onChange={handleContactNumberChange}
                                                onBlur={handleContactNumberBlur}
                                                maxLength={10}
                                                placeholder="Mobile Number"
                                                className={`flex-1 h-9 px-3 text-xs sm:text-sm rounded-lg border bg-slate-50/50 focus:bg-white transition-all outline-hidden text-slate-800 placeholder:text-slate-400 ${
                                                    contactError
                                                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                                                        : 'border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30'
                                                }`}
                                                required
                                            />
                                        </div>
                                        {contactError && (
                                            <p className="text-[11px] text-red-600 mt-1">
                                                {contactError}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Message Field - Compact height */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Your Query / Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message or inquiry here..."
                                        rows="3"
                                        className="w-full p-2.5 text-xs sm:text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-1">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <Send className="w-3.5 h-3.5" />
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Side - Compact Contact Information Panel (5 cols) */}
                        <div 
                            data-aos="fade-left" 
                            data-aos-duration="600" 
                            className="lg:col-span-5 rounded-2xl p-5 sm:p-6 text-white shadow-md border border-slate-800" 
                            style={{ backgroundColor: '#102A43' }}
                        >
                            <h2 className="text-base sm:text-lg font-bold font-libre mb-1 text-white">
                                Head Office & Help Desk
                            </h2>
                            <p className="text-xs text-slate-300 font-playfair mb-4 leading-relaxed">
                                Feel free to connect directly through our official channels.
                            </p>

                            <div className="space-y-2.5 mb-5 text-xs">
                                {/* Address Box */}
                                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 border border-white/10">
                                    <MapPin className="w-4 h-4 mt-0.5 text-rose-300 flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Address</p>
                                        <p className="text-xs text-white font-medium mt-0.5 leading-snug">
                                            IMA Bhawan, Opposite SSP Office, Kachehri Parisar, Moradabad - 244001, UP
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Box */}
                                <a 
                                    href="tel:+917500470200" 
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Helpline Number</p>
                                        <p className="text-xs sm:text-sm font-bold text-white">+91 7500470200</p>
                                    </div>
                                </a>

                                {/* WhatsApp Box */}
                                <a 
                                    href="https://wa.me/917500470200" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">WhatsApp / SMS</p>
                                        <p className="text-xs sm:text-sm font-bold text-white">+91 7500470200</p>
                                    </div>
                                </a>

                                {/* Email Box */}
                                <a 
                                    href="mailto:imamoradabad@gmail.com" 
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Email ID</p>
                                        <p className="text-xs sm:text-sm font-bold text-white break-all">imamoradabad@gmail.com</p>
                                    </div>
                                </a>
                            </div>

                            {/* Working Hours & Socials */}
                            <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Office Hours</p>
                                    <p className="text-[11px] text-slate-200 mt-0.5">Mon - Sat: 10:00 AM - 5:00 PM</p>
                                </div>

                                <div className="flex gap-2">
                                    <a 
                                        href="https://www.facebook.com/moradabadima" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-105"
                                        title="Facebook"
                                    >
                                        <Facebook className="w-3.5 h-3.5" />
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/imamoradabad/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-105"
                                        title="Instagram"
                                    >
                                        <Instagram className="w-3.5 h-3.5" />
                                    </a>
                                    <a 
                                        href="https://www.youtube.com/@imamoradabad" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-105"
                                        title="YouTube"
                                    >
                                        <Youtube className="w-3.5 h-3.5" />
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
