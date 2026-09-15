import React from "react";
import styles from "@/assets/style/yoga-teacher-training/Yogatraining.module.css";
import Link from "next/link";

/* ─────────────────────────────────────────────
   CITY LINKS DATA
───────────────────────────────────────────── */
const cityLinks: { name: string; href: string }[] = [
  {
    name: "Jaipur",
    href: "/yoga-teacher-training/yoga-course-in-Jaipur",
  },
  {
    name: "Mysore",
    href: "/yoga-teacher-training/yoga-course-in-Mysore",
  },
  {
    name: "Haryana",
    href: "/yoga-teacher-training/yoga-course-in-Haryana",
  },
  { name: "Agra", href: "/yoga-teacher-training/yoga-course-in-Agra" },
  {
    name: "Mumbai",
    href: "/yoga-teacher-training/yoga-course-in-Mumbai",
  },
  {
    name: "Coimbatore",
    href: "/yoga-teacher-training/yoga-course-in-Coimbatore",
  },
  {
    name: "Uttrakhand",
    href: "/yoga-teacher-training/yoga-course-in-Uttrakhand",
  },
  {
    name: "Varkala",
    href: "/yoga-teacher-training/yoga-course-in-Varkala",
  },
  {
    name: "Gokarna",
    href: "/yoga-teacher-training/yoga-course-in-Gokarna",
  },
  {
    name: "Tamil Nadu",
    href: "/yoga-teacher-training/yoga-course-in-Tamil-Nadu",
  },
  { name: "Goa", href: "/yoga-teacher-training/yoga-course-in-Goa" },
  { name: "Kochi", href: "/yoga-teacher-training/yoga-course-in-Kochi" },
  {
    name: "Munger",
    href: "/yoga-teacher-training/yoga-course-in-Munger",
  },
  {
    name: "Dharamshala",
    href: "/yoga-teacher-training/yoga-course-in-Dharamshala",
  },
  {
    name: "Lonavala",
    href: "/yoga-teacher-training/yoga-course-in-Lonavala",
  },
  {
    name: "New Delhi",
    href: "/yoga-teacher-training/yoga-course-in-New-Delhi",
  },
  {
    name: "Kerala",
    href: "/yoga-teacher-training/yoga-course-in-Kerala",
  },
  {
    name: "Puducherry",
    href: "/yoga-teacher-training/yoga-course-in-Puducherry",
  },
  {
    name: "Pushkar",
    href: "/yoga-teacher-training/yoga-course-in-Pushkar",
  },
  {
    name: "Sikkim",
    href: "/yoga-teacher-training/yoga-course-in-Sikkim",
  },
  {
    name: "Gurugram",
    href: "/yoga-teacher-training/yoga-course-in-Gurugram",
  },
  { name: "Pune", href: "/yoga-teacher-training/yoga-course-in-Pune" },
  {
    name: "Chennai",
    href: "/yoga-teacher-training/yoga-course-in-Chennai",
  },
  {
    name: "Varanasi",
    href: "/yoga-teacher-training/yoga-course-in-Varanasi",
  },
  {
    name: "Maharashtra",
    href: "/yoga-teacher-training/yoga-course-in-Maharashtra",
  },
  {
    name: "Arambol",
    href: "/yoga-teacher-training/yoga-course-in-Arambol",
  },
  {
    name: "Thiruvananthapuram",
    href: "/yoga-teacher-training/yoga-course-in-Thiruvananthapuram",
  },
  {
    name: "Kolkata",
    href: "/yoga-teacher-training/yoga-course-in-Kolkata",
  },
  {
    name: "Rishikesh",
    href: "/yoga-teacher-training/yoga-course-in-Rishikesh",
  },
  {
    name: "Himachal Pradesh",
    href: "/yoga-teacher-training/yoga-course-in-Himachal-Pradesh",
  },
  
  {
    name: "Bengaluru",
    href: "/yoga-teacher-training/yoga-course-in-Bengaluru",
  },
  {
    name: "Auroville",
    href: "/yoga-teacher-training/yoga-course-in-Auroville",
  },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const YogaTrainingBengaluru: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Top border */}
      <div className={styles.a} />

      <div className={styles.container}>
        {/* ══════════════════════════════════════
            PAGE TITLE
        ══════════════════════════════════════ */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            Yoga Teacher Training in Bengaluru
          </h1>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineLine} />
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 1 — Image Left
            "Qualified yoga training in India"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80&fit=crop"
              alt="Qualified yoga training in India"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Yoga Teacher Training in Bengaluru | AYM Yoga School
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Welcome to AYM Yoga School. This is a place where you can learn Yoga Teacher Training in Bengaluru. We also have programs in Rishikesh and Goa that people from countries know about. At AYM Yoga School we want to teach people yoga. We want to share meditation and wellness programs with people who want to be yoga teachers or like yoga. We want people from over the world to come and learn with us.

