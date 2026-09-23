import React, { useEffect, useState } from "react";
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
const fb = "https://www.facebook.com/Drhassan74";
const instagram = "https://www.instagram.com/drhassan74/";
const youtube = "https://www.youtube.com/@drHassan74";
const tiktok = "https://www.tiktok.com/@DrHassan19";
const whatsapp = "https://wa.me/252615516912";
const messenger = "https://m.me/Drhassan74";
const photo = asset("dr-hassan-consultation.jpg");
const surgeryPhoto = asset("dr-hassan-surgery.png");

const languages = [
  { code: "en", label: "English" },
  { code: "so", label: "Soomaali" },
  { code: "ar", label: "العربية" },
];

const experience = [
  { hospital: "Dufle Specialist Hospital", dates: "Jan 1, 2026 – Present", duration: "7 months", mark: "DS", current: true },
  { hospital: "Sakiina Hospital", dates: "May 4, 2024 – Jan 31, 2026", duration: "1 year, 8 months", mark: "SH" },
  { hospital: "Capital Hospital", dates: "Nov 9, 2023 – Jan 1, 2026", duration: "2 years, 1 month", mark: "CH" },
  { hospital: "Liibaan Hospital", dates: "Apr 10, 2023 – Jan 10, 2026", duration: "2 years, 9 months", mark: "LH" },
  { hospital: "Qaadi Hospital", dates: "Feb 18, 2023 – Jan 28, 2026", duration: "2 years, 11 months", mark: "QH" },
  { hospital: "Gar Gaar General Hospital", dates: "May 1, 2022 – Mar 2025", duration: "2 years, 11 months", mark: "GG" },
];

