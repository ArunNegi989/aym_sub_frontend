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
const YogaTrainingVaranasi: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.a} />
      <div className={styles.container}>
        {/* PAGE TITLE */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            Certified Yoga Teacher Training in Varanasi
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
              alt="Get Started With Your Career As A Yoga Teacher in Varanasi"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Yoga Teacher Training in Varanasi – Start Your Professional Yoga Teaching Career with AYM
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            I am looking for a Yoga Teacher Training in Varanasi where I can learn how to become a certified yoga instructor. The Association for Yoga and Meditation or AYM has a Yoga Teacher Training program that teaches you everything you need to know to have a career as a yoga teacher. Yoga is really about connecting my body, mind and soul. It is not about the poses. To be a yoga teacher I need to understand what yoga is really about and be able to help my students feel good mentally and deep down inside.

At the Association for Yoga and Meditation the Yoga Teacher Training course, in Varanasi teaches students the yoga ways and new ways of teaching yoga. This helps students become Yoga Teacher Training instructors who're confident and really good at teaching Yoga Teacher Training.

            </p>
          </div>
        </div>

        {/* SECTION 2 — Image Right */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&q=80&fit=crop"
              alt="AYM Brings You The Best Resources and Complete Guidance For Your Career"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Why Choose AYM for Yoga Teacher Training Course in Varanasi?
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Becoming a skilled yoga teacher requires proper guidance, consistent practice, and learning from experienced instructors, and AYM’s Yoga Teacher Training Course in Varanasi is designed to support students throughout their learning journey. The program is suitable for beginners who are new to yoga, existing practitioners who want to deepen their knowledge, and aspiring professionals who want to build a career in yoga teaching. With structured instruction and guidance from experienced teachers, students explore traditional yoga practices and techniques, meditation and mindfulness, yoga philosophy and ancient yogic teachings, Pranayama and breathing techniques, yoga anatomy and the relationship between the body and yoga practice, teaching methodology and classroom management, and foundational yoga therapy concepts. 
Through a combination of theoretical learning, practical training, and teaching practice, the program helps students develop the knowledge, communication skills, confidence, and practical abilities needed to guide yoga sessions effectively and pursue their goals as professional yoga teachers.

            </p>
          </div>
        </div>

        {/* SECTION 3 — Image Left */}
        <div className={`${styles.section} ${styles.sectionImageLeft}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=700&q=80&fit=crop"
              alt="Yoga and Meditation School in Varanasi"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Become a Certified Yoga Teacher in Varanasi
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            A **Yoga Teacher Training Certification in Varanasi** is really helpful for people who want to become yoga teachers. It helps them become professionals and teach yoga in a way. At AYM they teach you about the side of yoga and also about its traditional principles. This helps students learn a lot and become confident so they can teach others safely.
When you finish the course you can do a lot of things like **work as yoga teachers** teach people in groups or teach them one on one. You can also teach at yoga studios or wellness centers. Some people even get to teach yoga in countries.

            </p>
          </div>
        </div>

        {/* SECTION 4 — Image Right */}
        <div className={`${styles.section} ${styles.sectionImageRight}`}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&fit=crop"
              alt="Get Licensed as A Yoga Teacher - Be an Acclaimed Instructor Globally"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Traditional Yoga and Meditation School in Varanasi
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            Varanasi is a city that is famous for being a spiritual place. It has been a place where people go to learn about yoga and meditation for a time. When you learn yoga in Varanasi you get to feel a connection to the ways of doing yoga.

The AYM school is a place where students can learn in a way that's similar to the Gurukul system. This means that students get to practice yoga in a way they get to learn from teachers and they get to learn in a place.

Our school in Varanasi teaches people about yoga and meditation. We want our students to learn the parts of yoga but to understand the spiritual side of it. We teach our students that yoga is not something you do with your body, it's a way of living that helps your body and mind work well together. Yoga is a way to feel happy and peaceful inside and out.

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
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80&fit=crop"
              alt="Quality Yoga Training Session With Pocket-Friendly Prices"
              className={styles.sectionImg}
              loading="lazy"
            />
          </div>
          <div className={styles.textWrap}>
            <h2 className={styles.headingSerif} style={{ textAlign: "center" }}>
            Career Opportunities After Completing Yoga Teacher Training in Varanasi
            </h2>
            <div
              className={styles.headingUnderline}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.headingUnderlineLine} />
            </div>
            <p className={styles.bodyText}>
            A certified yoga instructor can do a lot of jobs in the yoga and health fields. They can be a yoga teacher at yoga studios. They can be a yoga trainer or even a meditation instructor. Some people work as wellness coaches or yoga therapists. Others like to work with companies as corporate yoga trainers. Some certified yoga instructors even get to travel and work as yoga instructors.
This is because more and more people want to be healthy and feel good. They want to learn how to manage stress and be mindful. So trained yoga professionals can find work with people one on one or with groups or at wellness organizations or at gyms or, with companies that want to help their employees be healthy. They can even work at retreats or yoga centers in different places.

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

export default YogaTrainingVaranasi;
