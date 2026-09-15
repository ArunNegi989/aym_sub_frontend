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
const YogaTrainingThiruvananthapuram: React.FC = () => {
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
            Certified Yoga Teaching Training in Thiruvananthapuram
          </h1>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineLine} />
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 1 — Image Left
            "Best Yoga School in Thiruvananthapuram"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop"
              alt="Best Yoga School in Thiruvananthapuram"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Become a Certified Yoga Teacher with the Association for Yoga and Meditation
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            The Association for Yoga and Meditation has a Yoga Teacher Training program that people really like and trust in Thiruvananthapuram. This program is for people who want to become yoga teachers, for wellness professionals and for people who really like yoga. The Association for Yoga and Meditation program teaches people about yoga in a way that combines yoga ideas with new ways of teaching. This helps students learn what they need to know to become yoga teachers.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 2 — Image Right
            "Advanced Yoga Classes with Experienced Teachers"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80&fit=crop"
              alt="Advanced Yoga Classes with Experienced Teachers"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Advanced Yoga Teacher Training with Experienced Instructors
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Our Yoga Teacher Training in Thiruvananthapuram is taught by Yoga Teacher Training instructors who really know what they are doing and love Yoga Teacher Training. They teach us everything we need to know about Yoga Teacher Training.
We learn by doing things and by listening to our Yoga Teacher Training instructors.
Our Yoga Teacher Training covers a lot of things like Traditional Yoga Asanas and Pranayama and Breath Control and Meditation Techniques and Yoga Philosophy and Anatomy and Physiology and Teaching Methodology and Alignment and Adjustment Techniques and Classroom Management Skills.

            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 3 — Image Left
            "Become a Certified Yoga Teacher Today"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80&fit=crop"
              alt="Become a Certified Yoga Teacher Today"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Internationally Recognized Yoga Teacher Certification 
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Our yoga teacher training program is a way to become a yoga teacher. You will learn much about yoga. You will feel confident when you are teaching yoga. When you finish the course you get a Yoga Teacher Certification that people know all over the world. This means you can teach yoga at lots of places like wellness centers, yoga studios, fitness clubs, retreats, schools and even have private classes anywhere in the world.

If you want to teach yoga as a job or you just want to learn more about yoga our certification program will help you with your yoga goals. The yoga teacher training program is really good for people who want to teach yoga or for people who just want to learn more about yoga. Our yoga teacher training program will help you learn about yoga and our Yoga Teacher Certification will help you teach yoga.

            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 4 — Image Right
            "Gain Immense Knowledge to Teach Yoga"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&fit=crop"
              alt="Gain Immense Knowledge to Teach Yoga"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Why Choose Our Yoga School in Thiruvananthapuram? 
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            At the Association for Yoga and Meditation we believe yoga is more than moving the body; it is a way of life that brings balance, awareness, calmness and overall well-being. Our programs help students get better at stretching and getting stronger, gain confidence when teaching yoga, help with their health, learn good ways to teach yoga, understand the basics of yoga and grow personally while discovering a bigger sense of purpose.

By mixing yoga traditions with real teaching experience we get students ready with the knowledge and abilities they need to share real yoga education with others and become confident yoga teachers. At the Association for Yoga and Meditation yoga is very important in our lives and our education is made to help students get the skills and understanding they need to make yoga a meaningful part of their lives and their journey, as teachers.

            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 5 — Image Left
            "Enroll in the Top Yoga School at an Affordable Price"
        ══════════════════════════════════════ */}
        <div
          className={`${styles.section} ${styles.sectionImageLeft}`}
          style={{ borderBottom: "none" }}
        >
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80&fit=crop"
              alt="Enroll in the Top Yoga School at an Affordable Price"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Start Your Yoga Teaching Journey Today
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            If you want to learn about Yoga Teacher Training in Thiruvananthapuram you should start with the Association for Yoga and Meditation. They really care about teaching people yoga so they can have jobs and understand what yoga is all about.

You can sign up now for the Yoga Teacher Training. This is the step to become a certified yoga teacher. You will get help from people who know a lot about yoga and learn from a program that is based on yoga. The Yoga Teacher Training at the Association for Yoga and Meditation is a way to start your journey to become a certified yoga teacher, with the Yoga Teacher Training

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

export default YogaTrainingThiruvananthapuram;