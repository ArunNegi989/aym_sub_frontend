// YogaBeginners.tsx
import React from "react";
import Image from "next/image";
import styles from "@/assets/style/yoga-for-beginners-in-india/Yogabeginners.module.css";
import beginners from "@/assets/images/yogg.jpg";
import yogatecherimage from "@/assets/images/yoga-techer-training-course-for-beginners.webp";
import HowToReach from "@/components/home/Howtoreach";
import heroImg from "@/assets/images/37.png";
import Link from "next/link";

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
      "In this course, you will be learning about yoga postures (asanas), pranayamas (yogic breathing exercises), and meditation (for a peaceful and calm state of mind). There is also a yogic detox program included in the course (they are collectively known as shat kriyas), and you will also be chanting mantras during the sessions.",
      "You will be introduced to Hatha, Iyengar, Vinyasa, and Shivananda Yoga styles for the asana practice. We focus on alignment correction of our students using appropriate props (as per the Iyengar style of yoga).",
      "Many of you who want to start yoga might also be new to meditation. Here, you will get the beautiful experience of meditation. Our teachers will be guiding you in the process. You will also be familiarized with the correct way of yogic breathing and be made to practice the same in the session. Here, you will also learn about beginner-level yoga asanas and their benefits.",
      "Towards the end of the yoga practice session, we do deep relaxation through Yoga Nidra in the Shavasana pose (i.e., the corpse pose), which profoundly calms the body and mind. This practice is well known for removing stress from the nervous system. Join our yoga course for beginners and experience the yogic effect in your mental, emotional, and physical realms!",
      "Our participants said they felt more relaxed and peaceful after each yoga session.",
    ],
  },
  {
    question: "I have completed a beginner yoga course in Rishikesh. What should I do to advance my practice?",
    answer: [
      "That's great to hear that you've completed a beginner yoga course in Rishikesh! To advance your practice.",
      "AYM Yoga School offers a certification program that includes a 200 hour yoga course, 300-hour yoga course, 500 hour yoga course, which are pretty intense. You may choose one of these courses which is the most appropriate for you. These advanced-level courses are beneficial for starting a career in yoga and deepening your yogic experience. These courses need commitment and dedication from the practitioners' side. And it is worth all the effort. Thousands of our ex-students have testified the same. (Our yoga teachers' training courses are approved by the Yoga Alliance, USA and YCB, Ministry of AYUSH, Govt of India.",
    ],
  },
];

// ===================== MAIN COMPONENT =====================
const YogaBeginners: React.FC = () => {
  return (
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
              Are you planning to join a beginner&apos;s yoga course in Rishikesh for the first time
              but feel confused because you don&apos;t have much yoga experience?
            </p>
            <p className={styles.bodyText}>
              Yoga is a powerful practice that blends physical movement, breath control, and meditation.
              It offers numerous benefits for the body and mind. Although it can be daunting for beginners,
              embracing this journey with an open heart and mind can lead to profound personal growth and well-being.
            </p>
            <p className={styles.bodyText}>
              We understand you might have many questions about starting your yoga journey in Rishikesh.
              At AYM Yoga School, we&apos;re here to guide you every step of the way. We regularly conduct
              beginner-level courses in Rishikesh, India, each lasting around 12 days. Our school is
              peaceful and serene, perfect for yoga and meditation practice.
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
              Yoga is more than just a series of poses; it&apos;s a holistic approach to health. It originated
              in ancient India and emphasizes the connection between the body, mind, and spirit. The practice
              usually includes:
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
                    Physical positions that enhance flexibility, strength, and balance.
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
                    Techniques that focus on breath awareness and control to promote relaxation and energy.
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
                    Practices aimed at calming the mind and promoting inner peace.
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
                <p className={styles.infoDesc}>Course participants can avail one ayurvedic massage per week</p>
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
                <p className={styles.infoDesc}>Nutritious and healthy meals provided throughout the course</p>
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
                <p className={styles.infoDesc}>Private rooms with free WiFi and attached bathrooms available</p>
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
                <p className={styles.infoDesc}>Classes conducted Monday to Saturday, Sundays off</p>
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
                <p className={styles.infoDesc}>Tours in and around Rishikesh planned (at course director&apos;s discretion)</p>
              </div>
            </div>
          </div>
          <div className={styles.noteBox}>
            <p className={styles.noteText}>
              You may refer to the course start dates and end dates for each month, as well as the fee structure
              in the table below. Please reach out to us to confirm your seats for the yoga course for beginners.
              We welcome you to be part of this course. <strong>Namaste.</strong>
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
  );
};

export default YogaBeginners;