If you are new to yoga or if you want to be a certified yoga instructor our teachers will help you. They will teach you yoga practices that have been around for a long time. You will learn in a place where people support and inspire you. Our teachers have a lot of experience. They will guide you through Yoga Teacher Training, at AYM Yoga School.

            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 2 — Image Right
            "Experience the art of yoga and mediatation at AYM in Bengaluru"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop"
              alt="Experience the art of yoga and meditation at AYM in Bengaluru"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Experience Authentic Yoga and Meditation in Bengaluru
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            At AYM Yoga School in Bengaluru, we combine traditional yoga knowledge with modern teaching methods to create a comprehensive learning experience. Our classes cover Yoga Asanas, Pranayama and breathing techniques, Meditation, Mantra Chanting, Yoga Philosophy, Anatomy and Physiology, and Teaching Methodology, while our skilled yoga teachers guide students through structured lessons and daily practice to develop physical strength, mental clarity, inner balance, and spiritual growth.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 3 — Image Left
            "Top yoga and mediation centre in Bengaluru" (first)
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80&fit=crop"
              alt="Top yoga and mediation centre in Bengaluru"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Best Yoga School in Bengaluru for Teacher Training
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            If you are looking for Yoga Teacher Training in Bengaluru, AYM Yoga School offers programs designed for both beginners and experienced yoga practitioners, with comprehensive courses covering Authentic Hatha Yoga, Ashtanga Yoga, Meditation Techniques, Pranayama Practice, Alignment and Adjustment, Yoga Philosophy, and Relaxation. The experienced teachers at AYM Yoga School have taught yoga internationally and provide personalized guidance to help every student develop their knowledge, strengthen their practice, and progress confidently throughout their yoga training.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 4 — Image Right
            "Top yoga and mediation centre in Bengaluru" (second — city info)
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&q=80&fit=crop"
              alt="Top yoga and mediation centre in Bengaluru"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Yoga Retreats and Holistic Wellness Programs 
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            AYM Yoga School offers yoga retreats in Bengaluru. These retreats are designed to help participants reconnect with themselves. The activities include yoga, meditation, breathwork and relaxation techniques. The retreats are for anyone who wants to reduce stress and anxiety. They are also for people who want to improve flexibility and posture. The retreats help improve well-being. They also help develop mindfulness. Participants can restore mental balance. They can experience a way of living. The yoga retreats at AYM Yoga School give an opportunity to step away from the demands of life. They allow participants to focus on health and well-being. They help cultivate inner peace
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 5 — Image Left
            "Experience the art of yoga and mediatation at AYM in Bengaluru" (city culture)
        ══════════════════════════════════════ */}
        <div
          className={`${styles.section} ${styles.sectionImageLeft}`}
          style={{ borderBottom: "none" }}
        >
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&fit=crop"
              alt="Experience the art of yoga and meditation at AYM in Bengaluru"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Why Choose AYM Yoga School Bengaluru?
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Students from over India and many other countries choose AYM Yoga School. We are really good at teaching yoga the way. AYM Yoga School is special because we have teachers who know what they are doing and have certificates to prove it. We teach yoga the way. AYM Yoga School has good training programs for people who want to be yoga teachers. We also have classes where people can meditate and learn how to breathe. Our classes are small so we can pay attention to each student. Everyone is welcome at AYM Yoga School. We have programs for people who are just starting out with yoga and for people who have been doing yoga for a time. People from different countries come to AYM Yoga School to learn together. Our main goal at AYM Yoga School is to help students learn a lot about yoga. We want students to feel confident and be able to do yoga well. We also want students to have the skills they need to teach yoga to others if they want to. AYM Yoga School wants to help students make their yoga practice better or have a career as a yoga teacher.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            CITY LINKS
        ══════════════════════════════════════ */}
        <div className={styles.citySection}>
          <h3 className={styles.cityHeading}>
            Indian Yoga is also easily reachable from :
          </h3>
          <div className={styles.cityLinksWrap}>
            {cityLinks.map((city, i) => (
              <React.Fragment key={i}>
                <Link href={city.href} className={styles.cityLink}>
                  {city.name}
                </Link>
                {i < cityLinks.length - 1 && (
                  <span className={styles.citySep}>, </span>
                )}
              </React.Fragment>
            ))}
            <span className={styles.cityDot}>.</span>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className={styles.a} />
    </div>
  );
};

export default YogaTrainingBengaluru;