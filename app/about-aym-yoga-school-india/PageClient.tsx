"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/assets/style/Aboutaym/Aboutus.module.css";
import HowToReach from "@/components/home/Howtoreach";
import heroImg from "@/assets/images/27.webp";
import visionImg from "@/assets/images/mainimages/44726707092_54dbdf88a1_b.jpg";
import missionImg from "@/assets/images/mainimages/44262696525_eea8c9277d_b.jpg";
import historyImg1 from "@/assets/images/mainimages/42014023405_a67ab3a9a9_b.jpg";
import historyImg2 from "@/assets/images/mainimages/28531495457_bfb39bbd82_b.jpg";
import historyImg3 from "@/assets/images/mainimages/46021982052_af98401e70_b.jpg";
import { FaLeaf, FaHeart, FaBook, FaUsers, FaGraduationCap, FaLightbulb, FaFlask, FaHandsHelping } from "react-icons/fa";
import aboutaymimage from "@/assets/images/mainimages/30160808708_0564cf6164_b.jpg";

// ── DATA ─────────────────────────────────────────────────────────
const objectives = [
  "Establishment of yoga study centers in India and abroad.",
  "Developing standards for yoga teacher training programs and assisting other schools.",
  "Leading and integrating spiritual communities and yoga schools in India.",
  "Promotion of research in yoga and yoga institutes in India.",
];

const highlights = [
  {
    icon: FaLeaf,
    title: "Traditional Wisdom",
    description: "Ancient yogic practices combined with modern science",
  },
  {
    icon: FaHeart,
    title: "Holistic Healing",
    description: "Mind, body, and spirit wellness programs",
  },
  {
    icon: FaBook,
    title: "Expert Training",
    description: "Certified yoga teachers with decades of experience",
  },
  {
    icon: FaUsers,
    title: "Global Community",
    description: "Students from over 50 countries worldwide",
  },
];

const activities = [
  {
    icon: FaGraduationCap,
    title: "Teacher Training",
    description: "Comprehensive 100, 200, 300, and 500-hour certification programs",
  },
  {
    icon: FaLightbulb,
    title: "Workshops & Retreats",
    description: "Specialized sessions on meditation, pranayama, and yoga philosophy",
  },
  {
    icon: FaFlask,
    title: "Research & Development",
    description: "Scientific studies on yoga benefits and traditional practices",
  },
  {
    icon: FaHandsHelping,
    title: "Community Outreach",
    description: "Spreading yoga awareness and wellness programs across India",
  },
];

const OmDivider = () => (
  <div className={styles.omDivider}>
    <span className={styles.dividerLine} />
    <span className={styles.omSymbol}>ॐ</span>
    <span className={styles.dividerLine} />
  </div>
);

// ── COMPONENT ────────────────────────────────────────────────
const AboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className={styles.page}>
      {/* ══════════════════════════════════════
          HERO SECTION WITH OVERLAY
      ══════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════
          BLOCK 1 — Yoga School in India
      ══════════════════════════════════════ */}
      <section className={styles.schoolSection}>
        <div className={styles.container}>
          {/* Logo at top */}
          <div className={styles.logoWrap}>
            <div className={styles.logoBadge}>
              <div className={styles.logoFallback}>
                <span className={styles.logoAbbr}>AYM</span>
                <span className={styles.logoFull}>
                  ASSOCIATION FOR
                  <br />
                  YOGA &amp; MEDITATION
                </span>
                <span className={styles.logoIndia}>✦ INDIA ✦</span>
              </div>
            </div>
          </div>

          {/* Content and Images Grid */}
          <div className={styles.schoolContentGrid}>
            {/* Left: Content */}
            <div className={styles.schoolContentLeft}>
              <header className={styles.blockHeader}>
                <h1 className={styles.blockTitle}>About AYM Yoga School: Our Story, Mission & Philosophy</h1>
                <OmDivider />
              </header>

              <div className={styles.schoolBody}>
                <p className={styles.para}>
                The Association for Yoga and Meditation (AYM) Yoga School in Rishikesh is a -profit organization that is recognized by the Government of India. The school is led by a Spiritual Master named Yogi Chetan Mahesh. The AYM Yoga School was started by known Indian yogis in the year 2005. The AYM Yoga School wants to share happiness and health by using the ancient knowledge of yoga.
                </p>
                <p className={styles.para}>
                The AYM Yoga School is a spiritual yoga Ashram. It is 1 km from the holy river Ganga and it is surrounded by the tall and green Himalayas. The AYM Yoga School is a yoga school in Rishikesh. It gives yoga and meditation to spiritual pilgrims who come from all over the world.
                </p>
              </div>
            </div>

            {/* Right: Images Gallery */}
            <div className={styles.schoolImagesRight}>
           <div className={styles.schoolGalleryCard}>
  <div
    className={styles.schoolGalleryFill}
    data-label="Yoga Practice"
    style={{ backgroundImage: `url(${aboutaymimage.src})` }}
  />
