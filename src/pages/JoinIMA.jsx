import React, { useState } from 'react';
import {
  Users,
  ShieldCheck,
  Award,
  BookOpen,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Building2,
  Calendar,
  FileText,
  HelpCircle,
  Stethoscope,
  Send,
  GraduationCap
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../components/ui/Banner';
import AnimatedCounter from '../components/ui/AnimatedCounter';

export default function JoinIMA() {
  const navigate = useNavigate();

  // Simple quick inquiry state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    qualification: '',
    speciality: '',
    regNumber: '',
    council: 'UPMC'
  });
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Legal & Professional Protection",
      description: "Comprehensive medico-legal aid, professional protection scheme (PPS), and legal cell support in clinical disputes.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: BookOpen,
      title: "CME & Scientific Excellence",
      description: "Accredited Continuing Medical Education (CME) seminars, clinical workshops, and free access to research publications.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Elite Fraternity Network",
      description: "Connect with 5000+ clinicians, veteran specialists, and academic leaders across Moradabad and Uttar Pradesh.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: HeartHandshake,
      title: "Family & Social Security",
      description: "IMA National Social Security Scheme (NSSS) and Family Welfare Scheme offering substantial security for member families.",
      color: "from-rose-500 to-red-600"
    },
    {
      icon: Award,
      title: "Honors & Leadership Roles",
      description: "Annual medical excellence citations, leadership representation at state & national assemblies, and academic accolades.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Building2,
      title: "Branch Community & Club House",
      description: "Access to IMA Bhawan Moradabad facilities, library, guest house reciprocal rights, and social fellowship gatherings.",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const eligibilityCriteria = [
    "Possession of a recognized basic medical qualification (MBBS or equivalent) under the NMC / IMC Act.",
    "Valid and active registration with Uttar Pradesh Medical Council (UPMC) or National Medical Commission (NMC).",
    "Practicing, residing, or affiliated with a hospital/clinic in Moradabad or surrounding regions."
  ];

  const membershipSteps = [
    {
      step: "01",
      title: "Fill Application Form",
      desc: "Submit your basic personal, academic, and clinical registration details online or at IMA Bhawan."
    },
    {
      step: "02",
      title: "Document Verification",
      desc: "Submit photocopies of MBBS degree, State Medical Council certificate, and proof of address."
    },
    {
      step: "03",
      title: "Executive Approval",
      desc: "Credentials reviewed and approved by the IMA Moradabad executive committee."
    },
    {
      step: "04",
      title: "Welcome to Fraternity",
      desc: "Receive your official IMA Life Membership certificate, member directory badge, and voting rights."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) {
      alert("Please provide your name and mobile number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Banner */}
      <Banner title="JOIN IMA MORADABAD" tagline="Empowering doctors, elevating standards, and safeguarding the medical fraternity" />

      {/* Main Two-Column Layout */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Informative Content (Smoothly scrolls) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Intro Header */}
            <div>
              <div data-aos="fade-down" className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 shadow-xs">
                <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
                <span>Official Life Membership</span>
              </div>

              <h1 data-aos="fade-up" className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 font-libre tracking-tight leading-snug mb-3">
                Become a Part of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">India's Most Respected</span> Medical Body
              </h1>

              <p data-aos="fade-up" data-aos-delay="100" className="text-sm sm:text-base text-slate-600 leading-relaxed font-playfair">
                The <strong>Indian Medical Association (IMA) Moradabad Branch</strong> invites all eligible modern medicine practitioners to join our unified voice. Protect your rights, empower your career, and serve the community together.
              </p>

              {/* Quick Stats Bar */}
              <div data-aos="zoom-in" data-aos-delay="150" className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600 font-libre">
                    <AnimatedCounter target={5000} suffix="+" duration={1800} />
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Members</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 font-libre">
                    <AnimatedCounter target={95} suffix="+" duration={1800} />
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Years Legacy</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-bold text-teal-600 font-libre">
                    <AnimatedCounter target={1702} suffix="+" duration={1800} />
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Branches</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-bold text-rose-600 font-libre">
                    <AnimatedCounter target={100} suffix="%" duration={1800} />
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Physician Solidarity</div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div>
              <div data-aos="fade-up" className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-libre">
                  Why Join <span className="text-emerald-700">IMA Moradabad</span>?
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mt-2 rounded-full" />
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
                  Unrivaled professional representation, lifelong security, and academic advantages.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={idx}
                      data-aos="fade-up"
                      data-aos-delay={(idx % 2) * 100}
                      className="bg-white rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center text-white mb-3.5 shadow-sm group-hover:scale-105 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-emerald-600 transition-colors">
                          {b.title}
                        </h3>
                        <p className="text-slate-600 text-xs leading-relaxed">
                          {b.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Eligibility Card */}
            <div data-aos="fade-up" className="bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-800 text-white rounded-3xl p-6 sm:p-7 shadow-lg">
              <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold mb-3.5 backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-yellow-300" />
                <span>Prerequisites</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-libre mb-2.5 text-white">
                Eligibility for Membership
              </h3>
              <p className="text-emerald-100 text-xs sm:text-sm mb-5 leading-relaxed">
                In accordance with the IMA National Constitution, membership is open exclusively to qualified doctors of modern scientific medicine (Allopathy).
              </p>

              <ul className="space-y-3">
                {eligibilityCriteria.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-50 text-xs sm:text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/20 text-xs text-emerald-100 flex items-center justify-between flex-wrap gap-2">
                <span>Branch Code: UP / 93 (Moradabad)</span>
                <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">Active Chapter</span>
              </div>
            </div>

            {/* Workflow Steps Card */}
            <div data-aos="fade-up" className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold font-libre text-slate-900 mb-1">
                How to Become a Member
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-5">
                A transparent, 4-step onboarding journey into the medical fraternity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {membershipSteps.map((s, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="text-emerald-600 font-bold text-xs tracking-wider mb-1">
                      STEP {s.step}
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      {s.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-emerald-900 block">Want offline submission?</span>
                  <span className="text-[11px] text-emerald-700">Visit IMA Bhawan (Opp. SSP Office, Kachehri Parisar, Moradabad).</span>
                </div>
                <Link to="/contactus" className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline flex items-center gap-1">
                  <span>View Contact Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Form Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 z-20">
            <div 
              data-aos="fade-left" 
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-100/90 relative overflow-hidden"
            >
              {/* Subtle top brand accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600" />

              {/* Form Heading Section */}
              <div className="text-center mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-0.5 rounded-full inline-block mb-2">
                  Fast Track Inquiry
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-libre text-slate-900">
                  Apply or Request Membership Form
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Fill in your details. Secretariat will send the official package.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-900">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold font-libre">Thank You, Doctor!</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Your membership interest has been registered. The IMA Moradabad administrative desk will contact you via email/phone with guidelines.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3.5 text-xs font-bold text-emerald-700 underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Doctor's Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Dr. Rajesh Gupta"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Medical Council Reg.
                      </label>
                      <input
                        type="text"
                        name="regNumber"
                        placeholder="e.g. UP-MC-12345"
                        value={formData.regNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="doctor@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Qualification
                      </label>
                      <input
                        type="text"
                        name="qualification"
                        placeholder="e.g. MBBS, MD, MS"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Speciality / Designation
                      </label>
                      <input
                        type="text"
                        name="speciality"
                        placeholder="e.g. Physician, Surgeon"
                        value={formData.speciality}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Membership Request</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    🔒 Your medical details are stored securely for IMA branch communications only.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
