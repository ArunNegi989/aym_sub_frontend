"use client";

import React, { useEffect, useState } from "react";
import styles from "../../assets/style/Home/Homeaboutsection.module.css";
import api from "@/lib/api";
import Link from "next/link";

interface Stat {
  value: string;
  label: string;
}

interface HomeAboutData {
  superTitle: string;
  mainTitle: string;
  stats: Stat[];
  paraOne: string;
  paraTwo: string;
  paraThree: string;
  accreditations: string[];
  quoteText: string;
  paraRight: string;
  yogaStyles: string[];
  paraSmall: string;
  ctaText: string;
  ctaLink: string;
}

export const HomeaboutSection = () => {
  const [data, setData] = useState<HomeAboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await api.get("/home-about/get-home-about");
        setData(res.data.data);
      } catch (error) {
        console.error("Failed to fetch home about");
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingSpinner} />
      </div>
    );
  }

  if (!data) return null;

  const hasStats      = Array.isArray(data.stats)          && data.stats.length > 0;
  const hasAccred     = Array.isArray(data.accreditations) && data.accreditations.length > 0;
  const hasYogaStyles = Array.isArray(data.yogaStyles)     && data.yogaStyles.length > 0;

  const estStat   = hasStats ? data.stats[0] : null;
  const restStats = hasStats ? data.stats.slice(0) : [];

  return (
    <section className={styles.section}>

      {/* ═══════════════════════════════════════════════════
          HERO — centered, est-year badge merged in
      ════════════════════════════════════════════════════ */}
      <div className={styles.hero}>
        <span className={styles.heroOm} aria-hidden="true">ॐ</span>
        <div className={styles.heroInner}>

          {/* {estStat && (
            <div className={styles.estBadge}>
              <span className={styles.estValue}>{estStat.value}</span>
              <span className={styles.estLabel}>{estStat.label}</span>
            </div>
          )} */}

          {data.superTitle && (
            <p className={styles.superTitle}>{data.superTitle}</p>
          )}

          {data.mainTitle && (
            <h2 className={styles.mainTitle}>{data.mainTitle}</h2>
          )}

          <div className={styles.titleRule}>
            <span className={styles.ruleLine} />
            <span className={styles.ruleSymbol}>◆</span>
            <span className={styles.ruleLine} />
          </div>

          {restStats.length > 0 && (
            <div className={styles.heroStats}>
              {restStats.map((s, i) => (
                <React.Fragment key={i}>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatVal}>{s.value}</span>
                    <span className={styles.heroStatLbl}>{s.label}</span>
                  </div>
                  {i < restStats.length - 1 && (
                    <span className={styles.heroStatDiv} aria-hidden="true">✦</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          ACCREDITATIONS TICKER
      ════════════════════════════════════════════════════ */}
      {hasAccred && (
        <div className={styles.tickerWrap}>
          <div className={styles.tickerLabel}>Accreditations</div>
          <div className={styles.tickerTrack}>
            {[...data.accreditations, ...data.accreditations].map((a, i) => (
              <span key={i} className={styles.tickerItem}>
                <span className={styles.tickerCheck}>✓</span>{a}
                <span className={styles.tickerSep}>·</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════
          CONTENT SECTION
      ════════════════════════════════════════════════════ */}
      
      <div className={styles.contentSection}>
<div className={styles.container}>
        {/* ── ROW A: paraOne (left) + pullQuote (right) ── */}
        <div className={styles.rowA}>
          <div className={styles.rowALeft}>
            {data.paraOne && (
              <div className={styles.para} dangerouslySetInnerHTML={{ __html: data.paraOne }} />
            )}
          </div>

          {data.quoteText && (
            <aside className={styles.pullQuote}>
              <span className={styles.pullMark} aria-hidden="true">&ldquo;</span>
              <div className={styles.pullText} dangerouslySetInnerHTML={{ __html: data.quoteText }} />
            </aside>
          )}
        </div>

        {/* ── PARA TWO — full width spanning both columns ── */}
        {data.paraTwo && (
          <div className={styles.paraFullWidth}>
            <div className={styles.para} dangerouslySetInnerHTML={{ __html: data.paraTwo }} />
          </div>
        )}

        {/* ── DIVIDER ── */}
        <div className={styles.sectionDivider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerGem}>ॐ</span>
          <span className={styles.dividerLine} />
        </div>

        {/* ── ROW B: yogaStyles (left) + paraRight/paraThree/paraSmall (right) ── */}
        <div className={styles.rowB}>
          {hasYogaStyles && (
            <div className={styles.stylesPanel}>
              <div className={styles.stylesPanelHead}>
                <span>🧘</span>
                <h4 className={styles.stylesPanelTitle}>Multi-Style Yoga Courses</h4>
              </div>
              <div className={styles.stylesTags}>
                {data.yogaStyles.map((s, i) => (
                  <span key={i} className={styles.styleTag}>{s}</span>
                ))}
              </div>
            </div>
          )}

          <div className={styles.rowBInfo}>
            {data.paraRight && (
              <div className={styles.para} dangerouslySetInnerHTML={{ __html: data.paraRight }} />
            )}
          </div>
        </div>
            {data.paraThree && (
              <div className={styles.para} dangerouslySetInnerHTML={{ __html: data.paraThree }} />
            )}
            {data.paraSmall && (
              <div className={styles.paraFullWidth} dangerouslySetInnerHTML={{ __html: data.paraSmall }} />
            )}

      </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          CTA BAND
      ════════════════════════════════════════════════════ */}
      {(data.ctaText || data.ctaLink) && (
        <div className={styles.ctaBand}>
          <span className={styles.ctaOm} aria-hidden="true">ॐ</span>
          <div className={styles.ctaInner}>
            {data.ctaText && (
              <div className={styles.ctaText} dangerouslySetInnerHTML={{ __html: data.ctaText }} />
            )}
            {data.ctaLink && (
              <Link href={data.ctaLink} className={styles.ctaBtn}>
                Explore All Courses
                <span className={styles.ctaArrow}>→</span>
              </Link>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export default HomeaboutSection;