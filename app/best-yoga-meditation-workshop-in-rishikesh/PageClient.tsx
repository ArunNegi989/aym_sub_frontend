"use client"

// MeditationPage.tsx
import React, { useState, useEffect, useRef } from "react";
import styles from "@/assets/style/yoga-meditation-workshop/Meditationpage.module.css";
import Image from "next/image";
import bannerImage from "@/assets/images/meditation.jpg";
import HowToReach from "@/components/home/Howtoreach";
import heroImg from "@/assets/images/41.png";
import Link from "next/link";
import Script from "next/script";

/* ─── Types ─── */
interface PricingRow {
  date: string;
  usdFee: string;
  inrFee: string;
  dormPrice: number;
  twinPrice: number;
  privatePrice: number;
  totalSeats: number;
  bookedSeats: number;
  applyLink?: string;
}

/* ─── Data ─── */
const pricingData: PricingRow[] = [
  {
    date: "05th Jan to 29th Jan 2025",
    usdFee: "$799",
    inrFee: "₹65,000",
    dormPrice: 799,
    twinPrice: 899,
    privatePrice: 999,
    totalSeats: 20,
    bookedSeats: 8,
  },
  {
    date: "03rd Feb to 27th Feb 2025",
    usdFee: "$799",
    inrFee: "₹65,000",
    dormPrice: 799,
    twinPrice: 899,
    privatePrice: 999,
    totalSeats: 20,
    bookedSeats: 12,
  },
  {
    date: "03rd Mar to 27th Mar 2025",
    usdFee: "$799",
    inrFee: "₹65,000",
    dormPrice: 799,
    twinPrice: 899,
    privatePrice: 999,
    totalSeats: 20,
    bookedSeats: 5,
  },
  {
    date: "03rd Apr to 27th Apr 2025",
    usdFee: "$799",
    inrFee: "₹65,000",
    dormPrice: 799,
    twinPrice: 899,
    privatePrice: 999,
    totalSeats: 20,
    bookedSeats: 0,
  },
  {
    date: "03rd May to 27th May 2025",
    usdFee: "$799",
    inrFee: "₹65,000",
    dormPrice: 799,
    twinPrice: 899,
    privatePrice: 999,
    totalSeats: 20,
    bookedSeats: 20,
  },
  {
    date: "03rd Jun to 27th Jun 2025",
    usdFee: "$799",
    inrFee: "₹65,000",
    dormPrice: 799,
    twinPrice: 899,
    privatePrice: 999,
    totalSeats: 20,
    bookedSeats: 3,
  },
  {
    date: "03rd Jul to 27th Jul 2025",
    usdFee: "$799",
    inrFee: "₹65,000",
    dormPrice: 799,
    twinPrice: 899,
    privatePrice: 999,
    totalSeats: 20,
    bookedSeats: 7,
  },
  {
    date: "03rd Aug to 27th Aug 2025",
    usdFee: "$799",
    inrFee: "₹65,000",
    dormPrice: 799,
    twinPrice: 899,
    privatePrice: 999,
    totalSeats: 20,
    bookedSeats: 15,
  },
];

type Currency = "USD" | "INR";

function formatPrice(usdAmount: number, currency: Currency, rate: number): string {
  if (currency === "USD") {
    return `$${usdAmount}`;
  }
  const inr = Math.round((usdAmount * rate) / 100) * 100;
  return `₹${inr.toLocaleString("en-IN")}`;
}

function shortDateRange(dateStr: string) {
  // Handle date format like "05th Jan to 29th Jan 2025"
  return dateStr;
}

const monthYear = (dateStr: string) => {
  const match = dateStr.match(/\d+(?:st|nd|rd|th)?\s+(\w+)\s+(\d{4})/);
  if (match) {
    return `${match[1]} ${match[2]}`;
  }
  return dateStr;
};

/* ─── Om Divider ─── */
const OmDivider = () => (
  <div className={styles.omDivider}>
    <span className={styles.dividerLine} />
    <span className={styles.omSymbol}>ॐ</span>
    <span className={styles.dividerLine} />
  </div>
);

/* ══════════════════════════════════════════════════
   CURRENCY DROPDOWN
══════════════════════════════════════════════════ */
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
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.currDrop} ref={ref}>
      <button
        className={styles.currDropBtn}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-haspopup="listbox"
        type="button"
      >
        <span className={styles.currDropFlag}>
          {currency === "USD" ? "🇺🇸" : "🇮🇳"}
        </span>
       <span className={styles.currDropLabel}>
  {currency === "USD" ? "English" : "हिन्दी"}
