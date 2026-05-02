"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/assets/style/200-hour-yoga-teacher-training-rishikesh/Twohundredhouryoga.module.css";
import HowToReach from "@/components/home/Howtoreach";
import StickySectionNav from "@/components/common/StickySectionNav";
import Image from "next/image";
import api from "@/lib/api";
import ReviewSection from "@/components/common/Reviewsection";
import RatingsSummarySection from "@/components/home/RatingsSummarySection";
import PremiumGallerySection from "@/components/PremiumGallerySection";

/* ══════════════════════════════════════════════════
   TYPES
══════════════════════════════════════════════════ */
type Currency = "USD" | "INR";

interface StatItem {
  icon: string;
  value: string;
  title: string;
  desc: string;
}

interface ModuleItem {
  title: string;
  intro: string;
  items: string[];
  body?: string;
}

interface CombinedContent {
  _id: string;
  slug: string;
  status: string;

  pageMainH1: string;
  heroImage: string;
  heroImgAlt: string;

  introPara1: string;
  introPara2: string;
  introPara3: string;
  introPara4: string;

  courseCardHeaderLabel: string;
  courseCardItem1Label: string;
  courseCardItem1Value: string;
  courseCardItem2Label: string;
  courseCardItem2Value: string;
  courseCardItem3Label: string;
  courseCardItem3Value: string;
  courseCardItem4Label: string;
  courseCardItem4Value: string;
  courseCardItem4Sub: string;
  courseCardItem5Label: string;
  courseCardItem5Value: string;
  courseCardItem6Label: string;
  courseCardItem6Value: string;
  courseCardFeeLabel: string;
  courseCardFeeFrom: string;
  courseCardOldPrice: string;
  courseCardNewPrice: string;
  courseCardPriceCurrency: string;
  courseCardBookBtnText: string;
  courseCardBookBtnUrl: string;

  videoUrl: string;
  videoFile: string;
  videoBadgeText: string;

  stats: StatItem[];

  aimsIntro: string[];
  aimsBullets: string[];
  aimsOutro: string;
  aimsImage: string;
  aimsH3?: string;

  syllabusIntro: string[];
  syllabusH3?: string;

  includedFee: string[];
  notIncludedFee: string[];

  modules: ModuleItem[];

  ashtangaDesc: string;
  ashtangaImage: string;
  ashtangaH2?: string;
   asanasH2?: string;
  asanasSubtext?: string;
  newProgramsSubtext?: string;

  primaryIntro: string;
  primarySeriesImage: string;
  primarySeriesH3?: string;
  foundationItems: string[];
  weekGrid: Array<{
    week: string;
    icon: string;
    [key: string]: any;
  }>;

  hathaDesc: string;
  hathaImage: string;
  hathaH2?: string;

  hatha43: Array<{ n: number; name: string; sub: string; filter?: string }>;

  programs: Array<{
    title: string;
    desc: string;
    duration: string;
    start: string;
    oldPrice: string;
    price: string;
    image?: string;
  }>;
  newProgramsH2?: string;

  evalDesc: string;
  schedDesc: string;
  visaPassportDesc: string;
  visaPassportTitle?: string;
  globalCert1: string;
  globalCert2: string;
  req1: string;
  req2: string;
  req3: string;
  req4: string;
  best200Hr: string;

  luxFeatures: string[];
  luxuryH2?: string;
  whatIncl: string[];
  instrLangs: Array<{ lang: string } | string>;
  indianFees: Array<{ label: string; price: string }>;
  indianFeeH2?: string;
  schedRows: Array<{ time: string; activity: string }>;
  scheduleH2?: string;
  faqItems: Array<{ q: string; a: string }>;
  faqH2?: string;
  knowQA: Array<{ q: string; a: string }>;
  whatYouNeedH2?: string;

  reqImage: string;
  luxImages: string[];
  schedImages: string[];

  // Booking steps
  bookingH2?: string;
  bookingStep1Title?: string;
  bookingStep1Desc?: string;
  bookingStep2Title?: string;
  bookingStep2Desc?: string;
  bookingStep3Title?: string;
  bookingStep3Desc?: string;
  bookingStep4Title?: string;
  bookingStep4Desc?: string;

  // CTA
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaApplyBtnText?: string;
  ctaApplyUrl?: string;
  ctaPhone?: string;
  whatsappBtnText?: string;
  whatsappNumber?: string;

  // Batch section
  batchSectionTag?: string;
  upcomingDatesH2?: string;
  upcomingDatesSubtext?: string;

  // Meta
  metaTitle?: string;
  metaDesc?: string;
}

interface Batch {
  _id: string;
  startDate: string;
  endDate: string;
  usdFee: string;
  inrFee: string;
  dormPrice: number;
  twinPrice: number;
  privatePrice: number;
  totalSeats: number;
  bookedSeats: number;
  note?: string;
}

const NAV_ITEMS = [
  { label: "DATES & FEES", id: "dates-fees" },
  { label: "CURRICULUM", id: "curriculum" },
  { label: "INCLUSIONS", id: "inclusions" },
  { label: "FACILITY", id: "facility" },
  { label: "LOCATION", id: "location" },
];

/* ══════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════ */
function imgUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

function getYoutubeEmbed(url?: string): string {
  if (!url) return "";
  if (url.includes("youtu.be")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&rel=0`;
  }
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&rel=0`;
  }
  return url;
}

const shortDateRange = (start: string, end: string) => {
  const s = new Date(start);
  const e = new Date(end);
  const d = (dt: Date) =>
    dt.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
  return `${d(s)} – ${d(e)}`;
};

const monthYear = (start: string) => {
  const s = new Date(start);
  return s.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
};

/* ══════════════════════════════
   SVG ICONS
══════════════════════════════ */
const DurationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);
const LevelIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="14" width="5" height="7" rx="1" />
    <rect x="9.5" y="9" width="5" height="12" rx="1" />
    <rect x="17" y="4" width="5" height="17" rx="1" />
  </svg>
);
const CertIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 17v4M16 17v4M8 21h8" />
    <path d="M9 10l2 2 4-4" />
  </svg>
);
const StyleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="4" r="1.5" />
    <path d="M12 6v5.5" />
    <path d="M8.5 13c0 2 1.5 4 3.5 4.5 2-0.5 3.5-2.5 3.5-4.5" />
    <path d="M10 18l-1.5 3.5M14 18l1.5 3.5" />
    <path d="M7 11l5 2.5 5-2.5" />
  </svg>
);
const LangIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const DateIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <circle cx="8" cy="15" r="1" fill="currentColor" />
    <circle cx="12" cy="15" r="1" fill="currentColor" />
    <circle cx="16" cy="15" r="1" fill="currentColor" />
  </svg>
);

