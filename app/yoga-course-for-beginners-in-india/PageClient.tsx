// YogaBeginners.tsx
import React from "react";
import Image from "next/image";
import styles from "@/assets/style/yoga-for-beginners-in-india/Yogabeginners.module.css";
import beginners from "@/assets/images/yogg.jpg";
import yogatecherimage from "@/assets/images/yoga-techer-training-course-for-beginners.webp";
import HowToReach from "@/components/home/Howtoreach";
import heroImg from "@/assets/images/37.png";
import Link from "next/link";
import Script from "next/script";

// ---- Om Divider ----
const OmSVG: React.FC = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="#e8600a" strokeWidth="2" fill="none" />
    <text
      x="50%"
      y="54%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="26"
      fill="#e8600a"
      fontFamily="serif"
    >
      ॐ
    </text>
  </svg>
);

const Divider: React.FC = () => (
  <div className={styles.divider}>
    <span className={styles.dividerLine} />
    <span className={styles.omSymbol}>
      <OmSVG />
    </span>
    <span className={styles.dividerLine} />
  </div>
);

// ---- Pricing table data ----
const pricingRows = [
  { date: "05th Jan to 16th Jan 2025", dorm: "$400", shared: "$500", private: "$550" },
  { date: "03th Feb to 14th Feb 2025", dorm: "$400", shared: "$500", private: "$550" },
  { date: "03th Mar to 14th Mar 2025", dorm: "$400", shared: "$500", private: "$550" },
  { date: "03th Apr to 14th Apr 2025", dorm: "$400", shared: "$500", private: "$550" },
  { date: "03th May to 14th Dec 2025", dorm: "$400", shared: "$500", private: "$550" },
  { date: "03th Jun to 14th Jun 2025", dorm: "$400", shared: "$500", private: "$550" },
  { date: "03th Jul to 14th Jul 2025", dorm: "$400", shared: "$500", private: "$550" },
];

// ---- Q&A data ----
const qaData = [
  {
    question: "What will be learned in the Yoga Beginners Course at AYM?",
    answer: [
      "In this course you will be learning yoga postures (asanas), pranayamas (yogic breathing exercises) and meditation for inner peace and the bliss of serene contemplation. There is also a yogic detox included in the syllabus ( collectively it's all known as shat kriyas)and you would be chanting mantras throughout the practice too . You'll get the knowledge on different yoga asanas like Hatha, Iyengar, Vinyasa & Shivananda, for the yoga asanas practice, we take utmost care for aligning our students with effective props (on the basis ofIyengar yoga technique).",
      "So for those willing to start a yogic journey, who might also be a newbie of meditation , here, you will get to enjoy a delightful experience of a beautiful meditation experience with guides who'll guide you throughout the same, will make you acquaint with the right way of doing yogic breathing techniques, will make you practice it too and will teach you Beginner-level yoga asanas and benefits.",
      "At the end of each session, you'll get into a deep relaxation known as yogic Nidra while in corpse pose (Shavasana), to have your system get rid of the stress and experience ultimate calm for your whole system. Register for yoga beginners and discover the inner yogi in you!! Our participants felt that their every yoga session added immense relaxation and peace into their mind and bodies.",
      
    ],
  },
  {
    question: "I have completed a beginner yoga course in Rishikesh. What should I do to advance my practice?",
    answer: [
      "Happy to know that you completed a beginner yoga course in Rishikesh! To improve your practice. AYM yoga school provides the following yoga teacher training certification courses:200 hour yoga course, 300-hour yoga course, 500 hour yoga course which you can choose according to your comfort, though all the courses are highly intense.",
      "These advanced yoga courses help in starting a career in yoga and deepen your spiritual and yogic awareness.They require a strong commitment and dedication from the participants' end but are definitely worth it, just like our thousands of ex-students testified. (Our yoga teacher training courses have been approved by Yoga Alliance, USA and YCB, Ministry of AYUSH, Govt of India)",
    ],
  },
];

