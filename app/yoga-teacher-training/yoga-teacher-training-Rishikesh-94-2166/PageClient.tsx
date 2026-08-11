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

const YogaTrainingPushkar: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.a} />
      <div className={styles.container}>
        {/* PAGE TITLE */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            Yoga Teacher Training in Rishikesh
          </h1>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineLine} />
          </div>
        </div>

        {/* SECTION 1 — Image Left */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=700&q=80&fit=crop"
              alt="Best Yoga Teacher Training School in Pushkar"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Yoga Teacher Training in Rishikesh – Transform Your Passion into a Global Career
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            AYM Yoga Rishikesh, which is also called the Association for Yoga and Meditation is a yoga school. It is located in the middle of Rishikesh. AYM Yoga Rishikesh offers courses for people who want to become yoga teachers. These courses are named Yoga Teacher Training Courses. People from all over the world know about these courses.

AYM Yoga Rishikesh is, in a place because Rishikesh is known as the Yoga Capital of the World. Our school teaches yoga in a way that mixes traditions with ways of teaching. This helps people who study with us have an experience.

You might be just starting to learn about yoga. You might already know a lot about AYM Yoga Rishikesh and yoga. Either way our programs are created to help you learn more about AYM Yoga Rishikesh and yoga. We want to help you become a yoga teacher or just improve your practice of AYM Yoga Rishikesh and yoga. Our programs are certified by Yoga Alliance, which's a well-known organization.

            </p>
          </div>
        </div>

        {/* SECTION 2 — Image Right */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop"
              alt="Learn All Aspects of Yoga and Meditation at Aym Yoga School"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Yoga Teacher Training in Rishikesh by Experienced Yoga Masters
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Our Yoga Teacher Training in Rishikesh is taught by Yoga Teacher Training teachers who really know what they are doing and have spent a time studying and practicing Yoga Teacher Training. They have put together a plan that teaches us about the ideas behind Yoga Teacher Training, how to do the poses correctly, breathing exercises, meditation, the body, how to teach Yoga Teacher Training and how to live like a Yoga Teacher Training person.

At AYM Yoga Rishikesh students get help from the teachers that's just for them and they learn in a place that is nice and supportive which helps them get better at Yoga Teacher Training and also feel better inside. Our Yoga Teacher Training classes help people become good Yoga Teacher Training teachers. They also help us be more mindful, disciplined and aware of ourselves and our Yoga Teacher Training practice.

            </p>
          </div>
        </div>

        {/* SECTION 3 — Image Left */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80&fit=crop"
              alt="Enrich Yourself With Yoga and Meditation Knowledge"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Internationally Certified Yoga Teacher Training Courses
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            AYM Yoga Rishikesh provides teacher training programs that are recognized by the Yoga Alliance around the world. These programs help students learn how to teach yoga in a way in any part of the world. The certificates that are given by the school are accepted in countries and can lead to job opportunities at yoga studios, wellness retreats, fitness centers and private teaching.

During the course students get hands-on experience by taking part in practice sessions attending workshops and doing teaching tasks, under the guidance of instructors. This helps them become skilled teachers when they finish the program.

            </p>
          </div>
        </div>

        {/* SECTION 4 — Image Right */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&fit=crop"
              alt="Top Rated Yoga Courses Under Experienced Instructors"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Why Choose AYM Yoga Rishikesh?
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Choosing a yoga school is a big decision for people who want to teach yoga. At AYM Yoga Rishikesh we really want to teach people about yoga in an honest way. We also want to make sure that what we teach is good enough for people around the world.

AYM Yoga Rishikesh offers Yoga Alliance-certified teacher training programs. These programs are led by experienced yoga gurus. These programs are also led by faculty. The programs combine yoga practices. The programs also use approaches to yoga education. The programs maintain class sizes. The programs give students learning. The programs give students attention. Daily sessions include Meditation. Daily sessions include Pranayama. Daily sessions include Yoga Philosophy. AYM Yoga Rishikesh also provides accommodation. AYM Yoga Rishikesh also provides food. AYM Yoga Rishikesh is in an environment.  

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
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80&fit=crop"
              alt="Time to Become a Certified Yoga Teacher"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Comprehensive Yoga Teacher Training Curriculum
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Our Yoga Teacher Training Course gives an education to people who want to become yoga teachers. This course helps them learn more about yoga. The skills they need to teach it well. The classes include Hatha Yoga, Ashtanga Yoga, Pranayama Techniques, Meditation Practices, Yoga Philosophy, Human Anatomy and Physiology, Teaching Methodology, Alignment and Adjustment Techniques, Yogic Cleansing or Shatkarma and Mantra Chanting. The course is made to give an understanding of yoga that is more than just moving the body. It helps students look into the real philosophical and traditional parts of yoga. It gives them the knowledge they need to become sure of themselves and good at teaching yoga.
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

export default YogaTrainingPushkar;