const copy = {
  en: {
    nav: ["Home", "About", "Experience", "Services", "Gallery", "Contact"],
    book: "Book appointment",
    specialty: "General & Laparoscopic Surgeon",
    heroLabel: "Dufle Hospital · Mogadishu",
    heroTitle: <>Trusted surgical care,<i> thoughtfully delivered.</i></>,
    heroIntro: "Dr Hassan Ali is an experienced General & Laparoscopic/Endoscopic Surgeon with over 15 years of professional experience.",
    request: "Request appointment",
    discover: "Discover more",
    years: "Years of experience",
    areas: "Surgical care areas",
    surgeon: "Surgeon · Mogadishu",
    general: "General surgery",
    laparoscopic: "Laparoscopic surgery",
    endoscopic: "Endoscopic surgery",
    aboutLabel: "About Dr Hassan",
    aboutTitle: "Experience that puts patients at ease.",
    aboutText: "Dr Hassan Ali is a General & Laparoscopic/Endoscopic Surgeon at Dufle Hospital in Mogadishu. His public professional profile records more than 15 years of experience.",
    experienced: "Experienced surgeon",
    location: "Mogadishu, Somalia",
    schedule: "Schedule consultation",
    history: "Professional history",
    historyTitle: "Work experience across leading hospitals.",
    historyText: "Surgical roles listed on Dr Hassan Ali’s public professional profile.",
    current: "Current role",
    roles: ["General Surgeon", "Surgeon", "General Surgery", "On-Call Surgeon & Endoscopic Unit", "On-Call Surgeon", "Classified Consultant General Surgeon"],
    servicesLabel: "Surgical services",
    servicesTitle: "Focused on the care you need.",
    servicesText: "Dr Hassan’s publicly listed areas of surgical practice.",
    serviceNames: ["General Surgery", "Laparoscopic Surgery", "Endoscopic Surgery"],
    serviceDescriptions: ["Professional consultation and care for general surgical conditions.", "Consultation for minimally invasive surgical care.", "Information and consultation relating to endoscopic procedures."],
    consultation: "Request consultation",
    quoteLabel: "A professional approach",
    quote: "“Clear information is the beginning of confident care.”",
    galleryLabel: "Clinical gallery",
    galleryTitle: "Dr Hassan at work.",
    morePhotos: "More photos on Facebook",
    galleryTitles: ["Patient consultation", "Surgical care", "Laparoscopic procedure", "Focused surgical practice", "Surgical teamwork", "Laparoscopic surgery"],
    galleryAlts: ["Dr Hassan Ali during a patient consultation", "Dr Hassan Ali performing surgery", "Dr Hassan Ali and his team during a laparoscopic procedure", "Dr Hassan Ali providing surgical care", "Dr Hassan Ali working with a surgical team", "Dr Hassan Ali using laparoscopic instruments"],
    appointmentLabel: "Request an appointment",
    appointmentTitle: "Start your consultation request today.",
    appointmentText: "Submit your details and staff can follow up to confirm availability. This form is a request only.",
    availability: "Availability is confirmed by staff.",
    fullName: "Full name",
    fullNamePlaceholder: "Your full name",
    phone: "Phone number",
    phonePlaceholder: "Your phone number",
    date: "Preferred date",
    time: "Preferred time",
    reason: "Reason for visit",
    reasonPlaceholder: "Briefly tell us how we can help",
    send: "Send appointment request",
    successTitle: "WhatsApp is ready",
    successText: "Press Send in WhatsApp to submit your request.",
    invalidName: "Name should contain letters only.",
    invalidPhone: "Phone number should contain digits only.",
    oldDate: "A past date is not allowed.",
    oldTime: "A past time today is not allowed.",
    whatsappMessage: "Appointment request — Dr Hassan Ali",
    reasonMessage: "Reason for visit",
    contactLabel: "Social media & location",
    contactTitle: "Follow and connect with Dr Hassan.",
    contactText: "Follow Dr Hassan’s public medical updates or contact the clinic through the available official channels.",
    practiceLocation: "Practice location",
    disclaimer: "Information here is for general education and does not replace professional consultation, diagnosis, or treatment.",
    rights: "All rights reserved.",
  },
  so: {
    nav: ["Guriga", "Ku saabsan", "Khibrad", "Adeegyada", "Sawirro", "Xiriir"],
    book: "Qabso ballan",
    specialty: "Dhakhtar Qalliinka Guud iyo Laparoscopic",
    heroLabel: "Isbitaalka Dufle · Muqdisho",
    heroTitle: <>Daryeel qalliin oo lagu kalsoon yahay,<i> si taxaddar leh loo bixiyo.</i></>,
    heroIntro: "Dr Hassan Ali waa dhakhtar khibrad leh oo ku takhasusay qalliinka guud, laparoscopic iyo endoscopic, isaga oo leh in ka badan 15 sano oo waayo-aragnimo ah.",
    request: "Codso ballan",
    discover: "Wax badan ogow",
    years: "Sano oo khibrad ah",
    areas: "Meelaha daryeelka qalliinka",
    surgeon: "Dhakhtar qalliin · Muqdisho",
    general: "Qalliinka guud",
    laparoscopic: "Qalliinka laparoscopic",
    endoscopic: "Qalliinka endoscopic",
    aboutLabel: "Ku saabsan Dr Hassan",
    aboutTitle: "Khibrad bukaanka dejisa.",
    aboutText: "Dr Hassan Ali waa dhakhtar ku takhasusay qalliinka guud, laparoscopic iyo endoscopic oo ka shaqeeya Isbitaalka Dufle ee Muqdisho. Taariikhdiisa shaqo waxay muujinaysaa in ka badan 15 sano oo khibrad ah.",
    experienced: "Dhakhtar qalliin oo khibrad leh",
    location: "Muqdisho, Soomaaliya",
    schedule: "Qabso la-tashi",
    history: "Taariikhda shaqada",
    historyTitle: "Khibrad shaqo oo laga helay isbitaallo hormuud ah.",
    historyText: "Shaqooyinka qalliinka ee ku qoran bogga xirfadeed ee Dr Hassan Ali.",
    current: "Shaqada hadda",
    roles: ["Dhakhtar Qalliinka Guud", "Dhakhtar qalliin", "Qalliinka Guud", "Dhakhtar wicitaan & Qaybta Endoscopic", "Dhakhtar wicitaan", "La-taliye Qalliinka Guud"],
    servicesLabel: "Adeegyada qalliinka",
    servicesTitle: "Waxaan diiradda saarnaa daryeelka aad u baahan tahay.",
    servicesText: "Meelaha qalliinka ee Dr Hassan ku taxan boggiisa xirfadeed.",
    serviceNames: ["Qalliinka Guud", "Qalliinka Laparoscopic", "Qalliinka Endoscopic"],
    serviceDescriptions: ["La-tashi iyo daryeel xirfad leh oo ku saabsan xaaladaha qalliinka guud.", "La-tashi ku saabsan daryeel qalliin oo dhaawac yar leh.", "Macluumaad iyo la-tashi ku saabsan hababka endoscopic."],
    consultation: "Codso la-tashi",
    quoteLabel: "Hab xirfadeed",
    quote: "“Macluumaad cad waa bilowga daryeel lagu kalsoonaan karo.”",
    galleryLabel: "Sawirrada shaqada caafimaad",
    galleryTitle: "Dr Hassan oo shaqaynaya.",
    morePhotos: "Sawirro badan Facebook",
    galleryTitles: ["La-tashiga bukaanka", "Daryeel qalliin", "Habka laparoscopic", "Shaqo qalliin oo diiradda leh", "Wadashaqaynta kooxda qalliinka", "Qalliinka laparoscopic"],
    galleryAlts: ["Dr Hassan Ali oo la tashanaya bukaan", "Dr Hassan Ali oo qalliin samaynaya", "Dr Hassan Ali iyo kooxdiisa oo ku jira hab laparoscopic", "Dr Hassan Ali oo bixinaya daryeel qalliin", "Dr Hassan Ali oo la shaqaynaya koox qalliin", "Dr Hassan Ali oo adeegsanaya qalabka laparoscopic"],
    appointmentLabel: "Codso ballan",
    appointmentTitle: "Maanta bilow codsiga la-tashigaaga.",
    appointmentText: "Geli xogtaada, shaqaaluhuna way kula soo xiriiri doonaan si loo xaqiijiyo waqtiga. Foomkani waa codsi oo keliya.",
    availability: "Shaqaaluhu ayaa xaqiijinaya helitaanka.",
    fullName: "Magaca oo buuxa",
    fullNamePlaceholder: "Geli magacaaga oo buuxa",
    phone: "Lambarka telefoonka",
    phonePlaceholder: "Geli lambarka telefoonka",
    date: "Taariikhda la doorbidayo",
    time: "Waqtiga la doorbidayo",
    reason: "Sababta booqashada",
    reasonPlaceholder: "Si kooban noogu sheeg sida aan kuu caawin karno",
    send: "Dir codsiga ballanta",
    successTitle: "WhatsApp waa diyaar",
    successText: "Riix Send gudaha WhatsApp si aad u dirto codsigaaga.",
    invalidName: "Magacu waa inuu ka koobnaadaa xarfo oo keliya.",
    invalidPhone: "Lambarka telefoonku waa inuu ka koobnaadaa tirooyin oo keliya.",
    oldDate: "Taariikh hore lama oggola.",
    oldTime: "Saacad hore oo maanta ah lama oggola.",
    whatsappMessage: "Codsiga ballanta — Dr Hassan Ali",
    reasonMessage: "Sababta booqashada",
    contactLabel: "Baraha bulshada iyo goobta",
    contactTitle: "La soco oo la xiriir Dr Hassan.",
    contactText: "La soco wararka caafimaad ee Dr Hassan ama la xiriir rugta adigoo adeegsanaya kanaallada rasmiga ah.",
    practiceLocation: "Goobta shaqada",
    disclaimer: "Macluumaadkani waa wacyigelin guud, mana beddelayo la-tashi, baaritaan ama daaweyn xirfadeed.",
    rights: "Xuquuqda oo dhan way xafidan tahay.",
  },
  ar: {
    nav: ["الرئيسية", "نبذة", "الخبرة", "الخدمات", "الصور", "اتصل بنا"],
    book: "احجز موعداً",
    specialty: "جرّاح عام وجراح منظار",
    heroLabel: "مستشفى دوفلي · مقديشو",
    heroTitle: <>رعاية جراحية موثوقة،<i> تُقدّم بعناية.</i></>,
    heroIntro: "الدكتور حسن علي جرّاح عام وجراح منظار وجراحة بالمنظار، يتمتع بخبرة مهنية تزيد على 15 عاماً.",
    request: "طلب موعد",
    discover: "اكتشف المزيد",
    years: "سنوات من الخبرة",
    areas: "مجالات الرعاية الجراحية",
    surgeon: "جرّاح · مقديشو",
    general: "الجراحة العامة",
    laparoscopic: "جراحة المنظار البطني",
    endoscopic: "جراحة المنظار",
    aboutLabel: "عن الدكتور حسن",
    aboutTitle: "خبرة تمنح المرضى الطمأنينة.",
    aboutText: "الدكتور حسن علي جرّاح عام وجراح منظار في مستشفى دوفلي بمقديشو. ويسجل ملفه المهني العام أكثر من 15 عاماً من الخبرة.",
    experienced: "جرّاح ذو خبرة",
    location: "مقديشو، الصومال",
    schedule: "احجز استشارة",
    history: "المسيرة المهنية",
    historyTitle: "خبرة عملية في مستشفيات رائدة.",
    historyText: "المناصب الجراحية الواردة في الملف المهني العام للدكتور حسن علي.",
    current: "المنصب الحالي",
    roles: ["جرّاح عام", "جرّاح", "الجراحة العامة", "جرّاح مناوب ووحدة المناظير", "جرّاح مناوب", "استشاري جراحة عامة"],
    servicesLabel: "الخدمات الجراحية",
    servicesTitle: "نركّز على الرعاية التي تحتاجها.",
    servicesText: "مجالات الممارسة الجراحية المدرجة للدكتور حسن.",
    serviceNames: ["الجراحة العامة", "جراحة المنظار البطني", "جراحة المنظار"],
    serviceDescriptions: ["استشارات ورعاية مهنية للحالات الجراحية العامة.", "استشارات حول الرعاية الجراحية طفيفة التوغل.", "معلومات واستشارات متعلقة بإجراءات المناظير."],
    consultation: "اطلب استشارة",
    quoteLabel: "نهج مهني",
    quote: "“المعلومات الواضحة هي بداية الرعاية الواثقة.”",
    galleryLabel: "معرض الصور الطبية",
    galleryTitle: "الدكتور حسن أثناء العمل.",
    morePhotos: "المزيد من الصور على فيسبوك",
    galleryTitles: ["استشارة مريض", "رعاية جراحية", "إجراء بالمنظار", "ممارسة جراحية دقيقة", "فريق جراحي متعاون", "جراحة المنظار"],
    galleryAlts: ["الدكتور حسن علي أثناء استشارة مريض", "الدكتور حسن علي يجري عملية جراحية", "الدكتور حسن علي وفريقه أثناء إجراء بالمنظار", "الدكتور حسن علي يقدم رعاية جراحية", "الدكتور حسن علي يعمل مع فريق جراحي", "الدكتور حسن علي يستخدم أدوات المنظار"],
    appointmentLabel: "طلب موعد",
    appointmentTitle: "ابدأ طلب استشارتك اليوم.",
    appointmentText: "أرسل بياناتك وسيتواصل معك الموظفون لتأكيد التوفر. هذا النموذج هو طلب فقط.",
    availability: "يؤكد الموظفون توفر الموعد.",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "اكتب اسمك الكامل",
    phone: "رقم الهاتف",
    phonePlaceholder: "اكتب رقم هاتفك",
    date: "التاريخ المفضل",
    time: "الوقت المفضل",
    reason: "سبب الزيارة",
    reasonPlaceholder: "أخبرنا باختصار كيف يمكننا مساعدتك",
    send: "إرسال طلب الموعد",
    successTitle: "واتساب جاهز",
    successText: "اضغط على إرسال في واتساب لإرسال طلبك.",
    invalidName: "يجب أن يحتوي الاسم على أحرف فقط.",
    invalidPhone: "يجب أن يحتوي رقم الهاتف على أرقام فقط.",
    oldDate: "لا يُسمح بتاريخ سابق.",
    oldTime: "لا يُسمح بوقت سابق اليوم.",
    whatsappMessage: "طلب موعد — الدكتور حسن علي",
    reasonMessage: "سبب الزيارة",
    contactLabel: "وسائل التواصل والموقع",
    contactTitle: "تابع وتواصل مع الدكتور حسن.",
    contactText: "تابع التحديثات الطبية العامة للدكتور حسن أو تواصل مع العيادة عبر القنوات الرسمية المتاحة.",
    practiceLocation: "موقع العيادة",
    disclaimer: "المعلومات هنا للتثقيف العام ولا تغني عن الاستشارة أو التشخيص أو العلاج المهني.",
    rights: "جميع الحقوق محفوظة.",
  },
};