</div>


            </div>
          </div>
        </div>
      </section>

        {/* Highlights Grid */}
         <section className={styles.schoolSections}>
            <div className={styles.highlightsGrid}>
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <div key={idx} className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>
                    <Icon />
                  </div>
                  <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                  <p className={styles.highlightDesc}>{highlight.description}</p>
                </div>
              );
            })}
          </div>
         </section>

      {/* ══════════════════════════════════════
          BLOCK 2 — Vision and Mission
      ══════════════════════════════════════ */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <header className={styles.blockHeader}>
            <h2 className={styles.blockTitle}>Vision and Mission</h2>
            <OmDivider />
          </header>

          <div className={styles.visionMissionGrid}>
            <div className={styles.visionCard}>
              <div className={styles.vmImageWrapper}>
                <Image
                  src={visionImg}
                  alt="Meditation and Vision"
                  width={400}
                  height={300}
                  className={styles.vmImage}
                />
              </div>
              <h3 className={styles.vmTitle}>Our Vision</h3>
              <p className={styles.para}>
              AYM Yoga School in Rishikesh has a vision of training highly skilled and knowledgeable yoga teachers with a deep understanding of yoga. The primary focus of AYM Yoga School is to train qualified yoga teachers who can share the benefits of yoga with society.
AYM Yoga School also has a mission to help remove anxiety and depression from modern society through the benefits and understanding of yoga.

              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.vmImageWrapper}>
                <Image
                  src={missionImg}
                  alt="Yoga Training and Mission"
                  width={400}
                  height={300}
                  className={styles.vmImage}
                />
              </div>
              <h3 className={styles.vmTitle}>Our Mission</h3>
              <p className={styles.para}>
              AYM Yoga training is based on classical teaching styles, including asana, pranayama, meditation, stress management, and detoxification techniques. AYM invites everyone to experience and realize the real meaning of yoga by understanding its simple, integrated, and holistic techniques. 