/* ══════════════════════════════
   CORNER ORNAMENT
══════════════════════════════ */
function CornerOrnament({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const flip = {
    tl: "scale(1,1)",
    tr: "scale(-1,1)",
    bl: "scale(1,-1)",
    br: "scale(-1,-1)",
  }[pos];
  return (
    <svg
      viewBox="0 0 40 40"
      className={styles.cornerOrn}
      style={{ transform: flip }}
    >
      <path
        d="M2,2 L2,18 M2,2 L18,2"
        stroke="#b8860b"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M2,2 Q8,8 16,2 Q8,8 2,16"
        stroke="#b8860b"
        strokeWidth="0.7"
        fill="none"
      />
      <circle cx="2" cy="2" r="2" fill="#b8860b" opacity="0.7" />
      <circle cx="10" cy="10" r="1.5" fill="#b8860b" opacity="0.4" />
    </svg>
  );
}

/* ══════════════════════════════
   VINTAGE HEADING
══════════════════════════════ */
function VintageHeading({
  children,
  para,
}: {
  children: React.ReactNode;
  para?: React.ReactNode;
}) {
  if (para) {
    return (
      <div className={styles.vintageHeadingWrap}>
        <div className={styles.vintageHeadingLeft}>
          <h2 className={styles.vintageHeading}>{children}</h2>
          <div className={styles.omDivider}>
            <span className={styles.dividerLine}></span>
            <span className={styles.omSymbol}>ॐ</span>
            <span className={styles.dividerLine}></span>
          </div>
        </div>
        <div className={styles.vintageHeadingPara}>{para}</div>
      </div>
    );
  }
  return (
    <div className={styles.vintageHeadingWrap}>
      <h2 className={styles.vintageHeading}>{children}</h2>
      <div className={styles.omDivider}>
        <span className={styles.dividerLine}></span>
        <span className={styles.omSymbol}>ॐ</span>
        <span className={styles.dividerLine}></span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   VIDEO SECTION — Fixed with autoplay
══════════════════════════════════════════════════ */
function VideoSection({
  videoUrl,
  videoFile,
  badgeText,
}: {
  videoUrl?: string;
  videoFile?: string;
  badgeText?: string;
}) {
  // Priority: videoFile (uploaded mp4) > videoUrl (YouTube)
  if (videoFile) {
    return (
      <div className={styles.videoSection}>
        <div className={styles.videoCard}>
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={imgUrl(videoFile)} type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
          {badgeText && (
            <div className={styles.videoBadge}>
              <div className={styles.videoPulse} />
              <span className={styles.videoBadgeTxt}>{badgeText}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (videoUrl) {
    return (
      <div className={styles.videoSection}>
        <div className={styles.videoCard}>
          <iframe
            src={getYoutubeEmbed(videoUrl)}
            width="100%"
            height="400"
            style={{
              border: "0",
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Yoga Video"
          />
          <div className={styles.videoOverlay} />
          {badgeText && (
            <div className={styles.videoBadge}>
              <div className={styles.videoPulse} />
              <span className={styles.videoBadgeTxt}>{badgeText}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

/* ══════════════════════════════
   COURSE INFO CARD
══════════════════════════════ */
function CourseInfoCard({
  content,
  batches,
}: {
  content: CombinedContent | null;
  batches: Batch[];
}) {
  const available = batches.filter((b) => b.totalSeats - b.bookedSeats > 0);
  const startingPrice =
    available.length > 0 ? Math.min(...available.map((b) => b.dormPrice)) : 699;
  const originalPrice = Math.round((startingPrice * 1.8) / 50) * 50;

  const details = [
    {
      icon: <DurationIcon />,
      label: content?.courseCardItem1Label || "DURATION",
      value: content?.courseCardItem1Value || "26 Days",
    },
    {
      icon: <LevelIcon />,
      label: content?.courseCardItem2Label || "LEVEL",
      value: content?.courseCardItem2Value || "All Levels",
    },
    {
      icon: <CertIcon />,
      label: content?.courseCardItem3Label || "CERTIFICATION",
      value: content?.courseCardItem3Value || "200 Hour",
    },
    {
      icon: <StyleIcon />,
      label: content?.courseCardItem4Label || "YOGA STYLE",
      value: content?.courseCardItem4Value || "Multistyle",
      sub: content?.courseCardItem4Sub || "Ashtanga, Vinyasa & Hatha",
    },
    {
      icon: <LangIcon />,
      label: content?.courseCardItem5Label || "LANGUAGE",
      value: content?.courseCardItem5Value || "English & Hindi",
    },
    {
      icon: <DateIcon />,
      label: content?.courseCardItem6Label || "DATE",
      value: content?.courseCardItem6Value || "1st of every month",
    },
  ];

  // Use backend prices directly if available, else compute from batches
  const displayOldPrice = content?.courseCardOldPrice
    ? content.courseCardOldPrice.startsWith("$")
      ? content.courseCardOldPrice
      : `$${content.courseCardOldPrice}`
    : `$${originalPrice}`;
  const displayNewPrice = content?.courseCardNewPrice
    ? content.courseCardNewPrice.startsWith("$")
      ? content.courseCardNewPrice
      : `$${content.courseCardNewPrice}`
    : `$${startingPrice}`;
  const displayCurrency = content?.courseCardPriceCurrency || "USD";
  const bookBtnUrl = content?.courseCardBookBtnUrl || "#dates-fees";
  const bookBtnText = content?.courseCardBookBtnText || "BOOK NOW";

  return (
    <div className={styles.icWrap}>
      <div className={styles.icCard}>
        <div className={styles.icLeft}>
          <div className={styles.icHdr}>
            <span className={styles.icHdrTxt}>
              {content?.courseCardHeaderLabel || "COURSE DETAILS"}
            </span>
          </div>
          <div className={styles.icGrid}>
            {details.map((d, i) => (
              <div key={i} className={styles.icItem}>
                <div className={styles.icIcon}>{d.icon}</div>
                <div className={styles.icBody}>
                  <div className={styles.icLbl}>{d.label}</div>
                  <div className={styles.icVal}>{d.value}</div>
                  {d.sub && <div className={styles.icSub}>{d.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.icVDiv} />
        <div className={styles.icRight}>
          <div className={styles.icFeeTop}>
            <span className={styles.icFeeLbl}>
              {content?.courseCardFeeLabel || "COURSE FEE"}
            </span>
            <span className={styles.icFeeFrom}>
              {content?.courseCardFeeFrom || "starting from"}
            </span>
          </div>
          <div className={styles.icPriceRow}>
            <span className={styles.icPriceOld}>{displayOldPrice}</span>
            <span className={styles.icPriceNew}>{displayNewPrice}</span>
            <span className={styles.icPriceCur}>{displayCurrency}</span>
          </div>
          <a href={bookBtnUrl} className={styles.icBookBtn}>
            {bookBtnText}
            <svg viewBox="0 0 20 20" fill="none" className={styles.icBtnArrow}>
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   MODULE CARD
══════════════════════════════ */
function ModuleCard({
  title,
  intro,
  items,
  index,
}: {
  title: string;
  intro: string;
  items: string[];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const moduleNum = String(index + 1).padStart(2, "0");
  return (
    <div className={styles.moduleCard}>
      <div className={styles.moduleCardAccent} />
      <div className={styles.moduleCardInner}>
        <div className={styles.moduleCardHeader}>
          <span className={styles.moduleCardNum}>{moduleNum}</span>
          <h3 className={styles.moduleCardTitle}>{stripHtml(title)}</h3>
        </div>
        <p className={styles.moduleCardIntro}>{stripHtml(intro)}</p>
        {items.length > 0 && (
          <>
            <ul className={styles.moduleOl}>
              {(expanded ? items : items.slice(0, 4)).map((it, i) => (
                <li key={i}>
                  <span className={styles.moduleOlDot} />
                  {stripHtml(it)}
                </li>
              ))}
            </ul>
            {items.length > 4 && (
              <button
                className={styles.moduleExpandBtn}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded
                  ? "Show Less ↑"
                  : `+${items.length - 4} More Topics ↓`}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════
   INCLUDE / EXCLUDE TABS
══════════════════════════════ */
function IncludeExcludeTabs({
  includedFee,
  notIncludedFee,
}: {
  includedFee: string[];
  notIncludedFee: string[];
}) {
  const [activeTab, setActiveTab] = useState<"include" | "exclude">("include");
  return (
    <div className={styles.incWrap}>
      <div className={styles.incTabs}>
        <button
          className={`${styles.incTab} ${activeTab === "include" ? styles.active : ""}`}
          onClick={() => setActiveTab("include")}
        >
          ✓ What Is Included?
        </button>
        <button
          className={`${styles.incTab} ${activeTab === "exclude" ? styles.active : ""}`}
          onClick={() => setActiveTab("exclude")}
        >
          ✕ What Is Not Included?
        </button>
      </div>
      <div className={styles.incContent}>
        <ul className={styles.incList}>
          {(activeTab === "include" ? includedFee : notIncludedFee)?.map(
            (it, i) => (
              <li key={i}>{stripHtml(it)}</li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

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
   PREMIUM SEAT BOOKING
══════════════════════════════════════════════════ */
function PremiumSeatBooking({
  seats,
  currency,
  onCurrencyChange,
  rate,
  rateLoading,
  content,
}: {
  seats: Batch[];
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  rate: number;
  rateLoading: boolean;
  content: CombinedContent | null;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (seats.length === 0) return;
    const firstAvailable = seats.find((s) => s.totalSeats - s.bookedSeats > 0);
    if (firstAvailable) setSelectedId(firstAvailable._id);
  }, [seats]);

  const selected = seats.find((s) => s._id === selectedId) ?? null;

  const fmtPriceAdvanced = (
    batch: Batch | null,
    overrideUsd?: number,
  ): { amount: string; cur: string } => {
    if (!batch && overrideUsd === undefined)
      return { amount: "—", cur: currency };

    if (currency === "INR") {
      if (batch?.inrFee) {
        const num = parseFloat(batch.inrFee.replace(/[₹,]/g, "").trim());
        if (!isNaN(num) && num > 100)
          return { amount: `₹${num.toLocaleString("en-IN")}`, cur: "INR" };
      }
      const usdNum = batch
        ? parseFloat(batch.usdFee.replace(/[$,]/g, "")) || batch.dormPrice
        : (overrideUsd ?? 0);
      const inr = Math.round(usdNum * rate);
      return { amount: `₹${inr.toLocaleString("en-IN")}`, cur: "INR" };
    }

    if (batch?.usdFee) {
      const raw = batch.usdFee.trim();
      return { amount: raw.startsWith("$") ? raw : `$${raw}`, cur: "USD" };
    }
    const fallback = overrideUsd ?? batch?.dormPrice ?? 0;
    return { amount: `$${fallback}`, cur: "USD" };
  };

  const batchCardPrice = (batch: Batch) => fmtPriceAdvanced(batch);

  // Use backend strings if present
  const sectionTag = content?.batchSectionTag || "Upcoming Batches · 2026–2027";
  const sectionH2 =
    content?.upcomingDatesH2 || "200 Hour Yoga Teacher Training India";
  const sectionSub =
    content?.upcomingDatesSubtext ||
    "Choose your dates & preferred accommodation — prices include tuition and meals";

  return (
    <section className={styles.datesSection} id="dates-fees">
      <div className={styles.psbSecTag}>{sectionTag}</div>
      <VintageHeading>{sectionH2}</VintageHeading>
      <p className={styles.psbSecSub}>{sectionSub}</p>
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
              <CurrencyDropdown
                currency={currency}
                onChange={onCurrencyChange}
              />
              <div className={styles.psbLegend}>
                <div className={styles.psbLegItem}>
                  <div className={`${styles.psbLegDot} ${styles.psbDGreen}`} />{" "}
                  Available
                </div>
                <div className={styles.psbLegItem}>
                  <div className={`${styles.psbLegDot} ${styles.psbDOrange}`} />{" "}
                  Limited
                </div>
                <div className={styles.psbLegItem}>
                  <div className={`${styles.psbLegDot} ${styles.psbDRed}`} />{" "}
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
            <p className={styles.psbNoBatches}>
              No upcoming batches available at the moment.
            </p>
          ) : (
            <div className={styles.psbBatchGrid}>
              {seats.map((batch) => {
                const rem = batch.totalSeats - batch.bookedSeats;
                const full = rem <= 0;
                const low = !full && rem <= 5;
                const dotCls = full
                  ? styles.psbDRed
                  : low
                    ? styles.psbDOrange
                    : styles.psbDGreen;
                const txtCls = full
                  ? styles.psbSRed
                  : low
                    ? styles.psbSOrange
                    : styles.psbSGreen;
                const statusTxt = full
                  ? "Fully Booked"
                  : low
                    ? "Limited"
                    : "Available";
                const seatsPercent = Math.max(
                  5,
                  (rem / batch.totalSeats) * 100,
                );
                const isSelected = selectedId === batch._id;
                const cardPrice = batchCardPrice(batch);
                return (
                  <div
                    key={batch._id}
                    className={[
                      styles.psbBc,
                      full ? styles.psbBcFull : "",
                      isSelected ? styles.psbBcSel : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => {
                      if (!full) setSelectedId(batch._id);
                    }}
                  >
                    <div className={styles.psbBcTick}>
                      <svg viewBox="0 0 10 10" fill="none">
                        <polyline
                          points="1.5,5 4,7.5 8.5,2.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.psbBcMonth}>
                      {monthYear(batch.startDate)}
                    </div>
                    <div className={styles.psbBcDates}>
                      {shortDateRange(batch.startDate, batch.endDate)}
                    </div>
                    <div className={styles.psbBcPrice}>
                      {cardPrice.amount} <span>{cardPrice.cur}</span>
                    </div>
                    <div className={styles.psbBcStatus}>
                      <div className={`${styles.psbBcDot} ${dotCls}`} />
                      <span className={`${styles.psbBcStxt} ${txtCls}`}>
                        {statusTxt}
                      </span>
                    </div>
                    {!full && (
                      <>
                        <div className={styles.psbBcSeatsBar}>
                          <div
                            className={styles.psbBcSeatsBarFill}
                            style={{
                              width: `${seatsPercent}%`,
                              background: low
                                ? "linear-gradient(90deg,#c8700a,#e09030)"
                                : "linear-gradient(90deg,#3d6000,#6aa000)",
                            }}
                          />
                        </div>
                        <span
                          className={styles.psbBcSeatsBadge}
                          style={{
                            color: low ? "#c8700a" : "#3d6000",
                            borderColor: low ? "#c8700a" : "#3d6000",
                          }}
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

        {/* RIGHT PANEL */}
        <div className={styles.psbRightPanel}>
          <div className={`${styles.psbCn} ${styles.psbCnTl}`} />
          <div className={`${styles.psbCn} ${styles.psbCnTr}`} />
          <div className={`${styles.psbCn} ${styles.psbCnBl}`} />
          <div className={`${styles.psbCn} ${styles.psbCnBr}`} />
          <div className={styles.psbRpHead}>
            <div className={styles.psbRpEyebrow}>Course Overview</div>
            <div className={styles.psbRpCourse}>
              200 Hour Yoga Teacher Training
            </div>
            <div className={styles.psbRpDur}>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="rgba(255,243,210,0.8)"
                  strokeWidth="1.2"
                />
                <path
                  d="M8 4.5V8.5L10.5 10"
                  stroke="rgba(255,243,210,0.8)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <span className={styles.psbRpDurTxt}>
                26 Days · Rishikesh, India
              </span>
            </div>
            <div className={styles.psbCurrBadge}>
              {currency === "USD" ? "🇺🇸 Prices in USD" : "🇮🇳 Prices in INR"}
            </div>
          </div>
          <div className={styles.psbRpBody}>
            <div className={styles.psbPriceLbl}>With Accommodation</div>
            <div className={styles.psbPriceRow}>
              <div className={styles.psbPriceCard}>
                <div className={styles.psbPcAmt}>
                  {selected
                    ? currency === "INR"
                      ? `₹${Math.round(selected.privatePrice * rate).toLocaleString("en-IN")}`
                      : `$${selected.privatePrice}`
                    : "—"}
                  <span className={styles.psbPcCur}>{currency}</span>
                </div>
                <div className={styles.psbPcLbl}>Private Room</div>
              </div>
              <div className={styles.psbPriceCard}>
                <div className={styles.psbPcAmt}>
                  {selected
                    ? currency === "INR"
                      ? `₹${Math.round(selected.twinPrice * rate).toLocaleString("en-IN")}`
                      : `$${selected.twinPrice}`
                    : "—"}
                  <span className={styles.psbPcCur}>{currency}</span>
                </div>
                <div className={styles.psbPcLbl}>Twin / Shared</div>
              </div>
            </div>
            <div className={styles.psbPriceLbl}>Without Accommodation</div>
            <div className={styles.psbPriceWide}>
              <div className={styles.psbPwLeft}>
                <span className={styles.psbPcAmt} style={{ fontSize: "1rem" }}>
                  {selected
                    ? currency === "INR"
                      ? `₹${Math.round(selected.dormPrice * rate).toLocaleString("en-IN")}`
                      : `$${selected.dormPrice}`
                    : "—"}
                </span>
                <span className={styles.psbPcCur}>{currency}</span>
              </div>
              <span className={styles.psbFoodBadge}>Food Included</span>
            </div>
            {selected && currency === "USD" && (
              <div className={styles.psbInrRow}>
                <span className={styles.psbInrLbl}>USD Price</span>
                <span className={styles.psbInrAmt}>
                  {selected.usdFee.startsWith("$")
                    ? selected.usdFee
                    : `$${selected.usdFee}`}
                </span>
              </div>
            )}
            {selected && currency === "INR" && (
              <div className={styles.psbInrRow}>
                <span className={styles.psbInrLbl}>Indian Price</span>
                <span className={styles.psbInrAmt}>
                  {(() => {
                    if (selected.inrFee) {
                      const num = parseFloat(
                        selected.inrFee.replace(/[₹,]/g, "").trim(),
                      );
                      if (!isNaN(num) && num > 100)
                        return `₹${num.toLocaleString("en-IN")}`;
                    }
                    const usdNum =
                      parseFloat(selected.usdFee.replace(/[$,]/g, "")) ||
                      selected.dormPrice;
                    return `₹${Math.round(usdNum * rate).toLocaleString("en-IN")}`;
                  })()}
                </span>
              </div>
            )}
            <div className={styles.psbDivider} />
            {selected &&
              (() => {
                const rem = selected.totalSeats - selected.bookedSeats;
                const full = rem <= 0;
                const low = !full && rem <= 5;
                const pct = full
                  ? 100
                  : Math.round(
                      (selected.bookedSeats / selected.totalSeats) * 100,
                    );
                return (
                  <div className={styles.psbRpSeatsWrap}>
                    <div className={styles.psbRpSeatsRow}>
                      <span className={styles.psbRpSeatsLbl}>
                        Seats Availability
                      </span>
                      <span
                        className={styles.psbRpSeatsBadge}
                        style={{
                          color: full ? "#8a2c00" : low ? "#c8700a" : "#3d6000",
                          borderColor: full
                            ? "#8a2c00"
                            : low
                              ? "#c8700a"
                              : "#3d6000",
                        }}
                      >
                        {full
                          ? "Fully Booked"
                          : `${rem} of ${selected.totalSeats} left`}
                      </span>
                    </div>
                    <div className={styles.psbRpSeatsBar}>
                      <div
                        className={styles.psbRpSeatsBarFill}
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
            <div className={styles.psbSelDisplay}>
              {selected ? (
                <>
                  <div className={styles.psbSelLabel}>Selected Batch</div>
                  <div className={styles.psbSelDate}>
                    {shortDateRange(selected.startDate, selected.endDate)},{" "}
                    {monthYear(selected.startDate)}
                  </div>
                </>
              ) : (
                <span className={styles.psbSelHint}>
                  ← Select a batch to continue
                </span>
              )}
            </div>
            {selected ? (
              <a
                href={`/yoga-registration?batchId=${selected._id}&type=200hr`}
                className={styles.psbBookBtn}
              >
                Book Now — {fmtPriceAdvanced(selected).amount} {currency}
                <svg
                  className={styles.psbArrowIcon}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ) : (
              <span className={`${styles.psbBookBtn} ${styles.psbBookBtnDis}`}>
                Book Now
              </span>
            )}
            {selected?.note && (
              <p className={styles.psbNote}>
                <strong>Note:</strong> {selected.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════
   CURRENCY HOOK
══════════════════════════════ */
function useCurrencyRate() {
  const [rate, setRate] = useState<number>(83);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
    )
      .then((r) => r.json())
      .then((data) => {
        const inr = data?.usd?.inr;
        if (inr) setRate(inr);
      })
      .finally(() => setLoading(false));
  }, []);
  return { rate, loading };
}

/* ══════════════════════════════
   PAGE SKELETON
══════════════════════════════ */
function PageSkeleton() {
  return (
    <div
      className={styles.root}
      style={{ padding: "4rem 2rem", textAlign: "center" }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🕉️</div>
      <p style={{ color: "#e07b00", fontSize: "1.2rem" }}>
        Loading yoga journey...
      </p>
    </div>
  );
}

const ASANA_FILTERS = [
  "All Poses",
  "Standing",
  "Sitting",
  "Lying",
  "Balancing",
] as const;
type AsanaFilter = (typeof ASANA_FILTERS)[number];

/* ════════════════════════════════════════════════
   MAIN PAGE COMPONENT
════════════════════════════════════════════════ */
export default function TwoHundredHourYoga() {
  const [content, setContent] = useState<CombinedContent | null>(null);
  const [batches, setBatches] = useState<Batch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [asanaFilter, setAsanaFilter] = useState<AsanaFilter>("All Poses");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const { rate, loading: rateLoading } = useCurrencyRate();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const [contentRes, batchRes] = await Promise.all([
          api.get("/yoga-200hr/content"),
          api.get("/200hr-seats/getAllBatches"),
        ]);

        const list: CombinedContent[] = contentRes.data?.data || [];
        const active =
          list.find((c) => c.status === "Active") || list[0] || null;
        setContent(active);
        setBatches(batchRes.data?.data || []);
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to load page content. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  if (loading) return <PageSkeleton />;
  if (error)
    return (
      <div
        className={styles.root}
        style={{ padding: "4rem", textAlign: "center" }}
      >
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );

  const allAsanas = content?.hatha43 || [];
  const modules = content?.modules || [];
  const filteredAsanas =
    asanaFilter === "All Poses"
      ? allAsanas
      : allAsanas.filter((a) => (a.filter || "All Poses") === asanaFilter);

  // WhatsApp number from backend or fallback
  const whatsappNumber =
    content?.whatsappNumber || content?.ctaPhone || "919528023390";

  // CTA texts from backend
  const ctaTitle =
    content?.ctaTitle ||
    "We welcome you to AYM School for a wonderful yogic experience!";
  const ctaSubtitle =
    content?.ctaSubtitle ||
    "Join us & become part of the 5000+ international yoga teachers who are proud alumni of the AYM School.";
  const ctaApplyUrl = content?.ctaApplyUrl || "/yoga-registration?type=200hr";
  const ctaApplyBtnText = content?.ctaApplyBtnText || "Apply Now";
  const whatsappBtnText = content?.whatsappBtnText || "💬 WhatsApp Us";

  return (
    <div className={styles.root}>
      <div className={styles.grainOverlay} aria-hidden="true" />

      {/* ════ HERO IMAGE ════ */}
      <section id="hero" className={styles.heroSection}>
        {content?.heroImage && (
          <Image
            src={imgUrl(content.heroImage)}
            alt={content.heroImgAlt || "200 Hour Yoga Teacher Training"}
            width={1180}
            height={540}
            className={styles.heroImage}
            priority
          />
        )}
      </section>

      {/* ════ COURSE INFO CARD ════ */}
      <CourseInfoCard content={content} batches={batches} />

      <StickySectionNav items={NAV_ITEMS} triggerId="hero" />

      {/* ════ HERO TEXT + VIDEO + STATS ════ */}
      <section className={styles.heroSection2}>
        <VintageHeading
          para={
            content?.introPara1 ? (
              <span className={styles.bodyText}>
                {stripHtml(content.introPara1)}
              </span>
            ) : undefined
          }
        >
          {content?.pageMainH1 || "200 Hour Yoga Teacher Training in Rishikesh"}
        </VintageHeading>

        {/* ════ VIDEO ════ */}
        <VideoSection
          videoUrl={content?.videoUrl}
          videoFile={content?.videoFile}
          badgeText={content?.videoBadgeText}
        />

        {[content?.introPara2, content?.introPara3, content?.introPara4]
          .filter(Boolean)
          .map((para, i) => (
            <p key={i} className={styles.bodyText}>
              {stripHtml(para!)}
            </p>
          ))}

        {/* ════ STAT CARDS ════ */}
        {content?.stats?.length ? (
          <div className={styles.statsRow}>
            {content.stats.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statCardIconWrap}>
                  <span className={styles.statIcon}>{s.icon}</span>
                </div>
                <div className={styles.statCardBody}>
                  <span className={styles.statVal}>{stripHtml(s.value)}</span>
                  <span className={styles.statTitle}>{stripHtml(s.title)}</span>
                  <span className={styles.statDesc}>{stripHtml(s.desc)}</span>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {/* ════ AIMS ════ */}
      <section className={styles.contentSection}>
        {(content?.aimsIntro?.length || content?.aimsBullets?.length) && (
          <div className={styles.h3LeftWrap}>
            <div className={styles.h3LeftContent}>
              <h3 className={styles.h3Left}>
                {content?.aimsH3 || "Aims & Objectives"}
              </h3>
              <div className={styles.underlineBar} />
              {content?.aimsIntro?.map((para, i) => (
                <p key={i} className={styles.bodyText}>
                  {stripHtml(para)}
                </p>
              ))}
              {content?.aimsBullets?.length ? (
                <ul className={styles.bulletList}>
                  {content.aimsBullets.map((b, i) => (
                    <li key={i}>{stripHtml(b)}</li>
                  ))}
                </ul>
              ) : null}
              {content?.aimsOutro && (
                <p className={styles.bodyText}>
                  {stripHtml(content.aimsOutro)}
                </p>
              )}
            </div>
            <div className={styles.h3LeftImageWrap}>
              {content?.aimsImage ? (
                <img
                  src={imgUrl(content.aimsImage)}
                  alt="Yoga practice Rishikesh"
                  className={styles.h3LeftImg}
                />
              ) : null}
            </div>
          </div>
        )}
      </section>

      {/* ════ PREMIUM SEAT BOOKING ════ */}
      <PremiumSeatBooking
        seats={batches}
        currency={currency}
        onCurrencyChange={setCurrency}
        rate={rate}
        rateLoading={rateLoading}
        content={content}
      />

      {/* ════ SYLLABUS + MODULES ════ */}
      <section id="curriculum" className={styles.contentSection2}>
        <div style={{ marginTop: "2.5rem" }}>
          <h3 className={styles.h3Left}>
            {content?.syllabusH3 || "Course Syllabus"}
          </h3>
          <div className={styles.underlineBar} />
          {content?.syllabusIntro?.map((para, i) => (
            <p key={i} className={styles.bodyText}>
              {stripHtml(para)}
            </p>
          ))}
        </div>
        <div className={styles.moduleGrid}>
          {modules.slice(0, 8).map((mod, i) => (
            <ModuleCard
              key={i}
              title={mod.title}
              intro={mod.intro}
              items={mod.items}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ════ ASHTANGA ════ */}
      <section id="inclusions" className={styles.contentSection}>
        {content?.ashtangaDesc && (
          <>
            <VintageHeading>
              {content?.ashtangaH2 || "Module 8.1: Ashtanga Vinyasa Yoga"}
            </VintageHeading>
            <div className={styles.moduleDetailGrid}>
              <div className={styles.moduleDetailImg}>
                {content.ashtangaImage ? (
                  <img
                    src={imgUrl(content.ashtangaImage)}
                    alt="Ashtanga"
                    className={styles.modImg}
                  />
                ) : null}
              </div>
              <div>
                <p className={styles.bodyText}>
                  {stripHtml(content.ashtangaDesc)}
                </p>
              </div>
            </div>
          </>
        )}
      </section>

      {/* ════ PRIMARY SERIES + HATHA ════ */}
      <section className={styles.contentSection3}>
        {content?.primaryIntro && (
          <div className={styles.section3Split}>
            <div className={styles.section3Left}>
              <div className={styles.primaryCurrCard}>
                <CornerOrnament pos="tl" />
                <CornerOrnament pos="tr" />
                <CornerOrnament pos="bl" />
                <CornerOrnament pos="br" />
                <h3 className={styles.h3Left}>
                  {content?.primarySeriesH3 || "Primary Series Curriculum"}
                </h3>
                <div className={styles.underlineBar} />
                <p className={styles.bodyText}>
                  {stripHtml(content.primaryIntro)}
                </p>
                {content.foundationItems?.length ? (
                  <div className={styles.foundationBox}>
                    <div className={styles.foundationHeader}>
                      <span className={styles.foundIcon}>📖</span>
                      <strong>Foundation</strong>
                    </div>
                    <ul className={styles.foundList}>
                      {content.foundationItems.map((it, i) => (
                        <li key={i}>{stripHtml(it)}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {content.weekGrid?.length ? (
                  <div className={styles.weekGrid}>
                    {content.weekGrid.map((w, i) => {
                      const items = Object.keys(w)
                        .filter((key) => key.startsWith("t"))
                        .sort(
                          (a, b) =>
                            Number(a.replace("t", "")) -
                            Number(b.replace("t", "")),
                        )
                        .map((key) => {
                          const index = key.replace("t", "");
                          return { t: w[key], d: w[`d${index}`] };
                        })
                        .filter((item) => item.t && item.d);
                      return (
                        <div key={i} className={styles.weekCard}>
                          <div className={styles.weekHeader}>
                            {stripHtml(w.week)} <span>{w.icon}</span>
                          </div>
                          <div className={styles.weekItemsRow}>
                            {items.map((it, j) => (
                              <div key={j} className={styles.weekItem}>
                                <span className={styles.weekDot}>●</span>
                                <div>
                                  <strong>{stripHtml(it.t)}</strong>
                                  <br />
                                  <span className={styles.weekDesc}>
                                    {stripHtml(it.d)}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
            <div className={styles.section3Right}>
              {content.primarySeriesImage ? (
                <img
                  src={imgUrl(content.primarySeriesImage)}
                  alt="Yoga Primary Series practice"
                />
              ) : null}
            </div>
          </div>
        )}

        {content?.hathaDesc && (
          <>
            <VintageHeading>
              {content?.hathaH2 || "Module 8.2: Hatha Yoga"}
            </VintageHeading>
            <div className={styles.moduleDetailGrid}>
              <div className={styles.moduleDetailImg}>
                {content.hathaImage ? (
                  <img
                    src={imgUrl(content.hathaImage)}
                    alt="Hatha"
                    className={styles.modImg}
                  />
                ) : null}
              </div>
              <div>
                <p className={styles.bodyText}>
                  {stripHtml(content.hathaDesc)}
                </p>
              </div>
            </div>
          </>
        )}
      </section>

      {/* ════ HATHA ASANAS ════ */}
      {allAsanas.length > 0 && (
        <section className={styles.contentSection}>
          <VintageHeading
            para={
              <span className={styles.centerSubtext}>
                {content?.asanasSubtext
                  ? content.asanasSubtext
                  : `Master these ${allAsanas.length} essential postures as part of your comprehensive training`}
              </span>
            }
          >
            {content?.asanasH2 || "Hatha Yoga Asanas"}
          </VintageHeading>
          <div className={styles.asanaFilterRow}>
            {ASANA_FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${asanaFilter === f ? styles.filterActive : ""}`}
                onClick={() => setAsanaFilter(f)}
              >
                {f}
                {f !== "All Poses" && (
                  <span
                    style={{ marginLeft: 4, opacity: 0.7, fontSize: "0.75em" }}
                  >
                    (
                    {
                      allAsanas.filter((a) => (a.filter || "All Poses") === f)
                        .length
                    }
                    )
                  </span>
                )}
              </button>
            ))}
          </div>
          {filteredAsanas.length === 0 ? (
            <p className={styles.centerSubtext} style={{ padding: "2rem 0" }}>
              No poses found in this category.
            </p>
          ) : (
            <div className={styles.asanaGrid}>
              {filteredAsanas.map((a) => (
                <div key={a.n} className={styles.asanaCard}>
                  <span className={styles.asanaNum}>{a.n}</span>
                  <div>
                    <div className={styles.asanaName}>{stripHtml(a.name)}</div>
                    <div className={styles.asanaSub}>{stripHtml(a.sub)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ════ LUXURY FACILITIES ════ */}
      <section id="facility" className={styles.contentSection}>
        {content?.luxFeatures?.length ? (
          <>
            <VintageHeading
              para={
                <span className={styles.bodyText}>
                  Experience world-class facilities designed to support your
                  yoga journey with comfort and serenity.
                </span>
              }
            >
              {content?.luxuryH2 || "Luxury Facilities"}
            </VintageHeading>
            <div className={styles.luxuryLayout}>
              <div className={styles.luxuryItemsLeft}>
                {content.luxFeatures
                  .slice(0, Math.ceil(content.luxFeatures.length / 2))
                  .map((it, i) => (
                    <div key={i} className={styles.luxuryItem}>
                      {stripHtml(it)}
                    </div>
                  ))}
              </div>
              <div className={styles.luxuryCenterImg}>
                {content.luxImages?.length ? (
                  <img
                    src={imgUrl(content.luxImages[0])}
                    alt="Luxury facility"
                    className={styles.luxCenterImgEl}
                  />
                ) : null}
              </div>
              <div className={styles.luxuryItemsRight}>
                {content.luxFeatures
                  .slice(Math.ceil(content.luxFeatures.length / 2))
                  .map((it, i) => (
                    <div key={i} className={styles.luxuryItem}>
                      {stripHtml(it)}
                    </div>
                  ))}
              </div>
            </div>
            {content.luxImages?.length > 1 && (
              <div className={styles.luxuryExtraImgs}>
                {content.luxImages.slice(1).map((src, i) => (
                  <img
                    key={i}
                    src={imgUrl(src)}
                    alt={`Facility ${i + 2}`}
                    className={styles.luxuryExtraImg}
                  />
                ))}
              </div>
            )}
          </>
        ) : null}

        {/* INDIAN FEE */}
        {content?.indianFees?.length ? (
          <>
            <VintageHeading>
              {content?.indianFeeH2 || "Indian Student Fee"}
            </VintageHeading>
            <div className={styles.indianFeeGrid}>
              {content.indianFees.map((f, i) => (
                <div key={i} className={styles.indianFeeCard}>
                  <div className={styles.indianFeeCardTop}>
                    <span className={styles.indianFeeIcon}>🏷️</span>
                  </div>
                  <span className={styles.indianFeeLabel}>
                    {stripHtml(f.label)}
                  </span>
                  <span className={styles.indianFeePrice}>
                    {stripHtml(f.price)}
                  </span>
                  <a href="#dates-fees" className={styles.indianFeeBtn}>
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {/* SCHEDULE */}
        {content?.schedRows?.length ? (
          <>
            <VintageHeading
              para={
                content.schedDesc ? (
                  <span className={styles.bodyText}>
                    {stripHtml(content.schedDesc)}
                  </span>
                ) : undefined
              }
            >
              {content?.scheduleH2 || "Daily Schedule"}
            </VintageHeading>
            <div className={styles.schedLayout}>
              <div className={styles.schedTableWrap}>
                <CornerOrnament pos="tl" />
                <CornerOrnament pos="tr" />
                <CornerOrnament pos="bl" />
                <CornerOrnament pos="br" />
                <table className={styles.schedTable}>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Schedule</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.schedRows.map((r, i) => (
                      <tr key={i}>
                        <td className={styles.schedTime}>
                          {stripHtml(r.time)}
                        </td>
                        <td>{stripHtml(r.activity)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.schedImgGrid}>
                {content.schedImages?.length ? (
                  <img
                    src={imgUrl(content.schedImages[0])}
                    alt="Yoga class schedule"
                    className={styles.schedImg}
                  />
                ) : null}
              </div>
            </div>
          </>
        ) : null}
      </section>

      {/* ════ FEE INCLUSIONS ════ */}
      <section className={styles.contentSection}>
        <VintageHeading>Course Fee Inclusions</VintageHeading>
        <IncludeExcludeTabs
          includedFee={content?.includedFee || []}
          notIncludedFee={content?.notIncludedFee || []}
        />

        {content?.instrLangs?.length ? (
          <div className={styles.infoBlock}>
            <p className={styles.bodyText}>
              <strong>The medium of instruction:</strong>
            </p>
            <ol className={styles.numberedListSimple}>
              {content.instrLangs.map((l, i) => (
                <li key={i}>
                  {typeof l === "string"
                    ? stripHtml(l)
                    : stripHtml((l as any).lang)}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {content?.visaPassportDesc && (
          <div className={styles.infoBlock}>
            <p className={styles.bodyText}>
              <strong>
                {content?.visaPassportTitle || "Visa And Passport:"}
              </strong>
            </p>
            <p className={styles.bodyText}>
              {stripHtml(content.visaPassportDesc)}
            </p>
          </div>
        )}

        {/* CTA BANNER */}
        <div className={styles.ctaBanner}>
          <CornerOrnament pos="tl" />
          <CornerOrnament pos="tr" />
          <CornerOrnament pos="bl" />
          <CornerOrnament pos="br" />
          <div className={styles.ctaBannerLeft}>
            <p className={styles.ctaBannerTitle}>{ctaTitle}</p>
            <p className={styles.ctaBannerSub}>{ctaSubtitle}</p>
          </div>
          <div className={styles.ctaBannerRight}>
            <p className={styles.ctaBannerBook}>Book Your Spot Today!</p>
            <a href={ctaApplyUrl} className={styles.applyNowBtn}>
              {ctaApplyBtnText}
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20the%20200%20Hour%20Yoga%20Teacher%20Training%20in%20Rishikesh.%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.phoneBtn}
            >
              {whatsappBtnText}
            </a>
          </div>
        </div>
      </section>

      {/* ════ PROGRAMS ════ */}
      {content?.programs?.length ? (
        <section className={styles.contentSection}>
          <VintageHeading
            para={
              <span className={styles.centerSubtext}>
                {content?.newProgramsSubtext ||
                  "Expand your teaching expertise with our specialized certification combinations"}
              </span>
            }
          >
            {content?.newProgramsH2 || "Our New 200 Hour Yoga Programs"}
          </VintageHeading>
          <div className={styles.programGrid}>
            {content.programs.map((p, i) => (
              <div key={i} className={styles.programCard}>
                {p.image && (
                  <div className={styles.programCardImg}>
                    <img src={imgUrl(p.image)} alt={stripHtml(p.title)} />
                    <div className={styles.programImgOverlay} />
                    {i === 0 && (
                      <span className={styles.programBadge}>POPULAR</span>
                    )}
                  </div>
                )}
                <div className={styles.programCardBody}>
                  <h3 className={styles.programTitle}>{stripHtml(p.title)}</h3>
                  <p className={styles.programDesc}>{stripHtml(p.desc)}</p>
                  <div className={styles.programMeta}>
                    <div>
                      <span className={styles.metaLabel}>Duration:</span>{" "}
                      {stripHtml(p.duration)}
                    </div>
                    <div>
                      <span className={styles.metaLabel}>Start Date:</span>{" "}
                      {stripHtml(p.start)}
                    </div>
                    <div>
                      <span className={styles.metaLabel}>Price:</span>{" "}
                      <s className={styles.oldPrice}>{stripHtml(p.oldPrice)}</s>{" "}
                      <strong className={styles.newPrice}>
                        {stripHtml(p.price)}
                      </strong>
                    </div>
                  </div>
                  <a href="#" className={styles.learnMoreBtn}>
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ════ REQUIREMENTS / KNOW QA ════ */}
      {content?.knowQA?.length ? (
        <section className={styles.contentSection}>
          <VintageHeading>
            {content?.whatYouNeedH2 || "Requirements & Information"}
          </VintageHeading>
          <div className={styles.requirementsTextFull}>
            {content.knowQA.map((item, i) => (
              <div key={i} className={styles.infoBlock}>
                <h4 className={styles.infoQ}>{stripHtml(item.q)}</h4>
                {stripHtml(item.a)
                  .split("\n\n")
                  .map((para, j) => (
                    <p key={j} className={styles.bodyText}>
                      {para}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ════ HOW TO BOOK + FAQ ════ */}
      <section className={styles.contentSection}>
        {/* Booking Steps heading from backend */}
        {content?.bookingH2 && (
          <VintageHeading>{content.bookingH2}</VintageHeading>
        )}

        <div className={styles.bookingSteps}>
          {[1, 2, 3, 4].map((i) => {
            const title =
              (content as any)?.[`bookingStep${i}Title`] ||
              (content as any)?.[`step${i}Title`];
            const desc = (content as any)?.[`bookingStep${i}Desc`];

            if (!title && !desc) return null;

            return (
              <div key={i} className={styles.bookingStep}>
                <div className={styles.bookingStepIconWrap}>
                  <span className={styles.bookingStepIcon}>
                    {["📝", "💳", "📩", "🧘"][i - 1]}
                  </span>
                </div>
                <div className={styles.bookingStepCard}>
                  <div className={styles.bookingStepNum}>Step {i}</div>
                  <div className={styles.bookingStepTitle}>{title}</div>
                  <div
                    className={styles.bookingStepText}
                    dangerouslySetInnerHTML={{ __html: desc || "" }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {content?.faqItems?.length ? (
          <>
            <VintageHeading>
              {content?.faqH2 || "Frequently Asked Questions"}
            </VintageHeading>
            <div className={styles.faqList}>
              {content.faqItems.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <button
                    className={styles.faqBtn}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{stripHtml(faq.q)}</span>
                    <span
                      className={styles.faqIcon}
                      style={{
                        transform:
                          openFaq === i ? "rotate(45deg)" : "rotate(0)",
                      }}
                    >
                      {openFaq === i ? "×" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className={styles.faqAnswer}>
                      <p className={styles.bodyText}>{stripHtml(faq.a)}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : null}
      </section>

      <PremiumGallerySection type="both" backgroundColor="warm" />
      <ReviewSection
        courseType="200-hour-yoga-teacher-training"
        RatingsSummaryComponent={<RatingsSummarySection />}
      />
      <div id="location">
        <HowToReach />
      </div>
    </div>
  );
}