//schema
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aymyogaschool.com/yoga-course-for-beginners-in-india#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aymyogaschool.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Yoga Retreats",
          "item": "https://aymyogaschool.com/best-yoga-retreats-in-rishikesh"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Yoga Course for Beginners",
          "item": "https://aymyogaschool.com/yoga-course-for-beginners-in-india"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://aymyogaschool.com/yoga-course-for-beginners-in-india#webpage",
      "url": "https://aymyogaschool.com/yoga-course-for-beginners-in-india",
      "name": "Yoga Teacher Training Course for Beginners in India",
      "description": "Join AYM Yoga School's Yoga Teacher Training Course for Beginners in India. Build a strong foundation with expert guidance and traditional yoga practices.",
      "breadcrumb": { "@id": "https://aymyogaschool.com/yoga-course-for-beginners-in-india#breadcrumb" },
      "about": { "@id": "https://aymyogaschool.com/yoga-course-for-beginners-in-india#course" },
      "mainEntity": { "@id": "https://aymyogaschool.com/yoga-course-for-beginners-in-india#faq" },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://aymyogaschool.com/#website" }
    },
    {
      "@type": "Course",
      "@id": "https://aymyogaschool.com/yoga-course-for-beginners-in-india#course",
      "name": "Yoga Course for Beginners in Rishikesh",
      "description": "A 12-day residential Hatha and Ashtanga yoga course for beginners in Rishikesh, covering asanas, pranayama, meditation, shat kriyas (yogic detox), and mantra chanting, with exposure to Hatha, Iyengar, Vinyasa, and Shivananda yoga styles.",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://aymyogaschool.com/#organization",
        "name": "AYM Yoga School"
      },
      "coursePrerequisites": "None. Designed for complete beginners with no prior yoga experience.",
      "teaches": [
        "Asanas (yoga postures)",
        "Pranayama (breath control)",
        "Meditation and Yoga Nidra",
        "Shat Kriyas (yogic detox techniques)",
        "Mantra chanting",
        "Hatha, Iyengar, Vinyasa, and Shivananda yoga styles"
      ],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "name": "Yoga Course for Beginners",
        "courseMode": "onsite",
        "duration": "P12D",
        "courseSchedule": {
          "@type": "Schedule",
          "byDay": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "description": "Classes conducted Monday to Saturday; Sundays off."
        },
        "location": {
          "@type": "Place",
          "name": "AYM Yoga School",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Upper Tapovan",
            "addressLocality": "Rishikesh",
            "addressRegion": "Uttarakhand",
            "postalCode": "249192",
            "addressCountry": "IN"
          }
        }
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Dormitory",
          "price": "400",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://aymyogaschool.com/yoga-course-for-beginners-in-india"
        },
        {
          "@type": "Offer",
          "name": "Shared Room",
          "price": "500",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://aymyogaschool.com/yoga-course-for-beginners-in-india"
        },
        {
          "@type": "Offer",
          "name": "Private Room",
          "price": "550",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://aymyogaschool.com/yoga-course-for-beginners-in-india"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://aymyogaschool.com/yoga-course-for-beginners-in-india#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What will be learned in the Yoga Beginners Course at AYM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students learn yoga postures (asanas), pranayama (yogic breathing exercises), and meditation for a calm state of mind. The course also includes a yogic detox program (shat kriyas) and mantra chanting. Students are introduced to Hatha, Iyengar, Vinyasa, and Shivananda yoga styles, with a focus on alignment correction using props in the Iyengar style. Sessions end with deep relaxation through Yoga Nidra in Shavasana (corpse pose)."
          }
        },
        {
          "@type": "Question",
          "name": "I have completed a beginner yoga course in Rishikesh. What should I do to advance my practice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AYM Yoga School offers certification programs including 200-hour, 300-hour, and 500-hour yoga teacher training courses, approved by Yoga Alliance USA and the Yoga Certification Board, Ministry of AYUSH, Government of India. These advanced courses are suited for those wanting to deepen their practice or start a career in yoga teaching."
          }
        }
      ]
    }
  ]
}



