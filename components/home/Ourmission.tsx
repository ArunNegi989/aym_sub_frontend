// OurMission.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "../../assets/style/Home/Ourmission.module.css";
import api from "../../lib/api";

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface Block {
  heading: string;
  seoTagline?: string;
  leadBold?: string;
  paragraphs: string[];
}

interface OurMissionData {
  _id: string;
  missionBlock: Block;
  whyBlock: Block;
}

/* ─── Skeleton ───────────────────────────────────────────────────────────── */
function MissionSkeleton() {
  return (
    <section className={styles.missionSection} aria-busy="true">
      <div className={styles.outerFrame}>
        <div className={styles.innerFrame}>
          <div className={styles.missionBlock}>
            {[80, 50, 100, 100, 60].map((w, i) => (
              <div
                key={i}
                style={{
                  height: i === 0 ? 32 : 16,
                  width: `${w}%`,
                  background: "rgba(180,150,100,0.15)",
                  borderRadius: 6,
                  marginBottom: 14,
                  animation: "pulse 1.4s ease-in-out infinite",
                }}
              />
            ))}
          </div>
          <div className={styles.ornamentRow} style={{ margin: "2rem 0" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(180,150,100,0.2)" }} />
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(180,150,100,0.1)", animation: "pulse 1.4s ease-in-out infinite" }} />
            <div style={{ flex: 1, height: 1, background: "rgba(180,150,100,0.2)" }} />
          </div>
          <div className={styles.whyBlock}>
            {[70, 40, 100, 100, 55].map((w, i) => (
              <div
                key={i}
                style={{
                  height: i === 0 ? 28 : 16,
                  width: `${w}%`,
                  background: "rgba(180,150,100,0.15)",
                  borderRadius: 6,
                  marginBottom: 14,
                  animation: "pulse 1.4s ease-in-out infinite",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function OurMission() {
  const [data, setData] = useState<OurMissionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/our-mission/get-our-mission")
      .then((res) => {
        const raw = res.data?.data ?? res.data;
        const doc: OurMissionData = Array.isArray(raw) ? raw[0] : raw;
        if (doc) setData(doc);
      })
      .catch((err) => {
        console.error(
          "OurMission API error:",
          err?.response?.data ?? err.message,
        );
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <MissionSkeleton />;
  if (!data) return null;

  const { missionBlock, whyBlock } = data;

  // Split paragraphs for whyBlock to handle leadBold properly
  const firstPara = whyBlock.paragraphs[0] || "";
  const restParas = whyBlock.paragraphs.slice(1);

  return (
    <section className={styles.missionSection} aria-labelledby="mission-heading">
      {/* Decorative background elements */}
      <div className={styles.bgLotus} aria-hidden="true">❋</div>
      <div className={styles.bgMandala} aria-hidden="true">◎</div>
      <div className={styles.bgCornerTL} aria-hidden="true" />
      <div className={styles.bgCornerBR} aria-hidden="true" />
      <div className={styles.bgCornerTR} aria-hidden="true" />
      <div className={styles.bgCornerBL} aria-hidden="true" />

      <div className={styles.floatingOm} aria-hidden="true">ॐ</div>
      <div className={styles.floatingOm2} aria-hidden="true">🕉</div>

      <div className={styles.outerFrame}>
        <div className={styles.innerFrame}>
          {/* ── MISSION BLOCK ── */}
          <div className={styles.missionBlock}>
            <div className={styles.tagWrapper}>
              <span className={styles.missionTag}>✦ Our Sacred Promise ✦</span>
            </div>
            <h2 id="mission-heading" className={styles.missionHeading}>
              {missionBlock.heading}
            </h2>
            <div className={styles.headingRule} aria-hidden="true" />

            {missionBlock.seoTagline && (
              <div className={styles.seoWrapper}>
                <span className={styles.seoDecor}>✦</span>
                <p className={styles.seoTagline}>{missionBlock.seoTagline}</p>
                <span className={styles.seoDecor}>✦</span>
              </div>
            )}

            <div className={styles.missionBody}>
              {missionBlock.paragraphs.map((para, i) => (
                <div
                  key={i}
                  className={`${styles.para} ${i === 0 ? styles.firstPara : ""}`}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Decorative leaf divider */}
            {/* <div className={styles.leafDivider}>
              <span className={styles.leafIcon}>🍃</span>
              <span className={styles.leafIcon}>🌸</span>
              <span className={styles.leafIcon}>🍃</span>
            </div>
          </div> */}

          {/* ornament row */}
          <div className={styles.ornamentRow} aria-hidden="true">
            <span className={styles.ornamentLine} />
            <div className={styles.ornamentCenter}>
              <span className={styles.ornamentSymbol}>✦</span>
              <span className={styles.ornamentOm}>ॐ</span>
              <span className={styles.ornamentSymbol}>✦</span>
            </div>
            <span className={styles.ornamentLine} />
          </div>

          {/* ── WHY BLOCK ── */}
          <div className={styles.whyBlock}>
            <div className={styles.whyIconWrapper}>
              <span className={styles.whyIcon}>❀</span>
              <h3 className={styles.whyHeading}>{whyBlock.heading}</h3>
              <span className={styles.whyIcon}>❀</span>
            </div>
            <div className={styles.headingRuleSecondary} aria-hidden="true" />

            <div className={styles.whyBody}>
              {firstPara && (
                <div className={styles.firstParaWrapper}>
                  {whyBlock.leadBold && (
                    <span className={styles.leadBold}>
                      {whyBlock.leadBold}
                    </span>
                  )}
                  <span dangerouslySetInnerHTML={{ __html: firstPara }} />
                </div>
              )}
              {restParas.map((para, i) => (
                <div key={i} className={styles.para} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>

            {/* Decorative seal */}
            <div className={styles.seal}>
              <span className={styles.sealText}>Est. 2002</span>
              <span className={styles.sealDot}>•</span>
              <span className={styles.sealText}>Rishikesh</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}