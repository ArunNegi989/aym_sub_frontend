"use client";
import React, { useEffect, useState } from "react";
import styles from "@/assets/style/Rulespage/Rulespage.module.css";
import HowToReach from "@/components/home/Howtoreach";
import Image from "next/image";
import heroImg from "@/assets/images/yogarulesbanner.webp";
import { FaChevronDown } from "react-icons/fa";

const ChakraLotus: React.FC<{
  color: string;
  size: number;
  petals?: number;
  className?: string;
}> = ({ color, size, petals = 8, className }) => {
  const outer = Array.from({ length: petals }, (_, i) => {
    const a = (i * 360) / petals;
    const r = (a * Math.PI) / 180;
    return {
      cx: size / 2 + Math.cos(r) * size * 0.3,
      cy: size / 2 + Math.sin(r) * size * 0.3,
      a,
    };
  });
  const inner = Array.from({ length: petals }, (_, i) => {
    const a = (i * 360) / petals + 360 / petals / 2;
    const r = (a * Math.PI) / 180;
    return {
      cx: size / 2 + Math.cos(r) * size * 0.17,
      cy: size / 2 + Math.sin(r) * size * 0.17,
      a,
    };
  });

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.47}
        stroke={color}
        strokeWidth="0.9"
        strokeDasharray="5 4"
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.38}
        stroke={color}
        strokeWidth="0.5"
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.26}
        stroke={color}
        strokeWidth="0.4"
        strokeDasharray="2 5"
        fill="none"
      />
      {outer.map(({ cx, cy, a }, i) => (
        <ellipse
          key={`o${i}`}
          cx={cx}
          cy={cy}
          rx={size * 0.065}
          ry={size * 0.22}
          transform={`rotate(${a + 90},${cx},${cy})`}
          fill={`${color}18`}
          stroke={color}
          strokeWidth="0.8"
        />
      ))}
      {inner.map(({ cx, cy, a }, i) => (
        <ellipse
          key={`i${i}`}
          cx={cx}
          cy={cy}
          rx={size * 0.048}
          ry={size * 0.13}
          transform={`rotate(${a + 90},${cx},${cy})`}
          fill={`${color}22`}
          stroke={color}
          strokeWidth="0.6"
        />
      ))}
      {Array.from({ length: 6 }, (_, i) => {
        const a1 = (i * 60 * Math.PI) / 180,
          a2 = ((i * 60 + 30) * Math.PI) / 180;
        const r1 = size * 0.22,
          r2 = size * 0.13;
        return (
          <line
            key={`l${i}`}
            x1={size / 2 + Math.cos(a1) * r1}
            y1={size / 2 + Math.sin(a1) * r1}
            x2={size / 2 + Math.cos(a2) * r2}
            y2={size / 2 + Math.sin(a2) * r2}
            stroke={color}
            strokeWidth="0.6"
            opacity="0.7"
          />
        );
      })}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.08}
        fill={`${color}28`}
        stroke={color}
        strokeWidth="0.9"
      />
    </svg>
  );
};

// ─── Mandala SVG ──────────────────────────────────────────────────
const Mandala: React.FC<{ size?: number; className?: string }> = ({
  size = 80,
  className = "",
}) => {
  const cx = size / 2,
    cy = size / 2,
    s = size / 100;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.46}
        stroke="#F15505"
        strokeWidth="0.7"
        strokeDasharray="5 3"
        fill="none"
        opacity="0.65"
      />
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.36}
        stroke="#F15505"
        strokeWidth="0.4"
        fill="none"
        opacity="0.4"
      />
      {Array.from({ length: 16 }, (_, i) => {
        const a = (((i * 360) / 16) * Math.PI) / 180;
        const ex = cx + Math.cos(a) * size * 0.27,
          ey = cy + Math.sin(a) * size * 0.27;
        return (
          <ellipse
            key={i}
            cx={ex}
            cy={ey}
            rx={5 * s}
            ry={13 * s}
            transform={`rotate(${(i * 360) / 16 + 90},${ex},${ey})`}
            fill="rgba(224,123,0,0.1)"
            stroke="#F15505"
            strokeWidth="0.5"
            opacity="0.65"
          />
        );
      })}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (((i * 360) / 8 + 22.5) * Math.PI) / 180;
        const ex = cx + Math.cos(a) * size * 0.16,
          ey = cy + Math.sin(a) * size * 0.16;
        return (
          <ellipse
            key={i}
            cx={ex}
            cy={ey}
            rx={4 * s}
            ry={10 * s}
            transform={`rotate(${(i * 360) / 8 + 22.5 + 90},${ex},${ey})`}
            fill="rgba(224,123,0,0.15)"
            stroke="#F15505"
            strokeWidth="0.6"
            opacity="0.7"
          />
        );
      })}
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.09}
        fill="rgba(224,123,0,0.12)"
        stroke="#F15505"
        strokeWidth="0.9"
        opacity="0.6"
      />
      <text
        x={cx}
        y={cy + 5 * s}
        textAnchor="middle"
        fontSize={16 * s}
        fill="#F15505"
        fontFamily="serif"
        opacity="0.85"
      >
        ॐ
      </text>
    </svg>
  );
};

