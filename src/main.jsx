import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  FaBars as Menu,
  FaXmark as X,
  FaArrowRightLong as ArrowRight,
  FaCalendarDays as CalendarDays,
  FaFacebookF as Facebook,
  FaStethoscope as Stethoscope,
  FaBookOpen as BookOpen,
  FaLocationDot as MapPin,
  FaClock as Clock,
  FaCircleCheck as CheckCircle2,
  FaPaperPlane as Send,
  FaShieldHeart as ShieldCheck,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookMessenger,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import "./styles.css";
const asset = (filename) => `${import.meta.env.BASE_URL}${filename}`;
const fb = "https://www.facebook.com/Drhassan74",
  photo = asset("dr-hassan-consultation.jpg");
const instagram = "https://www.instagram.com/drhassan74/";
const youtube = "https://www.youtube.com/@drHassan74";
const tiktok = "https://www.tiktok.com/@drHassan19";
const whatsapp = "https://wa.me/252615516912";
const messenger = "https://m.me/Drhassan74";
const surgeryPhoto = asset("dr-hassan-surgery.png");
const services = [
  [
    "General Surgery",
    "Professional consultation and care for general surgical conditions.",
  ],
  [
    "Laparoscopic Surgery",
    "Consultation for minimally invasive surgical care.",
  ],
  [
    "Endoscopic Surgery",
    "Information and consultation relating to endoscopic procedures.",
  ],
];
const experience = [
  {
    hospital: "Dufle Specialist Hospital",
    role: "General Surgeon",
    dates: "Jan 1, 2026 – Present",
    duration: "7 months",
    mark: "DS",
    current: true,
  },
  {
    hospital: "Sakiina Hospital",
    role: "Surgeon",
    dates: "May 4, 2024 – Jan 31, 2026",
    duration: "1 year, 8 months",
    mark: "SH",
  },
  {
    hospital: "Capital Hospital",
    role: "General Surgery",
    dates: "Nov 9, 2023 – Jan 1, 2026",
    duration: "2 years, 1 month",
    mark: "CH",
  },
  {
    hospital: "Liibaan Hospital",
    role: "On-Call Surgeon & Endoscopic Unit",
    dates: "Apr 10, 2023 – Jan 10, 2026",
    duration: "2 years, 9 months",
    mark: "LH",
  },
  {
    hospital: "Qaadi Hospital",
    role: "On-Call Surgeon",
    dates: "Feb 18, 2023 – Jan 28, 2026",
    duration: "2 years, 11 months",
    mark: "QH",
  },
  {
    hospital: "Gar Gaar General Hospital",
    role: "Classified Consultant General Surgeon",
    dates: "May 1, 2022 – Mar 2025",
    duration: "2 years, 11 months",
    mark: "GG",
  },
];
const gallery = [
  {
    src: photo,
    title: "Patient consultation",
    alt: "Dr Hassan Ali during a patient consultation",
  },
  {
    src: surgeryPhoto,
    title: "Surgical care",
    alt: "Dr Hassan Ali performing surgery",
  },
  {
    src: asset("gallery-laparoscopic-team.jpg"),
    title: "Laparoscopic procedure",
    alt: "Dr Hassan Ali and his team during a laparoscopic procedure",
  },
  {
    src: asset("gallery-surgical-care.jpg"),
    title: "Focused surgical practice",
    alt: "Dr Hassan Ali providing surgical care",
  },
  {
    src: asset("gallery-surgical-team.jpg"),
    title: "Surgical teamwork",
    alt: "Dr Hassan Ali working with a surgical team",
  },
  {
    src: asset("gallery-laparoscopy.jpg"),
    title: "Laparoscopic surgery",
    alt: "Dr Hassan Ali using laparoscopic instruments",
  },
];
function App() {
  let [m, setM] = useState(false),
    [ok, setOk] = useState(false);
  return (
    <>
      <header>
        <a className="logo" href="#top">
          <img src={asset("dr-hassan-profile.jpg")} alt="Dr Hassan Ali logo" />
          <span>
            Dr Hassan Ali<small>General & Laparoscopic Surgeon</small>
          </span>
        </a>
        <button className="menu" onClick={() => setM(!m)}>
          {m ? <X /> : <Menu />}
        </button>
        <nav className={m ? "open" : ""}>
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href={fb} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a className="cta" href="#appointment">
            Book appointment <ArrowRight />
          </a>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <div>
            <p className="label">Dufle Hospital · Mogadishu</p>
            <h1>
              Trusted surgical care,<i> thoughtfully delivered.</i>
            </h1>
            <p className="intro">
              Dr Hassan Ali is an experienced General & Laparoscopic/Endoscopic
              Surgeon with over 15 years of professional experience.
            </p>
            <p className="actions">
              <a className="cta" href="#appointment">
                <CalendarDays /> Request appointment
              </a>
              <a className="link" href="#about">
                Discover more <ArrowRight />
              </a>
            </p>
            <div className="stats">
              <span>
                <b>15+</b>Years of experience
              </span>
              <span>
                <b>3</b>Surgical care areas
              </span>
            </div>
          </div>
          <figure className="hero-photo">
            <img src={photo} alt="Dr Hassan Ali" />
            <figcaption>
              <b>Dr Hassan Ali</b>
              <small>Surgeon · Mogadishu</small>
            </figcaption>
          </figure>
        </section>
        <section className="strip">
          <span>
            <Stethoscope /> General surgery
          </span>
          <span>
            <ShieldCheck /> Laparoscopic surgery
          </span>
          <span>
            <BookOpen /> Endoscopic surgery
          </span>
        </section>
        <section className="about section" id="about">
          <div className="photo-frame">
            <img src={surgeryPhoto} alt="Dr Hassan Ali performing surgery" />
            <b>
              15+<small>years of experience</small>
            </b>
          </div>
          <div>
            <p className="label">About Dr Hassan</p>
            <h2>Experience that puts patients at ease.</h2>
            <p>
              Dr Hassan Ali is a General & Laparoscopic/Endoscopic Surgeon at
              Dufle Hospital in Mogadishu. His public professional profile
              records more than 15 years of experience.
            </p>
            <div className="tags">
              <span>Experienced surgeon</span>
              <span>Dufle Hospital</span>
              <span>Mogadishu, Somalia</span>
            </div>
            <a className="link" href="#appointment">
              Schedule consultation <ArrowRight />
            </a>
          </div>
        </section>
        <section className="experience section" id="experience">
          <div className="experience-heading">
            <div>
              <p className="label">Professional history</p>
              <h2>Work experience across leading hospitals.</h2>
            </div>
            <p>
              Surgical roles listed on Dr Hassan Ali’s public professional
              profile.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article
                className={item.current ? "experience-card current" : "experience-card"}
                key={item.hospital}
              >
                <span className="hospital-mark" aria-hidden="true">
                  {item.mark}
                </span>
                <div>
                  <div className="experience-title">
                    <h3>{item.hospital}</h3>
                    {item.current && <small>Current role</small>}
                  </div>
                  <p>{item.role}</p>
                  <span>
                    {item.dates} <i>·</i> {item.duration}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="services section" id="services">
          <div className="title">
            <div>
              <p className="label">Surgical services</p>
              <h2>Focused on the care you need.</h2>
            </div>
            <p>Dr Hassan’s publicly listed areas of surgical practice.</p>
          </div>
          <div className="cards">
            {services.map(([n, d], i) => (
              <article key={n}>
                <small>0{i + 1}</small>
                <Stethoscope />
                <h3>{n}</h3>
                <p>{d}</p>
                <a href="#appointment">
                  Request consultation <ArrowRight />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="quote">
          <div>
            <p className="label">A professional approach</p>
            <h2>“Clear information is the beginning of confident care.”</h2>
          </div>
          <a href="#contact">
            <ArrowRight />
          </a>
        </section>
        <section className="gallery section" id="gallery">
          <div className="title">
            <div>
              <p className="label">Clinical gallery</p>
              <h2>Dr Hassan at work.</h2>
            </div>
            <a className="link" target="_blank" rel="noreferrer" href={fb}>
              More photos on Facebook <Facebook />
            </a>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <a
                className={`gallery-item gallery-item-${index + 1}`}
                href={item.src}
                target="_blank"
                rel="noreferrer"
                key={item.src}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span>
                  <small>Dr Hassan Ali</small>
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </section>
        <section className="appointment" id="appointment">
          <div>
            <p className="label">Request an appointment</p>
            <h2>Start your consultation request today.</h2>
            <p>
              Submit your details and staff can follow up to confirm
              availability. This form is a request only.
            </p>
            <span>
              <Clock /> Availability is confirmed by staff.
            </span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const message = [
                "*Appointment request — Dr Hassan Ali*",
                "",
                `Name: ${formData.get("fullName")}`,
                `Phone: ${formData.get("phone")}`,
                `Preferred date: ${formData.get("date")}`,
                `Preferred time: ${formData.get("time")}`,
                `Reason for visit: ${formData.get("reason")}`,
              ].join("\n");
              window.open(
                `${whatsapp}?text=${encodeURIComponent(message)}`,
                "_blank",
                "noopener,noreferrer",
              );
              setOk(true);
            }}
          >
            {ok ? (
              <div className="success">
                <CheckCircle2 />
                <h3>WhatsApp is ready</h3>
                <p>Press Send in WhatsApp to submit your request.</p>
              </div>
            ) : (
              <>
                <label>
                  Full name
                  <input required name="fullName" placeholder="Your full name" />
                </label>
                <label>
                  Phone number
                  <input required name="phone" placeholder="Your phone number" />
                </label>
                <div className="two">
                  <label>
                    Preferred date
                    <input required name="date" type="date" />
                  </label>
                  <label>
                    Preferred time
                    <input required name="time" type="time" />
                  </label>
                </div>
                <label>
                  Reason for visit
                  <textarea
                    required
                    name="reason"
                    placeholder="Briefly tell us how we can help"
                  />
                </label>
                <button className="cta">
                  <Send /> Send appointment request
                </button>
              </>
            )}
          </form>
        </section>
        <section className="contact section" id="contact">
          <div>
            <p className="label">Social media & location</p>
            <h2>Follow and connect with Dr Hassan.</h2>
            <p>
              Follow Dr Hassan’s public medical updates or contact the clinic
              through the available official channels.
            </p>
          </div>
          <div className="contact-box">
            <a href={instagram} target="_blank" rel="noreferrer">
              <span className="social-symbol social-instagram">
                <FaInstagram />
              </span>
              <span>
                <small>Instagram</small>@drHassan74
              </span>
              <ArrowRight />
            </a>
            <a href={youtube} target="_blank" rel="noreferrer">
              <span className="social-symbol social-youtube">
                <FaYoutube />
              </span>
              <span>
                <small>YouTube</small>@drHassan74
              </span>
              <ArrowRight />
            </a>
            <a href={tiktok} target="_blank" rel="noreferrer">
              <span className="social-symbol social-tiktok">
                <FaTiktok />
              </span>
              <span>
                <small>TikTok</small>@drHassan19
              </span>
              <ArrowRight />
            </a>
            <a href={fb} target="_blank" rel="noreferrer">
              <span className="social-symbol social-facebook">
                <Facebook />
              </span>
              <span>
                <small>Facebook</small>Dr Hassan Ali
              </span>
              <ArrowRight />
            </a>
            <a href="tel:+252615516912">
              <span className="social-symbol social-phone">
                <FaPhone />
              </span>
              <span>
                <small>Phone</small>61 5516912
              </span>
              <ArrowRight />
            </a>
            <a href="mailto:drhassanali26@gmail.com">
              <span className="social-symbol social-email">
                <FaEnvelope />
              </span>
              <span>
                <small>Email</small>drhassanali26@gmail.com
              </span>
              <ArrowRight />
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <span className="social-symbol social-whatsapp">
                <FaWhatsapp />
              </span>
              <span>
                <small>WhatsApp</small>+252 61 5516912
              </span>
              <ArrowRight />
            </a>
            <a href={messenger} target="_blank" rel="noreferrer">
              <span className="social-symbol social-messenger">
                <FaFacebookMessenger />
              </span>
              <span>
                <small>Messenger</small>Dr Hassan Ali
              </span>
              <ArrowRight />
            </a>
            <div className="contact-wide">
              <span className="social-symbol social-linkedin">
                <FaLinkedinIn />
              </span>
              <span>
                <small>LinkedIn</small>Dr Hassan Ali
              </span>
            </div>
            <div className="contact-wide">
              <MapPin />
              <span>
                <small>Practice location</small>Dufle Hospital · Mogadishu
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a className="logo" href="#top">
          <img src={asset("dr-hassan-profile.jpg")} alt="Dr Hassan Ali logo" />
          <span>
            Dr Hassan Ali<small>General & Laparoscopic Surgeon</small>
          </span>
        </a>
        <p>
          Information here is for general education and does not replace
          professional consultation, diagnosis, or treatment.
        </p>
        <a href={fb} target="_blank" rel="noreferrer">
          Facebook
        </a>
        <small>
          © {new Date().getFullYear()} Dr Hassan Ali. All rights reserved.
        </small>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
