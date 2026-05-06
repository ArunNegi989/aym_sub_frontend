// WhyAYMSection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../../assets/style/Home/Whyaymsection.module.css";
import Image from "next/image";
import api from "@/lib/api";

/* ══════════════════════════════════════════════
   TYPES
══════════════════════════════════════════════ */
interface Feature {
  title: string;
  desc: string;
}

interface WhyAYMData {
  _id: string;
  superTitle: string;
  mainTitle: string;
  introPara: string;
  imageSrc: string;
  imageAlt: string;
  imgBadgeYear: string;
  imgQuote: string;
  sideFeatures: Feature[];
  bottomFeatures: Feature[];
}

/* ══════════════════════════════════════════════
   IMAGE URL HELPER
══════════════════════════════════════════════ */
const getImageUrl = (src: string): string => {
  if (!src) return "";
  if (src.startsWith("http")) return src;
  return `${process.env.NEXT_PUBLIC_API_URL}${src}`;
};

/* ══════════════════════════════════════════════
   SKELETON LOADER
══════════════════════════════════════════════ */
const Skeleton = () => (
  <section className={styles.section}>
    <div className={styles.topBorder} />
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.skeletonLine} style={{ width: "220px", margin: "0 auto 1rem" }} />
        <div className={styles.skeletonLine} style={{ width: "80%", margin: "0 auto 0.6rem" }} />
        <div className={styles.skeletonLine} style={{ width: "60%", margin: "0 auto 1.5rem" }} />
        <div className={styles.skeletonLine} style={{ width: "70%", margin: "0 auto", height: "80px" }} />
      </div>
      <div className={styles.body}>
        <div className={styles.skeletonLine} style={{ width: "100%", height: "400px" }} />
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════ */
export const WhyAYMSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [data, setData] = useState<WhyAYMData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/why-aym/get-all-why-aym");
        setData(res.data.data || null);
      } catch (err) {
        console.error("WhyAYMSection fetch error:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;
    const timer = setTimeout(() => {
      const els = sectionRef.current?.querySelectorAll(`.${styles.fadeUp}`);
      if (!els) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add(styles.fadeUpVisible);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [data]);

  if (isLoading) return <Skeleton />;
  if (error || !data) return null;

  const heroImageUrl = getImageUrl(data.imageSrc);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Sacred geometry background */}
      <div className={styles.ambientBg}>
        <span className={`${styles.bgSymbol} ${styles.symbol1}`}>🕉</span>
        <span className={`${styles.bgSymbol} ${styles.symbol2}`}>☯</span>
        <span className={`${styles.bgSymbol} ${styles.symbol3}`}>ॐ</span>
        <span className={`${styles.bgSymbol} ${styles.symbol4}`}>✧</span>
        <span className={`${styles.bgSymbol} ${styles.symbol5}`}>卐</span>
        <span className={`${styles.bgSymbol} ${styles.symbol6}`}>✦</span>
        <span className={`${styles.bgSymbol} ${styles.symbol7}`}>🧘</span>
        <span className={`${styles.bgSymbol} ${styles.symbol8}`}>🔆</span>
      </div>

      <div className={styles.topBorder} />
      <div className={styles.container}>
        {/* ══ HEADER ══ */}
        <div className={`${styles.header} ${styles.fadeUp}`}>
          <span className={styles.superTitleDecor}>✦</span>
          <p className={styles.superTitle}>{data.superTitle}</p>
          <span className={styles.superTitleDecor}>✦</span>

          <h2
            className={styles.mainTitle}
            dangerouslySetInnerHTML={{ __html: data.mainTitle }}
          />

          <div className={styles.omDivider}>
            <span className={styles.dividerLine} />
            <div className={styles.omPulse}>
              <span className={styles.omSymbol}>ॐ</span>
            </div>
            <span className={styles.dividerLine} />
          </div>

          <div
            className={styles.introPara}
            dangerouslySetInnerHTML={{ __html: data.introPara }}
          />
        </div>

        {/* ══ BODY — image + side features ══ */}
        <div className={styles.body}>
          {/* Image Column */}
          <div className={`${styles.imageCol} ${styles.fadeUp}`}>
            <div className={styles.imageCard}>
              <div className={styles.imageWrap}>
                <div className={styles.imageFrame}>
                  {heroImageUrl ? (
                    data.imageSrc.startsWith("http") ? (
                      <img
                        src={heroImageUrl}
                        alt={data.imageAlt || "AYM Yoga School"}
                        className={styles.heroImg}
                      />
                    ) : (
                      <Image
                        src={heroImageUrl}
                        alt={data.imageAlt || "AYM Yoga School"}
                        className={styles.heroImg}
                        width={600}
                        height={800}
                        unoptimized
                      />
                    )
                  ) : null}
                  
                  <div className={styles.cornerTL} />
                  <div className={styles.cornerBR} />
                </div>

                {data.imgBadgeYear && (
                  <div className={styles.imgBadge}>
                    <div className={styles.badgeInner}>
                      <span className={styles.badgeIcon}>🔆</span>
                      <span className={styles.badgeYear}>{data.imgBadgeYear}</span>
                      <span className={styles.badgeText}>Years of<br />Sacred Wisdom</span>
                    </div>
                  </div>
                )}
              </div>

              {data.imgQuote && (
                <div className={styles.quoteContainer}>
                  <svg className={styles.quoteIcon} viewBox="0 0 24 24" width="32" height="32">
                    <path d="M10 11H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a8 8 0 0 1-8 8v-2a6 6 0 0 0 6-6z" fill="#F15505" opacity="0.6"/>
                    <path d="M20 11h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a8 8 0 0 1-8 8v-2a6 6 0 0 0 6-6z" fill="#F15505" opacity="0.6"/>
                  </svg>
                  <blockquote className={styles.imgQuote}>
                    <span className={styles.qMarkLeft}>"</span>
                    {data.imgQuote}
                    <span className={styles.qMarkRight}>"</span>
                  </blockquote>
                </div>
              )}
            </div>
          </div>

          {/* Side Features Column — ALL FROM API */}
          {data.sideFeatures && data.sideFeatures.length > 0 && (
            <div className={styles.featuresCol}>
              <div className={styles.featuresHeader}>
                <span className={styles.featuresLabel}>✦ Why Choose Us ✦</span>
                <div className={styles.featuresSubline}>Core Pillars of AYM Experience</div>
              </div>
              
              <div className={styles.featuresGrid}>
                {data.sideFeatures.slice(0, 4).map((f, i) => (
                  <div
                    key={i}
                    className={`${styles.featureCard} ${styles.fadeUp}`}
                    style={{ transitionDelay: `${i * 0.08}s` } as React.CSSProperties}
                  >
                    <div className={styles.featureNumber}>0{i + 1}</div>
                    <div className={styles.featureContent}>
                      <div className={styles.featureIcon}>
                        {i === 0 && "🧘"}
                        {i === 1 && "🌸"}
                        {i === 2 && "🏔️"}
                        {i === 3 && "🔔"}
                      </div>
                      <div className={styles.featureText}>
                        <strong
                          className={styles.featureTitle}
                          dangerouslySetInnerHTML={{ __html: f.title }}
                        />
                        <span dangerouslySetInnerHTML={{ __html: f.desc }} />
                      </div>
                    </div>
                    <div className={styles.featureConnector} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ══ ORNATE DIVIDER — Only show if bottom features exist ══ */}
        {data.bottomFeatures && data.bottomFeatures.length > 0 && (
          <div className={styles.midDivider}>
            <span className={styles.dividerLineLeft} />
            <div className={styles.midPatternWrap}>
              <span className={styles.midPattern}>✦</span>
              <span className={styles.midPattern}>卐</span>
              <span className={styles.midPatternOm}>ॐ</span>
              <span className={styles.midPattern}>卐</span>
              <span className={styles.midPattern}>✦</span>
            </div>
            <span className={styles.dividerLineRight} />
          </div>
        )}

        {/* ══ BOTTOM FEATURES - ALTERNATING LEFT/RIGHT LAYOUT — ALL FROM API ══ */}
        {data.bottomFeatures && data.bottomFeatures.length > 0 && (
          <div className={styles.bottomFeatures}>
            <div className={styles.bottomFeaturesHeader}>
              <span className={styles.bottomLabel}>✦ What We Offer ✦</span>
              <h3 className={styles.bottomTitle}>Our Signature Programs</h3>
            </div>
            
            <div className={styles.bottomAlternatingGrid}>
              {data.bottomFeatures.map((f, i) => (
                <div
                  key={i}
                  className={`${styles.bottomCard} ${i % 2 === 0 ? styles.cardLeft : styles.cardRight} ${styles.fadeUp}`}
                  style={{ transitionDelay: `${i * 0.12}s` } as React.CSSProperties}
                >
                  <div className={styles.bottomCardInner}>
                    <div className={styles.cardNumber}>{(i + 1).toString().padStart(2, '0')}</div>
                    <div className={styles.cardIcon}>
                      {i === 0 && "🎓"}
                      {i === 1 && "🌿"}
                      {i === 2 && "🧘"}
                      {i === 3 && "🏅"}
                    </div>
                    <div className={styles.cardContent}>
                      <strong
                        className={styles.cardTitle}
                        dangerouslySetInnerHTML={{ __html: f.title }}
                      />
                      <span dangerouslySetInnerHTML={{ __html: f.desc }} />
                    </div>
                    <div className={styles.cardArrow}>→</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={styles.bottomBorder} />
    </section>
  );
};

export default WhyAYMSection;