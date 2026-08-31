"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/assets/style/yoga-volunteer/Postyttcpage.module.css";
import HowToReach from "@/components/home/Howtoreach";
import Script from "next/script";

/* ── Inline SVG Mandala ── */
const MandalaIcon = ({
  size = 80,
  opacity = 0.18,
}: {
  size?: number;
  opacity?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    style={{ opacity }}
  >
    <circle cx="100" cy="100" r="95" stroke="#F15505" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="75" stroke="#F15505" strokeWidth="1" />
    <circle cx="100" cy="100" r="55" stroke="#F15505" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="35" stroke="#F15505" strokeWidth="1" />
    <circle cx="100" cy="100" r="15" stroke="#F15505" strokeWidth="2" fill="rgba(224,123,0,0.15)" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
      const r = (deg * Math.PI) / 180;
      const x1 = 100 + 15 * Math.cos(r);
      const y1 = 100 + 15 * Math.sin(r);
      const x2 = 100 + 95 * Math.cos(r);
      const y2 = 100 + 95 * Math.sin(r);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F15505" strokeWidth="0.8" />;
    })}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
      const r = (deg * Math.PI) / 180;
      const cx = 100 + 75 * Math.cos(r);
      const cy = 100 + 75 * Math.sin(r);
      return <circle key={i} cx={cx} cy={cy} r="5" stroke="#F15505" strokeWidth="1" fill="rgba(224,123,0,0.2)" />;
    })}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => {
      const r = (deg * Math.PI) / 180;
      const cx = 100 + 55 * Math.cos(r);
      const cy = 100 + 55 * Math.sin(r);
      return (
        <polygon
          key={i}
          points={`${cx},${cy - 7} ${cx + 6},${cy + 4} ${cx - 6},${cy + 4}`}
          fill="rgba(224,123,0,0.25)"
          stroke="#F15505"
          strokeWidth="0.8"
        />
      );
    })}
  </svg>
);


const ChakraRow = () => {
  const chakras = [
    { name: "Muladhara", color: "#c0392b", symbol: "▼", label: "Root" },
    { name: "Svadhisthana", color: "#e67e22", symbol: "◎", label: "Sacral" },
    { name: "Manipura", color: "#f1c40f", symbol: "▲", label: "Solar" },
    { name: "Anahata", color: "#27ae60", symbol: "✦", label: "Heart" },
    { name: "Vishuddha", color: "#2980b9", symbol: "○", label: "Throat" },
    { name: "Ajna", color: "#8e44ad", symbol: "◈", label: "Third Eye" },
    { name: "Sahasrara", color: "#9b59b6", symbol: "✿", label: "Crown" },
  ];
  return (
    <div className={styles.chakraRow}>
      {chakras.map((c, i) => (
        <div key={i} className={styles.chakraItem}>
          <div className={styles.chakraCircle} style={{ borderColor: c.color, color: c.color }}>
            <span className={styles.chakraSymbol}>{c.symbol}</span>
          </div>
          <span className={styles.chakraName}>{c.name}</span>
          <span className={styles.chakraLabel}>{c.label}</span>
        </div>
      ))}
    </div>
  );
};

