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
const YogaTrainingHaryana: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Top border */}
      <div className={styles.a} />

      <div className={styles.container}>
        {/* ══════════════════════════════════════
            PAGE TITLE
        ══════════════════════════════════════ */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Yoga Teacher Training in Haryana</h1>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineLine} />
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 1 — Image Left
            "Certified Yoga Teacher Training in Haryana"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&fit=crop"
              alt="Certified Yoga Teacher Training in Haryana"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
              Certified Yoga Teacher Training in Haryana
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            To become a certified yoga instructor you can join our Yoga Teacher Training in Haryana. This training is for people who're new to yoga, people who already practice yoga and people who want to teach yoga. Our training program teaches you about yoga. We combine yoga ideas with new ways of teaching. This helps you feel more confident, get better at yoga and learn how to teach others. Our Yoga Teacher Training in Haryana is a place to learn because it is calm and peaceful.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 2 — Image Right
            "Yoga Course in Haryana"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80&fit=crop"
              alt="Yoga Course in Haryana"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
              Yoga Course in Haryana
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Our Yoga Course in Haryana is a way for students to get healthy and feel good. The Yoga Course in Haryana is for everyone no matter if you are just starting out or if you already know some yoga. You can learn about Hatha Yoga and Ashtanga Yoga. How to do the poses just right. You will also learn how to breathe and control your breath and about meditation and the ideas behind yoga. Our Yoga Course in Haryana teaches you about the body and how to teach yoga to people. Our teachers are very good at yoga. They help each student one on one. 

They want to make sure you feel good about what you're doing and that you can become a great yoga teacher. If you have questions the teachers are always there to help you. The Yoga Course in Haryana is in a peaceful place so you can leave your worries behind and just focus on yoga.

            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 3 — Image Left
            "Why should you choose a yoga course in Haryana?"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80&fit=crop"
              alt="Why should you choose a yoga course in Haryana"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
              Why should you choose a yoga course in Haryana?
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Choosing a yoga school is a decision when you want to learn yoga. Our yoga school is a place to learn because we have teachers who have a lot of experience. They teach us things like Yoga Asanas and Pranayama and Meditation and Yoga Philosophy and Anatomy and Physiology and Adjustments and Teaching Methodology.

At our yoga school in Haryana students get to learn in a peaceful place. We make sure each student gets the help they need from our teachers. This helps them to focus on their yoga practice and also on their growth.

            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 4 — Image Right
            "Online Courses of Yoga Teacher Training in Haryana"
        ══════════════════════════════════════ */}
        <div
          className={`${styles.section} ${styles.sectionImageRight}`}
          style={{ borderBottom: "none" }}
        >
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop"
              alt="Online Courses of Yoga Teacher Training in Haryana"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
              Online Courses of Yoga Teacher Training in Haryana
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Managing work, family and personal responsibilities can make it hard to go to yoga classes in person. That is why our Online Yoga Teacher Training in Haryana gives students the chance to learn from anywhere and at their pace. The online yoga certification program has live classes, high-quality recorded video lessons, complete study materials, updated course modules, practice assignments, teacher support and a flexible learning schedule. Students can look at course materials anytime. Go back to lessons whenever they want, which is great for people who work, take care of the home or live in different countries.

After finishing the training students get a recognized Yoga Teacher Training Certification that helps them begin teaching or keep improving their yoga practice. The flexible learning method lets students handle their learning along with their work, family and personal responsibilities while using the course materials and lessons based on their schedule.

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

export default YogaTrainingHaryana;
