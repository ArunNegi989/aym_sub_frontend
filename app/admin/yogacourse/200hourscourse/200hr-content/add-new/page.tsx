"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "@/assets/style/Admin/yogacourse/200hourscourse/Yoga200hr.module.css";
import api from "@/lib/api";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

/* ─────────────────────────── Constants ─────────────────────────── */
const joditConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  askBeforePasteHTML: false,
  askBeforePasteFromWord: false,
  defaultActionOnPaste: "insert_clear_html",
  buttons: [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "|",
    "font",
    "fontsize",
    "brush",
    "|",
    "paragraph",
    "align",
    "|",
    "ul",
    "ol",
    "|",
    "link",
    "|",
    "undo",
    "redo",
    "|",
    "selectall",
    "cut",
    "copy",
    "paste",
  ],
  uploader: { insertImageAsBase64URI: true },
  height: 220,
  placeholder: "",
} as any;

const FILTER_OPTIONS = [
  "All Poses",
  "Standing",
  "Sitting",
  "Lying",
  "Balancing",
] as const;

function isEmptyHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim() === "";
}

function toEmbedUrl(url: string): string {
  if (!url) return "";
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt)
    return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&mute=1&loop=1&playlist=${yt[1]}&controls=0&modestbranding=1&rel=0`;
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm)
    return `https://player.vimeo.com/video/${vm[1]}?autoplay=1&loop=1&muted=1&background=1`;
  return url;
}

/* ─────────────────────────── UI Components ─────────────────────────── */
function StepIndicator({
  currentStep,
  totalSteps,
  steps,
}: {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}) {
  return (
    <div className={styles.stepIndicator}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`${styles.stepItem} ${currentStep === index + 1 ? styles.stepActive : currentStep > index + 1 ? styles.stepCompleted : ""}`}
        >
          <div className={styles.stepCircle}>{index + 1}</div>
          <span className={styles.stepLabel}>{step}</span>
          {index < totalSteps - 1 && <div className={styles.stepLine} />}
        </div>
      ))}
    </div>
  );
}

function D() {
  return (
    <div
      style={{
        height: 1,
        background: "linear-gradient(90deg,transparent,#e8d5b5,transparent)",
        margin: "0.4rem 0 1.8rem",
      }}
    />
  );
}

function Sec({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.sectionBlock}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIcon}>✦</span>
        <h3 className={styles.sectionTitle}>{title}</h3>
        {badge && <span className={styles.sectionBadge}>{badge}</span>}
      </div>
      {children}
    </div>
  );
}

function F({
  label,
  hint,
  req,
  children,
}: {
  label: string;
  hint?: string;
  req?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>
        <span className={styles.labelIcon}>✦</span>
        {label}
        {req && <span className={styles.required}>*</span>}
      </label>
      {hint && <p className={styles.fieldHint}>{hint}</p>}
      {children}
    </div>
  );
}

/* ─────────────────────────── Lazy Jodit Editor ─────────────────────────── */
function LazyJodit({
  label,
  hint,
  cr,
  err,
  clr,
  ph = "Start typing…",
  h = 200,
  required = false,
  editorKey = "default",
}: {
  label: string;
  hint?: string;
  cr: React.MutableRefObject<string>;
  err?: string;
  clr?: () => void;
  ph?: string;
  h?: number;
  required?: boolean;
  editorKey?: string;
}) {
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onChange = useCallback(
    (v: string) => {
      cr.current = v;
      if (clr && !isEmptyHtml(v)) clr();
    },
    [cr, clr],
  );

  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>
        <span className={styles.labelIcon}>✦</span>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      {hint && <p className={styles.fieldHint}>{hint}</p>}
      <div
        ref={wrapRef}
        className={`${styles.joditWrap} ${err ? styles.joditError : ""}`}
        style={{ minHeight: h }}
      >
        {visible ? (
          <JoditEditor
            key={editorKey}
            value={cr.current}
            config={{ ...joditConfig, placeholder: ph, height: h }}
            onChange={onChange}
          />
        ) : (
          <div
            style={{
              height: h,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#faf8f4",
              border: "1px solid #e8d5b5",
              borderRadius: 8,
              color: "#bbb",
              fontSize: 13,
            }}
          >
            ✦ Scroll to load editor…
          </div>
        )}
      </div>
      {err && <p className={styles.errorMsg}>⚠ {err}</p>}
    </div>
  );
}

function DynamicParaEditor({
  cr,
  ph,
  editorKey = "para",
}: {
  cr: { current: string };
  ph: string;
  editorKey?: string;
}) {
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapRef} style={{ minHeight: 200 }}>
      {visible ? (
        <JoditEditor
          key={editorKey}
          value={cr.current}
          config={{ ...joditConfig, placeholder: ph, height: 200 }}
          onChange={(v) => {
            cr.current = v;
          }}
        />
      ) : (
        <div
          style={{
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
            border: "1px solid #e8d5b5",
            borderRadius: 8,
            color: "#bbb",
            fontSize: 13,
          }}
        >
          ✦ Scroll to load editor…
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────── String List Field ─────────────────────────── */
function StrList({
  items,
  onAdd,
  onRemove,
  onUpdate,
  max = 30,
  ph,
  label,
}: {
  items: string[];
  onAdd: () => void;
  onRemove: (i: number) => void;
  onUpdate: (i: number, v: string) => void;
  max?: number;
  ph?: string;
  label: string;
}) {
  return (
    <>
      <div className={styles.listItems}>
        {items.map((val, i) => (
          <div key={i} className={styles.listItemRow}>
            <span className={styles.listNum}>{i + 1}</span>
            <div className={`${styles.inputWrap} ${styles.listInput}`}>
              <input
                className={`${styles.input} ${styles.inputNoCount}`}
                value={val}
                placeholder={ph || "Enter item…"}
                onChange={(e) => onUpdate(i, e.target.value)}
              />
            </div>
            <button
              type="button"
              className={styles.removeItemBtn}
              onClick={() => onRemove(i)}
              disabled={items.length <= 1}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      {items.length < max && (
        <button type="button" className={styles.addItemBtn} onClick={onAdd}>
          ＋ Add {label}
        </button>
      )}
    </>
  );
}

/* ─────────────────────────── Single Image Uploader ─────────────────────────── */
function SingleImg({
  preview,
  badge,
  hint,
  error,
  onSelect,
  onRemove,
}: {
  preview: string;
  badge?: string;
  hint: string;
  error?: string;
  onSelect: (f: File, p: string) => void;
  onRemove: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const BASE = process.env.NEXT_PUBLIC_API_URL || "";

  // Agar preview server path hai to full URL banao
  const displayPreview = preview?.startsWith("http")
    ? preview
    : preview
      ? `${BASE}${preview}`
      : "";

  return (
    <div>
      <div
        className={`${styles.imageUploadZone} ${displayPreview ? styles.hasImage : ""} ${error ? styles.inputError : ""}`}
      >
        {!displayPreview ? (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  onSelect(f, URL.createObjectURL(f));
                  e.target.value = "";
                }
              }}
            />
            <div className={styles.imageUploadPlaceholder}>
              <span className={styles.imageUploadIcon}>🖼️</span>
              <span className={styles.imageUploadText}>Click to Upload</span>
              <span className={styles.imageUploadSub}>{hint}</span>
            </div>
          </>
        ) : (
          <div className={styles.imagePreviewWrap}>
            {badge && <span className={styles.imageBadge}>{badge}</span>}
            <img src={displayPreview} alt="" className={styles.imagePreview} />
            <div className={styles.imagePreviewOverlay}>
              <span className={styles.imagePreviewAction}>✎ Change</span>
              <input
                type="file"
                accept="image/*"
                className={styles.imagePreviewOverlayInput}
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) {
                    onSelect(f, URL.createObjectURL(f));
                    e.target.value = "";
                  }
                }}
              />
            </div>
            <button
              type="button"
              className={styles.removeImageBtn}
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
            >
              ✕
            </button>
          </div>
        )}
      </div>
      {error && <p className={styles.errorMsg}>⚠ {error}</p>}
    </div>
  );
}

/* ─────────────────────────── Multi Image Uploader ─────────────────────────── */
function MultiImageUpload({
  files,
  previews,
  hint,
  label = "Image",
  onSelect,
  onRemove,
  maxFiles = 8,
}: {
  files: File[];
  previews: string[];
  hint: string;
  label?: string;
  onSelect: (f: File[], p: string[]) => void;
  onRemove: (i: number) => void;
  maxFiles?: number;
}) {
  const BASE = process.env.NEXT_PUBLIC_API_URL || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sel = Array.from(e.target.files || []);
    if (!sel.length) return;
    const nf = [...files, ...sel].slice(0, maxFiles);
    const np = [...previews, ...sel.map((f) => URL.createObjectURL(f))].slice(
      0,
      maxFiles,
    );
    onSelect(nf, np);
    e.target.value = "";
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
        gap: "0.7rem",
      }}
    >
      {previews.map((p, i) => {
        const displayP =
          p?.startsWith("http") || p?.startsWith("blob:") ? p : `${BASE}${p}`;
        return (
          <div
            key={i}
            style={{
              position: "relative",
              borderRadius: 8,
              overflow: "hidden",
              border: "1.5px solid #e8d5b5",
            }}
          >
            <span className={styles.imageBadge}>
              {label} {i + 1}
            </span>
            <img
              src={displayP}
              alt=""
              style={{
                width: "100%",
                height: 110,
                objectFit: "cover",
                display: "block",
              }}
            />
            <button
              type="button"
              className={styles.removeImageBtn}
              onClick={() => onRemove(i)}
            >
              ✕
            </button>
          </div>
        );
      })}
      {previews.length < maxFiles && (
        <div
          className={styles.imageUploadZone}
          style={{ minHeight: 110, position: "relative" }}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleChange}
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              cursor: "pointer",
              zIndex: 2,
              width: "100%",
              height: "100%",
            }}
          />
          <div className={styles.imageUploadPlaceholder}>
            <span className={styles.imageUploadIcon}>🖼️</span>
            <span className={styles.imageUploadText}>Add Photo</span>
            <span className={styles.imageUploadSub}>{hint}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────── Video Field ─────────────────────────── */