// ===================== MAIN COMPONENT =====================
const YogaBeginners: React.FC = () => {
  return (

    <>
      <Script
        id="sound-healing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    
    <div className={styles.pageWrapper}>

      {/* ===== TOP HERO IMAGE ===== */}
      <section className={styles.heroSection}>
        <Image
          src={heroImg}
          alt="Yoga Students Group"
          width={1180}
          height={540}
          className={styles.heroImage}
          priority
        />
      </section>

      {/* ===== MAIN HEADING ===== */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <h1 className={styles.mainTitle}>
          Yoga Teacher Training Course for Beginners in India: Start Your Practice Here
          </h1>
          <div className={styles.contentBlock}>
            <p className={styles.questionText}>
            Are you planning to take your first Yoga beginners training in Rishikesh and do not have the experience or feel all muddled up due to that reason? 
            </p>
            <p className={styles.bodyText}>
            Yoga is one effective way of bringing together breath work, meditation practice and Asana practices together; it provides a lot more than just physical benefit to human beings. So get excited now as it would surely amaze you to know that all you are required is an open mind to embark on this journey with us, you are bound to achieve far more than you imagine.
            </p>
            <p className={styles.bodyText}>
            At AYM Yoga school, we offer an array of 12-day long beginners programs in Rishikesh.
The environment of our Rishikesh Yoga school is blissfully peaceful & tranquil making it ideal for your learning of Yoga & Mediation.

            </p>
            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <span className={styles.infoNumber}>12</span>
                <span className={styles.infoLabel}>Days Course</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoNumber}>Beginner</span>
                <span className={styles.infoLabel}>Friendly</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoNumber}>Peaceful</span>
                <span className={styles.infoLabel}>Ashram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECOND HERO IMAGE ===== */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroImageBox}>
            <Image
              src={beginners}
              alt="Yoga Teacher Training Course for Beginners in Rishikesh"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className={styles.benefitsFullSection}>
        <div className={styles.benefitsFullContainer}>
          <div className={styles.benefitsHeader}>
            <h3 className={styles.benefitsFullTitle}>Understanding of Yoga & Benefit for Beginners Course in Rishikesh</h3>
            <div className={styles.benefitsUnderline}></div>
          </div>

          {/* ── Understanding of Yoga ── */}
          <div className={styles.understandingBlock}>
            <h4 className={styles.understandingTitle}>Understanding of Yoga</h4>
            <p className={styles.understandingIntro}>
            Yoga is more than just a series of poses; it's a holistic approach to health. It originated in ancient India and emphasizes the connection between the body, mind, and spirit. The practice usually includes:
            </p>
            <div className={styles.yogaPillarsGrid}>
              <div className={styles.yogaPillarCard}>
                <div className={styles.yogaPillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C9.24 2 7 4.24 7 7c0 2.08 1.24 3.87 3.04 4.68L9 21h6l-1.04-9.32C15.76 10.87 17 9.08 17 7c0-2.76-2.24-5-5-5z" fill="#e8600a" opacity="0.85"/>
                  </svg>
                </div>
                <div>
                  <h5 className={styles.yogaPillarName}>Asanas <span>(Postures)</span></h5>
                  <p className={styles.yogaPillarDesc}>
                  Bodily Postures, the aim of which is primarily to help in achieving a certain range of movements and to maintain an optimum of tonicity, flexibility, Balance and Strength of your muscles.
                  </p>
                </div>
              </div>
              <div className={styles.yogaPillarCard}>
                <div className={styles.yogaPillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" fill="#e8600a" opacity="0.85"/>
                    <path d="M6 8c0-.34.04-.67.1-1H4.5C3.12 7 2 8.12 2 9.5S3.12 12 4.5 12H6V8z" fill="#e8600a" opacity="0.4"/>
                    <path d="M18 8v4h1.5C20.88 12 22 10.88 22 9.5S20.88 7 19.5 7H17.9c.06.33.1.66.1 1z" fill="#e8600a" opacity="0.4"/>
                  </svg>
                </div>
                <div>
                  <h5 className={styles.yogaPillarName}>Pranayama <span>(Breath Control)</span></h5>
                  <p className={styles.yogaPillarDesc}>
                  Breath Work that involves different breathing techniques that will take you towards Relaxation and rejuvenation, which will provide energy. 
                  </p>
                </div>
              </div>
              <div className={styles.yogaPillarCard}>
                <div className={styles.yogaPillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" fill="#e8600a" opacity="0.85"/>
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="#e8600a" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                </div>
                <div>
                  <h5 className={styles.yogaPillarName}>Meditation</h5>
                  <p className={styles.yogaPillarDesc}>
                  Procedures used to develop concentration and clarity of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Benefit Cards ── */}
          <h4 className={styles.understandingTitle}>Benefits of Yoga</h4>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitFullCard}>
              <div className={styles.benefitFullNumber}>01</div>
              <div className={styles.benefitFullContent}>
                <h4 className={styles.benefitFullName}>Increased Flexibility</h4>
                <p className={styles.benefitFullDesc}>Regular practice helps loosen tight muscles, improving overall flexibility and range of motion</p>
              </div>
            </div>
            <div className={styles.benefitFullCard}>
              <div className={styles.benefitFullNumber}>02</div>
              <div className={styles.benefitFullContent}>
                <h4 className={styles.benefitFullName}>Enhanced Strength</h4>
                <p className={styles.benefitFullDesc}>Many yoga poses require different muscle groups, helping build and tone muscles</p>
              </div>
            </div>
            <div className={styles.benefitFullCard}>
              <div className={styles.benefitFullNumber}>03</div>
              <div className={styles.benefitFullContent}>
                <h4 className={styles.benefitFullName}>Stress Relief</h4>
                <p className={styles.benefitFullDesc}>Yoga encourages relaxation and helps alleviate stress through mindfulness and deep breathing</p>
              </div>
            </div>
            <div className={styles.benefitFullCard}>
              <div className={styles.benefitFullNumber}>04</div>
              <div className={styles.benefitFullContent}>
                <h4 className={styles.benefitFullName}>Improved Focus</h4>
                <p className={styles.benefitFullDesc}>Mindfulness practices enhance concentration and mental clarity</p>
              </div>
            </div>
            <div className={styles.benefitFullCard}>
              <div className={styles.benefitFullNumber}>05</div>
              <div className={styles.benefitFullContent}>
                <h4 className={styles.benefitFullName}>Better Posture</h4>
                <p className={styles.benefitFullDesc}>Yoga promotes awareness of body alignment, which can lead to better posture and reduce injury risk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Q&A SECTION ===== */}
      <section className={styles.qaSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Yoga Beginners Course in Rishikesh - Students Questions</h2>
          <Divider />
          <div className={styles.qaGrid}>
            {qaData.map((item, idx) => (
              <div key={idx} className={styles.qaCard}>
                <h4 className={styles.qaQuestion}>{item.question}</h4>
                <div className={styles.qaAnswerBlock}>
                  {item.answer.map((para, i) => (
                    <p key={i} className={styles.qaAnswer}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MORE INFORMATION ===== */}
      <section className={styles.moreInfoSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>More Information on Beginners&apos; Yoga Course</h2>
          <Divider />
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#e8600a"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Ayurvedic Massage</h4>
                <p className={styles.infoDesc}>Students receive one Ayurdevic massage each week of the course.</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" fill="#e8600a"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Three Meals Daily</h4>
                <p className={styles.infoDesc}>Nutritious and healthful food provided during the course.</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2h6v2h-6V6zm0 4h6v2h-6v-2zm-6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" fill="#e8600a"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Private Rooms</h4>
                <p className={styles.infoDesc}>Single room available with free WiFi and private bath.</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" fill="#e8600a"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Class Schedule</h4>
                <p className={styles.infoDesc}>There are no classes on Sundays.</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#e8600a"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4 className={styles.infoTitle}>Tours & Excursions</h4>
                <p className={styles.infoDesc}>Tours inside/outside of Rishikesh arranged with the Course Director on demand.</p>
              </div>
            </div>
          </div>
          <div className={styles.noteBox}>
            <p className={styles.noteText}>
            You may refer to the course start dates and end dates for each month, as well as the fee structure in the table below. Please reach out to us to confirm your seats for the yoga course for beginners. We welcome you to be part of this course. <strong>Namaste.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRICING TABLE ===== */}
      <section className={styles.pricingSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Yoga for Beginners in India 2025</h2>
          <Divider />
          <p className={styles.pricingIntro}>
            Residential Hatha and Ashtanga <strong>Yoga Courses for beginners in Rishikesh India</strong> - 2025
            at <em>AYM Yoga School</em> in India.
          </p>
          <div className={styles.tableWrapper}>
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Dormitory</th>
                  <th>Shared Room</th>
                  <th>Private Room</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className={styles.dateCell}>{row.date}</td>
                    <td>{row.dorm}</td>
                    <td>{row.shared}</td>
                    <td>{row.private}</td>
                    <td className={styles.availableCell}>Available</td>
                  </tr>
                ))}
                <tr className={styles.bookRow}>
                  <td colSpan={5}>
                    <div className={styles.bookContent}>
                      <div className={styles.bookInfo}>
                        <strong>Book Your Spot</strong>
                        <span>Register your spot by paying $110 only</span>
                      </div>
                      <Link href="/payment-options" className={styles.paymentsBtn}>
                        Payments Page
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <HowToReach />
    </div>
    </>
  );
};

export default YogaBeginners;