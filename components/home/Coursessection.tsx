"use client";
import React, { useState, useEffect } from "react";
import styles from "../../assets/style/Home/Coursessection.module.css";
import api from "@/lib/api";
import Link from "next/link";

interface CourseLink {
  label: string;
  href: string;
}

interface Course {
  _id: string;
  image: string;
  imageAlt: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  links: CourseLink[];
  enrollHref: string;
  exploreLabel: string;
  exploreHref: string;
  priceINR: string;
  priceUSD: string;
  totalSeats: number;
  availableSeats: number;
  order: number;
}

const getImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
};

export const CoursesSection: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get("/courses-section");
        console.log("API Response:", res.data);

        let coursesData = [];
        if (res.data?.data && Array.isArray(res.data.data)) {
          coursesData = res.data.data;
        } else if (Array.isArray(res.data)) {
          coursesData = res.data;
        } else if (res.data?.courses && Array.isArray(res.data.courses)) {
          coursesData = res.data.courses;
        }

        setCourses(coursesData);
      } catch (err) {
        console.error("Failed to fetch courses", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.topBorder} />
        <div className={styles.container}>
          <div className={styles.courseList}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className={styles.skeletonCard} />
            ))}
          </div>
        </div>
        <div className={styles.bottomBorder} />
      </section>
    );
  }

  if (!courses.length) {
    return (
      <section className={styles.section}>
        <div className={styles.topBorder} />
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <p>No courses available at the moment. Please check back later.</p>
          </div>
        </div>
        <div className={styles.bottomBorder} />
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.topBorder} />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Since 2005</span>
          <p className={styles.superTitle}>Authentic Yoga Education Since 2005</p>
          <h2 className={styles.mainTitle}>
            Explore Our Yoga Teacher Training Courses &amp; Retreats
          </h2>
          <div className={styles.omDivider}>
            <span className={styles.dividerLine} />
            <span className={styles.omSymbol}>ॐ</span>
            <span className={styles.dividerLine} />
          </div>
        </div>

        {/* Cards */}
        <div className={styles.courseList}>
          {courses.map((course, idx) => {
            const filled = course.totalSeats - course.availableSeats;
            const pct =
              course.totalSeats > 0 ? (filled / course.totalSeats) * 100 : 0;
            const isFull = course.availableSeats <= 0;

            return (
              <article
                key={course._id || idx}
                className={`${styles.courseCard} ${
                  idx % 2 === 1 ? styles.cardAlt : ""
                }`}
              >
                {/* LEFT — text content + CTA strip */}
                <div className={styles.leftColumn}>
                  <div className={styles.content}>
                    <div className={styles.titleBlock}>
                      <h3 className={styles.courseTitle}>{course.title}</h3>
                      <div className={styles.titleUnderline} />
                      <div className={styles.courseMeta}>
                        <div className={styles.metaItem}>
                          <span className={styles.metaIcon}>⏱️</span>
                          <span className={styles.metaLabel}>Duration:</span>
                          <span className={styles.metaValue}>{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: course.description }}
                    />

                    {course.links?.length > 0 && (
                      <div className={styles.linkGrid}>
                        {course.links.map((link, i) => (
                          <Link key={i} href={link.href} className={styles.linkCard}>
                            <span className={styles.linkIcon}>📘</span>
                            <span className={styles.linkLabel}>{link.label}</span>
                            <span className={styles.linkArrow}>→</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA strip — pinned to bottom */}
                  <div className={styles.ctaStrip}>
                    <div className={styles.priceCards}>
                      <div className={styles.priceCard}>
                        <span className={styles.priceLabel}>INR</span>
                        <span className={styles.priceINR}>{course.priceINR}</span>
                      </div>
                      <div className={styles.priceCard}>
                        <span className={styles.priceLabel}>USD</span>
                        <span className={styles.priceUSD}>{course.priceUSD}</span>
                      </div>
                    </div>

                    <div className={styles.seatsBlock}>
                      <div className={styles.seatsInfo}>
                        <div className={styles.seatsItem}>
                          <span className={styles.seatsIcon}>👥</span>
                          <span className={styles.seatsLabel}>Total</span>
                          <span className={styles.seatsValue}>{course.totalSeats}</span>
                        </div>
                        <div className={styles.seatsItem}>
                          <span className={styles.seatsIcon}>🪑</span>
                          <span className={styles.seatsLabel}>Left</span>
                          <span
                            className={`${styles.seatsValue} ${
                              course.availableSeats <= 5 ? styles.seatsUrgent : ""
                            }`}
                          >
                            {course.availableSeats}
                          </span>
                        </div>
                      </div>
                      <div className={styles.seatsBar}>
                        <div
                          className={styles.seatsBarFill}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>

                    <div className={styles.buttonGroup}>
                      {isFull ? (
                        <span className={`${styles.btnEnroll} ${styles.btnEnrollDisabled}`}>
                          Fully Booked
                        </span>
                      ) : (
                        <Link
                          href={`/yoga-registration?courseId=${course._id}`}
                          className={styles.btnEnroll}
                        >
                          <span>Enroll Now</span>
                          <span className={styles.btnIcon}>→</span>
                        </Link>
                      )}
                      <Link href={course.exploreHref} className={styles.btnExplore}>
                        <span>{course.exploreLabel || "Explore"}</span>
                        <span className={styles.btnIcon}>↗</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* RIGHT — image panel, fills full card height */}
                <div className={styles.imageWrapper}>
                  <img
                    src={getImageUrl(course.image)}
                    alt={course.imageAlt || course.title}
                    className={styles.courseImage}
                    loading="lazy"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.onerror = null;
                      t.style.opacity = "0";
                    }}
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.levelBadge}>{course.level}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className={styles.bottomBorder} />
    </section>
  );
};

export default CoursesSection;