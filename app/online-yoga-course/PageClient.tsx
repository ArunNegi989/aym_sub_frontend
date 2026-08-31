"use client";
import React, { useEffect, useState, useRef } from "react";
import api from "@/lib/api";
import styles from "@/assets/style/online-yoga-course/Onlineyogacourse.module.css";
import Image from "next/image";
import chakra1 from "@/assets/images/root-chakra.png";
import chakra2 from "@/assets/images/sacral-chakra.png";
import chakra3 from "@/assets/images/third-eye-chakra.png";
import chakra4 from "@/assets/images/solar-plexus-chakra.png";
import chakra5 from "@/assets/images/heart-chakra.png";
import chakra6 from "@/assets/images/throat-chakra.png";
import HowToReach from "@/components/home/Howtoreach";
import heroImg from "@/assets/images/30.webp";
import Link from "next/link";
import herosectionimage from "@/assets/images/mainimages/32079071288_8bed34eecd_b.jpg";
import cardimg1 from "@/assets/images/mainimages/28531495457_bfb39bbd82_b.jpg";
import cardimg2 from "@/assets/images/mainimages/29510046748_6eb605450d_b.jpg";
import cardimg3 from "@/assets/images/mainimages/30736248347_790050d8b3_b.jpg";
import Script from "next/script";
/* ─────────────────────────────────────────────
   OTHER COURSE IMAGES
───────────────────────────────────────────── */
const otherCourseImages = [cardimg1, cardimg2, cardimg3];

/* ═══════════════════════════════════════════
   SEAT BOOKING TYPES
═══════════════════════════════════════════ */
type Currency = "USD" | "INR";

interface BatchRow {
  _id: string;
  startDate: string;
  endDate: string;
  usd200: string;
  usd300: string;
  inr200?: string;
  inr300?: string;
  totalSeats: number;
  bookedSeats: number;
  note?: string;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const liveCourses = [
  {
    id: 1,
    title: "200 Hour Live Online",
    duration: "24 Days",
    style: "Hatha Yoga and Ashtanga Yoga",
    sessions: "15 Days | 2 Classes Daily",
    cert: "Yoga Alliance, USA",
    fee: "399 USD / 20,000 INR",
    benefits: [
      "Expert-Led Live Training - Learn from experienced yoga masters.",
      "Flexible & Interactive - Attend classes from anywhere in the world.",
      "Comprehensive Curriculum - Deep dive into asanas, pranayama, meditation & philosophy.",
      "Lifetime Access - Get recordings for future reference.",
      "Globally Recognized Certification - Start your career as a certified yoga instructor.",
      "Limited Seats Available! Enroll now to begin your transformational yoga journey!",
    ],
  },
  {
    id: 2,
    title: "300 Hour Live Online",
    duration: "28 Days",
    style: "Hatha Yoga and Multi-Style",
    sessions: "15 Days | 2 Classes Daily",
    cert: "Yoga Alliance, USA",
    fee: "499 USD / 25,000 INR",
    benefits: [
      "Advanced & Multi-Style Training - Expand your practice with diverse yoga styles.",
      "Expert Guidance - Learn from seasoned yoga masters in real-time.",
      "Interactive Learning - Engage in live sessions with personal mentorship.",
      "Flexible & Accessible - Train from anywhere with class recordings for future access.",
      "Globally Recognized Certification - Elevate your career as a certified yoga teacher.",
      "Upgrade Your Yoga Journey Today! Enroll now and take your practice to the next level.",
    ],
  },
];

const prenatalCourse = {
  title: "Prenatal Live Online",
  duration: "7 Days",
  style: "Multi-Style (Gentle Hatha, Restorative, Breathwork & More)",
  sessions: "7 Days | 2 Classes Daily",
  cert: "Yoga Alliance, USA",
  fee: "399 USD / 20,000 INR",
  benefits: [
    "Specialized Prenatal Training - Learn safe and effective yoga techniques for expectant mothers.",
    "Expert Guidance - Led by experienced prenatal yoga instructors.",
    "Holistic Approach - Covers asanas, breathwork, meditation & relaxation techniques.",
    "Flexible & Convenient - Train from home with recorded sessions for future reference.",
    "Globally Recognized Certification - Advance your career as a certified prenatal yoga teacher.",
    "Flexible & Convenient - Train from home with recorded sessions for future reference.",
  ],
};



const curriculumAreas = [
  {
    title: "Philosophy of Yoga",
    lines: ["20 hour live classes", "5 hours e-books and assignments"],
    symbol: "☸",
    color: "#e53935",
    image: chakra1,
  },
  {
    title: "Introduction to Yogic Anatomy",
    lines: ["20 hour Anatomy live lectures", "5 hours e-books self-study"],
    symbol: "ॐ",
    color: "#F15505",
    image: chakra2,
  },
  {
    title: "Pranayama and Meditation",
    lines: ["30 hour live lecture and practice", "Mudra, bandha, pranayama and meditation"],
    symbol: "◉",
    color: "#f9a825",
    image: chakra3,
  },
  {
    title: "Adjusting and Assisting Tips",
    lines: ["10 hours with hatha yoga + alignment", "Art of adjustment through guidance"],
    symbol: "✦",
    color: "#f9a825",
    image: chakra4,
  },
  {
    title: "Asana Practice",
    lines: ["35 hour Hatha yoga live classes", "35 hour Ashtanga yoga live classes"],
    symbol: "❋",
    color: "#43a047",
    image: chakra5,
  },
  {
    title: "Teaching Methodology",
    lines: ["10 hours Lecture on teaching practice", "30 hours teaching practice and 10 feedback"],
    symbol: "⬡",
    color: "#29b6f6",
    image: chakra6,
  },
];

const recordedCourses = [
  {
    title: "200 Hour Recorded Online Yoga Course",
    price: "$299",
    features: [
      "Yoga Manual",
      "Recorded lectures on philosophy",
      "EBooks and online resources",
      "Few live classes",
      "Hatha / Ashtanga Yoga",
      "Yoga TTC Certificate",
      "Live Exam",
    ],
  },
  {
    title: "300 Hour Recorded Online Yoga Course",
    price: "$399",
    features: [
      "Yoga Manual",
      "Recorded lectures on philosophy",
      "EBooks and online resources",
      "Few live classes",
      "Multi-Style Yoga",
      "Yoga TTC Certificate",
      "Live Exam",
    ],
  },
];

const otherCourses = [
  { title: "Hatha Yoga Alignment", hours: "35 Hour", price: "299 USD" },
  { title: "Pranayama and Meditation", hours: "20 Hour", price: "349 USD" },
  { title: "Ashtanga Vinyasa Primary Series", hours: "35 Hour", price: "299 USD" },
];

const faqs = [
  {
    q: "What are the eligibility criteria for joining this course?",
    a: "Anyone with a sincere interest in learning yoga and who is in reasonably good physical health is welcome to apply. Whether you are a beginner or have some prior experience, you can choose a course that suits your goals and level.",
  },
  {
    q: "How do I register for these courses?",
    a: "To secure your spot, an advance payment of USD 200 is required, along with a transaction fee of USD 15 (totaling USD 215). The remaining course fee can be paid within the first two weeks of your enrollment.",
  },
  {
    q: "How do I get the certification?",
    a: "Upon successful completion of the course and final assessments, you will be awarded a recognized certification. Your certificate will be shipped to the postal address you provide; please note that shipping charges will be borne by the participant.",
  },
  {
    q: "What is the group size of each class?",
    a: "To ensure personalized attention and effective guidance, each online training batch is intentionally limited to 5 to 7 participants. This allows our instructors to focus on alignment, posture corrections, and individual progress throughout the course.",
  },
  {
    q: "How are the courses designed?",
    a: "Our programs are thoughtfully designed with 2 to 4 live online classes per day, depending on factors such as your time zone, location, and batch size. After enrollment, our team will connect with you to finalize a suitable class schedule.",
  },
];

const whyReasons = [
  {
    title: "Learn from the Best",
    desc: "Our exceptionally experienced and talented yoga teachers, with years of yoga teaching experience will make you journey all the way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Curriculum",
    desc: "Explore Hatha Yoga, Ashtanga Yoga, Vinyasa Yoga, meditation, pranayama & yoga philosophy from home.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 17v4M16 17v4M8 21h8M9 10l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Globally Recognized Certification",
    desc: "Get internationally renowned & accepted Yoga teacher training certification accredited with Yoga Alliance, USA.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" />
        <path d="M6 21v-1a6 6 0 0112 0v1" />
      </svg>
    ),
  },
  {
    title: "Interactive Live Sessions",
    desc: "Take live 1-1 mentoring & classes under the guidance to ensure personalized guidance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l4.553-2.277A1 1 0 0121 8.677V15.32a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    title: "Flexible Learning",
    desc: "Create a perfect balance between your life with the most efficient & well laid out online structured course.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Lifetime Access to Recordings",
    desc: "All live sessions will be forever recorded & given to you to refer to it any number of times.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M10 8l6 4-6 4V8z" fill="currentColor" opacity="0.25" />
        <path d="M10 8l6 4-6 4V8z" />
      </svg>
    ),
  },
  {
    title: "Small Batch Sizes",
    desc: "We will be having a small batch of only 5-7 students to give individual attention from instructors in every batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6" />
      </svg>
    ),
  },
  {
    title: "Rooted in Rishikesh Tradition",
    desc: "Our whole teaching lineage comes from the Himalayan traditions of Rishikesh (birthplace & capital of the yoga world).",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20l4-8 4 4 4-10 4 14" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
  {
    title: "Multi-Language Support",
    desc: "Our tutors are bilingual speaking both English and Hindi so that we cover maximum global and Indian students.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Post-Course Mentorship",
    desc: "We will be there with you even after the course gets over to guide and mentor you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-1a4 4 0 00-5.5-3.7" />
        <path d="M9 20H4v-1a4 4 0 015.5-3.7" />
        <circle cx="12" cy="8" r="4" />
        <path d="M12 12v8" />
      </svg>
    ),
  },
];