// schema

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aymyogaschool.com/yoga-volunteer#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aymyogaschool.com/" },
        { "@type": "ListItem", "position": 2, "name": "Post TTC Yoga Volunteer", "item": "https://aymyogaschool.com/yoga-volunteer" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://aymyogaschool.com/yoga-volunteer#webpage",
      "url": "https://aymyogaschool.com/yoga-volunteer",
      "name": "Yoga Volunteer Opportunities | AYM Yoga School",
      "description": "Apply for the Yoga Volunteer Program at AYM Yoga School. Support yoga events, connect with the community, and grow through authentic yogic experiences.",
      "breadcrumb": { "@id": "https://aymyogaschool.com/yoga-volunteer#breadcrumb" },
      "about": { "@id": "https://aymyogaschool.com/yoga-volunteer#program" },
      "isPartOf": { "@id": "https://aymyogaschool.com/#website" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Service",
      "@id": "https://aymyogaschool.com/yoga-volunteer#program",
      "serviceType": "Post-TTC Yoga Volunteer Program",
      "name": "Yoga Volunteer Program",
      "description": "A post-Yoga Teacher Training program at AYM Yoga Ashram in Rishikesh for students wishing to deepen their practice under the guidance of AYM's yoga gurus, following the Guru-parampara tradition. Students provide voluntary service (seva) in exchange for accommodation, food, and drop-off facilities, within a structured spiritual and disciplined ashram environment.",
      "provider": { "@id": "https://aymyogaschool.com/#organization" },
      "areaServed": {
        "@type": "Place",
        "name": "Rishikesh, Uttarakhand, India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Post-TTC Yoga Programs",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Yoga Volunteer Program",
              "description": "Students engage in voluntary service (seva) in exchange for their stay, combining spiritual growth with community contribution."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Yoga Immersion",
              "description": "Deep immersion into ancient yogic teachings passed down through the Guru-parampara lineage."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Yoga Sadhana",
              "description": "Independent practice of asanas and meditation to increase personal learning and mastery."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Course",
              "name": "Advance Yoga Sadhana (Inner Awakening Course)",
              "description": "An advanced yogic practice program for students ready to transcend ordinary practice, connected to AYM's Inner Awakening Retreat.",
              "url": "https://aymyogaschool.com/inner-awakening-retreat"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://aymyogaschool.com/yoga-volunteer#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I apply for the Post-TTC Yoga Volunteer Program at AYM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Applicants should email aymyogaschool@gmail.com for details of the Post-TTC yoga programs they wish to join. The school is currently welcoming students for volunteering positions, providing accommodation, food, and drop-in facilities in exchange for their services."
          }
        },
        {
          "@type": "Question",
          "name": "What rules must Yoga Volunteer Program participants follow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Volunteers must devote their time to ashram activities, follow karma yoga duties (8 hours), not leave the ashram without permission except on the weekly free day, keep regular waking and sleeping hours, avoid electronic gadgets outside designated times, keep their rooms tidy, and refrain from giving money, clothes, or tips directly to staff (monetary donations should go through the office)."
          }
        },
        {
          "@type": "Question",
          "name": "What is the dress code and behavior policy at AYM Yoga Ashram?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Modest clothing is required at all times, including during yoga classes; shorts, leggings, low-cut or sleeveless tops, and tank tops are prohibited. Smoking, alcohol, non-vegetarian food, onion, and garlic are not allowed. Photography, video, or audio recording during classes or ceremonies requires the director's permission. Public displays of affection and any form of harassment are strictly prohibited, and silence is expected during meals and Satsang, with lights out by 10:30 PM."
          }
        }
      ]
    }
  ]
}