AYM wants you to achieve health, harmony, and happiness while discovering your hidden potential. AYM aims to bring out human excellence at personal, professional, social, and spiritual levels through Raja Yoga, Karma Yoga, Bhakti Yoga, Jayana Yoga, and Hatha Yoga's Tantric culture.

              </p>
            </div>
          </div>

          <div className={styles.prose}>
            <p className={styles.para}>
              We want you to achieve health, harmony, and happiness while
              discovering your hidden potential. AYM aims to bring out human
              excellence at personal, professional, social and spiritual levels
              through Raja yoga, Karma yoga, Bhakti yoga, Jayana yoga, and Hatha
              yoga&apos;s Tantric culture.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 3 — Aims and Objectives
      ══════════════════════════════════════ */}
      <section className={`${styles.contentSection} ${styles.altBg}`}>
        <div className={styles.container}>
          <header className={styles.blockHeader}>
            <h2 className={styles.blockTitle}>
              Aims and Objectives of AYM India
            </h2>
            <OmDivider />
          </header>

          <div className={styles.prose}>
            <p className={styles.para}>
              The AYM YOGA SCHOOL aims to spread yoga through TTC education and
              specialized yoga classes in India. Our main objectives are:
            </p>

            <div className={styles.objectivesGrid}>
              {objectives.map((obj, i) => (
                <div key={i} className={styles.objectiveCard}>
                  <div className={styles.objectiveNumber}>{i + 1}</div>
                  <p className={styles.objectiveText}>{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 4 — History of AYM
      ══════════════════════════════════════ */}
      <section
        className={`${styles.contentSection} ${styles.contentSectionLarge}`}
      >
        <div className={styles.container}>
          <header className={styles.blockHeader}>
            <h2 className={styles.blockTitle}>History of AYM</h2>
            <OmDivider />
          </header>

          <div className={styles.timelineContainer}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>2005</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Foundation Year</h3>
                <p className={styles.para}>
                In September 2005, it became apparent that a national-level standard for yoga teacher training in India was necessary. Yogi Chetan Mahesh, along with other well-known yoga experts and great yoga Gurus, decided to establish a foundation to address this matter.
They registered an organization named The Association for Yoga and Meditation (AYM) with the Government of India.

                </p>
              </div>
              <div className={styles.timelineImageWrapper}>
                <Image
                  src={historyImg1}
                  alt="Yogi Chetan Mahesh - Founder"
                  width={400}
                  height={350}
                  className={styles.timelineImage}
                />
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>2005-2006</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>National Recognition</h3>
                <p className={styles.para}>
                AYM Yoga School in Rishikesh and other training institutes follow traditional and ancient yoga practices with a scientific approach.
In 2005, AYM Yoga School of India also received the status of a National Organization of India and became a member of the International Yoga Federation (IYF). 
AYM also sets standards for yoga study centres in India according to the IYF guidelines.

                </p>
              </div>
              <div className={styles.timelineImageWrapper}>
                <Image
                  src={historyImg2}
                  alt="AYM Yoga Ashram in Rishikesh"
                  width={400}
                  height={350}
                  className={styles.timelineImage}
                />
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>2006+</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Global Expansion</h3>
                <p className={styles.para}>
                Graduates from AYM Yoga School can register with the International Yoga Federation (IYF) and Yoga Alliance USA.
National yoga associations organize yoga activities and sports nationally in most countries. The winners of national-level sports activities in India can be represented at international levels by IYF.
In 2006, AYM passed a resolution to establish an administering body to maintain the international standards of yoga, named the Indian Yoga Alliance (IYA).
                </p>
              </div>
              <div className={styles.timelineImageWrapper}>
                <Image
                  src={historyImg3}
                  alt="AYM Yoga Campus"
                  width={400}
                  height={350}
                  className={styles.timelineImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOCK 5 — Activities
      ══════════════════════════════════════ */}
      <section
        className={`${styles.contentSection} ${styles.altBg} ${styles.altBg2}`}
      >
        <div className={styles.container}>
          <header className={styles.blockHeader}>
            <h2 className={styles.blockTitle}>Activities</h2>
            <OmDivider />
          </header>

          <div className={styles.prose}>
            <p className={styles.para}>
            Association for Yoga and Meditation (AYM) is a national educational organization in India that popularises and promotes yoga education in its original and traditional form. To develop, promote, and integrate yoga, the Association for Yoga and Meditation established and followed standards for yoga teaching, training, and development.
            </p>

            <div className={styles.activitiesGrid}>
              {activities.map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <div key={idx} className={styles.activityItem}>
                    <div className={styles.activityIcon}>
                      <Icon />
                    </div>
                    <h4 className={styles.activityTitle}>{activity.title}</h4>
                    <p className={styles.activityDesc}>{activity.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <HowToReach />
    </main>
  );
};

export default AboutUs;
