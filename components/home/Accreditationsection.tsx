"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../assets/style/Home/Accreditationsection.module.css";
import api from "@/lib/api";

const getImageUrl = (path: string) => {
  if (!path) return "";
  const cleanPath = path.replace(/\\/g, "/");
  return `${process.env.NEXT_PUBLIC_API_URL}/${cleanPath}`;
};

function getYouTubeEmbedUrl(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match)
      return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`;
  }
  return null;
}

function SmartVideo({ src, poster }: { src: string; poster?: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isUserActive, setIsUserActive] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);
  const hideTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const showControls = () => {
    setIsUserActive(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setIsUserActive(false), 3000);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(src);
  if (youtubeEmbedUrl) {
    const embedSrc = `${youtubeEmbedUrl}&autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&playsinline=1`;
    return (
      <div
        style={{ position: "relative", width: "100%", height: "100%" }}
        onMouseEnter={showControls}
        onMouseMove={showControls}
        onTouchStart={showControls}
      >
        <iframe
          src={embedSrc}
          title="AYM Yoga School, Rishikesh"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
      onMouseEnter={showControls}
      onMouseMove={showControls}
      onTouchStart={showControls}
      onClick={showControls}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          cursor: "pointer",
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay controls */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(transparent, rgba(0,0,0,0.72))",
          padding: "28px 14px 10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          opacity: isUserActive ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: isUserActive ? "auto" : "none",
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            const v = videoRef.current;
            if (!v) return;
            v.paused ? v.play() : v.pause();
            showControls();
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "20px",
            padding: "2px",
          }}
        >
          ⏯
        </button>
        <button
          onClick={toggleMute}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "18px",
            padding: "2px",
          }}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          defaultValue={0}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => {
            const v = videoRef.current;
            if (!v) return;
            const vol = parseFloat(e.target.value);
            v.volume = vol;
            v.muted = vol === 0;
            setIsMuted(vol === 0);
            showControls();
          }}
          style={{ width: "70px", accentColor: "#fff", cursor: "pointer" }}
        />
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={0}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => {
            const v = videoRef.current;
            if (!v) return;
            v.currentTime = (parseFloat(e.target.value) / 100) * v.duration;
            showControls();
          }}
          style={{ flex: 1, accentColor: "#e65c00", cursor: "pointer" }}
        />
      </div>

      {!isUserActive && (
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "12px",
            background: "rgba(0,0,0,0.5)",
            color: "#fff",
            fontSize: "12px",
            padding: "4px 10px",
            borderRadius: "20px",
            backdropFilter: "blur(4px)",
            pointerEvents: "none",
          }}
        >
          🔇 Hover for controls
        </div>
      )}
    </div>
  );
}

/* ── Types ── */
interface AyushCourse {
  _id?: string;
  icon: string;
  level: string;
  name: string;
}

interface AwardCert {
  _id?: string;
  label: string;
  tag: string;
  alt?: string;
  image: string;
  descPara1?: string;
  descPara2?: string;
  metaPoint1?: string;
  metaPoint2?: string;
  metaPoint3?: string;
  metaPoint4?: string;
  pullQuote?: string;
  ayushSubtitle?: string;
  ayushCourses?: AyushCourse[];
  ayushFooter?: string;
}

function CheckIcon() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4.5L4 6.5L7.5 3"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AwardRow({ cert }: { cert: AwardCert }) {
  const metaPoints = [
    cert.metaPoint1,
    cert.metaPoint2,
    cert.metaPoint3,
    cert.metaPoint4,
  ].filter(Boolean) as string[];

  const ayushCourses: AyushCourse[] = cert.ayushCourses || [];

  return (
    <div className={styles.awardCard}>

      {/* ── TOP SAFFRON BANNER ── */}
      <div className={styles.awardTopBanner}>
        <div className={styles.awardBannerTitle}>{cert.label}</div>
        <span className={styles.awardBannerBadge}>✦ {cert.tag} ✦</span>
      </div>

      {/* ── BODY — grid: portrait-col | main-col ── */}
      <div className={styles.awardBody}>

        {/* LEFT: portrait + stats */}
        <div className={styles.awardPortraitCol}>
          <div className={styles.portraitFrame}>
            <Image
              src={getImageUrl(cert.image)}
              alt={cert.alt || cert.label}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 860px) 240px, 380px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <div className={styles.statStack}>
            <div className={styles.statBox}>
              <div className={styles.statNum}>5,000+</div>
              <div className={styles.statLbl}>Certified Graduates</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNum}>{ayushCourses.length || 6}</div>
              <div className={styles.statLbl}>Gov. Programs</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNum}>Global</div>
              <div className={styles.statLbl}>Recognition</div>
            </div>
          </div>
        </div>

        {/* RIGHT: description + courses */}
        <div className={styles.awardMainCol}>

          {/* Description */}
          <div className={styles.awardDescArea}>
            <h3 className={styles.awardDescTitle}>
              Ministry of AYUSH Recognition — Government of India
            </h3>

            {cert.descPara1 && (
              <p className={styles.para}>{cert.descPara1}</p>
            )}
            {cert.descPara2 && (
              <p className={styles.para}>{cert.descPara2}</p>
            )}

            {metaPoints.length > 0 && (
              <ul className={styles.bulletList}>
                {metaPoints.map((point, i) => (
                  <li className={styles.bulletItem} key={i}>
                    <span className={styles.bulletDot}>
                      <CheckIcon />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {cert.pullQuote && (
              <blockquote className={styles.pullBlockquote}>
                "{cert.pullQuote}"
              </blockquote>
            )}
          </div>

          {/* Courses */}
          {ayushCourses.length > 0 && (
            <div className={styles.awardCoursesArea}>
              <div className={styles.coursesHeader}>
                <span className={styles.coursesPill}>
                  ✦ AYUSH Certified Courses ✦
                </span>
                {cert.ayushSubtitle && (
                  <span className={styles.coursesSubtitle}>
                    {cert.ayushSubtitle}
                  </span>
                )}
              </div>
              <div className={styles.courseChipTrack}>
                {ayushCourses.map((course, i) => (
                  <div
                    className={styles.courseChip}
                    key={course._id || i}
                  >
                    <div className={styles.chipNum}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className={styles.chipName}>{course.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── FOOTER STRIP ── */}
      <div className={styles.awardFooterStrip}>
        {cert.ayushFooter ? (
          <span dangerouslySetInnerHTML={{ __html: cert.ayushFooter }} />
        ) : (
          <span>
            All certifications are nationally recognized under the{" "}
            <strong>Ministry of AYUSH</strong> framework &amp; accepted globally
          </span>
        )}
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════ */
export const AccreditationSection: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/accreditation");
        setData(res.data.data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading…</p>;
  if (!data)   return <p>No data found</p>;

  const courseCerts: any[]       = data.courseCerts || [];
  const awardCerts: AwardCert[]  = data.awardCerts  || [];

  return (
    <>
      {/* ══════════════ AUTHENTIC SECTION ══════════════ */}
      <section className={styles.authenticSection}>
        <div className={styles.container}>

          {/* Header */}
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>{data.sectionTitle}</h2>
            <div className={styles.titleUnderline} />
          </div>

          {/* Auth grid: image LEFT | text RIGHT */}
          <div className={styles.authGrid}>
            <div className={styles.authImageCol}>
              <div className={styles.authImageFrame}>
                <div className={styles.authImageInner}>
                  <Image
                    src={getImageUrl(data.mainImage)}
                    alt={data.imageCaption}
                    width={500}
                    height={380}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    priority
                  />
                  <p className={styles.imageCaption}>{data.imageCaption}</p>
                </div>
                <div className={styles.frameCornerTL} />
                <div className={styles.frameCornerTR} />
                <div className={styles.frameCornerBL} />
                <div className={styles.frameCornerBR} />
              </div>

              <div className={styles.pullQuote}>
                <span className={styles.pullQMark}>"</span>
                {data.pullQuote}
                <span className={styles.pullQMark}>"</span>
              </div>
            </div>

            <div className={styles.authText}>
              <p className={styles.para}>{data.authPara1}</p>
              <p className={styles.para}>{data.authPara2}</p>
              <p className={styles.para}>{data.authPara3}</p>
              <p className={styles.para}>{data.authPara4}</p>
            </div>
          </div>

          {/* Video immerse: text LEFT | video RIGHT */}
          <div className={styles.videoImmerse}>
            <div className={styles.immerseBlock}>
              <h3 className={styles.immerseTitle}>{data.immerseTitle}</h3>
              <div className={styles.immerseDivider} />
              <p className={styles.para}>{data.immersePara1}</p>
              <p className={styles.para}>{data.immersePara2}</p>
              <a href={data.immerseCtaLink} className={styles.knowMoreBtn}>
                {data.immerseCtaText}{" "}
                <span className={styles.btnArrow}>→</span>
              </a>
            </div>

            <div className={styles.videoBlock}>
              <div className={styles.videoPlaceholder}>
                <SmartVideo
                  src={data.videoSrc}
                  poster="/images/video-thumbnail.jpg"
                />
              </div>
            </div>
          </div>

        </div>
        <div className={styles.bottomBorder} />
      </section>

      {/* ══════════════ RECOGNITION SECTION ══════════════ */}
      <section className={styles.recognitionSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>{data.recognitionTitle}</h2>
            <div className={styles.titleUnderline} />
          </div>

          <div className={styles.recognitionText}>
            <p className={styles.para}>{data.recognitionPara1}</p>
            <p className={styles.para}>{data.recognitionPara2}</p>
          </div>

          {/* Course Certificates */}
          {courseCerts.length > 0 && (
            <div className={styles.certsBlock}>
              <div className={styles.certsBlockHeader}>
                <span className={styles.certsBlockDecor}>✦</span>
                <h3 className={styles.certsBlockTitle}>Our Best Courses</h3>
                <span className={styles.certsBlockDecor}>✦</span>
              </div>
              <div className={styles.certsBlockLine} />
              <div className={styles.certsGrid4}>
                {courseCerts.map((cert: any, index: number) => (
                  <div className={styles.certCard} key={index}>
                    <div className={styles.certImageWrap}>
                      <Image
                        src={getImageUrl(cert.image)}
                        alt={cert.alt || cert.label}
                        fill
                        sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.certCardFooter}>
                      <span className={styles.certTag}>{cert.tag}</span>
                      <span className={styles.certCardLabel}>{cert.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards */}
          {awardCerts.length > 0 && (
            <div className={styles.certsBlock}>
              <div className={styles.certsBlockHeader}>
                <span className={styles.certsBlockDecor}>✦</span>
                <h3 className={styles.certsBlockTitle}>Awards</h3>
                <span className={styles.certsBlockDecor}>✦</span>
              </div>
              <div className={styles.certsBlockLine} />
              <div className={styles.awardsStack}>
                {awardCerts.map((cert: AwardCert, index: number) => (
                  <AwardRow key={cert._id || index} cert={cert} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default AccreditationSection;