export default function PostYTTCPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const programs = [
    {
      num: "01",
      title: "Yoga Volunteer Program",
      desc: "Students must do community service in return to their stay. A sacred give and take of seva and spiritual growth.",
      icon: "🌿",
    },
    {
      num: "02",
      title: "Yoga Immersion",
      desc: "Immersed in Teachings. A deeper dive into the ancient wisdom passed through Guru-parampara lineage.",
      icon: "📿",
    },
    {
      num: "03",
      title: "Yoga Sadhana",
      desc: "Students must perform different asanas and meditation on their own to increase their practice and self-mastery.",
      icon: "🪷",
    },
    {
      num: "04",
      title: "Advance Yoga Sadhana",
      desc: "Awakening course. For students willing to move beyond what is ordinary and embrace advanced yogic practices.",
      icon: "✨",
      highlight: true,
    },
  ];

  const rules = [
    "You should dedicate your days to fulfill ashram duties.",
    "It is not permissible for students to leave the ashram without permission (save for weekly day offs) or to go beyond allotted hours of stay, provided a prior permission is taken from your course director. ",
    "The visitors are supposed to follow the Karma Yoga path for (8 hrs).",
    "Students should be sleeping or waking up in time.",
    "Electronic devices such as phones and tablets are not allowed in ashrams except during the allowed time. Heavy electric things such as iron are not welcomed.",
    "Ashram reserves the right to admission/stay duration to its sole discretion and can reject visiting individuals without informing reason.",
    "Students should maintain his/her room clean and neat, it must be in a position that we kept it for your visit.",
    "It is strongly forbidden to donate money, clothes and to tip the servants, as it makes a blot on the dignity of the ashram, interested persons should donate your charity in the office.",
  ];

  const prohibited = [
    "Non vegetarian food, smoking, alcohol, onion and garlic are prohibited.",
    "Photographing, video and audio recording of class and ceremony only with director of ashram permission, no pets permitted in ashram.",
    "Photographing, video and audio recording of class and ceremony only with director of ashram permission, no pets permitted in ashram.",
  ];

  return (

    <>
     <Script
        id="yoga-voulnteer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

    

    <div className={`${styles.page} ${visible ? styles.visible : ""}`}>

      {/* Background Mandalas */}
      <div className={styles.bgMandala1} aria-hidden="true">
        <MandalaIcon size={500} opacity={0.045} />
      </div>
      <div className={styles.bgMandala2} aria-hidden="true">
        <MandalaIcon size={380} opacity={0.035} />
      </div>
      <div className={styles.bgMandala3} aria-hidden="true">
        <MandalaIcon size={300} opacity={0.04} />
      </div>

      {/* ── TOP BORDER ── */}
      <div className={styles.topBorder} />

      {/* ══════════════════════════════════════
          HERO / HEADER
      ══════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroMandalaLeft} aria-hidden="true">
          <MandalaIcon size={220} opacity={0.11} />
        </div>
        <div className={styles.heroMandalaRight} aria-hidden="true">
          <MandalaIcon size={220} opacity={0.11} />
        </div>

        <div className={styles.container}>
          <p className={styles.superTitle}>AYM Yogic Lineage</p>

          <h1 className={styles.heroTitle}>
          Yoga Volunteer Program:
            <br />
            <em>Give Back After Your Teacher Training</em>
          </h1>

           
          <div className={styles.heroContent}>
            <p className={styles.heroPara}>
            At present, a lot of schools are emerging in Rishikesh which have yoga among its teachings, to knowYoga teacher training in Rishikesh Some are of intention to devote to the lineage of the ancient practice, such as the one which will come.
            </p>
            <p className={styles.heroPara}>
            AYM is one of these ASHRAMS. The best combination between both The ashram AYM believes very strongly about the guru parampara (relationship between teacher and disciples even after they completed their yoga training etc.).
            </p>
            <p className={styles.heroPara}>
            Those who like to enhance, build even more experience in their YOGA practices(YOGA SADHANA) on our yoga mentors at the AYM YOGA ASHRAM are most welcome to do our post yoga TTC after we have already completed. AYM yoga ASHRAM is devoted to a safe place, encouraging spirituality, respect and morale.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CHAKRA SECTION
      ══════════════════════════════════════ */}
      <section className={styles.chakraSection}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>The Seven Sacred Centres</p>
          <ChakraRow />
        </div>
      </section>

     

      {/* ══════════════════════════════════════
          POST TTC PROGRAMS
      ══════════════════════════════════════ */}
      <section className={styles.programSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.mandalaMini} aria-hidden="true">
              <MandalaIcon size={56} opacity={0.4} />
            </div>
            <h2 className={styles.sectionTitle}>Post TTC Yoga Program</h2>
            <div className={styles.mandalaMini} aria-hidden="true">
              <MandalaIcon size={56} opacity={0.4} />
            </div>
          </div>

          <div className={styles.programGrid}>
            {programs.map((p, i) => (
              <div
                key={i}
                className={`${styles.programCard} ${p.highlight ? styles.programCardHighlight : ""}`}
                style={{ "--card-index": i } as React.CSSProperties}
              >
                <div className={styles.programNumWrap}>
                  <span className={styles.programIcon}>{p.icon}</span>
                  <div className={styles.programNum}>{p.num}</div>
                </div>
                <div className={styles.programInner}>
                  <h3 className={styles.programTitle}>{p.title}</h3>
                  <p className={styles.programDesc}>{p.desc}</p>
                  {p.highlight && (
                    <span className={styles.innerBadge}>✦ Inner Awakening Course</span>
                  )}
                </div>
                <div className={styles.programCorner} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW TO APPLY
      ══════════════════════════════════════ */}
      <section className={styles.applySection}>
        <div className={styles.container}>
          <div className={styles.applyGrid}>
            <div className={styles.applyLeft}>
              <p className={styles.applySupra}>How to Apply</p>
              <h2 className={styles.sectionTitle}>Details of the Courses</h2>
              <div className={styles.applyDivider} />
              <p className={styles.applyPara}>
              We'd be glad to answer any questions. Email us at{" "}
                <span className={styles.emailBadge}>aymyogaschool[at]gmail.com</span>{" "}
                and inquire about our Post TTC yoga programs.
              </p>
              <p className={styles.applyPara}>
              At this time, our school is accepting applications for a volunteering position. If you are interested in expanding your spiritual education and enhancing your yogic knowledge, this opportunity is for you. We will provide you with accommodation, food and drop-in facilities in exchange for your services.
              </p>
              <p className={styles.applyPara}>
              Students participating in this program must respect our school's disciplinary regulations. Student conduct and behavior will be held to the highest standards of Ashram culture; you are not to mistake our Ashram for a resort.
              </p>
            </div>
            <div className={styles.applyRight}>
              <div className={styles.applyMandala} aria-hidden="true">
                <MandalaIcon size={260} opacity={0.3} />
              </div>
              <div className={styles.applyQuote}>
                <span className={styles.quoteMarks}>"</span>
                Students participating in this program must respect our school's disciplinary regulations. Student conduct and behavior will be held to the highest standards of Ashram culture; you are not to mistake our Ashram for a resort.
                <span className={styles.quoteMarks}>"</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          RULES & REGULATIONS
      ══════════════════════════════════════ */}
      <section className={styles.rulesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.mandalaMini} aria-hidden="true">
              <MandalaIcon size={56} opacity={0.4} />
            </div>
            <h2 className={styles.sectionTitle}>Rules and Regulation of Yoga Volunteer Program</h2>
            <div className={styles.mandalaMini} aria-hidden="true">
              <MandalaIcon size={56} opacity={0.4} />
            </div>
          </div>

          <div className={styles.rulesGrid}>
            {rules.map((rule, i) => (
              <div key={i} className={styles.ruleItem} style={{ "--rule-index": i } as React.CSSProperties}>
                <div className={styles.ruleDot}>{i + 1}</div>
                <p className={styles.ruleText}>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* ══════════════════════════════════════
          DRESS CODE + PROHIBITED + ATTENDANCE
      ══════════════════════════════════════ */}
      <section className={styles.policiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.mandalaMini} aria-hidden="true">
              <MandalaIcon size={56} opacity={0.4} />
            </div>
            <h2 className={styles.sectionTitle}>Ashram Policies</h2>
            <div className={styles.mandalaMini} aria-hidden="true">
              <MandalaIcon size={56} opacity={0.4} />
            </div>
          </div>

          <div className={styles.policiesGrid}>
            {/* Dress Code */}
            <div className={styles.policyCard}>
              <div className={styles.policyTopBar} />
              <div className={styles.policyIcon}>🧣</div>
              <h3 className={styles.policyTitle}>Dress Code</h3>
              <p className={styles.policyText}>
              Students are required to wear modest clothes, no tights, leggings, exposed arms, legs, and shoulders should be visible in the hall.
              </p>
              <div className={styles.policySubtitle}>This includes:</div>
              <ul className={styles.policyList}>
                <li>Shorts, legging, tight to the body, undercut neck, no-sleeve tops and tank tops </li>
                <li>Guidelines in dress code and student behaviour are to comply with the surrounding culture and to upgrade the energetic ambience.</li>
                <li>The dress code must always be kept both outside and during yoga sessions.</li>
              </ul>
            </div>

            {/* Prohibited Items */}
            <div className={styles.policyCard}>
              <div className={styles.policyTopBar} />
              <div className={styles.policyIcon}>🚫</div>
              <h3 className={styles.policyTitle}>Prohibited Items</h3>
              <ul className={styles.policyList}>
                {prohibited.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Attendance */}
            <div className={styles.policyCard}>
              <div className={styles.policyTopBar} />
              <div className={styles.policyIcon}>🪷</div>
              <h3 className={styles.policyTitle}>Attendance</h3>
              <p className={styles.policyText}>
              You will need to attend every activity given on the ashram when the Post YYTC program is on at AYM. One needs to be present on time on every program given on the ashram. Even guests are allowed only during asana class.
              </p>
              <div className={styles.policySubtitle} style={{ marginTop: "1.4rem" }}>
                Silence
              </div>
              <p className={styles.policyText}>
              The guest should keep quiet in the dining hall, satsang time and also everyone need to put off his/her light after <strong>10:30 PM</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaMandala} aria-hidden="true">
          <MandalaIcon size={420} opacity={0.06} />
        </div>
        <div className={styles.container}>
          <p className={styles.ctaSupra}>Begin Your Journey</p>
          <h2 className={styles.ctaTitle}>Ready to deepen your yogic path?</h2>
          <p className={styles.ctaText}>
            Connect with AYM Yoga Ashram in Rishikesh and embark on the transformative post-TTC journey
            under authentic Guru parampara guidance.
          </p>
          <div className={styles.ctaActions}>
            <a href="mailto:aymyogaschool@gmail.com" className={styles.ctaBtn}>
              Write to Us <span className={styles.ctaArrow}>→</span>
            </a>
            <div className={styles.ctaEmail}>aymyogaschool[at]gmail.com</div>
          </div>
        </div>
      </section>

      <div className={styles.bottomBorder} />
      <HowToReach />
    </div>
    </>
  );
}