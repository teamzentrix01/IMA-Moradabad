"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { 
  Check, 
  UploadCloud, 
  FileText, 
  Trash2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Award,
  RefreshCw
} from "lucide-react";

export const AWARD_CATEGORIES = [
  {
    id: "lifetime-achievement",
    title: "Lifetime Achievement",
    desc: "Recognizing a career of exceptional service, leadership, and enduring impact in healthcare.",
  },
  {
    id: "clinical-excellence",
    title: "Clinical Excellence",
    desc: "Honoring superior diagnostic precision, surgical skill, and outstanding patient care.",
  },
  {
    id: "young-doctor",
    title: "Young Doctor",
    desc: "Celebrating emerging doctors under 40 demonstrating exceptional promise and dynamism.",
  },
  {
    id: "community-service",
    title: "Community Service",
    desc: "Saluting selfless contributions to public health camps, rural outreach, and preventive care.",
  },
  {
    id: "research-education",
    title: "Research & Education",
    desc: "Commending pioneering academic papers, clinical trials, and mentorship to medical students.",
  },
  {
    id: "blood-humanitarian",
    title: "Blood Donation & Humanitarian",
    desc: "Acknowledging tireless efforts in organizing life-saving blood drives and disaster relief.",
  },
];

export const RELATIONSHIPS = [
  "IMA member",
  "Colleague",
  "Patient or family",
  "Institution or hospital",
  "Self-nomination",
];