// ─── Om Divider ───────────────────────────────────────────────────
const OmDivider = () => (
  <div className={styles.omDivider}>
    <span className={styles.dividerLine} />
    <span className={styles.omSymbol}>ॐ</span>
    <span className={styles.dividerLine} />
  </div>
);

// ─── Rules Data with Categories ───────────────────────────────────
const rulesCategories = [
  {
    category: "Conduct & Behavior",
    rules: [
      {
        num: 1,
        title: "Respectful Behavior",
        content: "Students who are in the Yoga Teacher Training Course need to be respectful and mindful all the time. This is important when they are with people and when they are alone at the place where they are studying. When students are with students and with the people who are teaching them they should be kind and helpful. They should try to get along with everyone and remember that yoga is about being disciplined and humble. Students should also think about how their actions will affect others. Students should talk to each other in a way. Not do things that will bother other people. If there are problems students should try to solve them in a way. It is very important to respect people from backgrounds and to respect each other's space.Students in the Yoga Teacher Training Course should also keep their rooms and the shared rooms clean. They should follow the schedule. Listen to what the teachers tell them to do. This is all part of being a student, in the Yoga Teacher Training Course."
      },
      {
        num: 2,
        title: "Mutual Respect",
        content: "Students who are part of a Yoga TTC in India should make sure the environment is one where everyone treats each other with respect. It should be a place where people can be kind and friendly and get along well with each other. There should be no harassment or any kind of violence in the Yoga TTC in India. Everyone should be able to talk about their differences and share their thoughts in a way in the Yoga TTC in India. Using language without any words or insults makes the Yoga TTC in India a special and unforgettable experience. The Yoga TTC in India is a place where people can learn and grow. To make the Yoga Teacher Training Course in India a real learning and growing experience the environment needs to be based on respect. The Yoga Teacher Training Course in India should be open to everyone showing kindness and understanding each other. A place that is safe and supportive allows people to share their thoughts and ideas freely in the Yoga TTC in India. This helps everyone grow and learn and develop as a person in the Yoga TTC in India. Each person should feel important because of the way they think and where they come from and what they have experienced in the Yoga TTC in India. Along with being respectful in the way we speak and act it is also important to be aware of our emotions and to care about others in the Yoga TTC in India. This helps create an energy and a strong sense of being part of a group in the Yoga TTC, in India."
      },
      {
        num: 3,
        title: "Inappropriate Conduct",
        content: "Students should avoid public displays of affection and public nudity. Celibacy should be maintained during the Yoga course. Students should not possess, use, or distribute alcoholic beverages or illegal or recreational drugs. Any music played in your lodging should be played so as not to disturb others. Silence is to be maintained after 10:00 pm and before 09:00 am, with no talking or loud noises, especially in the sleeping areas. Students should not make false statements about others with malice to cause harm or publicly disclose another person's private information. Students should avoid entering into intimate relationships where an imbalance of power or influence, a conflict of interest, or other type of bias exists, for example, between staff and guests, or between teacher and student."
      }
    ]
  },
  {
    category: "Health & Lifestyle",
    rules: [
      {
        num: 4,
        title: "Healthy Lifestyle",
        content: "During the Yoga TTC in India, smoking, alcohol, non-prescription drugs, and eating meat, fish, and eggs are to be avoided to maximize the effect of the Yoga TTC in India"
      },
      {
        num: 10,
        title: "Karma Yoga",
        content: "Karma Yoga is an integral part of Yoga TTC in India. Karma Yoga is required for each student every day. It is a practical approach to help eliminate egoistic and selfish tendencies in students."
      },
      {
        num: 11,
        title: "Temple Guidelines",
        content: "The purity of the temple areas is to be maintained. At a minimum, one’s hands, feet, and face must be washed before entering the area. No unnecessary talk or noise is permitted in the temple area, which is regarded as a place of worship and meditation for all visitors."
      }
    ]
  },
  {
    category: "Photography & Media",
    rules: [
      {
        num: 5,
        title: "Photography Policy",
        content: "Unless otherwise specified, photography or video filming is not allowed at the venue during Yoga TTC in India at AYM, at any time, including during meditation, Satsang, Asana classes, lectures, in temple areas, and during meals. This helps maintain a tranquil and peaceful environment for all."
      },
      {
        num: 6,
        title: "Media Release",
        content: "Pictures may be taken during training, workshops, retreats, or classes and used for marketing or promotional purposes, such as Facebook, Instagram, YouTube, AYM’s website, etc. Students give full permission to release this information by consenting to these terms."
      }
    ]
  },
  {
    category: "Attendance & Policies",
    rules: [
      {
        num: 7,
        title: "Venue Attendance",
        content: "For security reasons and to gain maximum benefit from Yoga TTC in India, students are encouraged to remain at the same town venue throughout their stay. The program coordinator must agree beforehand to all absences from the YTTC, particularly for night and weekend excursions. A “free day” is incorporated into the weekly program for sightseeing or shopping outside the venue, which is Sunday."
      },
      {
        num: 8,
        title: "Mandatory Attendance",
        content: "Attendance and participation in scheduled classes of Yoga TTC in India are mandatory. If students expect to be absent from any scheduled event for any reason, notice must be submitted to the program coordinator. Many absences from scheduled classes may result in the student being dismissed from the course and asked to leave the course."
      },
      {
        num: 9,
        title: "Course Materials",
        content: "Students leaving the Yoga TTC course in India before completion are required to return all their teaching materials."
      }
    ]
  },
  {
    category: "Financial & Legal",
    rules: [
      {
        num: 12,
        title: "Fee Policy",
        content: "All transaction fees for the Yoga TTC course are the responsibility of the registrant. In case of cancellation, drop-out, or any other reason, no fee will be refunded, but it is possible to adjust the fee in the next course within a one-year period in case of an emergency. Therefore, before joining the course, make sure that you will be able to manage to join the course."
      },
      {
        num: 13,
        title: "Cancellation Policy",
        content: "Final confirmation of the Yoga TTC in India will happen at the time of deposit of the advance fee. If you are making any travel arrangements prior to this confirmation, we advise you to subscribe to cancellation insurance, as the Association for Yoga and Meditation cannot be responsible for any costs incurred due to the cancellation of your travel. Usually, there will be no cancellation of a Yoga TTC course by the school management, but the Association for Yoga and Meditation reserves the right to cancel any course in case of an emergency."
      },
      {
        num: 14,
        title: "Liability Disclaimer",
        content: "Final confirmation of the Yoga TTC in India will happen at the time of deposit of the advance fee. If you are making any travel arrangements prior to this confirmation, we advise you to subscribe to cancellation insurance, as the Association for Yoga and Meditation cannot be responsible for any costs incurred due to the cancellation of your travel.Usually, there will be no cancellation of a Yoga TTC course by the school management, but the Association for Yoga and Meditation reserves the right to cancel any course in case of an emergency."
      }
    ]
  }
];

