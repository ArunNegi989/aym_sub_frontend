import React from "react";
import styles from "@/assets/style/yoga-teacher-training/Yogatraining.module.css";
import Link from "next/link";

const cityLinks: { name: string; href: string }[] = [
  {
    name: "Jaipur",
    href: "/yoga-teacher-training/yoga-teacher-training-Jaipur-94-2194",
  },
  {
    name: "Mysore",
    href: "/yoga-teacher-training/yoga-teacher-training-Mysore-94-2170",
  },
  {
    name: "Haryana",
    href: "/yoga-teacher-training/yoga-teacher-training-Haryana-94-2186",
  },
  { name: "Agra", href: "/yoga-teacher-training/yoga-teacher-training-Agra-94-2197" },
  {
    name: "Mumbai",
    href: "/yoga-teacher-training/yoga-teacher-training-Mumbai-94-2175",
  },
  {
    name: "Coimbatore",
    href: "/yoga-teacher-training/yoga-teacher-training-Coimbatore-94-2182",
  },
  {
    name: "Uttrakhand",
    href: "/yoga-teacher-training/yoga-teacher-training-Uttrakhand-94-2173",
  },
  {
    name: "Varkala",
    href: "/yoga-teacher-training/yoga-teacher-training-Varkala-94-2188",
  },
  {
    name: "Gokarna",
    href: "/yoga-teacher-training/yoga-teacher-training-Gokarna-94-2180",
  },
  {
    name: "Tamil Nadu",
    href: "/yoga-teacher-training/yoga-teacher-training-Tamil-Nadu-94-2187",
  },
  { name: "Goa", href: "/yoga-teacher-training/yoga-teacher-training-Goa-94-2167" },
  { name: "Kochi", href: "/yoga-teacher-training/yoga-teacher-training-Kochi-94-2190" },
  {
    name: "Munger",
    href: "/yoga-teacher-training/yoga-teacher-training-Munger-94-2177",
  },
  {
    name: "Dharamshala",
    href: "/yoga-teacher-training/yoga-teacher-training-Dharamshala-94-2169",
  },
  {
    name: "Lonavala",
    href: "/yoga-teacher-training/yoga-teacher-training-Lonavala-94-2174",
  },
  {
    name: "New Delhi",
    href: "/yoga-teacher-training/yoga-teacher-training-New-Delhi-94-2176",
  },
  {
    name: "Kerala",
    href: "/yoga-teacher-training/yoga-teacher-training-Kerala-94-2168",
  },
  {
    name: "Puducherry",
    href: "/yoga-teacher-training/yoga-teacher-training-Puducherry-94-2185",
  },
  {
    name: "Pushkar",
    href: "/yoga-teacher-training/yoga-teacher-training-Pushkar-94-2192",
  },
  {
    name: "Sikkim",
    href: "/yoga-teacher-training/yoga-teacher-training-Sikkim-94-2198",
  },
  {
    name: "Gurugram",
    href: "/yoga-teacher-training/yoga-teacher-training-Gurugram-94-2195",
  },
  { name: "Pune", href: "/yoga-teacher-training/yoga-teacher-training-Pune-94-2171" },
  {
    name: "Chennai",
    href: "/yoga-teacher-training/yoga-teacher-training-Chennai-94-2184",
  },
  {
    name: "Varanasi",
    href: "/yoga-teacher-training/yoga-teacher-training-Varanasi-94-2183",
  },
  {
    name: "Maharashtra",
    href: "/yoga-teacher-training/yoga-teacher-training-Maharashtra-94-2189",
  },
  {
    name: "Arambol",
    href: "/yoga-teacher-training/yoga-teacher-training-Arambol-94-2181",
  },
  {
    name: "Thiruvananthapuram",
    href: "/yoga-teacher-training/yoga-teacher-training-Thiruvananthapuram-94-2193",
  },
  {
    name: "Kolkata",
    href: "/yoga-teacher-training/yoga-teacher-training-Kolkata-94-2196",
  },
  {
    name: "Rishikesh",
    href: "/yoga-teacher-training/yoga-teacher-training-Rishikesh-94-2166",
  },
  {
    name: "Himachal Pradesh",
    href: "/yoga-teacher-training/yoga-teacher-training-Himachal-Pradesh-94-2178",
  },
  
  {
    name: "Bengaluru",
    href: "/yoga-teacher-training/yoga-teacher-training-Bengaluru-94-2179",
  },
  {
    name: "Auroville",
    href: "/yoga-teacher-training/yoga-teacher-training-Auroville-94-2191",
  },
];

