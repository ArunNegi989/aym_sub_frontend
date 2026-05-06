"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../../assets/style/Home/Classcampusamenities.module.css";
import api from "@/lib/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

function getImageUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${BASE_URL}${path}`;
}

/* ─────────────────────────────────────────
   Type
───────────────────────────────────────── */
interface SectionData {
  classSizeSuperLabel: string;
  classSizeTitle: string;
  classSizeWelcomeText: string;
  classSizeHighlight: string;
  classSizePara: string;
  classSizeImage: string;
  campusSuperLabel: string;
  campusTitle: string;
  campusHighlight: string;
  campusPara: string;
  campusImages: string[];
  amenitiesSuperLabel: string;
  amenitiesTitle: string;
  amenitiesMainPara: string;
  amenitiesSubLabel: string;
  amenities: string[];
  amenityMosaicTag: string;
  amenityImage: string;
}

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export const ClassCampusAmenities: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [data, setData] = useState<SectionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/class-campus-amenities");
        if (res.data.success && res.data.data?.length > 0) {
          setData(res.data.data[0]);
        }
      } catch (err) {
        console.error("ClassCampusAmenities fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;
    const els = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.revealed);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [data]);

  if (loading) return null;
  if (!data) return null;

  return (
    <section className={styles.section} ref={sectionRef}>

      {/* Atmospheric background elements */}
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={styles.container}>

        {/* ══════════════════════════════
            EYEBROW
        ══════════════════════════════ */}
        <div className={`${styles.eyebrow} ${styles.reveal}`}>
          <span className={styles.eyebrowRule} />
          <span className={styles.eyebrowText}>What Sets Us Apart</span>
          <span className={styles.eyebrowRule} />
        </div>

        {/* ══════════════════════════════
            TOP ROW — Class Size + Campus
        ══════════════════════════════ */}
        <div className={styles.topRow}>

          {/* ── CLASS SIZE ── */}
          <article className={`${styles.card} ${styles.reveal}`}>
            <header className={styles.cardHeader}>
              <span className={styles.superLabel}>{data.classSizeSuperLabel}</span>
              <h2 className={styles.cardTitle}>{data.classSizeTitle}</h2>
              <div className={styles.titleRule} />
            </header>

            <div className={styles.imgWrap}>
              <img
                src={getImageUrl(data.classSizeImage)}
                alt="AYM Yoga intimate class"
                className={styles.cardImg}
              />
              <div className={styles.imgScrim}>
                <span className={styles.scrimLabel}>{data.classSizeWelcomeText}</span>
              </div>
            </div>

            <div
              className={styles.cardBody}
              dangerouslySetInnerHTML={{ __html: data.classSizePara }}
            />
          </article>

          {/* ── VERTICAL DIVIDER ── */}
          <div className={styles.vertDivider} aria-hidden="true">
            <div className={styles.dividerLine} />
            <span className={styles.dividerGlyph}>ॐ</span>
            <div className={styles.dividerLine} />
          </div>

          {/* ── CAMPUS ── */}
          <article
            className={`${styles.card} ${styles.reveal}`}
            style={{ "--d": "0.14s" } as React.CSSProperties}
          >
            <header className={styles.cardHeader}>
              <span className={styles.superLabel}>{data.campusSuperLabel}</span>
              <h2 className={styles.cardTitle}>{data.campusTitle}</h2>
              <div className={styles.titleRule} />
            </header>

            {/* Campus primary image — full-width, consistent with class size card */}
            {data.campusImages?.[0] && (
              <div className={styles.imgWrap}>
                <img
                  src={getImageUrl(data.campusImages[0])}
                  alt="AYM Yoga Campus"
                  className={styles.cardImg}
                />
                <div className={styles.imgScrim}>
                  <span className={styles.scrimLabel}>AYM Yoga Campus</span>
                </div>
              </div>
            )}

            {/* Optional: small strip of extra campus images if more than 1 exist */}
            {data.campusImages?.length > 1 && (
              <div className={styles.campusStrip}>
                {data.campusImages.slice(1, 4).map((img, idx) => (
                  <div key={idx} className={styles.stripCell}>
                    <img
                      src={getImageUrl(img)}
                      alt={`Campus view ${idx + 2}`}
                      className={styles.stripImg}
                    />
                  </div>
                ))}
              </div>
            )}

            <div
              className={styles.cardBody}
              dangerouslySetInnerHTML={{ __html: data.campusPara }}
            />
          </article>
        </div>

        {/* ── Mid ornament ── */}
        <div className={styles.ornament} aria-hidden="true">
          <span className={styles.ornRule} />
          <span className={styles.ornGlyphs}>✦ &nbsp; ॐ &nbsp; ✦</span>
          <span className={styles.ornRule} />
        </div>

        {/* ══════════════════════════════
            AMENITIES ROW
        ══════════════════════════════ */}
        <div className={styles.amenRow}>

          {/* Left — text */}
          <div className={`${styles.amenText} ${styles.reveal}`}>
            <span className={styles.superLabel}>{data.amenitiesSuperLabel}</span>
            <h2 className={styles.amenTitle}>{data.amenitiesTitle}</h2>
            <div className={styles.titleRule} />

            <div
              className={styles.amenPara}
              dangerouslySetInnerHTML={{ __html: data.amenitiesMainPara }}
            />

            {data.amenitiesSubLabel && (
              <p className={styles.amenSub}>{data.amenitiesSubLabel}</p>
            )}

            <ul className={styles.amenList}>
              {data.amenities?.map((item, i) => (
                <li
                  key={i}
                  className={`${styles.amenItem} ${styles.reveal}`}
                  style={{ "--d": `${i * 0.055}s` } as React.CSSProperties}
                >
                  <span className={styles.amenDot} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image */}
          <div
            className={`${styles.amenMedia} ${styles.reveal}`}
            style={{ "--d": "0.18s" } as React.CSSProperties}
          >
            <div className={styles.featureImgWrap}>
              <img
                src={getImageUrl(data.amenityImage)}
                alt="Yoga studio interior"
                className={styles.featureImg}
              />
              {data.amenityMosaicTag && (
                <div className={styles.featureOverlay}>
                  <span className={styles.featureTag}>{data.amenityMosaicTag}</span>
                </div>
              )}
            </div>

            <div className={styles.featureFooter}>
              <div className={styles.footerChip}>
                <span>🧘</span>
                <span>Sacred Space</span>
              </div>
              <span className={styles.footerSep}>·</span>
              <div className={styles.footerChip}>
                <span>🌿</span>
                <span>Pure Vibe</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.bottomBar} aria-hidden="true" />
    </section>
  );
};

export default ClassCampusAmenities;