import React from "react";
import styles from "@/assets/style/yoga-teacher-training/Yogatraining.module.css";
import Link from "next/link";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const sections = [
  {
    id: 1,
    imageLeft: true,
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop",
    imageAlt: "Best Yoga Teacher Training in Mysore India",
    heading: "Best Yoga Teacher Training in Mysore India",
    headingStyle: "script" as const,
    text: `Mysore is a place that people over the world know about for learning real yoga. The city has a lot of history with yoga. It is very peaceful and people who practice yoga there do it in a disciplined way. This is why people who love yoga come to Mysore from all over the world. If you really want to learn more about yoga or become a yoga teacher our Yoga Teacher Training in Mysore is a place to start.

We have teacher training programs that people all over the world recognize. We made these programs for people who are just starting with yoga and for people who have been practicing for a time. Whether you are new to yoga or you want to become a teacher, our classes teach you old yoga ideas and new ways of teaching. When you take our training you get to practice teaching and you become more confident. You learn what you need to know to teach yoga in a way that is safe and good, for people.
`,
  },
  {
    id: 2,
    imageLeft: false,
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80&fit=crop",
    imageAlt: "Yoga Teacher Training in Mysore",
    heading: "Yoga Teacher Training in Mysore",
    headingStyle: "serif" as const,
    text: `Our Yoga Teacher Training Courses are about helping you become a well-rounded yoga teacher. In addition to learning how to do the poses, students also get to study yoga philosophy, body structure, ways to breathe, how to meditate, how to line up the body correctly, how to teach and how to grow as a person. 

The program helps students become more aware of themselves, disciplined and more present in their lives while keeping the true spirit of old yoga traditions. Classes are small so that each student gets one-on-one help from teachers who know what they are doing, making sure that every student gets the help they need during the program.`,
  },
  {
    id: 3,
    imageLeft: true,
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80&fit=crop",
    imageAlt: "Features of Yoga Teacher Training Course in Mysore",
    heading: "Why Choose Our Yoga Teacher Training in Mysore?",
    headingStyle: "serif" as const,
    textList: [
      "Our Yoga Alliance certified programs are known all over the world. They are made to give people a real yoga education experience. Our Indian yoga teachers are very good at what they do. I have been teaching for years. They teach our courses. They combine old yoga wisdom with new ways of teaching. We have a lot of things in our courses. Every day people practice Asana and Pranayama and Meditation and Yoga Philosophy. We also have classes on anatomy and how to align your body and how to teach yoga to others. This helps people become yoga instructors. Our Yoga Alliance certified programs provide people with books and other things to help them learn. Our Yoga Alliance certified programs are not about being in a classroom. We have a peaceful place where people can practice yoga. Our rooms are comfortable. We have healthy food that is good for vegetarians. This helps people live a life with yoga. Every week we have workshops and activities and trips to learn about culture. People can meet others from around the world who like yoga.",
    ],
  },
  {
    id: 4,
    imageLeft: false,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&fit=crop",
    imageAlt:
      "200 Hour and 300 Hour Yoga Teacher Training Course in Mysore India",
    heading: "200 Hour Yoga Teacher Training Course in Mysore India",
    headingStyle: "serif" as const,
    subSections: [
      {
        heading: "200 Hour Yoga Teacher Training Course in Mysore India",
        text: `The 200 Hour Yoga Teacher Training Course is a starting point for people who want to teach yoga and for people who really like doing yoga. You can learn a lot more about yoga. Figure out what yoga is all about. The 200 Hour Yoga Teacher Training Course shows students the basics of yoga and how to make yoga a part of their life.
`,
      },
      {
        heading: "300 Hour Yoga Teacher Training Course in Mysore",
        text: `Our 300 Hour Yoga Teacher Training is for yoga teachers who already have a certificate and want to get better at what they do and learn more about yoga. This training goes deeper into what yoga's all about so teachers can feel more sure of themselves and really know what they are talking about.

Students learn how to put on really good yoga classes, how to use yoga to help people feel better, what yoga is really all about, about what the yoga words mean, about Ayurveda, how to breathe and meditate in a more advanced way and how to teach a great class.`,
      },
    ],
  },
  {
    id: 5,
    imageLeft: true,
    image:
      "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=700&q=80&fit=crop",
    imageAlt: "Recognized Yoga Teacher Training Course Certification in Mysore",
    heading: "Internationally Recognized Yoga Certification",
    headingStyle: "serif" as const,
    text: `After finishing the training students get a Yoga Teacher Training Certification that is known all over the world. This certification follows the rules that are used in parts of the globe. This certificate helps students to teach yoga as a job, in countries. It also helps them to start their yoga studio. They can plan yoga trips. They can also keep learning more about yoga.
More important students leave with real skills to teach. They have an understanding of themselves. They feel sure of themselves. They can encourage others by showing yoga practice.
`,
  },
];

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
const YogaTrainingMysore: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Top border */}
      <div className={styles.a} />

      <div className={styles.container}>
        {/* ── PAGE TITLE ── */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            Yoga Teacher Training in Mysore India
          </h1>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineLine} />
          </div>
        </div>

        {/* ── ALTERNATING SECTIONS ── */}
        {sections.map((section) => (
          <div
            key={section.id}
            className={`${styles.section} ${
              section.imageLeft
                ? styles.sectionImageLeft
                : styles.sectionImageRight
            }`}
          >
            {/* Image */}
            <div className={styles.imgWrap}>
              <img
                src={section.image}
                alt={section.imageAlt}
                className={styles.sectionImg}
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className={styles.textWrap}>
              <h2
                className={
                  section.headingStyle === "script"
                    ? styles.headingScript
                    : styles.headingSerif
                }
              >
                {section.heading}
              </h2>
              <div className={styles.headingUnderline}>
                <div className={styles.headingUnderlineLine} />
              </div>

              {/* Sub-sections (section 4: 200hr + 300hr) */}
              {"subSections" in section && section.subSections ? (
                section.subSections.map((sub, idx) => (
                  <div key={idx} style={{ marginBottom: "1.2rem" }}>
                    {idx > 0 && (
                      <h3
                        className={styles.headingSerif}
                        style={{ marginTop: "1rem" }}
                      >
                        {sub.heading}
                      </h3>
                    )}
                    <p className={styles.bodyText}>{sub.text}</p>
                  </div>
                ))
              ) : "textList" in section && section.textList ? (
                /* Bullet list (section 3: features) */
                <ul
                  className={styles.bodyText}
                  style={{ paddingLeft: "1.2rem", margin: 0 }}
                >
                  {section.textList.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: "0.4rem" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                /* Regular paragraph */
                <p className={styles.bodyText}>{(section as any).text}</p>
              )}
            </div>
          </div>
        ))}

        {/* ── CITY LINKS ── */}
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

export default YogaTrainingMysore;