export default function NominateForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const [submittedRef, setSubmittedRef] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    nominatorName: "",
    nominatorMobile: "",
    nominatorEmail: "",
    relationship: "",
    nomineeName: "",
    nomineeSpeciality: "",
    nomineeHospital: "",
    nomineeRegNo: "",
    awardCategory: "",
    citation: "",
    declared: false,
  });

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  // Field refs to autofocus the first invalid field
  const fieldRefs = {
    nominatorName: useRef(null),
    nominatorMobile: useRef(null),
    nominatorEmail: useRef(null),
    relationship: useRef(null),
    nomineeName: useRef(null),
    nomineeSpeciality: useRef(null),
    nomineeHospital: useRef(null),
    nomineeRegNo: useRef(null),
    awardCategory: useRef(null),
    citation: useRef(null),
    declared: useRef(null),
    files: useRef(null),
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Validations per step
  const validateStep1 = () => {
    const errs = {};
    if (!formData.nominatorName.trim()) {
      errs.nominatorName = "Please enter your full name";
    }
    const mobileClean = formData.nominatorMobile.trim();
    if (!mobileClean) {
      errs.nominatorMobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(mobileClean)) {
      errs.nominatorMobile = "Enter a valid 10-digit mobile number starting with 6-9";
    }

    const emailClean = formData.nominatorEmail.trim();
    if (!emailClean) {
      errs.nominatorEmail = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailClean)) {
      errs.nominatorEmail = "Please enter a valid email address";
    }

    if (!formData.relationship) {
      errs.relationship = "Please select your relationship to the nominee";
    }
    return errs;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.nomineeName.trim()) {
      errs.nomineeName = "Please enter the nominee's full name";
    }
    if (!formData.nomineeSpeciality.trim()) {
      errs.nomineeSpeciality = "Speciality or designation is required";
    }
    if (!formData.nomineeHospital.trim()) {
      errs.nomineeHospital = "Hospital or clinic name is required";
    }
    if (!formData.awardCategory) {
      errs.awardCategory = "Please select an award category";
    }
    return errs;
  };

  const validateStep3 = () => {
    const errs = {};
    const textLen = formData.citation.trim().length;
    if (textLen < 150) {
      errs.citation = `Citation is too short (${textLen}/150 min characters). Please describe their accomplishments in detail.`;
    } else if (textLen > 1200) {
      errs.citation = `Citation exceeds limit (${textLen}/1200 max characters).`;
    }

    if (!formData.declared) {
      errs.declared = "You must confirm that the information provided is accurate.";
    }
    return errs;
  };

  const focusFirstError = (errObj) => {
    const errorKeys = Object.keys(errObj);
    if (errorKeys.length > 0) {
      const firstField = errorKeys[0];
      if (fieldRefs[firstField]?.current) {
        fieldRefs[firstField].current.focus();
        fieldRefs[firstField].current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleNext = () => {
    setApiError("");
    let errs = {};
    if (step === 1) {
      errs = validateStep1();
    } else if (step === 2) {
      errs = validateStep2();
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      focusFirstError(errs);
      return;
    }
    setErrors({});
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setApiError("");
    setErrors({});
    setStep((prev) => Math.max(1, prev - 1));
  };

  // Drag and drop handling
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processSelectedFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processSelectedFiles(e.target.files);
    }
  };

  const processSelectedFiles = (newFiles) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    const maxBytes = 5 * 1024 * 1024; // 5 MB
    const updated = [...files];
    let fileError = null;

    Array.from(newFiles).forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        fileError = `File "${file.name}" has an unsupported format. Allowed: PDF, JPG, PNG.`;
        return;
      }
      if (file.size > maxBytes) {
        fileError = `File "${file.name}" exceeds 5 MB limit.`;
        return;
      }
      if (!updated.some((f) => f.name === file.name && f.size === file.size)) {
        updated.push(file);
      }
    });

    if (fileError) {
      setErrors((prev) => ({ ...prev, files: fileError }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.files;
        return next;
      });
    }
    setFiles(updated);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Submit to Next.js API Route (/api/nominations)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    const errs = validateStep3();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      focusFirstError(errs);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      Object.keys(formData).forEach((key) => {
        payload.append(key, formData[key]);
      });
      files.forEach((file) => {
        payload.append("files", file);
      });

      const response = await fetch("/api/nominations", {
        method: "POST",
        body: payload,
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit nomination");
      }

      setSubmittedRef(resData.ref || `IMA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
    } catch (err) {
      setApiError(err.message || "An unexpected error occurred while communicating with the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      nominatorName: "",
      nominatorMobile: "",
      nominatorEmail: "",
      relationship: "",
      nomineeName: "",
      nomineeSpeciality: "",
      nomineeHospital: "",
      nomineeRegNo: "",
      awardCategory: "",
      citation: "",
      declared: false,
    });
    setFiles([]);
    setErrors({});
    setApiError("");
    setSubmittedRef(null);
    setStep(1);
  };

  // SUCCESS SCREEN
  if (submittedRef) {
    return (
      <div className="nom-card nom-success-card" role="alert" aria-live="polite">
        <div className="nom-success-icon-wrap">
          <CheckCircle2 size={46} strokeWidth={2.5} />
        </div>
        <h2 className="nom-success-title nom-serif">Nomination Submitted</h2>
        <p className="nom-success-subtext">
          Thank you for honoring healthcare excellence in Moradabad. Your nomination has been securely recorded and sent to the IMA Moradabad Awards Committee for review.
        </p>

        <div className="nom-ref-box">
          <div className="nom-ref-label">Reference Number</div>
          <div className="nom-ref-number">{submittedRef}</div>
        </div>

        <div className="nom-success-actions">
          <Link href="/" className="nom-btn nom-btn-secondary">
            Back to Home
          </Link>
          <button onClick={handleReset} className="nom-btn nom-btn-primary">
            <RefreshCw size={17} />
            Nominate Another
          </button>
        </div>
      </div>
    );
  }

  // MULTI-STEP FORM
  return (
    <div className="nom-card nom-form-card">
      {/* Progress & Stepper Header */}
      <div className="nom-progress-container">
        <div className="nom-step-indicators" aria-label="Form Progress">
          <div className={`nom-step-indicator ${step === 1 ? "active" : step > 1 ? "completed" : ""}`}>
            <div className="nom-step-number">
              {step > 1 ? <Check size={16} strokeWidth={3} /> : "1"}
            </div>
            <span className="hidden sm:inline">Nominator</span>
          </div>

          <div className={`nom-step-indicator ${step === 2 ? "active" : step > 2 ? "completed" : ""}`}>
            <div className="nom-step-number">
              {step > 2 ? <Check size={16} strokeWidth={3} /> : "2"}
            </div>
            <span className="hidden sm:inline">Nominee</span>
          </div>

          <div className={`nom-step-indicator ${step === 3 ? "active" : ""}`}>
            <div className="nom-step-number">3</div>
            <span className="hidden sm:inline">Citation & Docs</span>
          </div>
        </div>

        <div className="nom-progress-track">
          <div
            className="nom-progress-fill"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* STEP 1: WHO IS NOMINATING */}
        {step === 1 && (
          <section aria-labelledby="step-1-title">
            <div className="nom-step-heading">
              <span className="nom-step-label">Step 1 of 3</span>
              <h2 id="step-1-title" className="nom-step-title nom-serif">
                Who is nominating?
              </h2>
            </div>

            <div className="nom-form-group">
              <label htmlFor="nominatorName" className="nom-label">
                Your Full Name <span className="nom-label-required">*</span>
              </label>
              <input
                ref={fieldRefs.nominatorName}
                id="nominatorName"
                name="nominatorName"
                type="text"
                placeholder="Dr. / Mr. / Ms. Rajesh Sharma"
                value={formData.nominatorName}
                onChange={handleInputChange}
                className={`nom-input ${errors.nominatorName ? "has-error" : ""}`}
                aria-required="true"
                aria-invalid={!!errors.nominatorName}
              />
              {errors.nominatorName && (
                <div className="nom-error-message">
                  <AlertCircle size={14} />
                  {errors.nominatorName}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="nom-form-group">
                <label htmlFor="nominatorMobile" className="nom-label">
                  Mobile Number <span className="nom-label-required">*</span>
                </label>
                <input
                  ref={fieldRefs.nominatorMobile}
                  id="nominatorMobile"
                  name="nominatorMobile"
                  type="tel"
                  maxLength={10}
                  placeholder="10-digit mobile (e.g. 9876543210)"
                  value={formData.nominatorMobile}
                  onChange={handleInputChange}
                  className={`nom-input ${errors.nominatorMobile ? "has-error" : ""}`}
                  aria-required="true"
                  aria-invalid={!!errors.nominatorMobile}
                />
                {errors.nominatorMobile && (
                  <div className="nom-error-message">
                    <AlertCircle size={14} />
                    {errors.nominatorMobile}
                  </div>
                )}
                <div className="nom-hint-text">10 digits starting with 6, 7, 8, or 9</div>
              </div>

              <div className="nom-form-group">
                <label htmlFor="nominatorEmail" className="nom-label">
                  Email Address <span className="nom-label-required">*</span>
                </label>
                <input
                  ref={fieldRefs.nominatorEmail}
                  id="nominatorEmail"
                  name="nominatorEmail"
                  type="email"
                  placeholder="you@domain.com"
                  value={formData.nominatorEmail}
                  onChange={handleInputChange}
                  className={`nom-input ${errors.nominatorEmail ? "has-error" : ""}`}
                  aria-required="true"
                  aria-invalid={!!errors.nominatorEmail}
                />
                {errors.nominatorEmail && (
                  <div className="nom-error-message">
                    <AlertCircle size={14} />
                    {errors.nominatorEmail}
                  </div>
                )}
              </div>
            </div>

            <div className="nom-form-group">
              <label htmlFor="relationship" className="nom-label">
                Relationship to Nominee <span className="nom-label-required">*</span>
              </label>
              <select
                ref={fieldRefs.relationship}
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleInputChange}
                className={`nom-select ${errors.relationship ? "has-error" : ""}`}
                aria-required="true"
                aria-invalid={!!errors.relationship}
              >
                <option value="">-- Please select --</option>
                {RELATIONSHIPS.map((rel) => (
                  <option key={rel} value={rel}>
                    {rel}
                  </option>
                ))}
              </select>
              {errors.relationship && (
                <div className="nom-error-message">
                  <AlertCircle size={14} />
                  {errors.relationship}
                </div>
              )}
            </div>
          </section>
        )}

        {/* STEP 2: WHO IS THE NOMINEE */}
        {step === 2 && (
          <section aria-labelledby="step-2-title">
            <div className="nom-step-heading">
              <span className="nom-step-label">Step 2 of 3</span>
              <h2 id="step-2-title" className="nom-step-title nom-serif">
                Who is the nominee?
              </h2>
            </div>

            <div className="nom-form-group">
              <label htmlFor="nomineeName" className="nom-label">
                Nominee's Full Name <span className="nom-label-required">*</span>
              </label>
              <input
                ref={fieldRefs.nomineeName}
                id="nomineeName"
                name="nomineeName"
                type="text"
                placeholder="Dr. Firstname Lastname"
                value={formData.nomineeName}
                onChange={handleInputChange}
                className={`nom-input ${errors.nomineeName ? "has-error" : ""}`}
                aria-required="true"
                aria-invalid={!!errors.nomineeName}
              />
              {errors.nomineeName && (
                <div className="nom-error-message">
                  <AlertCircle size={14} />
                  {errors.nomineeName}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="nom-form-group">
                <label htmlFor="nomineeSpeciality" className="nom-label">
                  Speciality or Designation <span className="nom-label-required">*</span>
                </label>
                <input
                  ref={fieldRefs.nomineeSpeciality}
                  id="nomineeSpeciality"
                  name="nomineeSpeciality"
                  type="text"
                  placeholder="e.g. Senior Cardiologist / HOD"
                  value={formData.nomineeSpeciality}
                  onChange={handleInputChange}
                  className={`nom-input ${errors.nomineeSpeciality ? "has-error" : ""}`}
                  aria-required="true"
                  aria-invalid={!!errors.nomineeSpeciality}
                />
                {errors.nomineeSpeciality && (
                  <div className="nom-error-message">
                    <AlertCircle size={14} />
                    {errors.nomineeSpeciality}
                  </div>
                )}
              </div>

              <div className="nom-form-group">
                <label htmlFor="nomineeHospital" className="nom-label">
                  Hospital or Clinic <span className="nom-label-required">*</span>
                </label>
                <input
                  ref={fieldRefs.nomineeHospital}
                  id="nomineeHospital"
                  name="nomineeHospital"
                  type="text"
                  placeholder="e.g. Apex Hospital, Moradabad"
                  value={formData.nomineeHospital}
                  onChange={handleInputChange}
                  className={`nom-input ${errors.nomineeHospital ? "has-error" : ""}`}
                  aria-required="true"
                  aria-invalid={!!errors.nomineeHospital}
                />
                {errors.nomineeHospital && (
                  <div className="nom-error-message">
                    <AlertCircle size={14} />
                    {errors.nomineeHospital}
                  </div>
                )}
              </div>
            </div>

            <div className="nom-form-group">
              <label htmlFor="nomineeRegNo" className="nom-label">
                Medical Registration Number <span className="text-gray-400 font-normal text-xs">(Optional)</span>
              </label>
              <input
                ref={fieldRefs.nomineeRegNo}
                id="nomineeRegNo"
                name="nomineeRegNo"
                type="text"
                placeholder="e.g. MCI / UP-MC-12345"
                value={formData.nomineeRegNo}
                onChange={handleInputChange}
                className="nom-input"
              />
              <div className="nom-hint-text">UPMC / MCI registration number if known</div>
            </div>

            <div className="nom-form-group">
              <label className="nom-label" id="awardCategoryLabel">
                Award Category <span className="nom-label-required">*</span>
              </label>

              {errors.awardCategory && (
                <div className="nom-error-message mb-2">
                  <AlertCircle size={14} />
                  {errors.awardCategory}
                </div>
              )}

              <div
                className="nom-category-grid"
                role="radiogroup"
                aria-labelledby="awardCategoryLabel"
                ref={fieldRefs.awardCategory}
                tabIndex={-1}
              >
                {AWARD_CATEGORIES.map((cat) => {
                  const isChecked = formData.awardCategory === cat.id;
                  return (
                    <label
                      key={cat.id}
                      className={`nom-radio-card ${isChecked ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="awardCategory"
                        value={cat.id}
                        checked={isChecked}
                        onChange={handleInputChange}
                      />
                      <div className="nom-custom-radio" />
                      <div>
                        <div className="nom-category-title">{cat.title}</div>
                        <p className="nom-category-desc">{cat.desc}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* STEP 3: WHY DO THEY DESERVE THIS AWARD */}
        {step === 3 && (
          <section aria-labelledby="step-3-title">
            <div className="nom-step-heading">
              <span className="nom-step-label">Step 3 of 3</span>
              <h2 id="step-3-title" className="nom-step-title nom-serif">
                Why do they deserve this award?
              </h2>
            </div>

            {/* Citation Textarea */}
            <div className="nom-form-group">
              <div className="nom-textarea-header">
                <label htmlFor="citation" className="nom-label mb-0">
                  Citation & Statement of Justification <span className="nom-label-required">*</span>
                </label>
                <span
                  className={`nom-char-counter ${
                    formData.citation.trim().length >= 150 && formData.citation.trim().length <= 1200
                      ? "valid"
                      : formData.citation.trim().length > 1200
                      ? "error"
                      : ""
                  }`}
                >
                  {formData.citation.trim().length} / 1200 characters (min 150)
                </span>
              </div>
              <textarea
                ref={fieldRefs.citation}
                id="citation"
                name="citation"
                rows={6}
                placeholder="Highlight specific medical milestones, clinical achievements, community impact, compassion, and professional leadership in Moradabad..."
                value={formData.citation}
                onChange={handleInputChange}
                className={`nom-textarea ${errors.citation ? "has-error" : ""}`}
                aria-required="true"
                aria-invalid={!!errors.citation}
              />
              {errors.citation && (
                <div className="nom-error-message">
                  <AlertCircle size={14} />
                  {errors.citation}
                </div>
              )}
            </div>

            {/* Drag and Drop File Upload */}
            <div className="nom-form-group">
              <label className="nom-label">Supporting Documents (Optional)</label>
              <div
                className={`nom-dropzone ${isDragging ? "dragging" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fieldRefs.files.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    fieldRefs.files.current?.click();
                  }
                }}
              >
                <input
                  ref={fieldRefs.files}
                  type="file"
                  multiple
                  accept=".pdf,image/jpeg,image/png"
                  onChange={handleFileInputChange}
                  className="hidden"
                  tabIndex={-1}
                />
                <UploadCloud className="nom-dropzone-icon" size={36} />
                <p className="nom-dropzone-text">Click or drag files here to upload</p>
                <p className="nom-dropzone-subtext">PDF, JPG, PNG format &bull; Max 5 MB per file</p>
              </div>

              {errors.files && (
                <div className="nom-error-message">
                  <AlertCircle size={14} />
                  {errors.files}
                </div>
              )}

              {files.length > 0 && (
                <div className="nom-file-list">
                  {files.map((file, idx) => (
                    <div key={`${file.name}-${idx}`} className="nom-file-item">
                      <div className="nom-file-info">
                        <FileText size={18} className="text-orange-600 flex-shrink-0" />
                        <span className="nom-file-name">{file.name}</span>
                        <span className="nom-file-size">
                          ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="nom-file-remove-btn"
                        aria-label={`Remove file ${file.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Declaration Checkbox */}
            <div className="nom-declaration-box">
              <input
                ref={fieldRefs.declared}
                id="declared"
                name="declared"
                type="checkbox"
                checked={formData.declared}
                onChange={handleInputChange}
                aria-required="true"
                aria-invalid={!!errors.declared}
              />
              <label htmlFor="declared" className="nom-declaration-text">
                I declare that the details provided are true and accurate to the best of my knowledge, and I understand that the decision of the IMA Moradabad Awards Committee will be final and binding.
              </label>
            </div>
            {errors.declared && (
              <div className="nom-error-message">
                <AlertCircle size={14} />
                {errors.declared}
              </div>
            )}
          </section>
        )}

        {/* API Failure Alert */}
        {apiError && (
          <div className="nom-alert-error" role="alert">
            <AlertCircle size={18} className="flex-shrink-0" />
            <span>{apiError}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="nom-button-group">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              disabled={isSubmitting}
              className="nom-btn nom-btn-secondary"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="nom-btn nom-btn-primary"
            >
              Continue
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="nom-btn nom-btn-primary"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Award size={18} />
                  Submit nomination
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