// ─── Main Page ────────────────────────────────────────────────────
const RulesPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
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

      <div className={`${styles.page} ${visible ? styles.visible : ""}`}>
        {/* ════ CHAKRA BACKGROUND ════ */}
        <div className={styles.chakraBg} aria-hidden="true">
          {/* Left side */}
          <div className={`${styles.cp} ${styles.cpL1}`}>
            <ChakraLotus
              color="#c0392b"
              size={210}
              petals={4}
              className={styles.spinCW}
            />
            <span className={styles.cLabel} style={{ color: "#c0392b" }}>
              मूलाधार<em>Muladhara · Root</em>
            </span>
          </div>
          <div className={`${styles.cp} ${styles.cpL2}`}>
            <ChakraLotus
              color="#d4ac0d"
              size={230}
              petals={10}
              className={styles.spinSlow}
            />
            <span className={styles.cLabel} style={{ color: "#d4ac0d" }}>
              मणिपूर<em>Manipura · Solar Plexus</em>
            </span>
          </div>
          <div className={`${styles.cp} ${styles.cpL3}`}>
            <ChakraLotus
              color="#1a5276"
              size={200}
              petals={16}
              className={styles.spinCW}
            />
            <span className={styles.cLabel} style={{ color: "#1a5276" }}>
              विशुद्ध<em>Vishuddha · Throat</em>
            </span>
          </div>
          <div className={`${styles.cp} ${styles.cpL4}`}>
            <ChakraLotus
              color="#6c3483"
              size={195}
              petals={2}
              className={styles.spinSlow}
            />
            <span className={styles.cLabel} style={{ color: "#6c3483" }}>
              आज्ञा<em>Ajna · Third Eye</em>
            </span>
          </div>

          {/* Right side */}
          <div className={`${styles.cp} ${styles.cpR1}`}>
            <ChakraLotus
              color="#e67e22"
              size={195}
              petals={6}
              className={styles.spinCCW}
            />
            <span className={styles.cLabel} style={{ color: "#e67e22" }}>
              स्वाधिष्ठान<em>Svadhisthana · Sacral</em>
            </span>
          </div>
          <div className={`${styles.cp} ${styles.cpR2}`}>
            <ChakraLotus
              color="#1e8449"
              size={215}
              petals={12}
              className={styles.spinCW}
            />
            <span className={styles.cLabel} style={{ color: "#1e8449" }}>
              अनाहत<em>Anahata · Heart</em>
            </span>
          </div>
          <div className={`${styles.cp} ${styles.cpR3}`}>
            <ChakraLotus
              color="#922b21"
              size={205}
              petals={12}
              className={styles.spinSlow}
            />
            <span className={styles.cLabel} style={{ color: "#922b21" }}>
              सहस्रार<em>Sahasrara · Crown</em>
            </span>
          </div>

          {/* Watermark mandalas */}
          <Mandala size={400} className={styles.wmL} />
          <Mandala size={320} className={styles.wmR} />
        </div>

        {/* ════ TOP BORDER ════ */}
        <div className={styles.a} />

        {/* ════ PAGE TITLE & OM DIVIDER ════ */}
        <div className={styles.headerWrap}>
          <div className={styles.outerPad}>
            <h1 className={styles.pageTitle}>
            Yoga Teacher Training Rules & Code of Conduct at AYM
            </h1>
            <OmDivider />
          </div>
        </div>

        {/* ════ MAIN CONTENT — with left/right space ════ */}
        <div className={styles.outerPad}>
          <div className={styles.contentBox}>
            {/* Brown header bar */}
            <div className={styles.brownBar}>
              <Mandala size={19} className={styles.barIcon} />
              <span>Rules for Yoga Teacher Training Students</span>
            </div>

            {/* Rules body - Tabbed Category Layout */}
            <div className={styles.body}>
              {/* Category Tabs */}
              <div className={styles.tabsContainer}>
                <div className={styles.tabsList}>
                  {rulesCategories.map((cat, idx) => (
                    <button
                      key={idx}
                      className={`${styles.tabButton} ${activeTab === idx ? styles.active : ''}`}
                      onClick={() => setActiveTab(idx)}
                    >
                      {cat.category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rules Content for Active Tab */}
              <div className={styles.tabContent}>
                <div className={styles.rulesGrid}>
                  {rulesCategories[activeTab].rules.map((rule) => (
                    <div key={rule.num} className={styles.ruleBox}>
                      <div className={styles.ruleBoxHeader}>
                        <span className={styles.ruleNum}>Rule {rule.num}</span>
                        <h3 className={styles.ruleBoxTitle}>{rule.title}</h3>
                      </div>
                      <p className={styles.ruleBoxContent}>{rule.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Separator */}
              <div className={styles.sep} />

              {/* Agreement Section */}
              <div className={styles.agreementSection}>
                <h2 className={styles.agreementTitle}>Student Agreement</h2>
                <div className={styles.agreementContent}>
                  <p className={styles.agreePara}>
                    <strong className={styles.boldKey}>
                      Agreement by student:
                    </strong>{" "}
                    As a Course Participant of the <strong>Association for Yoga and Meditation Organization</strong>, I do hereby agree to participate in all activities. I assume full responsibility for my personal property and myself and will endeavor to make a genuine effort towards my own self- improvement according to the teachings of Yoga. I understand that if I should break any of the rules I may be asked to leave. No refunds will be granted in any circumstance.
I hereby confirm that I understand that the training program is of intense nature and will be challenging. The course is a full time commitment and does not allow any other activities. I declare that I have disclosed on this form all relevant details and by submitting these details to the Association for Yoga and Meditation I take full responsibility for myself in attending the course.
                  </p>

                  <p className={styles.agreePara}>
                    I hereby confirm that I understand that the training program is
                    of intense nature and will be challenging. The course is a full
                    time commitment and does not allow any other activities. I
                    declare that I have disclosed on this form all relevant details
                    and by submitting these details to Association for Yoga and
                    Meditation I take full responsibility for myself in attending
                    the course.
                  </p>
                </div>
              </div>
            </div>
            {/* /body */}
          </div>
          {/* /contentBox */}
        </div>
        <HowToReach />
        {/* ════ BOTTOM BORDER ════ */}
        <div className={styles.bottomBorder} />

        {/* ════ FOOTER ════ */}
        <footer className={styles.footer}>
          <Mandala size={22} />
          <span>
            © AYM Yoga School · Association for Yoga and Meditation · Rishikesh,
            India
          </span>
          <Mandala size={22} />
        </footer>
      </div>
    </>
  );
};

export default RulesPage;