function VideoField({
  urlValue,
  onUrlChange,
  file,
  filePreview,
  onFileSelect,
  onFileRemove,
  label,
  hint,
}: {
  urlValue: string;
  onUrlChange: (v: string) => void;
  file: File | null;
  filePreview: string;
  onFileSelect: (f: File, p: string) => void;
  onFileRemove: () => void;
  label: string;
  hint?: string;
}) {
  const [mode, setMode] = useState<"url" | "upload">("url");
  const embedPreview = mode === "url" ? toEmbedUrl(urlValue) : "";

  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>
        <span className={styles.labelIcon}>✦</span>
        {label}
      </label>
      {hint && <p className={styles.fieldHint}>{hint}</p>}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.8rem" }}>
        {(["url", "upload"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            style={{
              padding: "0.4rem 1rem",
              borderRadius: 6,
              border: "1.5px solid",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
              borderColor: mode === m ? "#b8860b" : "#e8d5b5",
              background: mode === m ? "#b8860b" : "transparent",
              color: mode === m ? "#fff" : "#8a7560",
            }}
          >
            {m === "url"
              ? "🔗 URL (YouTube / Instagram / Vimeo)"
              : "📁 Upload Video File"}
          </button>
        ))}
      </div>
      {mode === "url" && (
        <div>
          <div className={styles.inputWrap}>
            <input
              className={`${styles.input} ${styles.inputNoCount}`}
              value={urlValue}
              placeholder="https://www.youtube.com/watch?v=…"
              onChange={(e) => onUrlChange(e.target.value)}
            />
          </div>
          {urlValue && embedPreview && (
            <div
              style={{
                marginTop: "0.7rem",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid #e8d5b5",
                maxWidth: 480,
                aspectRatio: "16/9",
              }}
            >
              <iframe
                src={embedPreview}
                style={{ width: "100%", height: "100%", border: "none" }}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video preview"
              />
            </div>
          )}
        </div>
      )}
      {mode === "upload" && (
        <div>
          {!filePreview ? (
            <div
              className={styles.imageUploadZone}
              style={{ cursor: "pointer" }}
            >
              <input
                type="file"
                accept="video/*"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) {
                    onFileSelect(f, URL.createObjectURL(f));
                    e.target.value = "";
                  }
                }}
              />
              <div className={styles.imageUploadPlaceholder}>
                <span className={styles.imageUploadIcon}>🎬</span>
                <span className={styles.imageUploadText}>
                  Click to Upload Video
                </span>
                <span className={styles.imageUploadSub}>
                  MP4, WebM, MOV supported
                </span>
              </div>
            </div>
          ) : (
            <div style={{ position: "relative", maxWidth: 480 }}>
              <video
                src={filePreview}
                controls
                style={{
                  width: "100%",
                  borderRadius: 8,
                  border: "1px solid #e8d5b5",
                }}
              />
              <button
                type="button"
                className={styles.removeImageBtn}
                onClick={onFileRemove}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────── Types ─────────────────────────── */
interface ModuleRow {
  title: string;
  intro: string;
  items: string[];
  bodyRef: React.MutableRefObject<string>;
}
interface ProgramItem {
  title: string;
  duration: string;
  start: string;
  oldPrice: string;
  price: string;
  descRef: React.MutableRefObject<string>;
  imageFile: File | null;
  imagePreview: string;
}
interface IndianFeeItem {
  label: string;
  price: string;
}
interface ScheduleRowItem {
  time: string;
  activity: string;
}
interface FaqItem {
  q: string;
  a: string;
}
interface KnowQAItem {
  q: string;
  a: string;
}
interface WeekGridItem {
  week: string;
  icon: string;
  t1: string;
  d1: string;
  t2: string;
  d2: string;
}
interface HathaAsana {
  n: string;
  name: string;
  sub: string;
  filter: string;
}

/* ══════════════════════════════════════════════════════════════════
   MAIN FORM
══════════════════════════════════════════════════════════════════ */
export default function Yoga200HourCombinedForm() {
  const router = useRouter();
  const params = useParams();

  const contentId = params?.id || params?.contentId || params?.slug;
  const isEditMode = !!contentId && contentId !== "new";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  // Key to force re-render of all Jodit editors after data load
  const [editorKey, setEditorKey] = useState("init");

  const steps = [
    "Hero & Course Card",
    "Introduction & Video",
    "Aims & Overview",
    "Dates & Fee Inclusions",
    "Syllabus & Modules",
    "Ashtanga & Hatha Yoga",
    "Programs",
    "FAQ & Settings",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<any>({
    defaultValues: {
      status: "Active",
      slug: "",
      pageMainH1: "200 Hour Yoga Teacher Training in Rishikesh",
      heroImgAlt: "Yoga Students Group",
      courseCardHeaderLabel: "COURSE DETAILS",
      courseCardItem1Label: "DURATION",
      courseCardItem1Value: "26 Days",
      courseCardItem2Label: "LEVEL",
      courseCardItem2Value: "All Levels",
      courseCardItem3Label: "CERTIFICATION",
      courseCardItem3Value: "200 Hour",
      courseCardItem4Label: "YOGA STYLE",
      courseCardItem4Value: "Multistyle",
      courseCardItem4Sub: "Ashtanga, Vinyasa & Hatha",
      courseCardItem5Label: "LANGUAGE",
      courseCardItem5Value: "English & Hindi",
      courseCardItem6Label: "DATE",
      courseCardItem6Value: "1st of every month",
      courseCardFeeLabel: "COURSE FEE",
      courseCardFeeFrom: "starting from",
      courseCardOldPrice: "1000",
      courseCardNewPrice: "699",
      courseCardPriceCurrency: "USD",
      courseCardBookBtnText: "BOOK NOW",
      courseCardBookBtnUrl: "#dates-fees",
      videoBadgeText: "Yoga Teacher Training · Rishikesh",
      stat1Icon: "🕐",
      stat1Val: "21+",
      stat1Title: "Years of Excellence",
      stat1Desc:
        "Our syllabus has been developed over twenty years by dozens of experienced yoga masters.",
      stat2Icon: "👥",
      stat2Val: "9,075+",
      stat2Title: "Global Alumni",
      stat2Desc:
        "Join the world's most famous AYM yoga teacher training alumni network.",
      stat3Icon: "⭐",
      stat3Val: "4.5",
      stat3Title: "Star Rating",
      stat3Desc:
        "Rated 4.5 stars on Google, Yoga Alliance, and Facebook by our trainees.",
      stat4Icon: "🔆",
      stat4Val: "200",
      stat4Title: "Hour Certification",
      stat4Desc: "Yoga Alliance approved certification recognized worldwide.",
      aimsH3:
        "200 Hour Yoga Teacher Training Rishikesh India - Aims & Objective",
      aimsKeyObjLabel:
        "The key aims and objectives of our 200 Hour Multi-Style Yoga Teacher Training Course in Rishikesh India is:",
      overviewH2: "Overview of 200 Hour Yoga Instructor Course Rishikesh India",
      overviewSubPara:
        "A comprehensive certification program designed to transform passionate practitioners into confident, knowledgeable yoga teachers.",
      overviewCertLabel: "Name of the certification",
      overviewCertName:
        "200-hour yoga teacher training / Yoga Protocol Instructor (YPI)",
      overviewLevelLabel: "Course level",
      overviewLevel: "Level-I",
      overviewEligLabel: "Requirement/Eligibility",
      overviewEligibility: "Physically fit and open for all.",
      overviewAgeLabel: "Minimum age",
      overviewMinAge: "No age limit",
      overviewCreditsLabel: "Credit points for certificate",
      overviewCredits: "12 credits",
      overviewLangLabel: "Language",
      overviewLanguage: "English; Hindi (Separate Groups)",
      feeIncludedTitle: "Included in 200 Hour yoga ttc course in india",
      feeNotIncludedTitle:
        "Not Included in 200 hour yoga ttc course in Rishikesh",
      syllabusH3:
        "200 Hour Yoga Teacher Training In Rishikesh India - The Syllabus",
      ashtangaH2: "Module 8.1: Ashtanga Vinyasa Yoga",
      ashtangaSubtitle:
        "Discover the transformative practice that synchronizes breath with movement",
      ashtangaImgAlt: "Ashtanga Vinyasa Yoga",
      ashtangaPill1: "📋 Breath-synchronized movement",
      ashtangaPill2: "🧠 Calms the mind",
      ashtangaPill3: "🕉️ Ancient practice with modern application",
      primarySeriesH3: "Primary Series Curriculum",
      primarySeriesSubtext:
        "All students of 200 hour yoga teacher training will practice primary series which includes:",
      upcomingDatesSubtext:
        "Choose your dates & preferred accommodation — prices include tuition and meals",
      batchSectionTag: "Upcoming Batches · 2026–2027",
      upcomingDatesH2: "200 Hour Yoga Teacher Training India",
      hathaH2: "Module 8.2: Hatha Yoga",
      hathaSubtitle:
        "Discover the traditional, ancient and classical yoga practice",
      hathaImgAlt: "Hatha Yoga",
      hathaPill1: "📋 Traditional & Ancient Practice",
      hathaPill2: "🎓 YCB Certification Board Level-I",
      hathaPill3: "✋ Expert Guidance & Correction",
      asanasH2: "Hatha Yoga Asanas",
      asanasSubtext:
        "Master these essential postures as part of your comprehensive training",
      evalH2: "Evaluation & Certification",
      luxuryH2: "Luxury Room & Facilities",
      indianFeeH2: "Course Fee for Indian Students",
      scheduleH2: "Daily Schedule",
      moreInfoH2: "More Information",
      globalCertH2: "Get Globally Certified",
      requirementsH2: "Requirements for Enrollment",
      whatYouNeedH2: "What You Need to Know",
      best200HrH4: "Why Choose AYM for Your 200 Hour Training?",
      whatsIncludedH4: "What's Included in the Course Fee",
      faqH2: "Frequently Asked Questions",
      bookingH2: "How to Book Your Spot",
      metaTitle:
        "200 Hour Yoga Teacher Training in Rishikesh | AYM Yoga School",
      metaDesc:
        "Join our Yoga Alliance certified 200 hour yoga teacher training in Rishikesh. Learn Ashtanga, Hatha, Vinyasa with experienced teachers.",
      metaKeywords:
        "200 hour yoga teacher training, yoga in rishikesh, yoga certification",
      ctaTitle:
        "We welcome you to AYM School for a wonderful yogic experience!",
      ctaSubtitle:
        "Join us & become part of the 5000+ international yoga teachers who are proud alumni of the AYM School.",
      ctaApplyBtnText: "Apply Now",
      ctaApplyUrl: "/yoga-registration?type=200hr",
      ctaPhone: "919528023390",
      whatsappNumber: "919528023390",
      whatsappBtnText: "💬 WhatsApp Us",
      spanishChineseNote:
        "Spanish & Chinese translations available upon request",
      eligibilityInfoTitle: "Eligibility Criteria",
      eligibilityInfoText:
        "Open to all individuals with a sincere interest in yoga. No prior teaching experience required.",
      visaPassportTitle: "Visa & Passport Information",
    },
  });

  /* ── Image States ── */
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [heroPrev, setHeroPrev] = useState("");
  const [heroErr, setHeroErr] = useState("");
  const [ashtangaFile, setAshtangaFile] = useState<File | null>(null);
  const [ashtangaPrev, setAshtangaPrev] = useState("");
  const [hathaFile, setHathaFile] = useState<File | null>(null);
  const [hathaPrev, setHathaPrev] = useState("");
  const [reqImgFile, setReqImgFile] = useState<File | null>(null);
  const [reqImgPrev, setReqImgPrev] = useState("");
  const [luxImgFiles, setLuxImgFiles] = useState<File[]>([]);
  const [luxImgPrevs, setLuxImgPrevs] = useState<string[]>([]);
  const [schedImgFiles, setSchedImgFiles] = useState<File[]>([]);
  const [schedImgPrevs, setSchedImgPrevs] = useState<string[]>([]);

  /* ── Video State ── */
  const [videoUrl, setVideoUrl] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPrev, setVideoPrev] = useState("");

  /* ── Jodit Refs ── */
  const [introParas, setIntroParas] = useState<string[]>(["", "", "", ""]);
  const introParaRefs = useRef<string[]>(["", "", "", ""]);
  const [aimsIntroPars, setAimsIntroPars] = useState<string[]>([""]);
  const aimsIntroRefs = useRef<string[]>([""]);
  const [syllabusParas, setSyllabusParas] = useState<string[]>([""]);
  const syllabusParaRefs = useRef<string[]>([""]);

  const aimsOutroRef = useRef("");
  const ashtangaRef = useRef("");
  const primaryRef = useRef("");
  const hathaRef = useRef("");
  const evalRef = useRef("");
  const schedDescRef = useRef("");
  const visaRef = useRef("");
  const globalCert1Ref = useRef("");
  const globalCert2Ref = useRef("");
  const req1Ref = useRef("");
  const req2Ref = useRef("");
  const req3Ref = useRef("");
  const req4Ref = useRef("");
  const best200HrRef = useRef("");
  const step1Ref = useRef("");
  const step2Ref = useRef("");
  const step3Ref = useRef("");
  const step4Ref = useRef("");

  /* ── Jodit Errors ── */
  const [introErr, setIntroErr] = useState("");
  const [aimsErr, setAimsErr] = useState("");
  const [sylErr, setSylErr] = useState("");
  const [astErr, setAstErr] = useState("");
  const [htErr, setHtErr] = useState("");
  const [evErr, setEvErr] = useState("");

  /* ── String Lists ── */
  const [aimsBullets, setAimsBullets] = useState<string[]>([""]);
  const [inclFee, setInclFee] = useState<string[]>(["", "", ""]);
  const [notInclFee, setNotInclFee] = useState<string[]>(["", ""]);
  const [foundItems, setFoundItems] = useState<string[]>([""]);
  const [luxFeatures, setLuxFeatures] = useState<string[]>(["", "", ""]);
  const [whatIncl, setWhatIncl] = useState<string[]>(["", "", ""]);
  const [instrLangs, setInstrLangs] = useState([
    { lang: "", note: "" },
    { lang: "", note: "" },
  ]);
  const [indianFees, setIndianFees] = useState<IndianFeeItem[]>([
    { label: "", price: "" },
    { label: "", price: "" },
  ]);
  const [schedRows, setSchedRows] = useState<ScheduleRowItem[]>([
    { time: "", activity: "" },
    { time: "", activity: "" },
  ]);
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    { q: "", a: "" },
    { q: "", a: "" },
  ]);
  const [knowQA, setKnowQA] = useState<KnowQAItem[]>([
    { q: "", a: "" },
    { q: "", a: "" },
  ]);

  /* ── Modules ── */
  const [modules, setModules] = useState<ModuleRow[]>([
    {
      title: "Module 1: The Philosophy of Yoga",
      intro: "The course covers fundamental concepts underlying Ashtanga Yoga.",
      items: [""],
      bodyRef: { current: "" } as React.MutableRefObject<string>,
    },
    {
      title: "Module 2: The Yogic Breathing Techniques/Pranayama",
      intro:
        "You will learn about different types of breathing used in pranayama.",
      items: [""],
      bodyRef: { current: "" } as React.MutableRefObject<string>,
    },
    {
      title: "Module 3: The Shat Kriyas (Cleansing Detox)",
      intro:
        "This module gives you understanding of the detoxification process.",
      items: [""],
      bodyRef: { current: "" } as React.MutableRefObject<string>,
    },
    {
      title: "Module 4: Anatomy and Physiology",
      intro:
        "Teacher will connect ancient science of yoga to the present science.",
      items: [""],
      bodyRef: { current: "" } as React.MutableRefObject<string>,
    },
    {
      title: "Module 5: Knowledge of Meditation",
      intro: "Meditation is the key part of yoga teacher training.",
      items: [""],
      bodyRef: { current: "" } as React.MutableRefObject<string>,
    },
    {
      title: "Module 6: Mantras, Chants, and Prayers",
      intro: "Mantras are coded in Sanskrit native language of India.",
      items: [""],
      bodyRef: { current: "" } as React.MutableRefObject<string>,
    },
    {
      title: "Module 7: Mastering the Art of Teaching Yoga",
      intro:
        "This module gives you the confidence to take your yoga classes to the next level.",
      items: [""],
      bodyRef: { current: "" } as React.MutableRefObject<string>,
    },
    {
      title: "Module 8: Knowledge of Asanas (Yoga Postures)",
      intro:
        "By the end of your training, you will have learned all the poses.",
      items: [""],
      bodyRef: { current: "" } as React.MutableRefObject<string>,
    },
  ]);

  /* ── Programs ── */
  const makeEmptyProg = (): ProgramItem => ({
    title: "",
    duration: "",
    start: "",
    oldPrice: "",
    price: "",
    descRef: { current: "" },
    imageFile: null,
    imagePreview: "",
  });
  const [programs, setPrograms] = useState<ProgramItem[]>([
    makeEmptyProg(),
    makeEmptyProg(),
    makeEmptyProg(),
    makeEmptyProg(),
  ]);

  /* ── Hatha Asanas & Week Grid ── */
  const [hatha43, setHatha43] = useState<HathaAsana[]>([
    { n: "1", name: "", sub: "", filter: "All Poses" },
  ]);
  const [weekGrid, setWeekGrid] = useState<WeekGridItem[]>([
    { week: "Week 1", icon: "☀️", t1: "", d1: "", t2: "", d2: "" },
  ]);

  /* ── Helper Functions ── */
  const upd = useCallback(
    <T,>(arr: T[], set: (v: T[]) => void, i: number, k: keyof T, v: string) => {
      const a = [...arr] as any[];
      a[i] = { ...a[i], [k]: v };
      set(a);
    },
    [],
  );

  const addModule = () =>
    setModules((prev) => [
      ...prev,
      {
        title: `Module ${prev.length + 1}: New Module`,
        intro: "",
        items: [""],
        bodyRef: { current: "" } as React.MutableRefObject<string>,
      },
    ]);
  const removeModule = (i: number) =>
    setModules((prev) => prev.filter((_, x) => x !== i));
  const updateModule = (i: number, key: "title" | "intro", val: string) =>
    setModules((prev) => {
      const a = [...prev];
      a[i] = { ...a[i], [key]: val };
      return a;
    });
  const updateModuleItem = (modI: number, itemI: number, val: string) =>
    setModules((prev) => {
      const a = [...prev];
      const items = [...a[modI].items];
      items[itemI] = val;
      a[modI] = { ...a[modI], items };
      return a;
    });
  const addModuleItem = (modI: number) =>
    setModules((prev) => {
      const a = [...prev];
      a[modI] = { ...a[modI], items: [...a[modI].items, ""] };
      return a;
    });
  const removeModuleItem = (modI: number, itemI: number) =>
    setModules((prev) => {
      const a = [...prev];
      a[modI] = {
        ...a[modI],
        items: a[modI].items.filter((_, x) => x !== itemI),
      };
      return a;
    });

  /* ── Fetch Data for Edit Mode ── */
  useEffect(() => {
    if (!isEditMode || !params.id) return;
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await api.get(`/yoga-200hr/content/${params.id}`);
        const d = res.data?.data;
        if (!d) return;

        // ── Set all simple string fields via react-hook-form ──
        const simpleFields = [
          "slug",
          "status",
          "pageMainH1",
          "heroImgAlt",
          "courseCardHeaderLabel",
          "courseCardItem1Label",
          "courseCardItem1Value",
          "courseCardItem2Label",
          "courseCardItem2Value",
          "courseCardItem3Label",
          "courseCardItem3Value",
          "courseCardItem4Label",
          "courseCardItem4Value",
          "courseCardItem4Sub",
          "courseCardItem5Label",
          "courseCardItem5Value",
          "courseCardItem6Label",
          "courseCardItem6Value",
          "courseCardFeeLabel",
          "courseCardFeeFrom",
          "courseCardOldPrice",
          "courseCardNewPrice",
          "courseCardPriceCurrency",
          "courseCardBookBtnText",
          "courseCardBookBtnUrl",
          "videoBadgeText",
          "aimsH3",
          "aimsKeyObjLabel",
          "overviewH2",
          "overviewSubPara",
          "overviewCertLabel",
          "overviewCertName",
          "overviewLevelLabel",
          "overviewLevel",
          "overviewEligLabel",
          "overviewEligibility",
          "overviewAgeLabel",
          "overviewMinAge",
          "overviewCreditsLabel",
          "overviewCredits",
          "overviewLangLabel",
          "overviewLanguage",
          "feeIncludedTitle",
          "feeNotIncludedTitle",
          "syllabusH3",
          "ashtangaH2",
          "ashtangaSubtitle",
          "ashtangaImgAlt",
          "ashtangaPill1",
          "ashtangaPill2",
          "ashtangaPill3",
          "primarySeriesH3",
          "primarySeriesSubtext",
          "upcomingDatesSubtext",
          "batchSectionTag",
          "upcomingDatesH2",
          "hathaH2",
          "hathaSubtitle",
          "hathaImgAlt",
          "hathaPill1",
          "hathaPill2",
          "hathaPill3",
          "asanasH2",
          "asanasSubtext",
          "evalH2",
          "luxuryH2",
          "indianFeeH2",
          "scheduleH2",
          "moreInfoH2",
          "globalCertH2",
          "requirementsH2",
          "requirementsImgAlt",
          "whatYouNeedH2",
          "best200HrH4",
          "whatsIncludedH4",
          "faqH2",
          "bookingH2",
          "newProgramsH2",
          "newProgramsSubtext",
          "metaTitle",
          "metaDesc",
          "metaKeywords",
          "ctaTitle",
          "ctaSubtitle",
          "ctaApplyBtnText",
          "ctaApplyUrl",
          "ctaPhone",
          "whatsappNumber",
          "whatsappBtnText",
          "spanishChineseNote",
          "eligibilityInfoTitle",
          "eligibilityInfoText",
          "visaPassportTitle",
          "step1Icon",
          "step1Title",
          "step2Icon",
          "step2Title",
          "step3Icon",
          "step3Title",
          "step4Icon",
          "step4Title",
        ];
        simpleFields.forEach((key) => {
          if (d[key] !== undefined && d[key] !== null) setValue(key, d[key]);
        });

        // ── Stats ──
        if (d.stats && Array.isArray(d.stats)) {
          d.stats.forEach((stat: any, i: number) => {
            setValue(`stat${i + 1}Icon`, stat.icon || "");
            setValue(`stat${i + 1}Val`, stat.value || "");
            setValue(`stat${i + 1}Title`, stat.title || "");
            setValue(`stat${i + 1}Desc`, stat.desc || "");
          });
        }

        // ── Images ──
        if (d.heroImage) setHeroPrev(d.heroImage);
        if (d.ashtangaImage) setAshtangaPrev(d.ashtangaImage);
        if (d.hathaImage) setHathaPrev(d.hathaImage);
        if (d.reqImage) setReqImgPrev(d.reqImage);
        if (d.luxImages?.length) setLuxImgPrevs(d.luxImages);
        if (d.schedImages?.length) setSchedImgPrevs(d.schedImages);

        // ── Video ──
        if (d.videoUrl) setVideoUrl(d.videoUrl);

        // ── Intro Paragraphs (flat fields: introPara1, introPara2...) ──
        const introPArr: string[] = [];
        for (let i = 1; i <= 10; i++) {
          if (d[`introPara${i}`]) introPArr.push(d[`introPara${i}`]);
        }
        if (introPArr.length) {
          introParaRefs.current = introPArr;
          setIntroParas(introPArr.map((_, i) => String(i)));
        }

        // ── Aims Intro (array field: aimsIntro[]) ──
        if (d.aimsIntro && Array.isArray(d.aimsIntro) && d.aimsIntro.length) {
          aimsIntroRefs.current = [...d.aimsIntro];
          setAimsIntroPars(d.aimsIntro.map((_: any, i: number) => String(i)));
        }

        // ── Syllabus Intro (array field: syllabusIntro[]) ──
        if (
          d.syllabusIntro &&
          Array.isArray(d.syllabusIntro) &&
          d.syllabusIntro.length
        ) {
          syllabusParaRefs.current = [...d.syllabusIntro];
          setSyllabusParas(
            d.syllabusIntro.map((_: any, i: number) => String(i)),
          );
        }

        // ── Rich Text single fields ──
        if (d.aimsOutro) aimsOutroRef.current = d.aimsOutro;
        if (d.ashtangaDesc) ashtangaRef.current = d.ashtangaDesc;
        if (d.primaryIntro) primaryRef.current = d.primaryIntro;
        if (d.hathaDesc) hathaRef.current = d.hathaDesc;
        if (d.evalDesc) evalRef.current = d.evalDesc;
        if (d.schedDesc) schedDescRef.current = d.schedDesc;
        if (d.visaPassportDesc) visaRef.current = d.visaPassportDesc;
        if (d.globalCert1) globalCert1Ref.current = d.globalCert1;
        if (d.globalCert2) globalCert2Ref.current = d.globalCert2;
        if (d.req1) req1Ref.current = d.req1;
        if (d.req2) req2Ref.current = d.req2;
        if (d.req3) req3Ref.current = d.req3;
        if (d.req4) req4Ref.current = d.req4;
        if (d.best200Hr) best200HrRef.current = d.best200Hr;
        if (d.bookingStep1Desc) step1Ref.current = d.bookingStep1Desc;
        if (d.bookingStep2Desc) step2Ref.current = d.bookingStep2Desc;
        if (d.bookingStep3Desc) step3Ref.current = d.bookingStep3Desc;
        if (d.bookingStep4Desc) step4Ref.current = d.bookingStep4Desc;

        // ── Array / List fields ──
        if (d.aimsBullets?.length) setAimsBullets(d.aimsBullets);
        if (d.includedFee?.length) setInclFee(d.includedFee);
        if (d.notIncludedFee?.length) setNotInclFee(d.notIncludedFee);
        if (d.foundationItems?.length) setFoundItems(d.foundationItems);
        if (d.luxFeatures?.length) setLuxFeatures(d.luxFeatures);
        if (d.whatIncl?.length) setWhatIncl(d.whatIncl);
        if (d.instrLangs?.length) setInstrLangs(d.instrLangs);
        if (d.indianFees?.length) setIndianFees(d.indianFees);
        if (d.schedRows?.length) setSchedRows(d.schedRows);
        if (d.faqItems?.length) setFaqItems(d.faqItems);
        if (d.knowQA?.length) setKnowQA(d.knowQA);

        // ── Modules ──
        if (d.modules?.length) {
          setModules(
            d.modules.map((m: any) => ({
              title: m.title || "",
              intro: m.intro || "",
              items: m.items?.length ? m.items : [""],
              bodyRef: {
                current: m.body || "",
              } as React.MutableRefObject<string>,
            })),
          );
        }

        // ── Programs ──
        if (d.programs?.length) {
          setPrograms(
            d.programs.map((p: any) => ({
              title: p.title || "",
              duration: p.duration || "",
              start: p.start || "",
              oldPrice: p.oldPrice || "",
              price: p.price || "",
              descRef: {
                current: p.desc || "",
              } as React.MutableRefObject<string>,
              imageFile: null,
              imagePreview: p.image || "",
            })),
          );
        }

        // ── Hatha Asanas & Week Grid ──
        if (d.hatha43?.length) setHatha43(d.hatha43);
        if (d.weekGrid?.length) setWeekGrid(d.weekGrid);

        // Force all Jodit editors to re-render with new values
        setEditorKey(`loaded-${Date.now()}`);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isEditMode, params.id, setValue]);

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  /* ── Submit ── */
  const onSubmit = async (data: any) => {
    let hasErr = false;

    if (!isEditMode) {
      if (!heroFile && !heroPrev) {
        setHeroErr("Hero image is required");
        hasErr = true;
      } else setHeroErr("");
    } else {
      setHeroErr("");
    }

    if (!introParaRefs.current.some((r) => !isEmptyHtml(r))) {
      setIntroErr("At least one paragraph is required");
      hasErr = true;
    }
    if (!aimsIntroRefs.current.some((r) => !isEmptyHtml(r))) {
      setAimsErr("At least one aims paragraph is required");
      hasErr = true;
    }
    if (!syllabusParaRefs.current.some((r) => !isEmptyHtml(r))) {
      setSylErr("At least one syllabus paragraph is required");
      hasErr = true;
    }
    if (isEmptyHtml(ashtangaRef.current)) {
      setAstErr("Required");
      hasErr = true;
    }
    if (isEmptyHtml(hathaRef.current)) {
      setHtErr("Required");
      hasErr = true;
    }
    if (isEmptyHtml(evalRef.current)) {
      setEvErr("Required");
      hasErr = true;
    }

    if (hasErr) return;

    try {
      setIsSubmitting(true);
      const fd = new globalThis.FormData();

      Object.entries(data).forEach(([k, v]) => {
        if (v !== undefined && v !== null) fd.append(k, String(v));
      });

      introParaRefs.current.forEach((v, i) =>
        fd.append(`introPara${i + 1}`, v),
      );
      fd.append("introParaCount", String(introParaRefs.current.length));
      aimsIntroRefs.current.forEach((v, i) =>
        fd.append(`aimsIntro${i + 1}`, v),
      );
      fd.append("aimsIntroCount", String(aimsIntroRefs.current.length));
      syllabusParaRefs.current.forEach((v, i) =>
        fd.append(`syllabusIntro${i + 1}`, v),
      );
      fd.append("syllabusIntroCount", String(syllabusParaRefs.current.length));

      fd.append("aimsOutro", aimsOutroRef.current);
      fd.append("ashtangaDesc", ashtangaRef.current);
      fd.append("primaryIntro", primaryRef.current);
      fd.append("hathaDesc", hathaRef.current);
      fd.append("evalDesc", evalRef.current);
      fd.append("schedDesc", schedDescRef.current);
      fd.append("visaPassportDesc", visaRef.current);
      fd.append("globalCert1", globalCert1Ref.current);
      fd.append("globalCert2", globalCert2Ref.current);
      fd.append("req1", req1Ref.current);
      fd.append("req2", req2Ref.current);
      fd.append("req3", req3Ref.current);
      fd.append("req4", req4Ref.current);
      fd.append("best200Hr", best200HrRef.current);
      fd.append("bookingStep1Desc", step1Ref.current);
      fd.append("bookingStep2Desc", step2Ref.current);
      fd.append("bookingStep3Desc", step3Ref.current);
      fd.append("bookingStep4Desc", step4Ref.current);

      aimsBullets.forEach((v) => fd.append("aimsBullets", v));
      inclFee.forEach((v) => fd.append("includedFee", v));
      notInclFee.forEach((v) => fd.append("notIncludedFee", v));
      foundItems.forEach((v) => fd.append("foundationItems", v));

      for (let i = 1; i <= 4; i++) {
        fd.append(`stat${i}Icon`, data[`stat${i}Icon`] || "");
        fd.append(`stat${i}Val`, data[`stat${i}Val`] || "");
        fd.append(`stat${i}Title`, data[`stat${i}Title`] || "");
        fd.append(`stat${i}Desc`, data[`stat${i}Desc`] || "");
      }

      fd.append("luxFeatures", JSON.stringify(luxFeatures));
      fd.append("whatIncl", JSON.stringify(whatIncl));
      fd.append("instrLangs", JSON.stringify(instrLangs));
      fd.append("indianFees", JSON.stringify(indianFees));
      fd.append("schedRows", JSON.stringify(schedRows));
      fd.append("faqItems", JSON.stringify(faqItems));
      fd.append("knowQA", JSON.stringify(knowQA));

      fd.append(
        "modules",
        JSON.stringify(
          modules.map((m) => ({
            title: m.title,
            intro: m.intro,
            items: m.items,
            body: m.bodyRef.current,
          })),
        ),
      );
      fd.append("hatha43", JSON.stringify(hatha43));
      fd.append("weekGrid", JSON.stringify(weekGrid));
      fd.append(
        "programs",
        JSON.stringify(
          programs.map((p) => ({
            title: p.title,
            duration: p.duration,
            start: p.start,
            oldPrice: p.oldPrice,
            price: p.price,
            desc: p.descRef.current,
          })),
        ),
      );

      if (videoFile) fd.append("videoFile", videoFile);
      else if (videoUrl?.trim()) fd.append("videoUrl", videoUrl.trim());

      if (heroFile) fd.append("heroImage", heroFile);
      if (ashtangaFile) fd.append("ashtangaImage", ashtangaFile);
      if (hathaFile) fd.append("hathaImage", hathaFile);
      if (reqImgFile) fd.append("reqImage", reqImgFile);
      luxImgFiles.forEach((f) => fd.append("luxImages", f));
      schedImgFiles.forEach((f) => fd.append("schedImages", f));
      programs.forEach((p, i) => {
        if (p.imageFile) fd.append(`programImage${i}`, p.imageFile);
      });

const url = isEditMode
  ? `/yoga-200hr/content/update/${params.id}`
  : "/yoga-200hr/content/create";

await api({
  method: isEditMode ? "put" : "post",
  url,
  data: fd,
  headers: { "Content-Type": undefined },
});
      setSubmitted(true);
      setTimeout(
        () => router.push("/admin/yogacourse/200hourscourse/200hr-content"),
        1500,
      );
    } catch (e: any) {
      console.error("Submission error:", e);
      alert(e?.response?.data?.message || e?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ────── Loading & Success Screens ────── */
  if (loading) {
    return (
      <div className={styles.formPage}>
        <div className={styles.loadingScreen}>
          <div className={styles.loadingOm}>ॐ</div>
          <p>Loading content...</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className={styles.successScreen}>
        <div className={styles.successCard}>
          <div className={styles.successOm}>ॐ</div>
          <div className={styles.successCheck}>✓</div>
          <h2 className={styles.successTitle}>Content Saved Successfully!</h2>
          <p className={styles.successText}>Redirecting to list...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formPage}>
      <div className={styles.breadcrumb}>
        <button
          className={styles.breadcrumbLink}
          onClick={() =>
            router.push("/admin/yogacourse/200hourscourse/200hr-content")
          }
        >
          200 Hour Content
        </button>
        <span className={styles.breadcrumbSep}>›</span>
        <span className={styles.breadcrumbCurrent}>
          {isEditMode ? "Edit" : "Add New"} Content
        </span>
      </div>

      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderText}>
          <h1 className={styles.pageTitle}>
            {isEditMode ? "Edit" : "Add New"} — 200 Hour Yoga Content
          </h1>
          <p className={styles.pageSubtitle}>
            Complete content management for 200 Hour Yoga Teacher Training page
          </p>
        </div>
      </div>

      <div className={styles.ornament}>
        <span>❧</span>
        <div className={styles.ornamentLine} />
        <span>ॐ</span>
        <div className={styles.ornamentLine} />
        <span>❧</span>
      </div>

      <StepIndicator
        currentStep={currentStep}
        totalSteps={steps.length}
        steps={steps}
      />

      <div className={styles.formCard}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* ════════ STEP 1 ════════ */}
          {currentStep === 1 && (
            <>
              <Sec title="1. Hero Section">
                <F label="Page Main H1 Heading" req>
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("pageMainH1", { required: "Required" })}
                    />
                  </div>
                  {errors.pageMainH1 && (
                    <p className={styles.errorMsg}>
                      ⚠ {errors.pageMainH1.message as string}
                    </p>
                  )}
                </F>
                <F label="Hero Image" req hint="Recommended 1180×540px">
                  <SingleImg
                    preview={heroPrev}
                    badge="Hero"
                    hint="JPG/PNG · 1180×540px"
                    error={heroErr}
                    onSelect={(f, p) => {
                      setHeroFile(f);
                      setHeroPrev(p);
                      setHeroErr("");
                    }}
                    onRemove={() => {
                      setHeroFile(null);
                      setHeroPrev("");
                    }}
                  />
                </F>
                <F label="Hero Image Alt Text">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("heroImgAlt")}
                    />
                  </div>
                </F>
              </Sec>
              <D />

              <Sec title="2. Course Info Card" badge="6 detail rows + price">
                <F label="Card Header Label" hint="e.g. COURSE DETAILS">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("courseCardHeaderLabel")}
                    />
                  </div>
                </F>
                {[
                  { n: 1, rowLabel: "Duration" },
                  { n: 2, rowLabel: "Level" },
                  { n: 3, rowLabel: "Certification" },
                  { n: 5, rowLabel: "Language" },
                  { n: 6, rowLabel: "Date" },
                ].map(({ n, rowLabel }) => (
                  <div key={n}>
                    <p
                      style={{
                        color: "#b8860b",
                        fontWeight: 700,
                        marginBottom: "0.6rem",
                        fontSize: "0.85rem",
                      }}
                    >
                      ── Detail Row {n} ({rowLabel}) ──
                    </p>
                    <div className={styles.grid2}>
                      <F label="Label">
                        <div className={styles.inputWrap}>
                          <input
                            className={`${styles.input} ${styles.inputNoCount}`}
                            {...register(`courseCardItem${n}Label`)}
                          />
                        </div>
                      </F>
                      <F label="Value">
                        <div className={styles.inputWrap}>
                          <input
                            className={`${styles.input} ${styles.inputNoCount}`}
                            {...register(`courseCardItem${n}Value`)}
                          />
                        </div>
                      </F>
                    </div>
                  </div>
                ))}
                <p
                  style={{
                    color: "#b8860b",
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                    fontSize: "0.85rem",
                  }}
                >
                  ── Detail Row 4 (Yoga Style) ──
                </p>
                <div className={styles.grid3}>
                  <F label="Label">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardItem4Label")}
                      />
                    </div>
                  </F>
                  <F label="Value">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardItem4Value")}
                      />
                    </div>
                  </F>
                  <F label="Sub-line">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardItem4Sub")}
                      />
                    </div>
                  </F>
                </div>
                <p
                  style={{
                    color: "#b8860b",
                    fontWeight: 700,
                    margin: "1.2rem 0 0.6rem",
                    fontSize: "0.85rem",
                  }}
                >
                  ── Course Fee Panel ──
                </p>
                <div className={styles.grid2}>
                  <F label="Fee Label">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardFeeLabel")}
                      />
                    </div>
                  </F>
                  <F label='"starting from" Text'>
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardFeeFrom")}
                      />
                    </div>
                  </F>
                </div>
                <div className={styles.grid3}>
                  <F label="Old Price">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardOldPrice")}
                      />
                    </div>
                  </F>
                  <F label="New Price">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardNewPrice")}
                      />
                    </div>
                  </F>
                  <F label="Currency">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardPriceCurrency")}
                      />
                    </div>
                  </F>
                </div>
                <div className={styles.grid2}>
                  <F label="Book Button Text">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardBookBtnText")}
                      />
                    </div>
                  </F>
                  <F label="Book Button URL">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("courseCardBookBtnUrl")}
                      />
                    </div>
                  </F>
                </div>
              </Sec>
            </>
          )}

          {/* ════════ STEP 2 ════════ */}
          {currentStep === 2 && (
            <>
              <Sec title="3. Introduction Paragraphs" badge="Dynamic">
                {introErr && (
                  <p
                    className={styles.errorMsg}
                    style={{ marginBottom: "0.8rem" }}
                  >
                    ⚠ {introErr}
                  </p>
                )}
                {introParas.map((_, i) => {
                  const cr = {
                    get current() {
                      return introParaRefs.current[i] || "";
                    },
                    set current(v: string) {
                      introParaRefs.current[i] = v;
                    },
                  };
                  return (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        marginBottom: "1.2rem",
                        border: "1px solid #e8d5b5",
                        borderRadius: 10,
                        padding: "1rem",
                        background: "#faf8f4",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 700,
                            color: "#b8860b",
                            fontSize: "0.85rem",
                          }}
                        >
                          Paragraph {i + 1}
                        </span>
                        {introParas.length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              introParaRefs.current.splice(i, 1);
                              setIntroParas((prev) =>
                                prev.filter((_, x) => x !== i),
                              );
                            }}
                            style={{
                              background: "#fee",
                              border: "1px solid #fbb",
                              color: "#c00",
                              borderRadius: 6,
                              padding: "0.2rem 0.7rem",
                              cursor: "pointer",
                              fontSize: 12,
                              fontWeight: 700,
                            }}
                          >
                            ✕ Remove
                          </button>
                        )}
                      </div>
                      <DynamicParaEditor
                        cr={cr}
                        ph="Enter paragraph content…"
                        editorKey={`intro-${i}-${editorKey}`}
                      />
                    </div>
                  );
                })}
                <button
                  type="button"
                  className={styles.addItemBtn}
                  onClick={() => {
                    introParaRefs.current.push("");
                    setIntroParas((prev) => [...prev, ""]);
                  }}
                >
                  ＋ Add Paragraph
                </button>
              </Sec>
              <D />

              <Sec title="4. Stats Cards">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className={styles.nestedCard}>
                    <div className={styles.nestedCardHeader}>
                      <span className={styles.nestedCardNum}>
                        Stat Card {n}
                      </span>
                    </div>
                    <div className={styles.nestedCardBody}>
                      <div className={styles.grid3}>
                        <F label="Icon">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              {...register(`stat${n}Icon`)}
                            />
                          </div>
                        </F>
                        <F label="Value">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              {...register(`stat${n}Val`)}
                            />
                          </div>
                        </F>
                        <F label="Title">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              {...register(`stat${n}Title`)}
                            />
                          </div>
                        </F>
                      </div>
                      <F label="Description">
                        <div className={styles.inputWrap}>
                          <input
                            className={`${styles.input} ${styles.inputNoCount}`}
                            {...register(`stat${n}Desc`)}
                          />
                        </div>
                      </F>
                    </div>
                  </div>
                ))}
              </Sec>
              <D />

              <Sec title="5. Video Section">
                <F label="Video Badge Text">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("videoBadgeText")}
                    />
                  </div>
                </F>
                <VideoField
                  label="Hero Video (YouTube / Vimeo / Upload)"
                  hint="Paste YouTube/Vimeo URL or upload video file"
                  urlValue={videoUrl}
                  onUrlChange={setVideoUrl}
                  file={videoFile}
                  filePreview={videoPrev}
                  onFileSelect={(f, p) => {
                    setVideoFile(f);
                    setVideoPrev(p);
                  }}
                  onFileRemove={() => {
                    setVideoFile(null);
                    setVideoPrev("");
                  }}
                />
              </Sec>
            </>
          )}

          {/* ════════ STEP 3 ════════ */}
          {currentStep === 3 && (
            <>
              <Sec title="6. Aims & Objectives">
                <F label="Section H3 Heading">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("aimsH3")}
                    />
                  </div>
                </F>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    <span className={styles.labelIcon}>✦</span>Aims Introduction
                    Paragraphs<span className={styles.required}>*</span>
                  </label>
                  {aimsErr && (
                    <p
                      className={styles.errorMsg}
                      style={{ marginBottom: "0.6rem" }}
                    >
                      ⚠ {aimsErr}
                    </p>
                  )}
                  {aimsIntroPars.map((_, i) => {
                    const cr = {
                      get current() {
                        return aimsIntroRefs.current[i] || "";
                      },
                      set current(v: string) {
                        aimsIntroRefs.current[i] = v;
                      },
                    };
                    return (
                      <div
                        key={i}
                        style={{
                          position: "relative",
                          marginBottom: "1.2rem",
                          border: "1px solid #e8d5b5",
                          borderRadius: 10,
                          padding: "1rem",
                          background: "#faf8f4",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              color: "#b8860b",
                              fontSize: "0.85rem",
                            }}
                          >
                            Aims Introduction {i + 1}
                          </span>
                          {aimsIntroPars.length > 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                aimsIntroRefs.current.splice(i, 1);
                                setAimsIntroPars((prev) =>
                                  prev.filter((_, x) => x !== i),
                                );
                              }}
                              style={{
                                background: "#fee",
                                border: "1px solid #fbb",
                                color: "#c00",
                                borderRadius: 6,
                                padding: "0.2rem 0.7rem",
                                cursor: "pointer",
                                fontSize: 12,
                                fontWeight: 700,
                              }}
                            >
                              ✕ Remove
                            </button>
                          )}
                        </div>
                        <DynamicParaEditor
                          cr={cr}
                          ph="The 200 hour yoga teacher training is carefully designed…"
                          editorKey={`aims-${i}-${editorKey}`}
                        />
                      </div>
                    );
                  })}
                  <button
                    type="button"
                    className={styles.addItemBtn}
                    onClick={() => {
                      aimsIntroRefs.current.push("");
                      setAimsIntroPars((prev) => [...prev, ""]);
                    }}
                  >
                    ＋ Add Aims Paragraph
                  </button>
                </div>
                <F label="Key Objectives Label">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("aimsKeyObjLabel")}
                    />
                  </div>
                </F>
                <F label="Aims Bullet Points">
                  <StrList
                    items={aimsBullets}
                    label="Aim"
                    ph="To deepen personal practice…"
                    onAdd={() => setAimsBullets([...aimsBullets, ""])}
                    onRemove={(i) =>
                      setAimsBullets(aimsBullets.filter((_, x) => x !== i))
                    }
                    onUpdate={(i, v) => {
                      const a = [...aimsBullets];
                      a[i] = v;
                      setAimsBullets(a);
                    }}
                  />
                </F>
                <LazyJodit
                  label="Aims Outro Paragraph"
                  cr={aimsOutroRef}
                  ph="The 200-hour yoga training at AYM Yoga School offers…"
                  h={180}
                  editorKey={`aimsOutro-${editorKey}`}
                />
              </Sec>
              <D />

              <Sec title="7. Course Overview">
                <F label="Overview H2 Heading">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("overviewH2")}
                    />
                  </div>
                </F>
                <F label="Overview Sub-Paragraph">
                  <div className={styles.inputWrap}>
                    <textarea
                      className={`${styles.input} ${styles.textarea} ${styles.inputNoCount}`}
                      rows={3}
                      {...register("overviewSubPara")}
                    />
                  </div>
                </F>
                <div className={styles.nestedCard}>
                  <div className={styles.nestedCardBody}>
                    <div className={styles.grid2}>
                      {[
                        ["overviewCertLabel", "overviewCertName"],
                        ["overviewLevelLabel", "overviewLevel"],
                        ["overviewEligLabel", "overviewEligibility"],
                        ["overviewAgeLabel", "overviewMinAge"],
                        ["overviewCreditsLabel", "overviewCredits"],
                        ["overviewLangLabel", "overviewLanguage"],
                      ].map(([lKey, vKey]) => (
                        <React.Fragment key={lKey}>
                          <F label="Label">
                            <div className={styles.inputWrap}>
                              <input
                                className={`${styles.input} ${styles.inputNoCount}`}
                                {...register(lKey)}
                              />
                            </div>
                          </F>
                          <F label="Value">
                            <div className={styles.inputWrap}>
                              <input
                                className={`${styles.input} ${styles.inputNoCount}`}
                                {...register(vKey)}
                              />
                            </div>
                          </F>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </Sec>
            </>
          )}

          {/* ════════ STEP 4 ════════ */}
          {currentStep === 4 && (
            <>
              <Sec title="8. Upcoming Dates Section">
                <div className={styles.grid2}>
                  <F label="Section Tag">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("batchSectionTag")}
                      />
                    </div>
                  </F>
                  <F label="Main H2 Heading">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("upcomingDatesH2")}
                      />
                    </div>
                  </F>
                </div>
                <F label="Sub-text">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("upcomingDatesSubtext")}
                    />
                  </div>
                </F>
              </Sec>
              <D />
              <Sec title="9. Course Fee Inclusions & Exclusions">
                <F label="Included Section Title">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("feeIncludedTitle")}
                    />
                  </div>
                </F>
                <F label="Included Items">
                  <StrList
                    items={inclFee}
                    label="Item"
                    ph="Six days of yoga, meditation and theory classes…"
                    onAdd={() => setInclFee([...inclFee, ""])}
                    onRemove={(i) =>
                      setInclFee(inclFee.filter((_, x) => x !== i))
                    }
                    onUpdate={(i, v) => {
                      const a = [...inclFee];
                      a[i] = v;
                      setInclFee(a);
                    }}
                  />
                </F>
                <F label="Not Included Section Title">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("feeNotIncludedTitle")}
                    />
                  </div>
                </F>
                <F label="Not Included Items">
                  <StrList
                    items={notInclFee}
                    label="Item"
                    ph="Any Airfare."
                    onAdd={() => setNotInclFee([...notInclFee, ""])}
                    onRemove={(i) =>
                      setNotInclFee(notInclFee.filter((_, x) => x !== i))
                    }
                    onUpdate={(i, v) => {
                      const a = [...notInclFee];
                      a[i] = v;
                      setNotInclFee(a);
                    }}
                  />
                </F>
              </Sec>
            </>
          )}

          {/* ════════ STEP 5 ════════ */}
          {currentStep === 5 && (
            <>
              <Sec title="10. Syllabus Section">
                <F label="Syllabus H3 Heading">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("syllabusH3")}
                    />
                  </div>
                </F>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    <span className={styles.labelIcon}>✦</span>Syllabus
                    Introduction Paragraphs
                    <span className={styles.required}>*</span>
                  </label>
                  {sylErr && (
                    <p
                      className={styles.errorMsg}
                      style={{ marginBottom: "0.6rem" }}
                    >
                      ⚠ {sylErr}
                    </p>
                  )}
                  {syllabusParas.map((_, i) => {
                    const cr = {
                      get current() {
                        return syllabusParaRefs.current[i] || "";
                      },
                      set current(v: string) {
                        syllabusParaRefs.current[i] = v;
                      },
                    };
                    return (
                      <div
                        key={i}
                        style={{
                          position: "relative",
                          marginBottom: "1.2rem",
                          border: "1px solid #e8d5b5",
                          borderRadius: 10,
                          padding: "1rem",
                          background: "#faf8f4",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              color: "#b8860b",
                              fontSize: "0.85rem",
                            }}
                          >
                            Syllabus Paragraph {i + 1}
                          </span>
                          {syllabusParas.length > 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                syllabusParaRefs.current.splice(i, 1);
                                setSyllabusParas((prev) =>
                                  prev.filter((_, x) => x !== i),
                                );
                              }}
                              style={{
                                background: "#fee",
                                border: "1px solid #fbb",
                                color: "#c00",
                                borderRadius: 6,
                                padding: "0.2rem 0.7rem",
                                cursor: "pointer",
                                fontSize: 12,
                                fontWeight: 700,
                              }}
                            >
                              ✕ Remove
                            </button>
                          )}
                        </div>
                        <DynamicParaEditor
                          cr={cr}
                          ph="It is our commitment as yoga school…"
                          editorKey={`syllabus-${i}-${editorKey}`}
                        />
                      </div>
                    );
                  })}
                  <button
                    type="button"
                    className={styles.addItemBtn}
                    onClick={() => {
                      syllabusParaRefs.current.push("");
                      setSyllabusParas((prev) => [...prev, ""]);
                    }}
                  >
                    ＋ Add Syllabus Paragraph
                  </button>
                </div>
              </Sec>
              <D />

              <Sec
                title="11. Syllabus Modules"
                badge={`${modules.length} modules`}
              >
                {modules.map((mod, i) => (
                  <div
                    key={i}
                    className={styles.nestedCard}
                    style={{ marginBottom: "1rem" }}
                  >
                    <div className={styles.nestedCardHeader}>
                      <span className={styles.nestedCardNum}>
                        Module {i + 1}
                      </span>
                      <button
                        type="button"
                        className={styles.removeNestedBtn}
                        onClick={() => removeModule(i)}
                        disabled={modules.length <= 1}
                      >
                        ✕ Remove Module
                      </button>
                    </div>
                    <div className={styles.nestedCardBody}>
                      <F label="Module Title">
                        <div className={styles.inputWrap}>
                          <input
                            className={`${styles.input} ${styles.inputNoCount}`}
                            value={mod.title}
                            onChange={(e) =>
                              updateModule(i, "title", e.target.value)
                            }
                          />
                        </div>
                      </F>
                      <F label="Module Intro">
                        <div className={styles.inputWrap}>
                          <textarea
                            className={`${styles.input} ${styles.textarea} ${styles.inputNoCount}`}
                            rows={3}
                            value={mod.intro}
                            onChange={(e) =>
                              updateModule(i, "intro", e.target.value)
                            }
                          />
                        </div>
                      </F>
                      <F label="Topics List">
                        <div className={styles.listItems}>
                          {mod.items.map((item, j) => (
                            <div key={j} className={styles.listItemRow}>
                              <span className={styles.listNum}>{j + 1}</span>
                              <div
                                className={`${styles.inputWrap} ${styles.listInput}`}
                              >
                                <input
                                  className={`${styles.input} ${styles.inputNoCount}`}
                                  value={item}
                                  onChange={(e) =>
                                    updateModuleItem(i, j, e.target.value)
                                  }
                                />
                              </div>
                              <button
                                type="button"
                                className={styles.removeItemBtn}
                                onClick={() => removeModuleItem(i, j)}
                                disabled={mod.items.length <= 1}
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className={styles.addItemBtn}
                          onClick={() => addModuleItem(i)}
                        >
                          ＋ Add Topic
                        </button>
                      </F>
                      <ModuleBodyEditor
                        bodyRef={mod.bodyRef}
                        idx={i}
                        editorKey={`module-${i}-${editorKey}`}
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.addItemBtn}
                  style={{
                    background: "linear-gradient(135deg,#b8860b,#d4a017)",
                    color: "#fff",
                    border: "none",
                    padding: "0.7rem 1.5rem",
                    borderRadius: 8,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                  onClick={addModule}
                >
                  ＋ Add New Module
                </button>
              </Sec>
            </>
          )}

          {/* ════════ STEP 6 ════════ */}
          {currentStep === 6 && (
            <>
              <Sec title="12. Ashtanga Vinyasa Yoga">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("ashtangaH2")}
                    />
                  </div>
                </F>
                <F label="Sub-heading">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("ashtangaSubtitle")}
                    />
                  </div>
                </F>
                <F label="Ashtanga Image" hint="700×500px">
                  <SingleImg
                    preview={ashtangaPrev}
                    badge="Ashtanga"
                    hint="JPG/PNG · 700×500px"
                    onSelect={(f, p) => {
                      setAshtangaFile(f);
                      setAshtangaPrev(p);
                    }}
                    onRemove={() => {
                      setAshtangaFile(null);
                      setAshtangaPrev("");
                    }}
                  />
                </F>
                <F label="Image Alt Text">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("ashtangaImgAlt")}
                    />
                  </div>
                </F>
                <LazyJodit
                  label="Ashtanga Description"
                  cr={ashtangaRef}
                  err={astErr}
                  clr={() => setAstErr("")}
                  ph="This form of yoga practice combines breath and body movements…"
                  required
                  editorKey={`ashtanga-${editorKey}`}
                />
                <div className={styles.grid3}>
                  {[1, 2, 3].map((n) => (
                    <F key={n} label={`Feature Pill ${n}`}>
                      <div className={styles.inputWrap}>
                        <input
                          className={`${styles.input} ${styles.inputNoCount}`}
                          {...register(`ashtangaPill${n}`)}
                        />
                      </div>
                    </F>
                  ))}
                </div>
              </Sec>
              <D />

              <Sec title="13. Primary Series Curriculum">
                <F label="Section H3">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("primarySeriesH3")}
                    />
                  </div>
                </F>
                <F label="Sub-text">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("primarySeriesSubtext")}
                    />
                  </div>
                </F>
                <LazyJodit
                  label="Primary Series Intro"
                  cr={primaryRef}
                  ph="All students of 200 hour yoga teacher training will practice primary series…"
                  h={180}
                  editorKey={`primary-${editorKey}`}
                />
                <F label="Foundation Items">
                  <StrList
                    items={foundItems}
                    label="Item"
                    ph="Introduction to ashtanga vinyasa yoga"
                    onAdd={() => setFoundItems([...foundItems, ""])}
                    onRemove={(i) =>
                      setFoundItems(foundItems.filter((_, x) => x !== i))
                    }
                    onUpdate={(i, v) => {
                      const a = [...foundItems];
                      a[i] = v;
                      setFoundItems(a);
                    }}
                  />
                </F>
                <F label="Week-by-Week Grid">
                  {weekGrid.map((wk, i) => (
                    <div
                      key={i}
                      className={styles.nestedCard}
                      style={{ marginBottom: "0.8rem" }}
                    >
                      <div className={styles.nestedCardHeader}>
                        <span className={styles.nestedCardNum}>
                          Week Card {i + 1}
                        </span>
                        <button
                          type="button"
                          className={styles.removeNestedBtn}
                          onClick={() =>
                            setWeekGrid(weekGrid.filter((_, x) => x !== i))
                          }
                          disabled={weekGrid.length <= 1}
                        >
                          ✕ Remove
                        </button>
                      </div>
                      <div className={styles.nestedCardBody}>
                        <div className={styles.grid2}>
                          <F label="Week Label">
                            <div className={styles.inputWrap}>
                              <input
                                className={`${styles.input} ${styles.inputNoCount}`}
                                value={wk.week}
                                onChange={(e) =>
                                  upd(
                                    weekGrid,
                                    setWeekGrid,
                                    i,
                                    "week",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </F>
                          <F label="Icon">
                            <div className={styles.inputWrap}>
                              <input
                                className={`${styles.input} ${styles.inputNoCount}`}
                                value={wk.icon}
                                onChange={(e) =>
                                  upd(
                                    weekGrid,
                                    setWeekGrid,
                                    i,
                                    "icon",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </F>
                          <F label="Item 1 Title">
                            <div className={styles.inputWrap}>
                              <input
                                className={`${styles.input} ${styles.inputNoCount}`}
                                value={wk.t1}
                                onChange={(e) =>
                                  upd(
                                    weekGrid,
                                    setWeekGrid,
                                    i,
                                    "t1",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </F>
                          <F label="Item 1 Desc">
                            <div className={styles.inputWrap}>
                              <input
                                className={`${styles.input} ${styles.inputNoCount}`}
                                value={wk.d1}
                                onChange={(e) =>
                                  upd(
                                    weekGrid,
                                    setWeekGrid,
                                    i,
                                    "d1",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </F>
                          <F label="Item 2 Title">
                            <div className={styles.inputWrap}>
                              <input
                                className={`${styles.input} ${styles.inputNoCount}`}
                                value={wk.t2}
                                onChange={(e) =>
                                  upd(
                                    weekGrid,
                                    setWeekGrid,
                                    i,
                                    "t2",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </F>
                          <F label="Item 2 Desc">
                            <div className={styles.inputWrap}>
                              <input
                                className={`${styles.input} ${styles.inputNoCount}`}
                                value={wk.d2}
                                onChange={(e) =>
                                  upd(
                                    weekGrid,
                                    setWeekGrid,
                                    i,
                                    "d2",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </F>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className={styles.addItemBtn}
                    onClick={() =>
                      setWeekGrid([
                        ...weekGrid,
                        {
                          week: `Week ${weekGrid.length + 1}`,
                          icon: "🧘",
                          t1: "",
                          d1: "",
                          t2: "",
                          d2: "",
                        },
                      ])
                    }
                  >
                    ＋ Add Week Card
                  </button>
                </F>
              </Sec>
              <D />

              <Sec title="14. Hatha Yoga">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("hathaH2")}
                    />
                  </div>
                </F>
                <F label="Sub-heading">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("hathaSubtitle")}
                    />
                  </div>
                </F>
                <F label="Hatha Image" hint="700×500px">
                  <SingleImg
                    preview={hathaPrev}
                    badge="Hatha"
                    hint="JPG/PNG · 700×500px"
                    onSelect={(f, p) => {
                      setHathaFile(f);
                      setHathaPrev(p);
                    }}
                    onRemove={() => {
                      setHathaFile(null);
                      setHathaPrev("");
                    }}
                  />
                </F>
                <F label="Image Alt Text">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("hathaImgAlt")}
                    />
                  </div>
                </F>
                <LazyJodit
                  label="Hatha Description"
                  cr={hathaRef}
                  err={htErr}
                  clr={() => setHtErr("")}
                  ph="Hatha yoga is the traditional, ancient and classical yoga…"
                  required
                  editorKey={`hatha-${editorKey}`}
                />
                <div className={styles.grid3}>
                  {[1, 2, 3].map((n) => (
                    <F key={n} label={`Feature Pill ${n}`}>
                      <div className={styles.inputWrap}>
                        <input
                          className={`${styles.input} ${styles.inputNoCount}`}
                          {...register(`hathaPill${n}`)}
                        />
                      </div>
                    </F>
                  ))}
                </div>
              </Sec>
              <D />

              <Sec
                title="15. Hatha Yoga Asanas"
                badge={`${hatha43.length} asanas`}
              >
                <div className={styles.grid2}>
                  <F label="Section H2">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("asanasH2")}
                      />
                    </div>
                  </F>
                  <F label="Sub-text">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("asanasSubtext")}
                      />
                    </div>
                  </F>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    padding: "0.4rem 0",
                    marginBottom: "0.2rem",
                    borderBottom: "1px solid #e8d5b5",
                  }}
                >
                  {[
                    "#",
                    "No.",
                    "Asana Name",
                    "Sub Name",
                    "Filter Category",
                    "",
                  ].map((h, i) => (
                    <span
                      key={i}
                      style={{
                        width:
                          i === 0
                            ? 32
                            : i === 1
                              ? 55
                              : i === 4
                                ? 130
                                : i === 5
                                  ? 32
                                  : undefined,
                        flex: i === 2 || i === 3 ? 1 : undefined,
                        fontSize: 11,
                        color: "#b8860b",
                        fontWeight: 600,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
                {hatha43.map((a, i) => (
                  <div
                    key={i}
                    className={styles.listItemRow}
                    style={{
                      marginBottom: "0.4rem",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <span className={styles.listNum}>{i + 1}</span>
                    <div
                      className={styles.inputWrap}
                      style={{ width: 55, flexShrink: 0 }}
                    >
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        value={a.n}
                        onChange={(e) =>
                          upd(hatha43, setHatha43, i, "n", e.target.value)
                        }
                      />
                    </div>
                    <div className={`${styles.inputWrap} ${styles.listInput}`}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        value={a.name}
                        placeholder="e.g. Tadasana"
                        onChange={(e) =>
                          upd(hatha43, setHatha43, i, "name", e.target.value)
                        }
                      />
                    </div>
                    <div className={`${styles.inputWrap} ${styles.listInput}`}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        value={a.sub}
                        placeholder="e.g. Mountain pose"
                        onChange={(e) =>
                          upd(hatha43, setHatha43, i, "sub", e.target.value)
                        }
                      />
                    </div>
                    <div
                      className={styles.selectWrap}
                      style={{ width: 130, flexShrink: 0 }}
                    >
                      <select
                        className={styles.select}
                        value={a.filter}
                        onChange={(e) =>
                          upd(hatha43, setHatha43, i, "filter", e.target.value)
                        }
                      >
                        {FILTER_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>▾</span>
                    </div>
                    <button
                      type="button"
                      className={styles.removeItemBtn}
                      onClick={() =>
                        setHatha43(hatha43.filter((_, x) => x !== i))
                      }
                      disabled={hatha43.length <= 1}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.addItemBtn}
                  onClick={() =>
                    setHatha43([
                      ...hatha43,
                      {
                        n: String(hatha43.length + 1),
                        name: "",
                        sub: "",
                        filter: "All Poses",
                      },
                    ])
                  }
                >
                  ＋ Add Asana
                </button>
              </Sec>
            </>
          )}

          {/* ════════ STEP 7 ════════ */}
          {currentStep === 7 && (
            <>
              <Sec title="16. Programs" badge={`${programs.length} programs`}>
                <div className={styles.grid2}>
                  <F label="Section H2">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("newProgramsH2")}
                      />
                    </div>
                  </F>
                  <F label="Sub-text">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("newProgramsSubtext")}
                      />
                    </div>
                  </F>
                </div>
                {programs.map((prog, i) => (
                  <div key={i} className={styles.nestedCard}>
                    <div className={styles.nestedCardHeader}>
                      <span className={styles.nestedCardNum}>
                        Program {i + 1}
                      </span>
                      <button
                        type="button"
                        className={styles.removeNestedBtn}
                        onClick={() =>
                          setPrograms(programs.filter((_, x) => x !== i))
                        }
                        disabled={programs.length <= 1}
                      >
                        ✕ Remove
                      </button>
                    </div>
                    <div className={styles.nestedCardBody}>
                      <div className={styles.grid2}>
                        <F label="Title">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              value={prog.title}
                              onChange={(e) =>
                                upd(
                                  programs,
                                  setPrograms,
                                  i,
                                  "title",
                                  e.target.value,
                                )
                              }
                            />
                          </div>
                        </F>
                        <F label="Duration">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              value={prog.duration}
                              onChange={(e) =>
                                upd(
                                  programs,
                                  setPrograms,
                                  i,
                                  "duration",
                                  e.target.value,
                                )
                              }
                            />
                          </div>
                        </F>
                        <F label="Start Date">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              value={prog.start}
                              onChange={(e) =>
                                upd(
                                  programs,
                                  setPrograms,
                                  i,
                                  "start",
                                  e.target.value,
                                )
                              }
                            />
                          </div>
                        </F>
                        <F label="Old Price">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              value={prog.oldPrice}
                              onChange={(e) =>
                                upd(
                                  programs,
                                  setPrograms,
                                  i,
                                  "oldPrice",
                                  e.target.value,
                                )
                              }
                            />
                          </div>
                        </F>
                        <F label="New Price">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              value={prog.price}
                              onChange={(e) =>
                                upd(
                                  programs,
                                  setPrograms,
                                  i,
                                  "price",
                                  e.target.value,
                                )
                              }
                            />
                          </div>
                        </F>
                      </div>
                      <F label="Program Image">
                        <SingleImg
                          preview={prog.imagePreview}
                          badge="Program"
                          hint="JPG/PNG · 600×400px"
                          onSelect={(f, p) => {
                            const np = [...programs];
                            np[i] = { ...np[i], imageFile: f, imagePreview: p };
                            setPrograms(np);
                          }}
                          onRemove={() => {
                            const np = [...programs];
                            np[i] = {
                              ...np[i],
                              imageFile: null,
                              imagePreview: "",
                            };
                            setPrograms(np);
                          }}
                        />
                      </F>
                      <LazyJodit
                        label="Program Description"
                        cr={prog.descRef}
                        ph="Program description…"
                        h={140}
                        editorKey={`prog-${i}-${editorKey}`}
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.addItemBtn}
                  onClick={() => setPrograms([...programs, makeEmptyProg()])}
                >
                  ＋ Add Program
                </button>
              </Sec>
            </>
          )}

          {/* ════════ STEP 8 ════════ */}
          {currentStep === 8 && (
            <>
              <Sec title="17. Evaluation & Certification">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("evalH2")}
                    />
                  </div>
                </F>
                <LazyJodit
                  label="Evaluation Description"
                  cr={evalRef}
                  err={evErr}
                  clr={() => setEvErr("")}
                  ph="There will be practical and theoretical exam…"
                  required
                  editorKey={`eval-${editorKey}`}
                />
              </Sec>
              <D />

              <Sec title="18. Luxury Facilities">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("luxuryH2")}
                    />
                  </div>
                </F>
                <F label="Luxury Features">
                  <StrList
                    items={luxFeatures}
                    label="Feature"
                    ph="Accommodation (Private)"
                    onAdd={() => setLuxFeatures([...luxFeatures, ""])}
                    onRemove={(i) =>
                      setLuxFeatures(luxFeatures.filter((_, x) => x !== i))
                    }
                    onUpdate={(i, v) => {
                      const a = [...luxFeatures];
                      a[i] = v;
                      setLuxFeatures(a);
                    }}
                  />
                </F>
                <F label="Luxury Images" hint="Up to 4 images">
                  <MultiImageUpload
                    files={luxImgFiles}
                    previews={luxImgPrevs}
                    hint="JPG/PNG · 400px wide"
                    label="Luxury"
                    maxFiles={4}
                    onSelect={(f, p) => {
                      setLuxImgFiles(f);
                      setLuxImgPrevs(p);
                    }}
                    onRemove={(i) => {
                      setLuxImgFiles(luxImgFiles.filter((_, x) => x !== i));
                      setLuxImgPrevs(luxImgPrevs.filter((_, x) => x !== i));
                    }}
                  />
                </F>
              </Sec>
              <D />

              <Sec title="19. Indian Fees">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("indianFeeH2")}
                    />
                  </div>
                </F>
                {indianFees.map((fee, i) => (
                  <div
                    key={i}
                    className={styles.listItemRow}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <span className={styles.listNum}>{i + 1}</span>
                    <div className={`${styles.inputWrap} ${styles.listInput}`}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        value={fee.label}
                        placeholder="Dormitory:"
                        onChange={(e) =>
                          upd(
                            indianFees,
                            setIndianFees,
                            i,
                            "label",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <div className={`${styles.inputWrap} ${styles.listInput}`}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        value={fee.price}
                        placeholder="20,999 INR"
                        onChange={(e) =>
                          upd(
                            indianFees,
                            setIndianFees,
                            i,
                            "price",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <button
                      type="button"
                      className={styles.removeItemBtn}
                      onClick={() =>
                        setIndianFees(indianFees.filter((_, x) => x !== i))
                      }
                      disabled={indianFees.length <= 1}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.addItemBtn}
                  onClick={() =>
                    setIndianFees([...indianFees, { label: "", price: "" }])
                  }
                >
                  ＋ Add Fee Tier
                </button>
              </Sec>
              <D />

              <Sec title="20. Daily Schedule">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("scheduleH2")}
                    />
                  </div>
                </F>
                <LazyJodit
                  label="Schedule Introduction"
                  cr={schedDescRef}
                  ph="Planning on teaching yoga?…"
                  h={180}
                  editorKey={`sched-${editorKey}`}
                />
                {schedRows.map((row, i) => (
                  <div
                    key={i}
                    className={styles.listItemRow}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <span className={styles.listNum}>{i + 1}</span>
                    <div
                      className={styles.inputWrap}
                      style={{ width: 200, flexShrink: 0 }}
                    >
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        value={row.time}
                        placeholder="06:45 AM - 08:00 AM"
                        onChange={(e) =>
                          upd(
                            schedRows,
                            setSchedRows,
                            i,
                            "time",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <div className={`${styles.inputWrap} ${styles.listInput}`}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        value={row.activity}
                        placeholder="Pranayama / Meditation"
                        onChange={(e) =>
                          upd(
                            schedRows,
                            setSchedRows,
                            i,
                            "activity",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <button
                      type="button"
                      className={styles.removeItemBtn}
                      onClick={() =>
                        setSchedRows(schedRows.filter((_, x) => x !== i))
                      }
                      disabled={schedRows.length <= 1}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.addItemBtn}
                  onClick={() =>
                    setSchedRows([...schedRows, { time: "", activity: "" }])
                  }
                >
                  ＋ Add Row
                </button>
                <F label="Schedule Images" hint="Up to 4 images">
                  <MultiImageUpload
                    files={schedImgFiles}
                    previews={schedImgPrevs}
                    hint="JPG/PNG · 300px wide"
                    label="Schedule"
                    maxFiles={4}
                    onSelect={(f, p) => {
                      setSchedImgFiles(f);
                      setSchedImgPrevs(p);
                    }}
                    onRemove={(i) => {
                      setSchedImgFiles(schedImgFiles.filter((_, x) => x !== i));
                      setSchedImgPrevs(schedImgPrevs.filter((_, x) => x !== i));
                    }}
                  />
                </F>
              </Sec>
              <D />

              <Sec title="21. More Information">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("moreInfoH2")}
                    />
                  </div>
                </F>
                <F label="Instruction Languages">
                  {instrLangs.map((row, i) => (
                    <div
                      key={i}
                      className={styles.listItemRow}
                      style={{ marginBottom: "0.5rem" }}
                    >
                      <span className={styles.listNum}>{i + 1}</span>
                      <div
                        className={styles.inputWrap}
                        style={{ width: 140, flexShrink: 0 }}
                      >
                        <input
                          className={`${styles.input} ${styles.inputNoCount}`}
                          value={row.lang}
                          placeholder="English"
                          onChange={(e) =>
                            upd(
                              instrLangs,
                              setInstrLangs,
                              i,
                              "lang",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <div
                        className={`${styles.inputWrap} ${styles.listInput}`}
                      >
                        <input
                          className={`${styles.input} ${styles.inputNoCount}`}
                          value={row.note}
                          placeholder="course happens every month"
                          onChange={(e) =>
                            upd(
                              instrLangs,
                              setInstrLangs,
                              i,
                              "note",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <button
                        type="button"
                        className={styles.removeItemBtn}
                        onClick={() =>
                          setInstrLangs(instrLangs.filter((_, x) => x !== i))
                        }
                        disabled={instrLangs.length <= 1}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className={styles.addItemBtn}
                    onClick={() =>
                      setInstrLangs([...instrLangs, { lang: "", note: "" }])
                    }
                  >
                    ＋ Add Language
                  </button>
                </F>
                <F label="Spanish & Chinese Note">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("spanishChineseNote")}
                    />
                  </div>
                </F>
                <LazyJodit
                  label="Visa & Passport Description"
                  cr={visaRef}
                  ph="You may need to have a valid tourist visa…"
                  h={200}
                  editorKey={`visa-${editorKey}`}
                />
              </Sec>
              <D />

              <Sec title="22. Get Globally Certified">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("globalCertH2")}
                    />
                  </div>
                </F>
                <LazyJodit
                  label="Paragraph 1"
                  cr={globalCert1Ref}
                  ph="At Association for Yoga and Meditation…"
                  h={160}
                  editorKey={`gc1-${editorKey}`}
                />
                <LazyJodit
                  label="Paragraph 2"
                  cr={globalCert2Ref}
                  ph="As the best 200 Hour Yoga Teacher Teaching Course…"
                  h={160}
                  editorKey={`gc2-${editorKey}`}
                />
              </Sec>
              <D />

              <Sec title="23. Requirements for Enrollment">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("requirementsH2")}
                    />
                  </div>
                </F>
                <F label="Requirements Image" hint="600×450px">
                  <SingleImg
                    preview={reqImgPrev}
                    badge="Requirements"
                    hint="JPG/PNG · 600×450px"
                    onSelect={(f, p) => {
                      setReqImgFile(f);
                      setReqImgPrev(p);
                    }}
                    onRemove={() => {
                      setReqImgFile(null);
                      setReqImgPrev("");
                    }}
                  />
                </F>
                <F label="Image Alt Text">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("requirementsImgAlt")}
                    />
                  </div>
                </F>
                <LazyJodit
                  label="Paragraph 1"
                  cr={req1Ref}
                  ph="AYM Yoga School provides…"
                  h={160}
                  editorKey={`req1-${editorKey}`}
                />
                <LazyJodit
                  label="Paragraph 2"
                  cr={req2Ref}
                  ph="The basic requirements for a 200 hour RYT…"
                  h={160}
                  editorKey={`req2-${editorKey}`}
                />
                <LazyJodit
                  label="Paragraph 3"
                  cr={req3Ref}
                  ph="The applicant must have…"
                  h={140}
                  editorKey={`req3-${editorKey}`}
                />
                <LazyJodit
                  label="Paragraph 4"
                  cr={req4Ref}
                  ph="The basics of anatomy should include…"
                  h={140}
                  editorKey={`req4-${editorKey}`}
                />
              </Sec>
              <D />

              <Sec
                title="24. What You Need to Know"
                badge={`${knowQA.length} blocks`}
              >
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("whatYouNeedH2")}
                    />
                  </div>
                </F>
                {knowQA.map((item, i) => (
                  <div key={i} className={styles.nestedCard}>
                    <div className={styles.nestedCardHeader}>
                      <span className={styles.nestedCardNum}>
                        Q&A Block {i + 1}
                      </span>
                      <button
                        type="button"
                        className={styles.removeNestedBtn}
                        onClick={() =>
                          setKnowQA(knowQA.filter((_, x) => x !== i))
                        }
                        disabled={knowQA.length <= 1}
                      >
                        ✕ Remove
                      </button>
                    </div>
                    <div className={styles.nestedCardBody}>
                      <F label="Question">
                        <div className={styles.inputWrap}>
                          <input
                            className={`${styles.input} ${styles.inputNoCount}`}
                            value={item.q}
                            onChange={(e) => {
                              const a = [...knowQA];
                              a[i] = { ...a[i], q: e.target.value };
                              setKnowQA(a);
                            }}
                          />
                        </div>
                      </F>
                      <F label="Answer">
                        <div className={styles.inputWrap}>
                          <textarea
                            className={`${styles.input} ${styles.textarea} ${styles.inputNoCount}`}
                            rows={5}
                            value={item.a}
                            onChange={(e) => {
                              const a = [...knowQA];
                              a[i] = { ...a[i], a: e.target.value };
                              setKnowQA(a);
                            }}
                          />
                        </div>
                      </F>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.addItemBtn}
                  onClick={() => setKnowQA([...knowQA, { q: "", a: "" }])}
                >
                  ＋ Add Q&A Block
                </button>
              </Sec>
              <D />

              <Sec title="25. Why Choose AYM">
                <F label="Sub-heading">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("best200HrH4")}
                    />
                  </div>
                </F>
                <LazyJodit
                  label="Best 200hr Paragraph"
                  cr={best200HrRef}
                  ph="Where is the best yoga teacher training in the world?…"
                  h={160}
                  editorKey={`best-${editorKey}`}
                />
              </Sec>
              <D />

              <Sec title="26. What's Included">
                <F label="Sub-heading">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("whatsIncludedH4")}
                    />
                  </div>
                </F>
                <F label="Included Items">
                  <StrList
                    items={whatIncl}
                    label="Item"
                    ph="Yoga course fee."
                    onAdd={() => setWhatIncl([...whatIncl, ""])}
                    onRemove={(i) =>
                      setWhatIncl(whatIncl.filter((_, x) => x !== i))
                    }
                    onUpdate={(i, v) => {
                      const a = [...whatIncl];
                      a[i] = v;
                      setWhatIncl(a);
                    }}
                  />
                </F>
              </Sec>
              <D />

              <Sec title="27. Booking Steps">
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("bookingH2")}
                    />
                  </div>
                </F>
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className={styles.nestedCard}>
                    <div className={styles.nestedCardHeader}>
                      <span className={styles.nestedCardNum}>Step {n}</span>
                    </div>
                    <div className={styles.nestedCardBody}>
                      <div className={styles.grid2}>
                        <F label="Icon">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              {...register(`step${n}Icon`)}
                            />
                          </div>
                        </F>
                        <F label="Title">
                          <div className={styles.inputWrap}>
                            <input
                              className={`${styles.input} ${styles.inputNoCount}`}
                              {...register(`step${n}Title`)}
                            />
                          </div>
                        </F>
                      </div>
                      <LazyJodit
                        label="Step Description"
                        cr={
                          n === 1
                            ? step1Ref
                            : n === 2
                              ? step2Ref
                              : n === 3
                                ? step3Ref
                                : step4Ref
                        }
                        ph="Step description…"
                        h={130}
                        editorKey={`step${n}-${editorKey}`}
                      />
                    </div>
                  </div>
                ))}
              </Sec>
              <D />

              <Sec title="28. FAQ" badge={`${faqItems.length} questions`}>
                <F label="Section H2">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("faqH2")}
                    />
                  </div>
                </F>
                {faqItems.map((item, i) => (
                  <div key={i} className={styles.nestedCard}>
                    <div className={styles.nestedCardHeader}>
                      <span className={styles.nestedCardNum}>FAQ {i + 1}</span>
                      <button
                        type="button"
                        className={styles.removeNestedBtn}
                        onClick={() =>
                          setFaqItems(faqItems.filter((_, x) => x !== i))
                        }
                        disabled={faqItems.length <= 1}
                      >
                        ✕ Remove
                      </button>
                    </div>
                    <div className={styles.nestedCardBody}>
                      <F label="Question">
                        <div className={styles.inputWrap}>
                          <input
                            className={`${styles.input} ${styles.inputNoCount}`}
                            value={item.q}
                            onChange={(e) => {
                              const a = [...faqItems];
                              a[i] = { ...a[i], q: e.target.value };
                              setFaqItems(a);
                            }}
                          />
                        </div>
                      </F>
                      <F label="Answer">
                        <div className={styles.inputWrap}>
                          <textarea
                            className={`${styles.input} ${styles.textarea} ${styles.inputNoCount}`}
                            rows={3}
                            value={item.a}
                            onChange={(e) => {
                              const a = [...faqItems];
                              a[i] = { ...a[i], a: e.target.value };
                              setFaqItems(a);
                            }}
                          />
                        </div>
                      </F>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.addItemBtn}
                  onClick={() => setFaqItems([...faqItems, { q: "", a: "" }])}
                >
                  ＋ Add FAQ
                </button>
              </Sec>
              <D />

              <Sec title="29. CTA Banner">
                <F label="Title">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("ctaTitle")}
                    />
                  </div>
                </F>
                <div className={styles.grid3}>
                  <F label="Subtitle">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("ctaSubtitle")}
                      />
                    </div>
                  </F>
                  <F label="Phone Number">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("ctaPhone")}
                      />
                    </div>
                  </F>
                  <F label="Apply Button Text">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("ctaApplyBtnText")}
                      />
                    </div>
                  </F>
                </div>
                <div className={styles.grid2}>
                  <F label="WhatsApp Number">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("whatsappNumber")}
                      />
                    </div>
                  </F>
                  <F label="WhatsApp Button Text">
                    <div className={styles.inputWrap}>
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        {...register("whatsappBtnText")}
                      />
                    </div>
                  </F>
                </div>
              </Sec>
              <D />

              <Sec title="30. SEO & Page Settings">
                <F label="Meta Title" req>
                  <div
                    className={`${styles.inputWrap} ${errors.metaTitle ? styles.inputError : ""}`}
                  >
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("metaTitle", { required: "Required" })}
                    />
                  </div>
                  {errors.metaTitle && (
                    <p className={styles.errorMsg}>
                      ⚠ {errors.metaTitle.message as string}
                    </p>
                  )}
                </F>
                <F label="Meta Description" req>
                  <div
                    className={`${styles.inputWrap} ${errors.metaDesc ? styles.inputError : ""}`}
                  >
                    <textarea
                      className={`${styles.input} ${styles.textarea} ${styles.inputNoCount}`}
                      rows={3}
                      {...register("metaDesc", { required: "Required" })}
                    />
                  </div>
                  {errors.metaDesc && (
                    <p className={styles.errorMsg}>
                      ⚠ {errors.metaDesc.message as string}
                    </p>
                  )}
                </F>
                <F label="Meta Keywords">
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.input} ${styles.inputNoCount}`}
                      {...register("metaKeywords")}
                    />
                  </div>
                </F>
                <div className={styles.grid2}>
                  <F label="Slug" req>
                    <div
                      className={`${styles.inputWrap} ${errors.slug ? styles.inputError : ""}`}
                    >
                      <input
                        className={`${styles.input} ${styles.inputNoCount}`}
                        placeholder="200-hour-yoga-teacher-training-rishikesh"
                        {...register("slug", { required: "Required" })}
                      />
                    </div>
                    {errors.slug && (
                      <p className={styles.errorMsg}>
                        ⚠ {errors.slug.message as string}
                      </p>
                    )}
                  </F>
                  <F label="Status">
                    <div className={styles.selectWrap}>
                      <select className={styles.select} {...register("status")}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                      <span className={styles.selectArrow}>▾</span>
                    </div>
                  </F>
                </div>
              </Sec>
            </>
          )}

          {/* ── Navigation ── */}
          <div className={styles.formActions}>
            {currentStep > 1 && (
              <button
                type="button"
                className={styles.prevBtn}
                onClick={prevStep}
              >
                ← Previous
              </button>
            )}
            {currentStep < steps.length ? (
              <button
                type="button"
                className={styles.nextBtn}
                onClick={nextStep}
              >
                Next Step →
              </button>
            ) : (
              <button
                type="submit"
                className={`${styles.submitBtn} ${isSubmitting ? styles.submitBtnLoading : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner} /> Saving…
                  </>
                ) : (
                  <>
                    <span>✦</span> Save All Content
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

/* ─────────────────────────── Module Body Editor ─────────────────────────── */
function ModuleBodyEditor({
  bodyRef,
  idx,
  editorKey = "mod",
}: {
  bodyRef: React.MutableRefObject<string>;
  idx: number;
  editorKey?: string;
}) {
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>
        <span className={styles.labelIcon}>✦</span>Module Extra Rich Text
        (optional)
      </label>
      <div ref={wrapRef} style={{ minHeight: 160 }}>
        {visible ? (
          <JoditEditor
            key={editorKey}
            value={bodyRef.current}
            config={{
              ...joditConfig,
              placeholder: "Additional description…",
              height: 160,
            }}
            onChange={(v) => {
              bodyRef.current = v;
            }}
          />
        ) : (
          <div
            style={{
              height: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#faf8f4",
              border: "1px solid #e8d5b5",
              borderRadius: 8,
              color: "#bbb",
              fontSize: 13,
            }}
          >
            ✦ Scroll to load editor…
          </div>
        )}
      </div>
    </div>
  );
}
