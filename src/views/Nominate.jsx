import { Check, Award, Calendar, HelpCircle, ChevronRight, PhoneCall, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import NominateForm from "../components/NominateForm";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { submitNominationAction } from "../services/nominationService";
import "../styles/nominate.css";

export default function NominatePage() {
  return (
    <div className="nom-container">
      {/* HERO SECTION */}
      <section className="nom-hero">
        <div className="nom-hero-inner">
          {/* Breadcrumb */}
          <nav className="nom-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="nom-breadcrumb-separator">/</span>
            <Link to="/achievements">Awards & Recognition</Link>
            <span className="nom-breadcrumb-separator">/</span>
            <span className="nom-breadcrumb-current" aria-current="page">Nominate</span>
          </nav>

          {/* Tag Pill */}
          <div className="nom-tag-pill">
            <Award size={16} />
            <span>Celebrating Excellence</span>
          </div>

          {/* Heading & Subtext */}
          <h1 className="nom-hero-title nom-serif">
            Nominate a colleague who makes Moradabad healthier
          </h1>
          <p className="nom-hero-subtext">
            Honor doctors and healthcare professionals whose work has changed lives in our community.
          </p>

          {/* Stats Bar with Counter Animation */}
          <div className="nom-stats-grid">
            <div className="nom-stat-item">
              <span className="nom-stat-value">
                <AnimatedCounter target={5000} suffix="+" duration={1800} />
              </span>
              <span className="nom-stat-label">Members</span>
            </div>
            <div className="nom-stat-item">
              <span className="nom-stat-value">
                <AnimatedCounter target={95} suffix="+" duration={1800} />
              </span>
              <span className="nom-stat-label">Years Legacy</span>
            </div>
            <div className="nom-stat-item">
              <span className="nom-stat-value">
                <AnimatedCounter target={6} suffix="" duration={1500} />
              </span>
              <span className="nom-stat-label">Award Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA - FORM & SIDEBAR */}
      <main className="nom-content-wrapper">
        <div className="nom-main-grid">
          {/* Form Column (1.7fr on Desktop) */}
          <div className="w-full">
            <NominateForm submitHandler={submitNominationAction} />
          </div>

          {/* Sidebar Column (1fr on Desktop) */}
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
          </aside>
        </div>

        {/* Full-width "Need Help" Banner Card below Form and Selection Works */}
        <div className="nom-help-fullwidth">
          <div className="nom-card nom-help-card-horizontal">
            <div className="nom-help-horizontal-content">
              <div className="nom-help-icon-badge">
                <HelpCircle size={28} />
              </div>
              <div className="nom-help-horizontal-text">
                <h3 className="nom-help-title nom-serif">Need assistance with your nomination?</h3>
                <p className="nom-help-desc">
                  Have questions regarding award eligibility, submission materials, or the selection process? Our committee secretariat is readily available to support you.
                </p>
              </div>
            </div>
            <div className="nom-help-horizontal-actions">
              <Link to="/contactus" className="nom-help-link">
                <span>Contact Secretariat</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