const keyBenefits = [
  {
    title: "Start Anytime, From Anywhere",
    desc: "Join us at any time; our courses are open all year round and accessible from all over the world on any device.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Yoga Alliance Certified",
    desc: "Teacher Training programs in all levels are approved by Yoga Alliance (USA) and hence accredited Internationally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Study at Your Own Pace",
    desc: "Our relaxed course design means that you can study in your own time in a way which suits your life.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════
   SEAT BOOKING HELPERS
═══════════════════════════════════════════ */
const shortDateRange = (start: string, end: string) => {
  const s = new Date(start);
  const e = new Date(end);
  const d = (dt: Date) =>
    dt.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
  return `${d(s)} – ${d(e)}`;
};

const monthYear = (start: string) =>
  new Date(start).toLocaleDateString("en-IN", { month: "short", year: "numeric" });

function useCurrencyRate() {
  const [rate, setRate] = useState<number>(83);
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
    )
      .then((r) => r.json())
      .then((data) => { if (data?.usd?.inr) setRate(data.usd.inr); })
      .catch(() => {});
  }, []);
  return rate;
}

/* ═══════════════════════════════════════════
   CURRENCY DROPDOWN
═══════════════════════════════════════════ */
function CurrencyDropdown({
  currency,
  onChange,
}: {
  currency: Currency;
  onChange: (c: Currency) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.sbCurrDrop} ref={ref}>
      <button
        className={styles.sbCurrDropBtn}
        onClick={() => setOpen((p) => !p)}
        type="button"
      >
        <span>{currency === "USD" ? "🇺🇸" : "🇮🇳"}</span>
        <span>{currency === "USD" ? "English" : "हिन्दी"}</span>
        <svg
          className={`${styles.sbCurrDropArrow} ${open ? styles.sbCurrDropArrowOpen : ""}`}
          viewBox="0 0 12 8"
          fill="none"
        >
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className={styles.sbCurrDropMenu}>
          {(["USD", "INR"] as Currency[]).map((c) => (
            <button
              key={c}
              className={`${styles.sbCurrDropItem} ${currency === c ? styles.sbCurrDropItemActive : ""}`}
              onClick={() => { onChange(c); setOpen(false); }}
              type="button"
            >
              <span>{c === "USD" ? "🇺🇸" : "🇮🇳"}</span>
              <div>
                <span>{c === "USD" ? "English" : "हिन्दी"}</span>
                <span>{c === "USD" ? "US Dollar" : "Indian Rupee"}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   SEAT BOOKING COMPONENT (inline)
═══════════════════════════════════════════ */
function OnlineSeatBooking({ batches }: { batches: BatchRow[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [courseTab, setCourseTab] = useState<"200" | "300">("200");
  const rate = useCurrencyRate();
 




  useEffect(() => {
    if (!batches.length) return;
    const first = batches.find((b) => b.totalSeats - b.bookedSeats > 0);
    if (first) setSelectedId(first._id);
  }, [batches]);

  const selected = batches.find((b) => b._id === selectedId) ?? null;

  /* ── USD → INR conversion fixed to match the 100hr page pattern:
     always derive INR from the live rate (Math.round(usd * rate)),
     no static/hardcoded INR override that can drift from the real rate. */
  const fmtPrice = (batch: BatchRow | null, course: "200" | "300"): string => {
    if (!batch) return "—";
    const usdVal = course === "200" ? batch.usd200 : batch.usd300;
    const usdNum = parseFloat(usdVal.replace(/[$,]/g, ""));
    if (currency === "INR") {
      return `₹${Math.round(usdNum * rate).toLocaleString("en-IN")}`;
    }
    const raw = usdVal.trim();
    return raw.startsWith("$") ? raw : `$${raw}`;
  };

  return (
    <section className={styles.sbSection} id="seat-booking">

      {/* Eyebrow + heading */}
      <span className={styles.sectionEyebrow}>Upcoming Batches</span>
      <div className={styles.vintageHeadingWrap} style={{ textAlign: "center" }}>
        <h2 className={styles.vintageHeading}>Live Online Yoga Teacher Training Schedule</h2>
        <div className={styles.headingUnderline} style={{ justifyContent: "center" }}>
          <div className={styles.headingDiamond} />
        </div>
      </div>
      <p className={styles.sbSecSub}>
        Choose your batch &amp; preferred course — prices include full live training access
      </p>
      <div className={styles.sbOrnLine}>
        <div className={styles.sbOrnL} />
        <div className={styles.sbOrnDiamond} />
        <div className={styles.sbOrnR} />
      </div>

      {/* Main layout */}
      <div className={styles.sbLayout}>

        {/* ── LEFT PANEL ── */}
        <div className={styles.sbLeftPanel}>
          <div className={styles.sbLph}>
            <span className={styles.sbLphTitle}>Select Your Batch</span>
            <div className={styles.sbLphRight}>
              <CurrencyDropdown currency={currency} onChange={setCurrency} />
              <div className={styles.sbLegend}>
                <div className={styles.sbLegItem}>
                  <div className={`${styles.sbLegDot} ${styles.sbDGreen}`} />
                  Available
                </div>
                <div className={styles.sbLegItem}>
                  <div className={`${styles.sbLegDot} ${styles.sbDOrange}`} />
                  Limited
                </div>
                <div className={styles.sbLegItem}>
                  <div className={`${styles.sbLegDot} ${styles.sbDRed}`} />
                  Full
                </div>
              </div>
            </div>
          </div>

          {batches.length === 0 ? (
            <p className={styles.sbNoBatches}>No upcoming batches available.</p>
          ) : (
            <div className={styles.sbBatchGrid}>
              {batches.map((batch) => {
                const rem = batch.totalSeats - batch.bookedSeats;
                const full = rem <= 0;
                const low = !full && rem <= 3;
                const dotCls = full ? styles.sbDRed : low ? styles.sbDOrange : styles.sbDGreen;
                const txtCls = full ? styles.sbSRed : low ? styles.sbSOrange : styles.sbSGreen;
                const statusTxt = full ? "Fully Booked" : low ? "Limited" : "Available";
                const isSelected = selectedId === batch._id;

                return (
                  <div
                    key={batch._id}
                    className={[
                      styles.sbBc,
                      full ? styles.sbBcFull : "",
                      isSelected ? styles.sbBcSel : "",
                    ].filter(Boolean).join(" ")}
                    onClick={() => { if (!full) setSelectedId(batch._id); }}
                  >
                    <div className={styles.sbBcTick}>
                      <svg viewBox="0 0 10 10" fill="none">
                        <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className={styles.sbBcMonth}>{monthYear(batch.startDate)}</div>
                    <div className={styles.sbBcDates}>{shortDateRange(batch.startDate, batch.endDate)}</div>

                    {/* Both course prices */}
                    <div className={styles.sbBcPrices}>
                      <div className={styles.sbBcPriceRow}>
                        <span className={styles.sbBcCourseLabel}>200 Hr</span>
                        <span className={styles.sbBcPriceAmt}>
                          {fmtPrice(batch, "200")} <span className={styles.sbBcPriceCur}>{currency}</span>
                        </span>
                      </div>
                      <div className={styles.sbBcPriceRow}>
                        <span className={styles.sbBcCourseLabel}>300 Hr</span>
                        <span className={styles.sbBcPriceAmt}>
                          {fmtPrice(batch, "300")} <span className={styles.sbBcPriceCur}>{currency}</span>
                        </span>
                      </div>
                    </div>

                    <div className={styles.sbBcStatus}>
                      <div className={`${styles.sbBcDot} ${dotCls}`} />
                      <span className={`${styles.sbBcStxt} ${txtCls}`}>{statusTxt}</span>
                    </div>

                    {!full && (
                      <>
                        <div className={styles.sbBcSeatsBar}>
                          <div
                            className={styles.sbBcSeatsBarFill}
                            style={{
                              width: `${Math.max(5, (rem / batch.totalSeats) * 100)}%`,
                              background: low
                                ? "linear-gradient(90deg,#c8700a,#e09030)"
                                : "linear-gradient(90deg,#3d6000,#6aa000)",
                            }}
                          />
                        </div>
                        <span
                          className={styles.sbBcSeatsBadge}
                          style={{ color: low ? "#c8700a" : "#3d6000" }}
                        >
                          {rem} / {batch.totalSeats} seats left
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className={styles.sbRightPanel}>
          <div className={styles.sbRpHead}>
            <div className={styles.sbRpEyebrow}>Course Overview</div>
            <div className={styles.sbRpCourse}>Live Online Yoga Teacher Training</div>
            <div className={styles.sbRpDur}>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="rgba(255,243,210,0.8)" strokeWidth="1.2" />
                <path d="M8 4.5V8.5L10.5 10" stroke="rgba(255,243,210,0.8)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className={styles.sbRpDurTxt}>24–28 Days · Online · Rishikesh Tradition</span>
            </div>
            <div className={styles.sbCurrBadge}>
              {currency === "USD" ? "🇺🇸 Prices in USD" : "🇮🇳 Prices in INR"}
            </div>
          </div>

          <div className={styles.sbRpBody}>

            {/* Course tabs */}
            <div className={styles.sbCourseTabs}>
              <button
                className={`${styles.sbCourseTab} ${courseTab === "200" ? styles.sbCourseTabActive : ""}`}
                onClick={() => setCourseTab("200")}
                type="button"
              >
                200 Hour
              </button>
              <button
                className={`${styles.sbCourseTab} ${courseTab === "300" ? styles.sbCourseTabActive : ""}`}
                onClick={() => setCourseTab("300")}
                type="button"
              >
                300 Hour
              </button>
            </div>

            {/* Course detail */}
            <div className={styles.sbCourseDetail}>
              <div className={styles.sbCourseDetailRow}>
                <span className={styles.sbCdLabel}>Duration</span>
                <span className={styles.sbCdVal}>{courseTab === "200" ? "24 Days" : "28 Days"}</span>
              </div>
              <div className={styles.sbCourseDetailRow}>
                <span className={styles.sbCdLabel}>Style</span>
                <span className={styles.sbCdVal}>
                  {courseTab === "200" ? "Hatha + Ashtanga" : "Hatha + Multi-Style"}
                </span>
              </div>
              <div className={styles.sbCourseDetailRow}>
                <span className={styles.sbCdLabel}>Sessions</span>
                <span className={styles.sbCdVal}>15 Days · 2 Classes/Day</span>
              </div>
              <div className={styles.sbCourseDetailRow}>
                <span className={styles.sbCdLabel}>Certificate</span>
                <span className={styles.sbCdVal}>Yoga Alliance, USA</span>
              </div>
            </div>

            {/* Price */}
            <div className={styles.sbPriceLbl}>Course Fee</div>
            <div className={styles.sbPriceBlock}>
              <div className={styles.sbPriceAmt}>{selected ? fmtPrice(selected, courseTab) : "—"}</div>
              <div className={styles.sbPriceCur}>{currency}</div>
            </div>

            <div className={styles.sbDivider} />

            {/* Seats availability */}
            {selected && (() => {
              const rem = selected.totalSeats - selected.bookedSeats;
              const full = rem <= 0;
              const low = !full && rem <= 3;
              const pct = full ? 100 : Math.round((selected.bookedSeats / selected.totalSeats) * 100);
              return (
                <div className={styles.sbRpSeatsWrap}>
                  <div className={styles.sbRpSeatsRow}>
                    <span className={styles.sbRpSeatsLbl}>Seats Availability</span>
                    <span
                      className={styles.sbRpSeatsBadge}
                      style={{
                        color: full ? "#8a2c00" : low ? "#c8700a" : "#3d6000",
                        borderColor: full ? "#8a2c00" : low ? "#c8700a" : "#3d6000",
                      }}
                    >
                      {full ? "Fully Booked" : `${rem} of ${selected.totalSeats} left`}
                    </span>
                  </div>
                  <div className={styles.sbRpSeatsBar}>
                    <div
                      className={styles.sbRpSeatsBarFill}
                      style={{
                        width: `${pct}%`,
                        background: full
                          ? "#8a2c00"
                          : low
                          ? "linear-gradient(90deg,#c8700a,#e09030)"
                          : "linear-gradient(90deg,#3d6000,#6aa000)",
                      }}
                    />
                  </div>
                </div>
              );
            })()}

            {/* Selected batch */}
            <div className={styles.sbSelDisplay}>
              {selected ? (
                <>
                  <div className={styles.sbSelLabel}>Selected Batch</div>
                  <div className={styles.sbSelDate}>
                    {shortDateRange(selected.startDate, selected.endDate)},{" "}
                    {monthYear(selected.startDate)}
                  </div>
                </>
              ) : (
                <span className={styles.sbSelHint}>← Select a batch to continue</span>
              )}
            </div>

            {/* Book Now */}
            {selected ? (
              <a
                href={`/registration?batchId=${selected._id}&type=${courseTab}hr-online`}
                className={styles.sbBookBtn}
              >
                Book Now — {fmtPrice(selected, courseTab)} {currency}
                <svg className={styles.sbArrowIcon} viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff3d2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : (
              <span className={`${styles.sbBookBtn} ${styles.sbBookBtnDis}`}>Book Now</span>
            )}

            {selected?.note && (
              <p className={styles.sbNote}>
                <strong>Note:</strong> {selected.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SHARED UI COMPONENTS
   NOTE: `as` prop controls the rendered heading tag.
   Defaults to "h2" (used for every section title).
   Pass as="h1" ONLY on the single page-level heading
   (the intro section title) so the page has exactly
   one <h1> for SEO.
───────────────────────────────────────────── */
function VintageHeading({
  children,
  center = true,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={styles.vintageHeadingWrap} style={{ textAlign: center ? "center" : "left" }}>
      <Tag className={styles.vintageHeading}>{children}</Tag>
      <div className={styles.headingUnderline} style={{ justifyContent: center ? "center" : "flex-start" }}>
        <div className={styles.headingDiamond} />
      </div>
    </div>
  );
}

function OmDivider() {
  return (
    <div className={styles.omDivider}>
      <div className={`${styles.divLine} ${styles.divLineLeft}`} />
      <span className={styles.divOm}>ॐ</span>
      <div className={`${styles.divLine} ${styles.divLineRight}`} />
    </div>
  );
}

const CalendarIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <rect x="1" y="2" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <line x1="5" y1="1" x2="5" y2="4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="11" y1="1" x2="11" y2="4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="1" y1="6" x2="15" y2="6" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
const UserIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const VideoIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.6" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <path d="M8 1l2 4 4.5.7-3.2 3.1.7 4.5L8 11.2 4 13.3l.7-4.5L1.5 5.7 6 5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);
const DollarIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
    <text x="8" y="12" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="serif">$</text>
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─────────────────────────────────────────────
   COURSE CARD COMPONENT
───────────────────────────────────────────── */
function CourseCard({ title, duration, style, sessions, cert, fee, benefits }: {
  title: string; duration: string; style: string; sessions: string; cert: string; fee: string; benefits: string[];
}) {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseCardHeader}>
        <h3 className={styles.courseCardTitle}>{title}</h3>
        <span className={styles.courseCardFeeTag}>{fee}</span>
      </div>
      <div className={styles.courseCardBody}>
        <div className={styles.courseCardLeft}>
          <ul className={styles.courseDetailList}>
            <li>
              <span className={styles.detailIcon}><CalendarIcon /></span>
              <span><strong>Duration:</strong>&nbsp;{duration}</span>
            </li>
            <li>
              <span className={styles.detailIcon}><UserIcon /></span>
              <span><strong>Course Style:</strong>&nbsp;{style}</span>
            </li>
            <li>
              <span className={styles.detailIcon}><VideoIcon /></span>
              <span><strong>Live Interactive Sessions:</strong>&nbsp;{sessions}</span>
            </li>
            <li>
              <span className={styles.detailIcon}><StarIcon /></span>
              <span><strong>Certificate:</strong>&nbsp;{cert}</span>
            </li>
            <li>
              <span className={styles.detailIcon}><DollarIcon /></span>
              <span><strong>Course Fee:</strong>&nbsp;{fee}</span>
            </li>
          </ul>
          <div className={styles.courseActions}>
            <Link href="/registration" className={styles.btnPrimary}>Apply Now</Link>
            <Link href="/registration" className={styles.btnOutline}>Book Now</Link>
          </div>
        </div>
        <div className={styles.courseCardRight}>
          <p className={styles.benefitsListTitle}>Key Benefits</p>
          <ul className={styles.benefitsList}>
            {benefits.map((b, j) => (
              <li key={j} className={styles.benefitsListItem}>
                <span className={styles.benefitCheck}><CheckIcon /></span>
                <span>
                  {b.includes(" - ") ? (
                    <><strong>{b.split(" - ")[0]}</strong>{" — " + b.split(" - ").slice(1).join(" - ")}</>
                  ) : b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

//schema

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aymyogaschool.com/online-yoga-course#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aymyogaschool.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Online Yoga Course",
          "item": "https://aymyogaschool.com/online-yoga-course"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://aymyogaschool.com/online-yoga-course#webpage",
      "url": "https://aymyogaschool.com/online-yoga-course",
      "name": "Online Yoga Teacher Training Course | AYM Yoga School",
      "description": "Enroll in AYM Yoga School's yoga instructor course online. Learn Hatha, Ashtanga, anatomy, meditation, and teaching skills from experienced instructors.",
      "breadcrumb": { "@id": "https://aymyogaschool.com/online-yoga-course#breadcrumb" },
      "about": { "@id": "https://aymyogaschool.com/online-yoga-course#course" },
      "mainEntity": { "@id": "https://aymyogaschool.com/online-yoga-course#faq" },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://aymyogaschool.com/#website" }
    },
    {
      "@type": "Course",
      "@id": "https://aymyogaschool.com/online-yoga-course#course",
      "name": "Online Yoga Teacher Training Course",
      "description": "A live and self-paced online Yoga Teacher Training program from AYM Yoga School, Rishikesh, covering yoga philosophy, yogic anatomy, pranayama and meditation, adjusting and assisting techniques, asana practice in Hatha and Ashtanga styles, and teaching methodology. Delivered via interactive live sessions with lifetime access to recordings, in batches of 5-7 students, taught in English and Hindi.",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://aymyogaschool.com/#organization",
        "name": "AYM Yoga School"
      },
      "educationalCredentialAwarded": "Yoga Alliance, USA Certificate",
      "coursePrerequisites": "Open to beginners and experienced practitioners in reasonably good physical health. No prior yoga experience required.",
      "inLanguage": ["en", "hi"],
      "teaches": [
        "Philosophy of Yoga",
        "Introduction to Yogic Anatomy",
        "Pranayama and Meditation (mudra, bandha, pranayama, meditation)",
        "Adjusting and Assisting techniques",
        "Asana Practice (Hatha and Ashtanga Yoga)",
        "Teaching Methodology"
      ],
      "syllabusSections": [
        { "@type": "Syllabus", "name": "Philosophy of Yoga", "description": "20 hours live classes, 5 hours e-books and assignments." },
        { "@type": "Syllabus", "name": "Introduction to Yogic Anatomy", "description": "20 hours anatomy live lectures, 5 hours e-book self-study." },
        { "@type": "Syllabus", "name": "Pranayama and Meditation", "description": "30 hours live lecture and practice covering mudra, bandha, pranayama, and meditation." },
        { "@type": "Syllabus", "name": "Adjusting and Assisting Tips", "description": "10 hours with Hatha yoga and alignment, the art of adjustment through guidance." },
        { "@type": "Syllabus", "name": "Asana Practice", "description": "35 hours Hatha yoga live classes and 35 hours Ashtanga yoga live classes." },
        { "@type": "Syllabus", "name": "Teaching Methodology", "description": "10 hours lecture on teaching practice, 30 hours teaching practice, and 10 hours feedback." }
      ],
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "200 Hour Live Online Yoga Teacher Training",
          "courseMode": "online",
          "duration": "P24D",
          "description": "Hatha Yoga and Ashtanga Yoga. 15 days of live interactive sessions, 2 classes daily."
        },
        {
          "@type": "CourseInstance",
          "name": "300 Hour Live Online Yoga Teacher Training",
          "courseMode": "online",
          "duration": "P28D",
          "description": "Hatha Yoga and Multi-Style. 15 days of live interactive sessions, 2 classes daily."
        },
        {
          "@type": "CourseInstance",
          "name": "Prenatal Live Online Yoga Teacher Training",
          "courseMode": "online",
          "duration": "P7D",
          "description": "Multi-Style: gentle Hatha, restorative, breathwork, and more. 7 days of live interactive sessions, 2 classes daily."
        },
        {
          "@type": "CourseInstance",
          "name": "200 Hour Recorded Online Yoga Course",
          "courseMode": "online",
          "description": "Self-paced course with a yoga manual, recorded philosophy lectures, e-books, a few live classes, Hatha/Ashtanga yoga, and a live exam."
        },
        {
          "@type": "CourseInstance",
          "name": "300 Hour Recorded Online Yoga Course",
          "courseMode": "online",
          "description": "Self-paced course with a yoga manual, recorded philosophy lectures, e-books, a few live classes, multi-style yoga, and a live exam."
        }
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "200 Hour Live Online",
          "price": "20000",
          "priceCurrency": "INR",
          "priceSpecification": [
            { "@type": "UnitPriceSpecification", "price": "20000", "priceCurrency": "INR" },
            { "@type": "UnitPriceSpecification", "price": "399", "priceCurrency": "USD" }
          ],
          "availability": "https://schema.org/InStock",
          "url": "https://aymyogaschool.com/registration"
        },
        {
          "@type": "Offer",
          "name": "300 Hour Live Online",
          "price": "25000",
          "priceCurrency": "INR",
          "priceSpecification": [
            { "@type": "UnitPriceSpecification", "price": "25000", "priceCurrency": "INR" },
            { "@type": "UnitPriceSpecification", "price": "499", "priceCurrency": "USD" }
          ],
          "availability": "https://schema.org/InStock",
          "url": "https://aymyogaschool.com/registration"
        },
        {
          "@type": "Offer",
          "name": "Prenatal Live Online",
          "price": "20000",
          "priceCurrency": "INR",
          "priceSpecification": [
            { "@type": "UnitPriceSpecification", "price": "20000", "priceCurrency": "INR" },
            { "@type": "UnitPriceSpecification", "price": "399", "priceCurrency": "USD" }
          ],
          "availability": "https://schema.org/InStock",
          "url": "https://aymyogaschool.com/registration"
        },
        {
          "@type": "Offer",
          "name": "200 Hour Recorded Online",
          "price": "299",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://aymyogaschool.com/registration"
        },
        {
          "@type": "Offer",
          "name": "300 Hour Recorded Online",
          "price": "399",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://aymyogaschool.com/registration"
        }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://aymyogaschool.com/online-yoga-course#hatha-alignment",
      "name": "Hatha Yoga Alignment (Online)",
      "description": "A specialized 35-hour online course focused on Hatha yoga alignment.",
      "provider": { "@id": "https://aymyogaschool.com/#organization" },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT35H"
      },
      "offers": {
        "@type": "Offer",
        "price": "299",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://aymyogaschool.com/contact"
      }
    },
    {
      "@type": "Course",
      "@id": "https://aymyogaschool.com/online-yoga-course#pranayama-meditation",
      "name": "Pranayama and Meditation (Online)",
      "description": "A specialized 20-hour online course focused on pranayama and meditation techniques.",
      "provider": { "@id": "https://aymyogaschool.com/#organization" },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT20H"
      },
      "offers": {
        "@type": "Offer",
        "price": "349",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://aymyogaschool.com/contact"
      }
    },
    {
      "@type": "Course",
      "@id": "https://aymyogaschool.com/online-yoga-course#ashtanga-primary",
      "name": "Ashtanga Vinyasa Primary Series (Online)",
      "description": "A specialized 35-hour online course covering the Ashtanga Vinyasa Primary Series.",
      "provider": { "@id": "https://aymyogaschool.com/#organization" },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT35H"
      },
      "offers": {
        "@type": "Offer",
        "price": "299",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://aymyogaschool.com/contact"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://aymyogaschool.com/online-yoga-course#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the eligibility criteria for joining this course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Everyone that is genuinely interested in the art of yoga and is in decent physical condition is a candidate for any of these training programs. No previous experience in yoga is required and you can select the program according to your goal and level."
          }
        },
        {
          "@type": "Question",
          "name": "How do I register for these courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reserve your spot with an up-front, down payment of $200. Plus $15 for the transaction fee ($215 for all), you can pay the balance any time within the first two weeks."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get the certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After successfully completing the course and the exams at the end, you will be issued a certificate. Your certificate will then be mailed to the postal address given; shipping cost would be charged to the candidate."
          }
        },
        {
          "@type": "Question",
          "name": "What is the group size of each class?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each online training batch is kept intentionally small, consisting of only 5 to 7 participants. This enables our instructors to pay close attention to proper alignment, technique, and to guide each individual through every lesson."
          }
        },
        {
          "@type": "Question",
          "name": "How are the courses designed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each of our programs comes with carefully curated live online classes with 2 to 4 sessions scheduled per day, which vary based on your timezone, location, and batch size. Upon enrollment, our team will contact you to confirm a class schedule that works for you."
          }
        }
      ]
    }
  ]
}




/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function OnlineYogaCourse() {
  const [batches, setBatches] = useState<BatchRow[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchBatches();
}, []);

const fetchBatches = async () => {
  try {
    const response = await api.get(
      "/online-seats/get-all-batches"
    );

    if (response.data.success) {
      setBatches(response.data.data);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  return (

    <>
     <Script
        id="online-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

    
    <div className={styles.page}>

      {/* Mandala watermark */}
      <div className={styles.mandalaWatermark} aria-hidden="true">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#F15505" strokeWidth="0.5" opacity="0.07">
            {[30, 60, 90, 120, 150, 180, 210, 240].map((r, i) => (
              <circle key={i} cx="250" cy="250" r={r} />
            ))}
            {Array.from({ length: 36 }, (_, i) => {
              const a = (((i * 360) / 36) * Math.PI) / 180;
              return (
                <line key={i} x1="250" y1="250"
                  x2={250 + 240 * Math.cos(a)} y2={250 + 240 * Math.sin(a)} />
              );
            })}
            {[60, 120, 180].map((r, i) => (
              <polygon key={i}
                points={Array.from({ length: 8 }, (_, j) => {
                  const a = (((j * 360) / 8) * Math.PI) / 180;
                  return `${250 + r * Math.cos(a)},${250 + r * Math.sin(a)}`;
                }).join(" ")}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* ══ HERO IMAGE ══ */}
      <section className={styles.heroSection}>
        <Image
          src={heroImg}
          alt="Yoga Students Group"
          width={1460}
          height={560}
          className={styles.heroImage}
          priority
        />
      </section>

      {/* ══ INTRO ══ */}
      <section className={`${styles.section} ${styles.introSection}`}>
        <div className={styles.container}>
          <div className={styles.introText}>
            <span className={styles.sectionEyebrow}>Rishikesh, India · Online</span>
            {/* ── SINGLE H1 ON THE PAGE (SEO) ── */}
            <VintageHeading as="h1">
            Online Yoga Teacher Training Course: Certify From Anywhere
            </VintageHeading>
            <p className={styles.bodyPara}>
            AYM Yoga School, Rishikesh, introduces a fully accredited online Yoga Teacher Training Course for yoga lovers all across the globe. As a beginner or an experienced Yogi, you can gain the same knowledge through online yoga as the one received from our on-campus yoga teacher training in Rishikesh - the Yoga Capital of the World.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ══ */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <span className={styles.sectionEyebrow}>Why Choose Us</span>
          <VintageHeading>Why Choose AYM Yoga School&apos;s Online Yoga Teacher Training Course?</VintageHeading>
          <div className={styles.whySplit}>
            <div className={styles.whyLeft}>
              <div className={styles.whyGrid}>
                {whyReasons.map((item, i) => (
                  <div
                    key={i}
                    className={styles.whyCard}
                    style={{ "--wi": i } as React.CSSProperties}
                  >
                    <div className={styles.whyIconBox}>{item.icon}</div>
                    <div className={styles.whyCardBody}>
                      <div className={styles.whyCardTitle}>{item.title}</div>
                      <div className={styles.whyCardDesc}>{item.desc}</div>
                    </div>
                    <div className={styles.whyCardLine} />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.whyRight}>
              <div className={styles.whyImageBox}>
                <Image src={herosectionimage} alt="Online yoga practice" />
                <div className={styles.whyCornerTl} />
                <div className={styles.whyCornerBr} />
                <div className={styles.whyImageBadge}>Since 2010 · Rishikesh</div>
              </div>
              <div className={styles.whyVideoBox}>
                <iframe
                  src="https://www.youtube.com/embed/EJ6K-rhqevE?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=EJ6K-rhqevE"
                  title="AYM Yoga School"
                  allow="autoplay"
                  allowFullScreen
                />
                <div className={styles.whyVideoBadge}>
                  <span className={styles.pulseDot} /> Live Classes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ KEY BENEFITS ══ */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <span className={styles.sectionEyebrow}>Key Benefits</span>
          <VintageHeading>Key Benefits of Our Online Yoga Courses</VintageHeading>
          <div className={styles.benefitsGrid}>
            {keyBenefits.map((item, i) => (
              <div
                key={i}
                className={styles.benefitCard}
                style={{ "--bi": i } as React.CSSProperties}
              >
                <div className={styles.benefitIconWrap}>{item.icon}</div>
                <div className={styles.benefitCardNum}>{String(i + 1).padStart(2, "0")}</div>
                <div className={styles.benefitTitle}>{item.title}</div>
                <div className={styles.benefitDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LIVE COURSES (200hr, 300hr, Prenatal) ══ */}
      <section className={styles.coursesSection}>
        <div className={styles.container}>
          <span className={styles.sectionEyebrow}>Live Online Courses</span>
          <VintageHeading>Our Live Online Yoga Teacher Training Courses</VintageHeading>
          {liveCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
          <CourseCard
            title={prenatalCourse.title}
            duration={prenatalCourse.duration}
            style={prenatalCourse.style}
            sessions={prenatalCourse.sessions}
            cert={prenatalCourse.cert}
            fee={prenatalCourse.fee}
            benefits={prenatalCourse.benefits}
          />
        </div>
      </section>

      {/* ══ SEAT BOOKING (replaces static schedule table) ══ */}
      <section className={styles.scheduleSection}>
        <div className={styles.container}>
         {loading ? (
  <p>Loading...</p>
) : (
  <OnlineSeatBooking batches={batches} />
)}
        </div>
      </section>

      {/* ══ NOTE + FAQ ══ */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.noteBox}>
            <strong>Please note:</strong> For these courses, there are a minimum of 2 live
            online sessions planned on a daily basis (maximum number of live sessions per
            day varies from course to course).
          </div>
          <span className={styles.sectionEyebrow}>FAQs</span>
          <VintageHeading>About Live Yoga Training Course</VintageHeading>
          <div className={styles.faqGrid}>
            {faqs.map((item, i) => (
              <div
                key={i}
                className={styles.faqCard}
                style={{ "--fi": i } as React.CSSProperties}
              >
                <p className={styles.faqQ}>{item.q}</p>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CURRICULUM ══ */}
      <section className={styles.curriculumSection}>
        <div className={styles.container}>
          <span className={styles.sectionEyebrow}>Curriculum</span>
          <VintageHeading>The Program Covers Following Basic Areas of Yoga</VintageHeading>
          <div className={styles.chakraGrid}>
            {curriculumAreas.map((area, i) => (
              <div
                key={i}
                className={styles.chakraCard}
                style={{ "--ci": i } as React.CSSProperties}
              >
                <div className={styles.chakraCardBg}>{area.symbol}</div>
                <div className={styles.chakraImageWrap}>
                  <Image
                    src={area.image}
                    alt={area.title}
                    width={130}
                    height={130}
                    className={styles.chakraImage}
                  />
                </div>
                <h4 className={styles.chakraTitle} style={{ color: area.color }}>
                  {area.title}
                </h4>
                <div className={styles.chakraCardDivider} />
                {area.lines.map((line, j) => (
                  <p key={j} className={styles.chakraLine}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RECORDED COURSES ══ */}
      <section className={styles.recordedSection}>
        <div className={styles.container}>
          <span className={styles.sectionEyebrow}>Self-Paced Learning</span>
          <VintageHeading>Fully Recorded Online Yoga Teacher Training Course</VintageHeading>
          <div className={styles.recordedGrid}>
            {recordedCourses.map((rc, i) => (
              <div key={i} className={styles.recordedCard}>
                <div className={styles.recordedCardHeader}>
                  <span className={styles.recordedCardIcon}>✎</span>
                  <h4 className={styles.recordedCardTitle}>{rc.title}</h4>
                  <div className={styles.recordedCardPrice}>
                    <span className={styles.recordedPriceAmt}>{rc.price}</span>
                    <span className={styles.recordedPriceCur}>USD</span>
                  </div>
                </div>
                <div className={styles.recordedCardBody}>
                  <ul className={styles.recordedFeatureList}>
                    {rc.features.map((f, j) => (
                      <li key={j} className={styles.recordedFeatureItem}>
                        <span className={styles.featureCheckIcon}><CheckIcon /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/registration" className={styles.recordedApplyBtn}>
                    Apply Now
                    <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14 }}>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.infoBox}>
            <h4 className={styles.infoBoxTitle}>The Advantages of Fully Online Courses</h4>
            <p className={styles.infoBoxText}>
            Besides the above courses, we also have a fully pre-recorded online teachers' training course for 200 hours yoga teachers' training and 300 hours training program.
            </p>
            <ol className={styles.advantageList}>
              <li>The course can be taken up any time.</li>
              <li> These courses are approved by Yoga Alliance, United States.</li>
              <li>
              Each course consists of self-paced learning modules, so you can be flexible with the schedules and study according to your pace.
              </li>
            </ol>
            <p className={styles.infoBoxText}>
            In the 200 hours course you will be learning about various yoga asanas (also known as yoga postures), different breathing techniques, yoga philosophy, how to do alignment correction, about the anatomy of the human body, techniques of meditation, how to sequence a yogic sequence for yourself, different yoga teaching techniques etc.
            </p>
            <h4 className={styles.infoBoxTitle}>How Do I Apply for These Courses?</h4>
            <p className={styles.infoBoxText}>
            You can contact us on{" "}
              <strong>aymyogaschool@gmail.com</strong>, or alternatively log on to the links on the webpage to submit the registration form. The registration form will be received by our team and our team will contact you for more information.
            </p>
            <h4 className={styles.infoBoxTitle}>What Should I Do After the Registration Process?</h4>
            <p className={styles.infoBoxText}>
            Once you register for the course, we'll share the training materials of the same. These will be pre-recorded training sessions along with additional material including some useful e-books, yoga manual, and a final online exam will also take place upon successful completion of which you’ll be awarded your certificate.
            </p>
          </div>
        </div>
      </section>

      {/* ══ OTHER LIVE COURSES ══ */}
      <section className={styles.otherSection}>
        <div className={styles.container}>
          <span className={styles.sectionEyebrow}>Specialised Programs</span>
          <VintageHeading>Other Live Online Yoga Courses</VintageHeading>
          <div className={styles.otherGrid}>
            {otherCourses.map((oc, i) => (
              <div
                key={i}
                className={styles.otherCard}
                style={{ "--oi": i } as React.CSSProperties}
              >
                <div className={styles.otherCardImage}>
                  <Image src={otherCourseImages[i]} alt={oc.title} />
                  <div className={styles.otherCardImageOverlay} />
                </div>
                <div className={styles.otherCardBody}>
                  <h4 className={styles.otherTitle}>{oc.title}</h4>
                  <p className={styles.otherMeta}>{oc.hours} · {oc.price}</p>
                  <Link href="/contact" className={styles.otherCardBtn}>
                    Enquire Now
                    <svg viewBox="0 0 16 16" fill="none" style={{ width: 12, height: 12 }}>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowToReach />
    </div>
    </>
  );
}