import NominateForm from "./NominateForm";
import "./nominate.css";
import Link from "next/link";
import { Check, Award, Calendar, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Nominate a Colleague | IMA Moradabad Awards",
  description:
    "Honor doctors and healthcare professionals whose work has changed lives in Moradabad. Submit your nomination for the annual IMA Moradabad medical excellence awards.",
};

export default function NominatePage() {
  return (
    <div className="nom-container">
      {/* HERO SECTION */}
      <section className="nom-hero">
        <div className="nom-hero-inner">
          {/* Breadcrumb */}
          <nav className="nom-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="nom-breadcrumb-separator">/</span>
            <Link href="/achievements">Awards & Recognition</Link>
            <span className="nom-breadcrumb-separator">/</span>
            <span className="nom-breadcrumb-current" aria-current="page">Nominate</span>
          </nav>

          {/* Tag Pill */}
          <div className="nom-tag-pill">
            <Award size={16} />
            <span>Celebrating Excellence</span>
          </div>

          {/* H1 Heading */}
          <h1 className="nom-hero-title nom-serif">
            Nominate a colleague who makes Moradabad healthier
          </h1>
          <p className="nom-hero-subtext">
            Honor doctors and healthcare professionals whose work has changed lives in our community.
          </p>

          {/* Stats Bar */}
          <div className="nom-stats-grid">
            <div className="nom-stat-item">
              <span className="nom-stat-value">5000+</span>
              <span className="nom-stat-label">Members</span>
            </div>
            <div className="nom-stat-item">
              <span className="nom-stat-value">95+</span>
              <span className="nom-stat-label">Years Legacy</span>
            </div>
            <div className="nom-stat-item">
              <span className="nom-stat-value">6</span>
              <span className="nom-stat-label">Award Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA - FORM (1.7fr) & SIDEBAR (1fr) */}
      <main className="nom-content-wrapper">
        <div className="nom-main-grid">
          {/* Client Form Component */}
          <div className="w-full">
            <NominateForm />
          </div>

          {/* Sidebar */}
          <aside className="nom-sidebar">
            {/* Card 1: Who can be nominated */}
            <div className="nom-card nom-sidebar-card">
              <h3 className="nom-sidebar-title nom-serif">
                <Award size={20} />
                Who can be nominated
              </h3>
              <ul className="nom-bullet-list">
                <li className="nom-bullet-item">
                  <Check size={18} className="nom-bullet-icon" strokeWidth={2.5} />
                  <span>
                    Any registered medical practitioner (MBBS/MD/MS/Specialist) practicing in Moradabad or surrounding districts.
                  </span>
                </li>
                <li className="nom-bullet-item">
                  <Check size={18} className="nom-bullet-icon" strokeWidth={2.5} />
                  <span>
                    Healthcare professionals or institutions with proven exemplary contributions to public health or clinical care.
                  </span>
                </li>
                <li className="nom-bullet-item">
                  <Check size={18} className="nom-bullet-icon" strokeWidth={2.5} />
                  <span>
                    Both IMA members and distinguished non-member clinicians eligible for special honorary citations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2: How selection works (Vertical Timeline) */}
            <div className="nom-card nom-sidebar-card">
              <h3 className="nom-sidebar-title nom-serif">
                <Calendar size={20} />
                How selection works
              </h3>
              <div className="nom-timeline">
                <div className="nom-timeline-item">
                  <div className="nom-timeline-dot" />
                  <h4 className="nom-timeline-step-title">1. Nominations Close</h4>
                  <p className="nom-timeline-step-desc">
                    Applications and supporting case records are accepted until the annual cutoff date.
                  </p>
                </div>
                <div className="nom-timeline-item">
                  <div className="nom-timeline-dot" />
                  <h4 className="nom-timeline-step-title">2. Committee Review</h4>
                  <p className="nom-timeline-step-desc">
                    An independent jury of senior physicians and former IMA presidents rigorously evaluates nominations.
                  </p>
                </div>
                <div className="nom-timeline-item">
                  <div className="nom-timeline-dot" />
                  <h4 className="nom-timeline-step-title">3. Awards Ceremony</h4>
                  <p className="nom-timeline-step-desc">
                    Recipients are formally felicitated during the prestigious Annual Moradabad Medical Gala.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Need help? (Orange Gradient) */}
            <div className="nom-card nom-help-card">
              <h3 className="nom-help-title nom-serif">Need help?</h3>
              <p className="nom-help-desc">
                Have questions regarding award eligibility, submission materials, or the selection process? Our committee secretariat is here to help.
              </p>
              <Link href="/contactus" className="nom-help-link">
                <span>Contact us</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
