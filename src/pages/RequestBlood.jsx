import { useState } from 'react';
import { Heart, AlertCircle, MapPin, Phone, User, Calendar, Droplet } from 'lucide-react';

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        // Don't prevent default - let FormSubmit handle the submission
        // Form will automatically submit to FormSubmit.co
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-pink-50 py-12 px-4">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                    <Heart className="w-12 h-12 text-red-600 fill-red-600" />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 uppercase font-libre">
                    Request <span className="text-red-600">Blood</span>
                </h1>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-playfair tracking-wide">
                    In urgent need of blood? Fill out the form below and we'll connect you with donors.
                    Every request is treated with priority to save precious lives.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-6 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Quick Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Verified Donors</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>

            {/* Main Form Card */}
            <div data-aos="fade-up" data-aos-duration="800" className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-red-50">
                <form
                    action="https://formsubmit.co/imamoradabad@gmail.com"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="URGENT: Blood Request - IMA Moradabad" />
                    <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="true" />
                    <input type="hidden" name="_cc" value="emergency@imamoradabad.com" />

                    {/* Patient Information */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <User className="w-5 h-5 text-red-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Patient Information</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Patient Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="patientName"
                                    value={formData.patientName}
                                    onChange={handleChange}
                                    placeholder="Enter patient's full name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Contact Person Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="contactName"
                                    value={formData.contactName}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="10-digit mobile number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Blood Requirements */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Droplet className="w-5 h-5 text-red-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Blood Requirements</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Blood Type Required <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="bloodType"
                                    value={formData.bloodType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                >
                                    <option value="">Select blood type</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Units Needed <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="unitsNeeded"
                                    value={formData.unitsNeeded}
                                    onChange={handleChange}
                                    placeholder="e.g., 2"
                                    min="1"
                                    max="10"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Urgency Level <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="urgency"
                                    value={formData.urgency}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                >
                                    <option value="">Select urgency</option>
                                    <option value="critical">Critical (Within 24 hours)</option>
                                    <option value="urgent">Urgent (1-3 days)</option>
                                    <option value="normal">Normal (Within a week)</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Required Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="requiredDate"
                                    value={formData.requiredDate}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Medical Reason <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="medicalReason"
                                    value={formData.medicalReason}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                >
                                    <option value="">Select reason</option>
                                    <option value="surgery">Surgery</option>
                                    <option value="accident">Accident/Trauma</option>
                                    <option value="anemia">Anemia</option>
                                    <option value="cancer">Cancer Treatment</option>
                                    <option value="childbirth">Childbirth Complications</option>
                                    <option value="thalassemia">Thalassemia</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Hospital Location */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <MapPin className="w-5 h-5 text-red-600" />
                            <h2 className="text-2xl font-bold text-gray-900">Hospital Location</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Hospital Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="hospital"
                                    value={formData.hospital}
                                    onChange={handleChange}
                                    placeholder="Enter hospital name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Moradabad"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Additional Information
                            </label>
                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                placeholder="Any additional details that might help donors (hospital address, ward number, visiting hours, etc.)"
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-none"
                            ></textarea>
                        </div>
                    </div>

                    {/* Emergency Notice */}
                    <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-yellow-900 mb-1">Emergency Contact</h3>
                            <p className="text-sm text-yellow-800">
                                For critical emergencies, please call our 24/7 helpline: <a href="tel:+917500470200" className="font-bold hover:underline">+91 7500470200</a>
                            </p>
                        </div>
                    </div>

                    {/* Privacy Notice */}
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-900 mb-1">Privacy & Security</h3>
                                <p className="text-sm text-blue-800">
                                    Your information is kept strictly confidential and will only be shared with verified donors. All data is encrypted and HIPAA compliant.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                        <Heart className="w-5 h-5" />
                        Submit Blood Request
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Takes less than 2 minutes • We'll contact you within 2-4 hours for critical cases
                    </p>
                </form>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center">
                        <div className="inline-block p-3 bg-red-100 rounded-full mb-3">
                            <span className="text-2xl font-bold text-red-600">1</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Submit Request</h3>
                        <p className="text-sm text-gray-600">Fill out the form with patient details</p>
                    </div>
                    <div className="text-center">
                        <div className="inline-block p-3 bg-red-100 rounded-full mb-3">
                            <span className="text-2xl font-bold text-red-600">2</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">We'll Match Donors</h3>
                        <p className="text-sm text-gray-600">We'll find compatible donors from our database</p>
                    </div>
                    <div className="text-center">
                        <div className="inline-block p-3 bg-red-100 rounded-full mb-3">
                            <span className="text-2xl font-bold text-red-600">3</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Save Lives</h3>
                        <p className="text-sm text-gray-600">Blood donation helps save up to 3 lives</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
