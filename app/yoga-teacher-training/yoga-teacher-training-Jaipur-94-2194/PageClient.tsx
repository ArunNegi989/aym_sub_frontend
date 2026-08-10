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
const YogaTrainingJaipur: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Top border */}
      <div className={styles.a} />

      <div className={styles.container}>
        {/* ══════════════════════════════════════
            PAGE TITLE
        ══════════════════════════════════════ */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Yoga Teacher Training in Jaipur – Become a Certified Yoga Instructor with AYM </h1>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineLine} />
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 1 — Image Left
            "Are you looking for Teacher Training in Jaipur"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80&fit=crop"
              alt="Yoga class Rishikesh AYM school"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
              Start Your Journey Toward a Rewarding Yoga Career 
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Yoga is a lot more than moving the body - it is a journey that changes a person from the inside out. It helps the mind, the body and the spirit all grow stronger. More and more people are choosing yoga as a way to live every day. Because of this more and more people are looking for trained and certified yoga teachers across the world.
            </p>
            <p className={styles.bodyText} style={{ marginTop: "1rem" }}>
            If you are looking for the Yoga Teacher Training, in Jaipur AYM has programs that are known all over the world. These programs help you learn yoga techniques and build the confidence you need to teach others.


            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 2 — Image Right
            "Gain In-depth Knowledge from the Best Curriculum"
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=700&q=80&fit=crop"
              alt="Yoga curriculum training students"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2
              className={styles.headingScript}
              style={{ textAlign: "center" }}
            >
              Why Choose AYM for Yoga Teacher Training in Jaipur?
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Yoga is a lot more than exercising your body. It is a big change that helps your mind, body and spirit. More and more people are starting to do yoga as a way of life so the need for yoga teachers who are qualified and certified is getting bigger all around the world.

            </p>
            <p className={styles.bodyText} style={{ marginTop: "1rem" }}>
            If you are looking for a Yoga Teacher Training, in Jaipur AYM has programs that are known all around the world. These programs will help you learn yoga practices and give you the confidence you need to teach yoga to other people.

            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 3 — Image Left
            (Continuation — numbered syllabus list)
        ══════════════════════════════════════ */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80&fit=crop"
              alt="Yoga teacher guiding students in class"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
          <h2
              className={styles.headingScript}
              style={{ textAlign: "center" }}
            >
              Why Choose AYM for Yoga Teacher Training in Jaipur? 
            </h2>
            <p className={styles.bodyText}>
            At AYM we have Yoga Teacher Training programs that people know all around the world. These Yoga Teacher Training programs teach people about yoga and new ways to teach yoga. We made these Yoga Teacher Training programs so they follow the rules of the Yoga Alliance. We want our students to be able to do these things:

              :
            </p>
            <ol className={styles.numberedList}>
              <li>1. Have a yoga practice that they do every day.</li>
              <li>2. Really understand what yoga is about.</li>
              <li>3. Be teachers.</li>
              <li>4. Know how to teach a class.</li>
              <li>5. Feel confident to teach yoga to people around the world.</li>
              {/* <li>6. Anatomy and physiology.</li>
              <li>7. Breathing techniques.</li>
              <li>8. Teaching methodologies</li> */}
            </ol>
            <p className={styles.bodyText}>Our yoga teachers at AYM are experienced yoga teachers. They help each student one on one. They make sure that every single student gets the help they need with their yoga practice. At AYM you can become a certified yoga teacher. You can just learn more about yoga if you want to.</p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 4 — Image Right
            Two sub-headings + text
        ══════════════════════════════════════ */}
        <div
          className={`${styles.section} ${styles.sectionImageRight} ${styles.sectionAlignTop}`}
        >
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&fit=crop"
              alt="Yoga certification levels training Jaipur"
              className={styles.sectionImg}
              style={{ maxHeight: "640px" }}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            {/* Sub-section A */}
            <h2
              className={styles.headingScript}
              style={{ textAlign: "center" }}
            >
             Start Your Yoga Journey Today
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Yoga can really change your life in ways. It can make your body healthy, your mind strong and your heart happy. If you want to teach yoga to others you need to find a good teacher training program. This is the step to becoming a great yoga teacher who knows what they are doing and can inspire their students.
            </p>
            <p className={styles.bodyText} style={{ marginTop: "1rem" }}>
            At AYM we want to make sure that yoga is taught in a way. We also want our students to be able to teach yoga all around the world.

           

            </p>

            {/* Sub-section B */}
            <h2
              className={styles.subHeadingSerif}
              style={{ textAlign: "center" }}
            >
              Learn from Yoga Teachers Who Have Experience
            </h2>
            <p className={styles.bodyText}>
            One of the things about AYM is our group of experienced yoga teachers.
            </p>
            <p className={styles.bodyText} style={{ marginTop: "1rem" }}>
            The people who teach at AYM are really great. They are very good at yoga. They care about what they do. The yoga teachers at AYM have been practicing yoga for a time. They make sure everyone feels okay about trying things.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 5 — Image Left
            Two sub-headings + outcome list
        ══════════════════════════════════════ */}
        <div
          className={`${styles.section} ${styles.sectionImageLeft} ${styles.sectionAlignTop}`}
          style={{ borderBottom: "none" }}
        >
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop"
              alt="AYM Yoga center facilities Jaipur"
              className={styles.sectionImg}
              style={{ maxHeight: "640px" }}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            {/* Sub-section A */}
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Benefits of Joining Our Yoga Teacher Training
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            When you finish the Yoga Teacher Training program you will make your own Yoga practice better. You will learn a lot about traditional Yoga. This includes learning about the body, the ideas behind Yoga, how to meditate and how to move in a way. The program will help you become flexible, stronger and feel better overall. You will also learn how to teach Yoga classes and how to talk to your students in a way that makes sense.
            </p>
            <p className={styles.bodyText} style={{ marginTop: "1rem" }}>
            Our Yoga Teacher Training program will teach you everything you need to know to become a Yoga instructor. When you are done you can get a certificate from the Yoga Alliance that people around the world will recognize. You will also meet people who like Yoga and you can talk to them and learn from them. The Yoga Teacher Training program is a way to keep learning and growing as a person and as a Yoga teacher. You will be part of a group of people who like Yoga and who help each other.
            </p>

            {/* Sub-section B */}
            {/* <h2
              className={styles.subHeadingSerif}
              style={{ textAlign: "left" }}
            >
              What will be the outcome of this Course?
            </h2>
            <p className={styles.bodyText}>
              Should you enrol on this Course? Will this{" "}
              <strong className={styles.boldLink}>
                best yoga teacher training course in Jaipur
              </strong>{" "}
              be beneficial? Well, without any doubt, yes! Here is what will be
              the outcome of this Course:
            </p>
            <ol className={styles.numberedList}>
              <li>
                1. You'll have a deep understanding of yoga and its lifestyle.
              </li>
              <li>
                2. You'll cultivate mindfulness and learn to balance life and
                relationships.
              </li>
              <li>
                3. Our comprehensive{" "}
                <strong className={styles.boldLink}>
                  yoga teacher training in Jaipur
                </strong>{" "}
                goes beyond physical practice; it comes with in-depth knowledge
                and guidance.
              </li>
              <li>
                4. In addition to gaining knowledge about yoga, you'll also
                learn effective teaching methods.
              </li>
              <li>
                5. By the time you finish your Course, you'll be considered a
                certified teacher and can continue your teachings globally.
              </li>
            </ol>
            <p className={styles.bodyText} style={{ marginTop: "1rem" }}>
              For any reason, everyone has stress in their lives. But with yoga,
              you can heal your damages and learn to live healthy and happy
              forever. At AYM, we are a community of friends and family who
              live, take care of, and grow with each other. Life and yoga are
              not just for living but also for celebrating. So join our
              integrated yoga course and become an expert yoga professional.
            </p> */}
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



export default YogaTrainingJaipur;