</span>
        <svg
          className={`${styles.currDropArrow} ${open ? styles.currDropArrowOpen : ""}`}
          viewBox="0 0 12 8"
          fill="none"
        >
          <path
            d="M1 1l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className={styles.currDropMenu} role="listbox">
          {(["USD", "INR"] as Currency[]).map((c) => (
            <button
              key={c}
              className={`${styles.currDropItem} ${currency === c ? styles.currDropItemActive : ""}`}
              onClick={() => {
                onChange(c);
                setOpen(false);
              }}
              role="option"
              aria-selected={currency === c}
              type="button"
            >
              <span className={styles.currDropItemFlag}>
                {c === "USD" ? "🇺🇸" : "🇮🇳"}
              </span>
              <div className={styles.currDropItemText}>
                <span className={styles.currDropItemCode}>
  {c === "USD" ? "English" : "हिन्दी"}
</span>
<span className={styles.currDropItemName}>
  {c === "USD" ? "US Dollar" : "Indian Rupee"}
</span>
              </div>
              {currency === c && (
                <svg
                  className={styles.currDropCheck}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   PREMIUM SEAT BOOKING — from 500hr page
══════════════════════════════════════════════════ */
function PremiumSeatBookingMeditation({
  seats,
  currency,
  onCurrencyChange,
  rate,
  rateLoading,
}: {
  seats: PricingRow[];
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  rate: number;
  rateLoading: boolean;
}) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (seats.length === 0) return;
    const firstAvailable = seats.findIndex((s) => s.totalSeats - s.bookedSeats > 0);
    if (firstAvailable !== -1) setSelectedId(firstAvailable);
  }, [seats]);

  const selected = selectedId !== null ? seats[selectedId] : null;

  const fmtPrice = (usd: number) => {
    if (currency === "INR") {
      const inr = Math.round((usd * rate) / 100) * 100;
      return { amount: `₹${inr.toLocaleString("en-IN")}`, cur: "INR" };
    }
    return { amount: `$${usd}`, cur: "USD" };
  };

  return (
    <div className={styles.datesSection} id="dates-fees">
      <div className={styles.psbSecTag}>Upcoming Batches · 2025–2026</div>
      <div className={styles.vintageHeadingWrap}>
        <h2 className={styles.vintageHeading}>Meditation Yoga Teacher Training India</h2>
        <div className={styles.vintageHeadingUnderline}>
          <svg viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg" className={styles.headingUndSvg}>
            <path d="M0,4 Q50,0 100,4 Q150,8 200,4" stroke="#F15505" strokeWidth="1.2" fill="none" />
            <circle cx="100" cy="4" r="3" fill="#F15505" opacity="0.7" />
            <circle cx="10" cy="4" r="1.5" fill="#b8860b" opacity="0.5" />
            <circle cx="190" cy="4" r="1.5" fill="#b8860b" opacity="0.5" />
          </svg>
        </div>
      </div>
      <p className={styles.psbSecSub}>
        Choose your dates &amp; preferred accommodation — prices include tuition
        and meals
      </p>
      <div className={styles.psbOrnLine}>
        <div className={styles.psbOrnL} />
        <div className={styles.psbOrnDiamond} />
        <div className={styles.psbOrnR} />
      </div>

      <div className={styles.psbLayout}>
        {/* LEFT PANEL */}
        <div className={styles.psbLeftPanel}>
          <div className={`${styles.psbCn} ${styles.psbCnTl}`} />
          <div className={`${styles.psbCn} ${styles.psbCnTr}`} />
          <div className={`${styles.psbCn} ${styles.psbCnBl}`} />
          <div className={`${styles.psbCn} ${styles.psbCnBr}`} />
          <div className={styles.psbLph}>
            <span className={styles.psbLphTitle}>Select Your Batch</span>
            <div className={styles.psbLphRight}>
              <CurrencyDropdown currency={currency} onChange={onCurrencyChange} />
              <div className={styles.psbLegend}>
                <div className={styles.psbLegItem}>
                  <div className={`${styles.psbLegDot} ${styles.psbDGreen}`} />
                  Available
                </div>
                <div className={styles.psbLegItem}>
                  <div className={`${styles.psbLegDot} ${styles.psbDOrange}`} />
                  Limited
                </div>
                <div className={styles.psbLegItem}>
                  <div className={`${styles.psbLegDot} ${styles.psbDRed}`} />
                  Full
                </div>
              </div>
            </div>
          </div>

          {rateLoading && (
            <div className={styles.rateLoader}>
              <div className={styles.rateLoaderDot} />
              <span>Loading live exchange rate...</span>
            </div>
          )}

          {seats.length === 0 ? (
            <p className={styles.psbNoBatches}>No upcoming batches available at the moment.</p>
          ) : (
            <div className={styles.psbBatchGrid}>
              {seats.map((batch, idx) => {
                const rem = batch.totalSeats - batch.bookedSeats;
                const full = rem <= 0;
                const low = !full && rem <= 5;
                const dotCls = full ? styles.psbDRed : low ? styles.psbDOrange : styles.psbDGreen;
                const txtCls = full ? styles.psbSRed : low ? styles.psbSOrange : styles.psbSGreen;
                const statusTxt = full ? "Fully Booked" : low ? "Limited" : "Available";
                const seatsPercent = Math.max(5, (rem / batch.totalSeats) * 100);
                const isSelected = selectedId === idx;
                const dormFmt = fmtPrice(batch.dormPrice);
                return (
                  <div
                    key={idx}
                    className={[styles.psbBc, full ? styles.psbBcFull : "", isSelected ? styles.psbBcSel : ""].filter(Boolean).join(" ")}
                    onClick={() => { if (!full) setSelectedId(idx); }}
                  >
                    <div className={styles.psbBcTick}>
                      <svg viewBox="0 0 10 10" fill="none">
                        <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className={styles.psbBcMonth}>{monthYear(batch.date)}</div>
                    <div className={styles.psbBcDates}>{shortDateRange(batch.date)}</div>
                    <div className={styles.psbBcPrice}>{dormFmt.amount} <span>{dormFmt.cur}</span></div>
                    <div className={styles.psbBcStatus}>
                      <div className={`${styles.psbBcDot} ${dotCls}`} />
                      <span className={`${styles.psbBcStxt} ${txtCls}`}>{statusTxt}</span>
                    </div>
                    {!full && (
                      <>
                        <div className={styles.psbBcSeatsBar}>
                          <div className={styles.psbBcSeatsBarFill} style={{ width: `${seatsPercent}%`, background: low ? "linear-gradient(90deg,#c8700a,#e09030)" : "linear-gradient(90deg,#3d6000,#6aa000)" }} />
                        </div>
                        <span className={styles.psbBcSeatsBadge} style={{ color: low ? "#c8700a" : "#3d6000" }}>{rem} / {batch.totalSeats} seats left</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className={styles.psbRightPanel}>
          <div className={`${styles.psbCn} ${styles.psbCnTl}`} />
          <div className={`${styles.psbCn} ${styles.psbCnTr}`} />
          <div className={`${styles.psbCn} ${styles.psbCnBl}`} />
          <div className={`${styles.psbCn} ${styles.psbCnBr}`} />
          <div className={styles.psbRpHead}>
            <div className={styles.psbRpEyebrow}>Course Overview</div>
            <div className={styles.psbRpCourse}>Meditation Yoga Teacher Training</div>
            <div className={styles.psbRpDur}>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="rgba(255,243,210,0.8)" strokeWidth="1.2" />
                <path d="M8 4.5V8.5L10.5 10" stroke="rgba(255,243,210,0.8)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className={styles.psbRpDurTxt}>24 Days · Rishikesh, India</span>
            </div>
            <div className={styles.psbCurrBadge}>
              {currency === "USD" ? "🇺🇸 Prices in USD" : "🇮🇳 Prices in INR"}
            </div>
          </div>
          <div className={styles.psbRpBody}>
            <div className={styles.psbPriceLbl}>With Accommodation</div>
            <div className={styles.psbPriceRow}>
              <div className={styles.psbPriceCard}>
                <div className={styles.psbPcAmt}>{selected ? fmtPrice(selected.privatePrice).amount : "—"}<span className={styles.psbPcCur}>{currency}</span></div>
                <div className={styles.psbPcLbl}>Private Room</div>
              </div>
              <div className={styles.psbPriceCard}>
                <div className={styles.psbPcAmt}>{selected ? fmtPrice(selected.twinPrice).amount : "—"}<span className={styles.psbPcCur}>{currency}</span></div>
                <div className={styles.psbPcLbl}>Twin / Shared</div>
              </div>
            </div>
            <div className={styles.psbPriceLbl}>Without Accommodation</div>
            <div className={styles.psbPriceWide}>
              <div className={styles.psbPwLeft}>
                <span className={styles.psbPcAmt} style={{ fontSize: "1rem" }}>{selected ? fmtPrice(selected.dormPrice).amount : "—"}</span>
                <span className={styles.psbPcCur}>{currency}</span>
              </div>
              <span className={styles.psbFoodBadge}>Food Included</span>
            </div>

            {selected && currency === "USD" && (
              <div className={styles.psbInrRow}>
                <span className={styles.psbInrLbl}>Indian Price</span>
                <span className={styles.psbInrAmt}>{selected.inrFee}</span>
              </div>
            )}
            {selected && currency === "INR" && (
              <div className={styles.psbInrRow}>
                <span className={styles.psbInrLbl}>USD Price</span>
                <span className={styles.psbInrAmt}>${selected.dormPrice} USD</span>
              </div>
            )}

            <div className={styles.psbDivider} />
            {selected && (
              <div className={styles.psbRpSeatsWrap}>
                {(() => {
                  const rem = selected.totalSeats - selected.bookedSeats;
                  const full = rem <= 0;
                  const low = !full && rem <= 5;
                  const pct = full ? 100 : Math.round((selected.bookedSeats / selected.totalSeats) * 100);
                  return (
                    <>
                      <div className={styles.psbRpSeatsRow}>
                        <span className={styles.psbRpSeatsLbl}>Seats Availability</span>
                        <span className={styles.psbRpSeatsBadge} style={{ color: full ? "#8a2c00" : low ? "#c8700a" : "#3d6000", borderColor: full ? "#8a2c00" : low ? "#c8700a" : "#3d6000" }}>
                          {full ? "Fully Booked" : `${rem} of ${selected.totalSeats} left`}
                        </span>
                      </div>
                      <div className={styles.psbRpSeatsBar}>
                        <div className={styles.psbRpSeatsBarFill} style={{ width: `${pct}%`, background: full ? "#8a2c00" : low ? "linear-gradient(90deg,#c8700a,#e09030)" : "linear-gradient(90deg,#3d6000,#6aa000)" }} />
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
            <div className={styles.psbSelDisplay}>
              {selected ? (
                <>
                  <div className={styles.psbSelLabel}>Selected Batch</div>
                  <div className={styles.psbSelDate}>{selected.date}</div>
                </>
              ) : (
                <span className={styles.psbSelHint}>← Select a batch to continue</span>
              )}
            </div>
            {selected && !(selected.bookedSeats >= selected.totalSeats) ? (
              <Link href={selected.applyLink ?? "/registration?type=meditation"} className={styles.psbBookBtn}>
                Book Now — {fmtPrice(selected.dormPrice).amount} {currency}
                <svg className={styles.psbArrowIcon} viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff3d2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ) : (
              <span className={`${styles.psbBookBtn} ${styles.psbBookBtnDis}`}>Book Now</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   CURRENCY RATE HOOK
══════════════════════════════════════════════════ */
function useCurrencyRate() {
  const [rate, setRate] = useState<number>(83);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
      .then((r) => r.json())
      .then((data) => {
        const inr = data?.usd?.inr;
        if (inr && typeof inr === "number") setRate(inr);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { rate, loading };
}
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aymyogaschool.com/best-yoga-meditation-workshop-in-rishikesh#breadcrumb",
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
          "name": "Yoga Retreats",
          "item": "https://aymyogaschool.com/best-yoga-retreats-in-rishikesh"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Yoga Workshop",
          "item": "https://aymyogaschool.com/best-yoga-meditation-workshop-in-rishikesh"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://aymyogaschool.com/best-yoga-meditation-workshop-in-rishikesh#webpage",
      "url": "https://aymyogaschool.com/best-yoga-meditation-workshop-in-rishikesh",
      "name": "Best Yoga Workshop in Rishikesh | AYM Yoga School",
      "description": "Discover the best Yoga Workshop in Rishikesh at AYM Yoga School. Improve your yoga practice through guided meditation, pranayama, and expert instruction.",
      "breadcrumb": { "@id": "https://aymyogaschool.com/best-yoga-meditation-workshop-in-rishikesh#breadcrumb" },
      "about": { "@id": "https://aymyogaschool.com/best-yoga-meditation-workshop-in-rishikesh#course" },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://aymyogaschool.com/#website" }
    },
    {
      "@type": "Course",
      "@id": "https://aymyogaschool.com/best-yoga-meditation-workshop-in-rishikesh#course",
      "name": "Meditation Yoga Teacher Training",
      "description": "A 24-day Meditation Yoga Teacher Training program in Rishikesh covering Vipassana, active, and static meditation techniques, yoga philosophy, anatomy, breathwork, and the Eight Limbs of Yoga, designed to prepare students to teach meditation and mindfulness to others.",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://aymyogaschool.com/#organization",
        "name": "AYM Yoga School",
        "sameAs": "https://aymyogaschool.com/"
      },
      "educationalCredentialAwarded": "Yoga Alliance, USA Certificate",
      "coursePrerequisites": "None. Open to beginners and experienced practitioners.",
      "teaches": [
        "Vipassana meditation",
        "Active meditation",
        "Static meditation",
        "Breathwork",
        "Yoga philosophy",
        "Anatomy and physiology of meditation",
        "Eight Limbs of Yoga",
        "Mindfulness practices"
      ],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "name": "Meditation Yoga Teacher Training",
        "courseMode": ["onsite", "online"],
        "duration": "P24D",
        "location": {
          "@type": "Place",
          "name": "AYM Yoga School",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Upper Tapovan",
            "addressLocality": "Rishikesh",
            "addressRegion": "Uttarakhand",
            "postalCode": "249192",
            "addressCountry": "IN"
          }
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "799",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://aymyogaschool.com/best-yoga-meditation-workshop-in-rishikesh",
        "category": "Meditation Yoga Teacher Training"
      }
    }
  ]
}

/* ─── Component ─── */
const MeditationPage: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>("USD");
  const { rate, loading: rateLoading } = useCurrencyRate();

  return (
    <>
    <Script
        id="sound-healing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <Image
          src={heroImg}
          alt="Yoga Students Group"
          width={1180}
          height={540}
          className={styles.heroImage}
          priority
        />
      </section>
      {/* ══════════════════════════════════════
          SECTION 1 — HERO TITLE + BANNER
      ══════════════════════════════════════ */}
      <section className={styles.heroSection1}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>
          Yoga & Meditation Workshops in Rishikesh
          </h1>
          <OmDivider />
          {/* <div className={styles.bannerWrap}>
            <Image
              src={bannerImage}
              alt="Learn to Meditate – Meditation Yoga Teacher Training in Rishikesh"
              className={styles.bannerImg}
              priority
            />
          </div> */}
          {/* <h2 className={styles.secTitle} style={{ marginTop: "2rem" }}>
            Meditation Yoga Teacher Training in Rishikesh
          </h2> */}
        </div>
      </section>

     {/* SECTION 2 — WHAT IS MEDITATION - SIMPLE SPLIT LAYOUT */}
<section className={styles.whatIsSection}>
  <div className={styles.container}>
    <div className={styles.splitLayout}>
      {/* Left - Text Content */}
      <div className={styles.splitContent}>
        <h2 className={styles.splitTitle}>What is Meditation?</h2>
        <OmDivider />
        <p className={styles.splitPara}>
        Words cannot describe meditation. Meditation cannot be captured through language. We often call things in a simple sentence like in the words of a great being "words are the fingers pointing towards the moon but they are not the moon itself."
They are guides only and Meditation is that inner landscape inside all of us - that constant blissful bliss and all that JOY that is us.

        </p>
        <p className={styles.splitPara}>
        That link to that BIG something where you are linked to every creature in the universe when you can be the complete watcher of all things. That second of open complete surrender into the hands of the divine/God which is when you have accepted 100% that your life IS unfolding before you and where you have become the completely receptive receiver  Where all that unfolds works in and through you..for you And when you reach inside and keep digging, the surprise inside you just keeps showing up about yourself and the world and love and that universe.

        </p>
        <p className={styles.splitPara}>
        Meditation is that beautiful peel, that unfolding, that going to the center to reach that core essence.

        </p>
      </div>

      {/* Right - Video (autoplay, looped) */}
      <div className={styles.splitVideo}>
  <iframe
    src="https://www.youtube.com/embed/jXMRM9kjtRY?autoplay=1&loop=1&playlist=jXMRM9kjtRY&mute=1&controls=0&modestbranding=1&rel=0"
    className={styles.meditationVideo}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>
    </div>
  </div>
</section>

    {/* ══════════════════════════════════════
    SECTION 3 — MEDITATION METHODS WITH IMAGES
══════════════════════════════════════ */}
<section className={styles.methodSection}>
  <div className={styles.container}>
    <h2 className={styles.secTitle}>
      What is your favorite method of meditation?
    </h2>
    <OmDivider />

    {/* Method 1 - Vipassana */}
    <div className={styles.methodCard}>
      <div className={styles.methodContent}>
        <h3 className={styles.methodTitle}>Vipassana Meditation</h3>
        <p className={styles.bodyPara}>
        For the Vipassana practice, it is important that you sit comfortably. You observe just the fact that you are sitting and the respiration. In every respiration you should repeat with the mind, while breathing-in "in, out, sitting", while breathing-out "in, out, sitting".
You can direct the concentration to your nostrils, or to the belly.
You repeat this a few times, and you should be always attentive toward the breath. Please, notice: each round is only an individual round. You should repeat until you feel comfortable. Meditation usually occurs after the first few rounds of noting.
In any moment if you lose attention you should only go back to the breath, and do not get angry with you for this!
During the meditation: if any thought or feeling comes up you should be a watcher. Do not try to engage in them, or attach yourself to them. Just watch this come, stay a bit and then go.

        </p>
      </div>
      <div className={styles.methodImage}>
        <img 
          src="medi2.jpg"
          alt="Person practicing Vipassana meditation"
          className={styles.methodImg}
        />
        <div className={styles.methodImageCaption}>Vipassana Meditation</div>
      </div>
    </div>

    {/* Method 2 - Active Meditation */}
    <div className={`${styles.methodCard} ${styles.methodCardReverse}`}>
      <div className={styles.methodContent}>
        <h3 className={styles.methodTitle}>Active Meditation</h3>
        <p className={styles.bodyPara}>
        Active Meditation Utilizes Energy Of The Body The goal is to make your mind fall quiet by expending your body’s energy before you begin to sit still. This could be accomplished through energetic activities like dancing or aerial yoga to get your circulation going, or aerobic movements to heat the body. While practicing active meditation, your energy flow is directed down to the body, rather than being utilized by your mind/brain activity.
After several active moments, one of the active meditators sits for a few minutes to experience the shift in the body and relaxes muscles that have been stretched.
For a meditator novice, this has very few distractions and emotions/feelings remain entirely positive, with very little mental chatter or distractions. Although relatively new and not something of any traditional background, Active Meditation is designed for the realities of the current way of human life to re-train the mind to be in a better flow between work and rest. It opens us up to stillness and makes static meditation much easier over time.

        </p>
      </div>
      <div className={styles.methodImage}>
        <img 
          src="medi3.jpg"
          alt="Active meditation practice"
          className={styles.methodImg}
        />
        <div className={styles.methodImageCaption}>Active Meditation</div>
      </div>
    </div>

    {/* Method 3 - Static Meditation */}
    <div className={styles.methodCard}>
      <div className={styles.methodContent}>
        <h3 className={styles.methodTitle}>Static Meditation</h3>
        <p className={styles.bodyPara}>
        When static meditation is undertaken the person would actually be fixed in their pose while doing inward focusing until a meditative condition is attained. Following practice, this meditated state extends beyond fixed postures to include each day’s actions such as brushing teeth, walking, performing tasks, Yoga, working and so forth. When used in this sense, meditated action means mindfully aware of our action, our sensation or thought; interior as exterior.
Instead of many actions being involved like in more energic forms of activity, static meditation is stillness, though every activity is carried out at normal speed with our full energy and presence.
The act itself does not take less or more time depending on the person. Static meditations lead towards access and connection to greater cosmic powers and ultimately lead to a perfected form of meditative awareness, to have the potential of sitting for prolonged periods in this awareness.

        </p>
      </div>
      <div className={styles.methodImage}>
        <img 
          src="medi4.jpg"
          alt="Person in deep static meditation"
          className={styles.methodImg}
        />
        <div className={styles.methodImageCaption}>Static Meditation</div>
      </div>
    </div>

    <p className={styles.bodyPara} style={{ marginTop: "1.5rem" }}>
    If you’re interested in a meditation yoga course in Rishikesh, yoga & meditation classes Rishikesh, meditation and yoga course in India you’ll find opportunities for any level, such as an online meditation yoga course in India , mindfulness meditation course in India, meditations course for beginners Rishikesh, meditations for yoga teacher training Rishikesh, meditation and spirituality retreat Rishikesh .
    </p>
  </div>
</section>

{/* ══════════════════════════════════════
    SECTION 4 — ELEVATE + WHY CHOOSE WITH IMAGES
══════════════════════════════════════ */}
<section className={styles.altSection}>
  <div className={styles.container}>
    {/* Elevate Section with Image */}
    <div className={styles.elevateWrapper}>
      <div className={styles.elevateContent}>
        <h2 className={styles.secTitle}>Elevate Your Practice and Inspire Others</h2>
        <OmDivider />
        <p className={styles.bodyPara}>
        The world needs more meditation teachers with the skills to integrate mindful movement into their practices. Perhaps that person is you. Our Meditation Yoga Teacher Training is for you who would like to dive deeper in to the potent connection between meditation and yoga. The Meditation Teacher Yoga training will give you a foundation for teaching others mindfully, on their personal path towards peace and self awareness.
        </p>
      </div>
      <div className={styles.elevateImage}>
        <img 
          src="medi6.jpg"
          alt="Yoga teacher training session"
          className={styles.elevateImg}
        />
      </div>
    </div>

    {/* Why Choose Section with Icon Cards */}
    <h2 className={styles.secTitle} style={{ marginTop: "3rem" }}>
      Why Choose Our Program?
    </h2>
    <OmDivider />
    
    <div className={styles.whyGridModern}>
      <div className={styles.whyCardModern}>
        <div className={styles.whyCardIcon}>🌟</div>
        <h4 className={styles.whyCardTitle}>Empowering Environment</h4>
        <p className={styles.whyCardText}>
        These traditional forms of meditation involve focusing on your own self, and uniting them with the universe or the almighty itself. This is otherwise known as salvation or nirvana! Typically mala beads would be used for chanting a mantra repeatedly 108 times, while chanting, as it helps one focus on one's own self.
        </p>
      </div>
      
      <div className={styles.whyCardModern}>
        <div className={styles.whyCardIcon}>👨‍🏫</div>
        <h4 className={styles.whyCardTitle}>Expert Instructors</h4>
        <p className={styles.whyCardText}>
        Our experienced teachers are looking to share what they know. They will be equipped to give you everything you need, and the guidance, to go and direct and speak with confidence.
        </p>
      </div>
      
      <div className={styles.whyCardModern}>
        <div className={styles.whyCardIcon}>📚</div>
        <h4 className={styles.whyCardTitle}>Comprehensive Curriculum</h4>
        <p className={styles.whyCardText}>
        A comprehensively curated curriculum, spanning yoga’s philosophy, anatomy and meditation practices. We will teach you how to blend these components seamlessly for your own practice, and eventually, as a yoga teacher.

        </p>
      </div>
      
      <div className={styles.whyCardModern}>
        <div className={styles.whyCardIcon}>💪</div>
        <h4 className={styles.whyCardTitle}>Practical Experience</h4>
        <p className={styles.whyCardText}>
        Prepare to step into your leadership as a teacher. You’ll have numerous opportunities in our program to guide your practice through teaching meditations and asanas that fully prepare you to build inclusive safe spaces for students for years to come.
        </p>
      </div>
      
      <div className={styles.whyCardModern}>
        <div className={styles.whyCardIcon}>🦋</div>
        <h4 className={styles.whyCardTitle}>Transformational Journey</h4>
        <p className={styles.whyCardText}>
        The purpose of this training is both teaching and personal growth. Deepen your insights, strengthen your mindfulness practice, then you will be able to authentically transmit your experiences to your students.
        </p>
      </div>
      
      <div className={styles.whyCardModern}>
        <div className={styles.whyCardIcon}>🤝</div>
        <h4 className={styles.whyCardTitle}>Building a Strong Community</h4>
        <p className={styles.whyCardText}>
        You will be part of the network of passionate, proactive entrepreneurs in a safe, supportive, empowering space. You’ll form relationships of mutual respect & value which will serve you beyond the course.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════
    SECTION 5 — SCHOOL + HIGHLIGHTS + PREMIUM SEAT BOOKING
══════════════════════════════════════ */}
<section className={styles.scheduleSection}>
  <div className={styles.container}>
    <h2 className={styles.secTitle}>
      Meditation Course in Rishikesh – AYM Yoga School
    </h2>
    <OmDivider />

    {/* Program Highlights - Enhanced with Cards */}
    <h3 className={styles.subSecTitle}>Program Highlights:</h3>
    <div className={styles.highlightsGridModern}>
      <div className={styles.highlightCard}>
        <div className={styles.highlightCardIcon}>🧘‍♀️</div>
        <h4 className={styles.highlightCardTitle}>Daily Meditation & Yoga</h4>
        <p className={styles.highlightCardText}>
        Daily meditation and yoga practices designed to ignite your confidence.
        </p>
      </div>
      
      <div className={styles.highlightCard}>
        <div className={styles.highlightCardIcon}>🎯</div>
        <h4 className={styles.highlightCardTitle}>Engaging Workshops</h4>
        <p className={styles.highlightCardText}>
         Engaging workshops on cutting-edge meditation techniques, breathwork, and mindfulness.
        </p>
      </div>
      
      <div className={styles.highlightCard}>
        <div className={styles.highlightCardIcon}>📖</div>
        <h4 className={styles.highlightCardTitle}>Anatomy & Physiology</h4>
        <p className={styles.highlightCardText}>
        In-depth exploration of the anatomy and physiology related to meditation.
        </p>
      </div>
      
      <div className={styles.highlightCard}>
        <div className={styles.highlightCardIcon}>🕉️</div>
        <h4 className={styles.highlightCardTitle}>Eight Limbs of Yoga</h4>
        <p className={styles.highlightCardText}>
        Thought-provoking discussions on the Eight Limbs of Yoga and various meditation traditions.
        </p>
      </div>
      
      <div className={styles.highlightCard}>
        <div className={styles.highlightCardIcon}>💻</div>
        <h4 className={styles.highlightCardTitle}>Flexible Training</h4>
        <p className={styles.highlightCardText}>
        Flexible training options, available both online and in-person, to accommodate your lifestyle.
        </p>
      </div>
    </div>

    {/* ══ PREMIUM SEAT BOOKING — same UI as 500hr page ══ */}
    <PremiumSeatBookingMeditation
      seats={pricingData}
      currency={currency}
      onCurrencyChange={setCurrency}
      rate={rate}
      rateLoading={rateLoading}
    />
  </div>
</section>

   {/* ══════════════════════════════════════
    SECTION 6 — CTA CLOSING
══════════════════════════════════════ */}
<section className={styles.ctaSection}>
  <div className={styles.container}>
    <div className={styles.ctaWrapper}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaBadge}>
          <span>✦ Begin Your Journey ✦</span>
        </div>
        <h2 className={styles.ctaTitle}>
          Is This Meditation Program for You?
        </h2>
        <div className={styles.ctaDivider}>
          <span className={styles.ctaDividerLine}></span>
          <span className={styles.ctaDividerIcon}>ॐ</span>
          <span className={styles.ctaDividerLine}></span>
        </div>
        <p className={styles.ctaPara}>
        If you are a yoga practitioner and passionate about learning more while also educating others, this is for you. From Novice to an Experienced Practitioner, those committed to embracing the potent and transformative nature of mindfulness are accepted.
        </p>

        <h3 className={styles.ctaSubTitle}>
          Embark on Your Transformative Journey
        </h3>
        <p className={styles.ctaPara}>
        Whether you are a yogi interested in teaching meditation yoga, a student just trying to learn how to practice, or anywhere in between, this teacher training course will inspire you to continue your yoga practice and share it with the world. We will work towards a more awakened world, breath by breath, if only by each breathing life.
        </p>
        
        <div className={styles.ctaButtonGroup}>
          <Link href="/registration" className={styles.ctaButton}>
            Enroll Now
            <svg className={styles.ctaButtonIcon} viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/contact" className={styles.ctaButtonOutline}>
            Learn More
          </Link>
        </div>
      </div>
      
      <div className={styles.ctaImage}>
        <img 
          src="learn.jpg"
          alt="Peaceful meditation"
          className={styles.ctaImg}
        />
        <div className={styles.ctaImageOverlay}>
          <span>Start Your Journey Today</span>
        </div>
      </div>
    </div>
  </div>
</section>

      <HowToReach />
    </div>
    </>
  );
};

export default MeditationPage;