const gallery = [
  { src: photo },
  { src: surgeryPhoto },
  { src: asset("gallery-laparoscopic-team.jpg") },
  { src: asset("gallery-surgical-care.jpg") },
  { src: asset("gallery-surgical-team.jpg") },
  { src: asset("gallery-laparoscopy.jpg") },
];

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("site-language") || "en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const t = copy[language] || copy.en;
  const direction = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.title = language === "ar" ? "الدكتور حسن | معلومات طبية" : language === "so" ? "Dr Hassan | Macluumaad Caafimaad" : "Dr Hassan | Medical Information";
    localStorage.setItem("site-language", language);
  }, [language, direction]);

  const keepLetters = (value) => value.replace(/[^\p{L}\p{M}' -]+/gu, "").replace(/\s+/g, " ").trimStart();
  const keepDigits = (value) => value.replace(/[^\d+ ]+/g, "");
  const todayIso = new Date().toLocaleDateString("en-CA");
  const nowTime = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false }).slice(0, 5);
  const timeMin = selectedDate === todayIso ? nowTime : "00:00";

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <a className="logo" href="#top">
          <img src={asset("dr-hassan-profile.jpg")} alt="Dr Hassan Ali logo" />
          <span>Dr Hassan Ali<small>{t.specialty}</small></span>
        </a>
        <div className="header-actions">
          <label className="language-picker"><span className="sr-only">Language</span><select value={language} onChange={changeLanguage} aria-label="Select language">{languages.map((item) => <option key={item.code} value={item.code}>{item.label}</option>)}</select></label>
          <button className="menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <nav className={menuOpen ? "open" : ""}>
          {t.nav.map((item, index) => <a key={item} href={["#top", "#about", "#experience", "#services", "#gallery", "#contact"][index]} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a href={fb} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Facebook</a>
          <a className="cta" href="#appointment" onClick={() => setMenuOpen(false)}>{t.book} <ArrowRight /></a>
        </nav>
      </header>
      <main id="top">
        <section className="hero"><div><p className="label">{t.heroLabel}</p><h1>{t.heroTitle}</h1><p className="intro">{t.heroIntro}</p><p className="actions"><a className="cta" href="#appointment"><CalendarDays /> {t.request}</a><a className="link" href="#about">{t.discover} <ArrowRight /></a></p><div className="stats"><span><b>15+</b>{t.years}</span><span><b>3</b>{t.areas}</span></div></div><figure className="hero-photo"><img src={photo} alt="Dr Hassan Ali" /><figcaption><b>Dr Hassan Ali</b><small>{t.surgeon}</small></figcaption></figure></section>
        <section className="strip"><span><Stethoscope /> {t.general}</span><span><ShieldCheck /> {t.laparoscopic}</span><span><BookOpen /> {t.endoscopic}</span></section>
        <section className="about section" id="about"><div className="photo-frame"><img src={surgeryPhoto} alt={t.galleryAlts[1]} /><b>15+<small>{t.years}</small></b></div><div><p className="label">{t.aboutLabel}</p><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="tags"><span>{t.experienced}</span><span>Dufle Hospital</span><span>{t.location}</span></div><a className="link" href="#appointment">{t.schedule} <ArrowRight /></a></div></section>
        <section className="experience section" id="experience"><div className="experience-heading"><div><p className="label">{t.history}</p><h2>{t.historyTitle}</h2></div><p>{t.historyText}</p></div><div className="experience-list">{experience.map((item, index) => <article className={item.current ? "experience-card current" : "experience-card"} key={item.hospital}><span className="hospital-mark" aria-hidden="true">{item.mark}</span><div><div className="experience-title"><h3>{item.hospital}</h3>{item.current && <small>{t.current}</small>}</div><p>{t.roles[index]}</p><span>{item.dates} <i>·</i> {item.duration}</span></div></article>)}</div></section>
        <section className="services section" id="services"><div className="title"><div><p className="label">{t.servicesLabel}</p><h2>{t.servicesTitle}</h2></div><p>{t.servicesText}</p></div><div className="cards">{t.serviceNames.map((name, index) => <article key={name}><small>0{index + 1}</small><Stethoscope /><h3>{name}</h3><p>{t.serviceDescriptions[index]}</p><a href="#appointment">{t.consultation} <ArrowRight /></a></article>)}</div></section>
        <section className="quote"><div><p className="label">{t.quoteLabel}</p><h2>{t.quote}</h2></div><a href="#contact"><ArrowRight /></a></section>
        <section className="gallery section" id="gallery"><div className="title"><div><p className="label">{t.galleryLabel}</p><h2>{t.galleryTitle}</h2></div><a className="link" target="_blank" rel="noreferrer" href={fb}>{t.morePhotos} <Facebook /></a></div><div className="gallery-grid">{gallery.map((item, index) => <a className={`gallery-item gallery-item-${index + 1}`} href={item.src} target="_blank" rel="noreferrer" key={item.src}><img src={item.src} alt={t.galleryAlts[index]} loading="lazy" /><span><small>Dr Hassan Ali</small>{t.galleryTitles[index]}</span></a>)}</div></section>
        <section className="appointment" id="appointment"><div><p className="label">{t.appointmentLabel}</p><h2>{t.appointmentTitle}</h2><p>{t.appointmentText}</p><span><Clock /> {t.availability}</span></div><form onSubmit={(event) => { event.preventDefault(); const formData = new FormData(event.currentTarget); const fullName = String(formData.get("fullName") ?? "").trim(); const phone = String(formData.get("phone") ?? "").trim(); if (!/^\p{L}[\p{L}\p{M}' -]*$/u.test(fullName)) { alert(t.invalidName); return; } if (!/^\+?[0-9 ]{7,15}$/.test(phone)) { alert(t.invalidPhone); return; } const date = String(formData.get("date") ?? ""); const time = String(formData.get("time") ?? ""); if (date < todayIso) { alert(t.oldDate); return; } if (date === todayIso && time < nowTime) { alert(t.oldTime); return; } const message = [`*${t.whatsappMessage}*`, "", `${t.fullName}: ${fullName}`, `${t.phone}: ${phone}`, `${t.date}: ${date}`, `${t.time}: ${time}`, `${t.reasonMessage}: ${formData.get("reason")}`].join("\n"); window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer"); setSubmitted(true); }}>
          {submitted ? <div className="success"><CheckCircle2 /><h3>{t.successTitle}</h3><p>{t.successText}</p></div> : <><label>{t.fullName}<input required name="fullName" placeholder={t.fullNamePlaceholder} autoComplete="name" inputMode="text" onInput={(event) => { event.currentTarget.value = keepLetters(event.currentTarget.value); }} /></label><label>{t.phone}<input required name="phone" placeholder={t.phonePlaceholder} autoComplete="tel" inputMode="tel" onInput={(event) => { event.currentTarget.value = keepDigits(event.currentTarget.value); }} /></label><div className="two"><label>{t.date}<input required name="date" type="date" min={todayIso} onChange={(event) => setSelectedDate(event.currentTarget.value)} /></label><label>{t.time}<input required name="time" type="time" min={timeMin} /></label></div><label>{t.reason}<textarea required name="reason" placeholder={t.reasonPlaceholder} /></label><button className="cta" type="submit"><Send /> {t.send}</button></>}</form></section>
        <section className="contact section" id="contact"><div><p className="label">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><div className="contact-box"><a href={instagram} target="_blank" rel="noreferrer"><span className="social-symbol social-instagram"><FaInstagram /></span><span><small>Instagram</small>@drHassan74</span><ArrowRight /></a><a href={youtube} target="_blank" rel="noreferrer"><span className="social-symbol social-youtube"><FaYoutube /></span><span><small>YouTube</small>@drHassan74</span><ArrowRight /></a><a href={tiktok} target="_blank" rel="noreferrer"><span className="social-symbol social-tiktok"><FaTiktok /></span><span><small>TikTok</small>@drHassan19</span><ArrowRight /></a><a href={fb} target="_blank" rel="noreferrer"><span className="social-symbol social-facebook"><Facebook /></span><span><small>Facebook</small>Dr Hassan Ali</span><ArrowRight /></a><a href="tel:+252615516912"><span className="social-symbol social-phone"><FaPhone /></span><span><small>{language === "ar" ? "الهاتف" : language === "so" ? "Telefoon" : "Phone"}</small>61 5516912</span><ArrowRight /></a><a href="mailto:drhassanali26@gmail.com"><span className="social-symbol social-email"><FaEnvelope /></span><span><small>Email</small>drhassanali26@gmail.com</span><ArrowRight /></a><a href={whatsapp} target="_blank" rel="noreferrer"><span className="social-symbol social-whatsapp"><FaWhatsapp /></span><span><small>WhatsApp</small>+252 61 5516912</span><ArrowRight /></a><a href={messenger} target="_blank" rel="noreferrer"><span className="social-symbol social-messenger"><FaFacebookMessenger /></span><span><small>Messenger</small>Dr Hassan Ali</span><ArrowRight /></a><div className="contact-wide"><span className="social-symbol social-linkedin"><FaLinkedinIn /></span><span><small>LinkedIn</small>Dr Hassan Ali</span></div><div className="contact-wide"><MapPin /><span><small>{t.practiceLocation}</small>Dufle Hospital · Mogadishu</span></div></div></section>
      </main>
      <footer><a className="logo" href="#top"><img src={asset("dr-hassan-profile.jpg")} alt="Dr Hassan Ali logo" /><span>Dr Hassan Ali<small>{t.specialty}</small></span></a><p>{t.disclaimer}</p><a href={fb} target="_blank" rel="noreferrer">Facebook</a><small>© {new Date().getFullYear()} Dr Hassan Ali. {t.rights}</small></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