const YogaTrainingPuducherry: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.a} />
      <div className={styles.container}>
        {/* PAGE TITLE */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
          Yoga Teacher Training in Puducherry | International Yoga Certification
          </h1>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineLine} />
          </div>
        </div>

        {/* SECTION 1 — Image Left */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80&fit=crop"
              alt="Enrich Your Knowledge in Profound Level Yoga"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Best Yoga School in Puducherry for Professional Yoga Teacher Training 
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            The Association for Yoga and Meditation is a Yoga School in Puducherry that people trust. The Association for Yoga and Meditation is committed to teaching people about Yoga in a way.

The teacher training courses at The Association for Yoga and Meditation are made to teach people a lot about Yoga. The Association for Yoga and Meditation teaches people about the philosophy of Yoga and the anatomy of the body. The Association for Yoga and Meditation also teaches people about meditation and pranayama and how to align their bodies when they do Yoga.

The yoga trainers at The Association for Yoga and Meditation are. They help each student one on one. The certified yoga trainers at The Association for Yoga and Meditation want to make sure every student of The Association for Yoga and Meditation feels confident and can teach Yoga to others. The students at The Association for Yoga and Meditation also learn about the ways of Yoga.

            </p>
          </div>
        </div>

        {/* SECTION 2 — Image Right */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80&fit=crop"
              alt="Yoga School in Puducherry"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Why Choose Our Yoga Teacher Training Course in Puducherry?
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Our Yoga Teacher Training Course in Puducherry is specifically designed to help students acquire the knowledge, experience and confidence to become successful Yoga teachers and promote Yoga across the globe. Our comprehensive Yoga Teacher training course comprises International Yoga Teacher Certification, Yoga Therapy training, authentic Hatha Yoga and classical yoga practices, pranayama and meditation practices, Yoga philosophy and Yoga lifestyle course, human anatomy and physiology, teaching methodology and practice sessions, alignment, adjustment and injury prevention training. We have small class size for personalized attention, individual guidance and individual attention for each student to provide sufficient learning and support for everybody.
All the yoga teachers with valid certification are dedicated and aim to teach our students how to comprehend the meaning ofYoga and how to develop a sustainable personal practice and effective teaching techniques.

            </p>
          </div>
        </div>

        {/* SECTION 3 — Image Left */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=700&q=80&fit=crop"
              alt="Enroll With Us to Learn Authentic Yoga Lessons"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Learn Authentic Yoga from Experienced Teachers
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            In this we create our YTT course in Pondicherry for students with ability, know-how and conviction to spread yoga and the teaching of yoga. Your Yoga Instructor preparation course in Puducherry in Hatha Yoga courses in India comprises: yoga instructor qualification (approved worldwide),yoga therapy training, and traditional practices Hatha and classical, Pranayama in India, techniques of reflection, yóga philosophies along with ways of living, knowledge of the human anatomy and physiology, approaches toward the act of Yoga as a tool on education of your trainees, in addition to modification/positioning and correction of damage. YTT in Pudicherry sessions can be very limited and designed so that students have devoted awareness, personalization help as well as a sincere care through the path of the study course.
            </p>
          </div>
        </div>

        {/* SECTION 4 — Image Right */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop"
              alt="Advanced Yoga Teacher Training in Puducherry"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Experience Peace, Wellness, and Personal Growth
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            At the Association for Yoga and Meditation we think that yoga is something you can do in your life to feel more balanced and at peace with yourself. Our goal at the Association for Yoga and Meditation is to help people become yoga teachers who really care about others, know a lot about yoga and feel confident when they teach.
We want these yoga teachers to help people in their communities be healthier by teaching them about yoga. You can join our Yoga Teacher Training in Puducherry. Be part of a big group of people from all around the world who want to help others be healthy, think more clearly and feel good about themselves through yoga.

            </p>
          </div>
        </div>

        {/* SECTION 5 — Image Left */}
        <div
          className={`${styles.section} ${styles.sectionImageLeft}`}
          style={{ borderBottom: "none" }}
        >
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&fit=crop"
              alt="Choose the Peaceful Way of Life with Us"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Yoga Therapy Teacher Training
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            In this Yoga Therapy training, you'll receive an overview of the therapeutic applications of yoga, and guidance on how you may be able to apply yoga practices for increased well-being and healing- physically, emotionally, and mentally. This program guides you in discovering the use of carefully chosen yogic practices for: enhancing mobility, maintaining a healthy structure and posture, navigating stress encountered in daily life, supporting the nervous system, clarity of thought, fostering self-healing abilities, and balancing emotions. 
You will learn various yoga methods, from poses to breathing techniques and meditation, all designed to encourage a sense of relaxation and mindfulness- practices that you'll learn to tailor specifically to individuals' capabilities and needs. The aim is to help future teachers learn how to best accommodate each individual and their health, wellness goals, and overall lifestyle and well-being with thoughtfully curated, personalized sequences that enable effective therapeutic support.

            </p>
          </div>
        </div>

        {/* CITY LINKS */}
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
      <div className={styles.a} />
    </div>
  );
};

export default YogaTrainingPuducherry;
