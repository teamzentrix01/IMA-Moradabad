import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, User, Calendar, MapPin, Droplet, Trophy, CheckCircle, AlertCircle } from 'lucide-react';
import Banner from '../components/ui/Banner';

export default function Registration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        bloodGroup: '',
        address: '',
        city: 'Moradabad',
        state: 'Uttar Pradesh',
        pincode: '',
        campId: '',
        preferredDate: '',
        previousDonation: '',
        lastDonationDate: '',
        medicalConditions: '',
        terms: false
    });

    const [errors, setErrors] = useState({});

    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    const upcomingCamps = [
        { id: '1', name: 'Mega Blood Donation Drive - District Hospital', date: '15 Oct 2025' },
        { id: '2', name: 'Community Blood Camp - Majhola', date: '22 Oct 2025' },
        { id: '3', name: 'Corporate Blood Donation Camp', date: '28 Oct 2025' },
        { id: '4', name: 'Educational Institution Blood Drive', date: '5 Nov 2025' }
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
        if (!formData.age) newErrors.age = 'Age is required';
        else if (formData.age < 18 || formData.age > 65) newErrors.age = 'Age must be between 18 and 65';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
        if (!formData.campId) newErrors.campId = 'Please select a camp';
        if (!formData.previousDonation) newErrors.previousDonation = 'Please select donation history';
        if (!formData.terms) newErrors.terms = 'You must accept terms and conditions';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        // Don't prevent default - let FormSubmit handle the submission
        if (!validateForm()) {
            e.preventDefault(); // Only prevent if validation fails
            return;
        }
        // If validation passes, form will submit to FormSubmit automatically
    };

    return (
        <>
            <section className="py-10 px-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-block mb-6">
                        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                            <Trophy className="w-6 h-6" />
                            <span className="font-semibold">Celebrating Excellence</span>
                        </div>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold mb-4 font-libre tracking-normal">
                        <span className="text-yellow-300">BLOOD DONATION REGISTRATION</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-4 opacity-95 font-medium font-playfair tracking-wide">
                        Indian Medical Association, Moradabad - 244001
                    </p>
                    <p className="text-sm max-w-2xl mx-auto opacity-80 font-playfair">

                    </p>
                </div>
            </section>

            <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Heart className="w-4 h-4" />
                            <span>Be a Life Saver</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-libre">
                            Register for Blood Donation Camp
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 font-playfair tracking-wide">
                            Join IMA Moradabad's mission to save lives through blood donation
                        </p>
                    </div>

                    {/* Registration Form Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                        <form
                            action="https://formsubmit.co/imamoradabad@gmail.com"
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            {/* FormSubmit Configuration (Hidden Inputs) */}
                            <input type="hidden" name="_subject" value="New Blood Donation Registration - IMA Moradabad" />
                            <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="true" />

                            {/* Personal Information Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <User className="w-6 h-6 text-red-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.fullName && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.fullName}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="10-digit mobile number"
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    {/* Age */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Age *
                                        </label>
                                        <input
                                            type="number"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="18-65 years"
                                            min="18"
                                            max="65"
                                        />
                                        {errors.age && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.age}
                                            </p>
                                        )}
                                    </div>

                                    {/* Gender */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Gender *
                                        </label>
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.gender && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.gender}
                                            </p>
                                        )}
                                    </div>

                                    {/* Blood Group */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Blood Group *
                                        </label>
                                        <select
                                            name="bloodGroup"
                                            value={formData.bloodGroup}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${errors.bloodGroup ? 'border-red-500' : 'border-gray-300'}`}
                                        >
                                            <option value="">Select Blood Group</option>
                                            {bloodGroups.map(group => (
                                                <option key={group} value={group}>{group}</option>
                                            ))}
                                        </select>
                                        {errors.bloodGroup && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.bloodGroup}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Address Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <MapPin className="w-6 h-6 text-red-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">Address Details</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Address
                                        </label>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows="3"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                            placeholder="Street address"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            PIN Code
                                        </label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                            placeholder="244001"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Camp Selection */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <Calendar className="w-6 h-6 text-red-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">Camp Selection</h2>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Select Camp *
                                    </label>
                                    <select
                                        name="campId"
                                        value={formData.campId}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${errors.campId ? 'border-red-500' : 'border-gray-300'}`}
                                    >
                                        <option value="">Choose a camp</option>
                                        {upcomingCamps.map(camp => (
                                            <option key={camp.id} value={camp.id}>
                                                {camp.name} - {camp.date}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.campId && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.campId}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Medical History */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <Droplet className="w-6 h-6 text-red-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">Donation History</h2>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Have you donated blood before? *
                                        </label>
                                        <div className="flex gap-4">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="previousDonation"
                                                    value="yes"
                                                    checked={formData.previousDonation === 'yes'}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-4 h-4 text-red-600 focus:ring-red-500"
                                                />
                                                <span className="text-gray-700">Yes</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="previousDonation"
                                                    value="no"
                                                    checked={formData.previousDonation === 'no'}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-4 h-4 text-red-600 focus:ring-red-500"
                                                />
                                                <span className="text-gray-700">No</span>
                                            </label>
                                        </div>
                                        {errors.previousDonation && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.previousDonation}
                                            </p>
                                        )}
                                    </div>

                                    {formData.previousDonation === 'yes' && (
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Last Donation Date
                                            </label>
                                            <input
                                                type="date"
                                                name="lastDonationDate"
                                                value={formData.lastDonationDate}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Any Medical Conditions (Optional)
                                        </label>
                                        <textarea
                                            name="medicalConditions"
                                            value={formData.medicalConditions}
                                            onChange={handleChange}
                                            rows="3"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                            placeholder="Please mention any medical conditions, allergies, or medications"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="mb-8">
                                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        required
                                        className="w-5 h-5 text-red-600 focus:ring-red-500 rounded mt-0.5"
                                    />
                                    <div>
                                        <label className="text-sm text-gray-700 cursor-pointer">
                                            I hereby declare that all the information provided is true and accurate. I understand the blood donation process and consent to donate blood voluntarily. *
                                        </label>
                                        {errors.terms && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {errors.terms}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 cursor-pointer bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    Register Now
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate('/bloodcamps')}
                                    className="sm:w-auto bg-white text-gray-700 border-2 border-gray-300 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <Heart className="w-10 h-10 text-red-600 mx-auto mb-3" />
                            <h3 className="font-bold text-gray-900 mb-2">Save Lives</h3>
                            <p className="text-sm text-gray-600">One donation can save up to 3 lives</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <Droplet className="w-10 h-10 text-red-600 mx-auto mb-3" />
                            <h3 className="font-bold text-gray-900 mb-2">Quick Process</h3>
                            <p className="text-sm text-gray-600">Donation takes only 10-15 minutes</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <CheckCircle className="w-10 h-10 text-red-600 mx-auto mb-3" />
                            <h3 className="font-bold text-gray-900 mb-2">Safe & Secure</h3>
                            <p className="text-sm text-gray-600">All equipment is sterile and disposable</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
