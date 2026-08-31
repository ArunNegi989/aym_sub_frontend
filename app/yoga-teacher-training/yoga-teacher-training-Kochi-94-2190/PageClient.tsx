import React from "react";
import styles from "@/assets/style/yoga-teacher-training/Yogatraining.module.css";
import Link from "next/link";

/* ─────────────────────────────────────────────
   CITY LINKS DATA
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const YogaTrainingKochi: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Top border */}
      <div className={styles.a} />

      <div className={styles.container}>
        {/* ══════════════════════════════════════
            PAGE TITLE
        ══════════════════════════════════════ */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Yoga Teacher Training in Kochi, India – Become a Certified Yoga Instructor</h1>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineLine} />
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 1 — Image Left
            No heading — 2 paragraphs on right
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80&fit=crop"
              alt="Yoga Teacher Training in Kochi"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <p className={styles.bodyText}>
            I want to tell you about our Yoga Teacher Training in Kochi, India. This is for people who want to teach yoga for people who already practice yoga and want to learn more and for anyone who wants to know more about yoga. Our Yoga Teacher Training Course in Kochi teaches you a lot about yoga. We combine yoga traditions with new ways of teaching. This helps you learn what you need to become a yoga teacher.

Our yoga school is in a place in Kochi, Kerala. This is a place to learn yoga because you can really focus on what you are doing. You can learn about yoga and also learn about the spiritual side of India. Some people want to become yoga teachers, some people want to get better at yoga. Some people want to live a healthier life. Our Yoga Teacher Training Course in Kochi can help you do any of these things. It is a great experience that can change your life. Our Yoga Teacher Training in Kochi is very special.

            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 2 — Image Right
            2 paragraphs on left side
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop"
              alt="Yoga Teacher Training Program in Kochi"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <p className={styles.bodyText}>
            Our Yoga Teacher Training Course in Kochi is made to help people understand yoga completely. It covers the side of yoga and the ideas behind it. In this course students learn about Yoga Asanas. They find out how to do the postures correctly and how to teach them to other people. They also become more flexible and strong. They learn how to balance their bodies. The course also teaches Pranayama and Breathwork. This is about breathing techniques. These techniques help people focus. They help with stress.

They help people understand the connection between their bodies and minds.
Students also learn about Meditation and Mindfulness Practices. These practices help people become calm and clear.

            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 3 — Image Left
            "Benefits of yoga course in Kochi" — numbered list
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&fit=crop"
              alt="Benefits of yoga course in Kochi"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Benefits of Joining a Yoga Course in Kochi
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            A Yoga Course in Kochi can really help you live a balanced life. You will feel better in your body and mind. Regular yoga practice is good for you. It can make you more flexible and strong. You will have balance and posture.

You will also know your body better. A Yoga Course in Kochi teaches you about your body and mind. This helps you feel more connected to yourself. A Yoga Course in Kochi is great for people who want to feel stronger and more in control.

            </p>
            <p className={styles.bodyText} style={{ marginTop: "0.75rem" }}>
              <strong>1. Physical Fitness:</strong> The course helps improve
              flexibility, strength, and balance, leading to a healthier and
              more resilient body.
            </p>
            <p className={styles.bodyText} style={{ marginTop: "0.75rem" }}>
              <strong>2. Stress Reduction:</strong> Yoga provides effective
              relaxation techniques that help reduce stress and promote calm and
              inner peace.
            </p>
            <p className={styles.bodyText} style={{ marginTop: "0.75rem" }}>
              <strong>3. Mental Clarity:</strong> Through mindfulness and
              meditation, participants can experience improved mental clarity,
              focus, and emotional well-being.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 4 — Image Right
            Continued numbered list (4–6) + overall summary
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80&fit=crop"
              alt="Benefits of yoga course in Kochi continued"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <p className={styles.bodyText}>
              <strong>4. Self-Exploration:</strong> The course offers a
              supportive environment for self-exploration and personal growth,
              allowing participants to deepen their understanding of themselves
              and others.
            </p>
            <p className={styles.bodyText} style={{ marginTop: "0.75rem" }}>
              <strong>5. Community and Support:</strong> A yoga course fosters a
              sense of community and provides a supportive network of
              like-minded individuals on a similar journey.
            </p>
            <p className={styles.bodyText} style={{ marginTop: "0.75rem" }}>
              <strong>6. Holistic Health:</strong> Yoga encourages a holistic
              approach to health, addressing physical fitness and mental and
              spiritual well-being.
            </p>
            <p className={styles.bodyText} style={{ marginTop: "0.75rem" }}>
              Overall, the yoga course in Kochi offers a transformative
              experience beyond physical practice, nurturing a balanced and
              harmonious way of living.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 5 — Image Left
            "Why should I join the yoga course in Kochi?" — numbered list
        ══════════════════════════════════════ */}
        <div
          className={`${styles.section} ${styles.sectionImageLeft}`}
          style={{ borderBottom: "none" }}
        >
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=700&q=80&fit=crop"
              alt="Why should I join the yoga course in Kochi?"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Why is Kochi the Ideal Destination for Yoga Teacher Training? 
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Kochi is a great place to learn yoga because it has a lot of natural beauty and a deep cultural scene. You can feel the atmosphere all around you. When you are in Kochi you can see a lot of places to learn yoga and you can learn about the traditional culture of Kerala. The people are very friendly. They make you feel welcome when you are practicing yoga. You can also learn about the history of India.

The city of Kochi is very quiet. That helps you to focus on your yoga journey and think about your own personal growth. Kochi is a place to get away from your daily problems and just focus on yoga and yourself. Learning yoga, in Kochi is an experience because Kochi has everything you need to learn and grow as a yoga student.

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

export default YogaTrainingKochi;
