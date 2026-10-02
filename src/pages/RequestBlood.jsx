import { useState } from 'react';
import { 
    Heart, 
    AlertCircle, 
    MapPin, 
    Phone, 
    User, 
    Mail,
    Calendar, 
    Droplets, 
    ShieldCheck, 
    Clock, 
    CheckCircle2, 
    Send,
    Hospital,
    FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequestBlood() {
    const [formData, setFormData] = useState({
        patientName: '',
        contactName: '',
        email: '',
        phone: '',
        bloodType: '',
        unitsNeeded: '',
        urgency: '',
        hospital: '',
        city: '',
        state: 'Uttar Pradesh',
        requiredDate: '',
        medicalReason: '',
        additionalInfo: ''
    });

    const [phoneError, setPhoneError] = useState('');

    const validatePhoneNumber = (value) => {
        if (!value) {
            setPhoneError('');
            return true;
        }
        if (!['6', '7', '8', '9'].includes(value[0])) {
            alert('Phone number must start with 6, 7, 8, or 9!');
            setPhoneError('Phone number must start with 6, 7, 8, or 9');
            return false;
        }
        if (value.length < 10) {
            setPhoneError('Phone number must be exactly 10 digits');
            return false;
        }
        setPhoneError('');
        return true;
    };

    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // keep only numbers
        if (value.length > 10) {
            value = value.slice(0, 10); // max 10 digits
        }

        if (value.length > 0) {
            const firstDigit = value[0];
            if (!['6', '7', '8', '9'].includes(firstDigit)) {
                alert('Phone number must start with 6, 7, 8, or 9!');
                setPhoneError('Phone number must start with 6, 7, 8, or 9');
                return;
            }
        }

        setFormData(prev => ({
            ...prev,
            phone: value
        }));

        if (value.length === 10) {
            setPhoneError('');
        } else if (value.length > 0) {
            setPhoneError('Phone number must be exactly 10 digits');
        } else {
            setPhoneError('');
        }
    };

    const handlePhoneBlur = (e) => {
        const val = e.target.value;
        if (val && val.length < 10) {
            alert('Phone number must be exactly 10 digits!');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        const phone = formData.phone;
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
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-50/70 via-white to-slate-50 py-8 sm:py-12 px-4 sm:px-6 font-sans">
            {/* Header Section */}
            <div className="max-w-3xl mx-auto text-center mb-8">
                <div className="inline-flex items-center gap-1.5 bg-red-100/80 border border-red-200 text-red-700 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 shadow-xs">
                    <Heart className="w-3.5 h-3.5 fill-red-600 text-red-600 animate-pulse" />
                    <span>Emergency Blood Request Support</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-libre mb-2">
                    REQUEST <span className="text-red-600">BLOOD</span> DONORS
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-playfair leading-relaxed">
                    Submit the patient details below. IMA Moradabad connects emergency requests with verified voluntary blood donors and local blood banks.
                </p>

                {/* Highlights Strip */}
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-4 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span className="font-medium text-slate-700">Rapid Coordination</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span className="font-medium text-slate-700">Verified Donors</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span className="font-medium text-slate-700">24/7 Priority Support</span>
                    </div>
                </div>
            </div>

            {/* Main Form Container */}
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-md border border-slate-200/90 p-5 sm:p-7 md:p-8">
                    {/* Header Strip inside Card */}
                    <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-2">
                        <div>
                            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-libre flex items-center gap-2">
                                <Droplets className="w-5 h-5 text-red-600" />
                                Patient & Requirement Details
                            </h2>
                            <p className="text-xs text-slate-500 font-playfair">
                                Fields marked with <span className="text-red-500 font-bold">*</span> are mandatory for fast verification.
                            </p>
                        </div>
                        <span className="text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3 text-rose-600" /> High Priority Channel
                        </span>
                    </div>

                    <form
                        action="https://formsubmit.co/imamoradabad@gmail.com"
                        method="POST"
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="URGENT: Blood Request - IMA Moradabad" />
                        <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="true" />
                        <input type="hidden" name="_cc" value="emergency@imamoradabad.com" />

                        {/* SECTION 1: PATIENT & CONTACT INFO */}
                        <div>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                                1. Patient & Attendant Information
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {/* Patient Full Name */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Patient Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="patientName"
                                            value={formData.patientName}
                                            onChange={handleChange}
                                            placeholder="e.g. Ramesh Chandra"
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                            required
                                        />
                                        <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                </div>

                                {/* Contact Person Name */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Attendant / Contact Person <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                            required
                                        />
                                        <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Emergency Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            onBlur={handlePhoneBlur}
                                            maxLength={10}
                                            placeholder="Enter 10-digit mobile number"
                                            className={`w-full h-9 pl-8 pr-3 text-xs sm:text-sm border rounded-lg bg-slate-50/50 focus:bg-white transition-all outline-hidden text-slate-800 placeholder:text-slate-400 ${
                                                phoneError 
                                                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' 
                                                    : 'border-slate-200 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                                            }`}
                                            required
                                        />
                                        <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                    {phoneError && (
                                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                                            {phoneError}
                                        </p>
                                    )}
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="contact@domain.com"
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                            required
                                        />
                                        <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 2: BLOOD REQUIREMENTS */}
                        <div className="pt-1">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                                2. Requirement Specifications
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {/* Blood Type */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Blood Group Needed <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="bloodType"
                                            value={formData.bloodType}
                                            onChange={handleChange}
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 cursor-pointer"
                                            required
                                        >
                                            <option value="">Select blood group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                        <Droplets className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-red-500" />
                                    </div>
                                </div>

                                {/* Units Needed */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Units (Pints) Needed <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            name="unitsNeeded"
                                            value={formData.unitsNeeded}
                                            onChange={handleChange}
                                            placeholder="e.g. 2"
                                            min="1"
                                            max="10"
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                            required
                                        />
                                        <Heart className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                </div>

                                {/* Urgency Level */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Urgency Level <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="urgency"
                                            value={formData.urgency}
                                            onChange={handleChange}
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 cursor-pointer"
                                            required
                                        >
                                            <option value="">Select urgency</option>
                                            <option value="critical">Critical (Within 24 hours)</option>
                                            <option value="urgent">Urgent (1-3 days)</option>
                                            <option value="normal">Planned (Within a week)</option>
                                        </select>
                                        <Clock className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-rose-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                                {/* Required Date */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Required By Date <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="requiredDate"
                                            value={formData.requiredDate}
                                            onChange={handleChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 cursor-pointer"
                                            required
                                        />
                                        <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                </div>

                                {/* Medical Reason */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Medical Purpose <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="medicalReason"
                                            value={formData.medicalReason}
                                            onChange={handleChange}
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 cursor-pointer"
                                            required
                                        >
                                            <option value="">Select clinical reason</option>
                                            <option value="surgery">Emergency Surgery</option>
                                            <option value="accident">Accident / Trauma</option>
                                            <option value="anemia">Severe Anemia</option>
                                            <option value="cancer">Oncology / Cancer Care</option>
                                            <option value="childbirth">Maternity / Childbirth</option>
                                            <option value="thalassemia">Thalassemia / Dialysis</option>
                                            <option value="other">Other Medical Cause</option>
                                        </select>
                                        <FileText className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 3: HOSPITAL & LOCATION */}
                        <div className="pt-1">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                                3. Hospital & Location Details
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {/* Hospital Name */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Hospital / Nursing Home Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="hospital"
                                            value={formData.hospital}
                                            onChange={handleChange}
                                            placeholder="e.g. Apex Hospital, Moradabad"
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                            required
                                        />
                                        <Hospital className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                </div>

                                {/* City / Area */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        City / Area <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Moradabad"
                                            className="w-full h-9 pl-8 pr-3 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400"
                                            required
                                        />
                                        <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Additional Instructions */}
                            <div className="mt-3">
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Ward / Bed No. & Instructions <span className="text-slate-400 font-normal">(Optional)</span>
                                </label>
                                <textarea
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                    placeholder="Enter ward details, hospital address, blood bank file no., or specific donor instructions..."
                                    rows="2"
                                    className="w-full p-2.5 text-xs sm:text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500/30 transition-all outline-hidden text-slate-800 placeholder:text-slate-400 resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* Emergency Contact & Notice Strip */}
                        <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-center justify-between flex-wrap gap-2 text-xs">
                            <div className="flex items-center gap-2 text-amber-900">
                                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                <span>Immediate life-threatening situation? Call 24/7 Helpline:</span>
                            </div>
                            <a 
                                href="tel:+917500470200" 
                                className="font-bold text-red-700 hover:text-red-800 bg-white border border-amber-200 px-2.5 py-1 rounded-md text-xs shadow-2xs hover:shadow-xs transition-all inline-flex items-center gap-1"
                            >
                                <Phone className="w-3 h-3 text-red-600" /> +91 7500470200
                            </a>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-1">
                            <button
                                type="submit"
                                className="w-full h-10 sm:h-11 bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                            >
                                <Send className="w-4 h-4" />
                                <span>Submit Urgent Blood Request</span>
                            </button>
                        </div>

                        {/* Trust Footer */}
                        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 border-t border-slate-100">
                            <span className="flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Confidential Patient Data
                            </span>
                            <span className="flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Donor Network
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-emerald-600" /> 2-4 Hr Turnaround
                            </span>
                        </div>
                    </form>
                </div>

                {/* 3 Steps Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8">
                    <div className="bg-white/90 rounded-xl p-4 border border-slate-200/80 shadow-2xs text-center">
                        <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center mx-auto mb-2">
                            1
                        </div>
                        <h3 className="font-semibold text-xs text-slate-900 mb-0.5">Submit Request</h3>
                        <p className="text-[11px] text-slate-500 font-playfair">Patient and hospital verification details</p>
                    </div>
                    <div className="bg-white/90 rounded-xl p-4 border border-slate-200/80 shadow-2xs text-center">
                        <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center mx-auto mb-2">
                            2
                        </div>
                        <h3 className="font-semibold text-xs text-slate-900 mb-0.5">Donor Match</h3>
                        <p className="text-[11px] text-slate-500 font-playfair">Coordinating with available local donors</p>
                    </div>
                    <div className="bg-white/90 rounded-xl p-4 border border-slate-200/80 shadow-2xs text-center">
                        <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center mx-auto mb-2">
                            3
                        </div>
                        <h3 className="font-semibold text-xs text-slate-900 mb-0.5">Save Lives</h3>
                        <p className="text-[11px] text-slate-500 font-playfair">Prompt delivery & assistance at hospital</p>
                    </div>
                </div>

                {/* Switch to Donate Link */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-slate-600">
                        Want to volunteer and save lives as a donor instead?{' '}
                        <Link to="/donateblood" className="text-red-600 font-semibold hover:underline">
                            Register as a Blood Donor here →
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
