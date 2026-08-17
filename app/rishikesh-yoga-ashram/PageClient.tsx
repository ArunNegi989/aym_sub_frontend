// YogaAshrams.tsx
import React from "react";
import Image from "next/image";
import styles from "@/assets/style/yoga-ashrams-in-india/Yogaashrams.module.css";
import yogaashramimg1 from "@/assets/images/yoga-ashram-in-india.jpg";
import yogaashramimg2 from "@/assets/images/yoga-ashram-in-rishikesh.jpg";
import HowToReach from "@/components/home/Howtoreach";
import heroImg from "@/assets/images/35.png";
import Link from "next/link";
import Script from "next/script";

// ---- Om Symbol SVG ----
const OmSVG: React.FC = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="30"
      cy="30"
      r="28"
      stroke="#e8600a"
      strokeWidth="2"
      fill="none"
    />
    <text
      x="50%"
      y="54%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="28"
      fill="#e8600a"
      fontFamily="serif"
    >
      ॐ
    </text>
  </svg>
);


//schema
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aymyogaschool.com/rishikesh-yoga-ashram#breadcrumb",
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
          "name": "Yoga Ashrams in India",
          "item": "https://aymyogaschool.com/rishikesh-yoga-ashram"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://aymyogaschool.com/rishikesh-yoga-ashram#webpage",
      "url": "https://aymyogaschool.com/rishikesh-yoga-ashram",
      "name": "Best Rishikesh Yoga Ashram | AYM Yoga School",
      "description": "Discover AYM Yoga School, a Rishikesh Yoga Ashram offering Yoga Alliance-certified teacher training, yoga retreats, meditation, and wellness programs.",
      "breadcrumb": { "@id": "https://aymyogaschool.com/rishikesh-yoga-ashram#breadcrumb" },
      "about": { "@id": "https://aymyogaschool.com/rishikesh-yoga-ashram#ashram" },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://aymyogaschool.com/#website" }
    },
    {
      "@type": ["LodgingBusiness", "TouristAttraction"],
      "@id": "https://aymyogaschool.com/rishikesh-yoga-ashram#ashram",
      "name": "AYM Yoga Ashram",
      "description": "AYM Yoga Ashram is a traditional yoga ashram in Rishikesh offering ashram-style accommodation and an immersive spiritual environment for yoga teacher training, retreats, and meditation, guided by experienced teachers rooted in Vedic tradition.",
      "url": "https://aymyogaschool.com/rishikesh-yoga-ashram",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Upper Tapovan",
        "addressLocality": "Rishikesh",
        "addressRegion": "Uttarakhand",
        "postalCode": "249192",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.132348,
        "longitude": 78.320039
      },
      "telephone": "+91-7500277709",
      "email": "aymindia@gmail.com",
      "parentOrganization": { "@id": "https://aymyogaschool.com/#organization" },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Karma Yoga service activities" },
        { "@type": "LocationFeatureSpecification", "name": "Keertan (devotional singing) sessions" },
        { "@type": "LocationFeatureSpecification", "name": "Yoga and meditation film screenings" },
        { "@type": "LocationFeatureSpecification", "name": "Spiritual site excursion" },
        { "@type": "LocationFeatureSpecification", "name": "Free Sundays for local exploration" },
        { "@type": "LocationFeatureSpecification", "name": "Post-class discussions with teachers" }
      ],
      "makesOffer": [
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "100 Hour Yoga Teacher Training", "url": "https://aymyogaschool.com/100-hour-yoga-ttc-in-rishikesh" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "200 Hour Yoga Teacher Training", "url": "https://aymyogaschool.com/200-hour-yoga-teacher-training-in-rishikesh" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "300 Hour Yoga Teacher Training", "url": "https://aymyogaschool.com/300-hour-yoga-ttc-in-rishikesh" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "500 Hour Yoga Teacher Training", "url": "https://aymyogaschool.com/500-hour-yoga-ttc-in-rishikesh" } }
      ]
    }
  ]
}




// ===================== MAIN COMPONENT =====================
const YogaAshrams: React.FC = () => {
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
{/* ===== HERO SECTION - FIXED ===== */}
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

{/* ===== TITLE SECTION - SEPARATE ===== */}
<section className={styles.titleSection}>
  <div className={styles.titleContainer}>
    <h1 className={styles.mainTitle}>Best Rishikesh Yoga Ashram: Traditional Ashram Stays & Retreats</h1>
    
  </div>
</section>



{/* ===== FEATURE IMAGE ===== */}
<section className={styles.featureSection}>
  <div className={styles.featureContainer}>
    <div className={styles.featureImageBox}>
      <Image
        src={yogaashramimg1}
        alt="Yoga Ashrams in India"
        fill
        sizes="(max-width: 575px) 100vw, (max-width: 991px) 90vw, 820px"
        style={{ objectFit: "cover" }}
        priority
      />
      <div className={styles.featureQuote}>
        <span className={styles.quoteMark}>"</span>
        <p>Where spirituality meets serenity</p>
      </div>
    </div>
  </div>
</section>


{/* ===== WELCOME SECTION - STATS STYLE ===== */}
<section className={styles.welcomeSection}>
  <div className={styles.welcomeGrid}>
    <div className={styles.welcomeStats}>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>2000+</span>
        <span className={styles.statLabel}>Years of Tradition</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>500+</span>
        <span className={styles.statLabel}>Yoga Ashrams</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>100+</span>
        <span className={styles.statLabel}>Countries Visited</span>
      </div>
    </div>
    <div className={styles.welcomeContent}>
      <p className={styles.welcomeText}>
      Namaste and welcome to AYM Yoga Ashram, Rishikesh. The land of religion, faith, traditions & spirituality 'India' is known world-wide for yoga and meditation. There are a number of schools & yoga ashrams that run and provide teaching to one and all who come to learn yoga and meditation there in India.
      </p>
      <p className={styles.welcomeText}>
      Yoga Ashrams in India provide different yoga courses for everyone, from-Primary (Basic), Secondary (Intermediate) and Intensive (In-depth /Thorough) and these Yoga seekers/enthusiasts or Yoga travellers are free to choose from them according to time availability. AYM Yoga ashram, Rishikesh has a good number of activities like- yoga retreat to the beginners, yoga teacher training to the would-be teachers and inner awakening for spiritual sadhakas.
      </p>
      
    </div>
  </div>
</section>


{/* ===== EXPERIENCE SECTION - UPDATED WITH FULL CONTENT ===== */}
<section className={styles.experienceSection}>
  <div className={styles.experienceHeader}>
    <h2 className={styles.experienceTitle}>
    Best Yoga Ashram in Rishikesh for Authentic Practice    </h2>
  </div>

  <p className={`${styles.experienceBody} container`}>
  Never a better time than the present to begin your yoga journey in Rishikesh. Find joy in every minute,by learning to perform the various techniques of yoga, pranayama and meditation, to practice truly wellroundedness in the cradle of India – Living in our very large and well suited accommodations with other worldly aspirants as well you can make the memory of a lifetime. India's renowned, authentic and traditional yoga is practised right here in the AYM Yoga Ashram in Rishikesh, where you can stay and deepen your spiritual path in the presence of many authentic yoga masters.
  </p>

  <p className={`${styles.experienceBody} container`}>
  You will learn to find your spirit and deepen your capacity for experience at your only truly authentically yogic retreat in the cradle of India. We know that the learning of yoga should be done as comprehensively as possible, and here in the Rishikesh ashrams we make sure our yoga masters will explain to you the reasons as to why yoga, as far as the yogic practises are concerned the science behind the movement will be clearly laid forth so as you develop skills that come from heart, soul and body, from the experts,those who have become self realised, these experienced guides will instill you confidence regarding your capacity.
  </p>

  <div className={styles.timelineGrid}>
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>🧘</div>
      <div className={styles.timelineContent}>
        <h3>Authentic Learning</h3>
        <p>Learn yoga from pioneers who mastered techniques at Vedic Gurukuls</p>
      </div>
    </div>
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>📚</div>
      <div className={styles.timelineContent}>
        <h3>Comprehensive Training</h3>
        <p>Foundation principles and science behind each yoga pose</p>
      </div>
    </div>
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>👨‍🏫</div>
      <div className={styles.timelineContent}>
        <h3>Expert Teachers</h3>
        <p>Skilled masters who teach from heart, mind, and soul</p>
      </div>
    </div>
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>🌿</div>
      <div className={styles.timelineContent}>
        <h3>Peaceful Environment</h3>
        <p>Large, comfortable ashram with seekers from worldwide</p>
      </div>
    </div>
  </div>
</section>


    {/* ===== BEST HOME FOR YOGA ===== */}
<section className={styles.bestSection}>
  <p className={styles.sectionLabel}>Yoga Capital of the World</p>
  <h2 className={styles.sectionTitle}>
    Yoga Ashrams in Rishikesh — Best Home for Yoga
  </h2>
  <div className={styles.bestGrid}>
    <div className={styles.highlightCard}>
      <h3 className={styles.highlightCardTitle}>About Rishikesh</h3>
      <p className={styles.bodyText}>
      The city of Rishikesh is the most holy city in India; also famous worldwide as the ‘International Yoga Hub. People who are looking to experience themselves, visit Rishikesh AYM Yoga Ashram. There are many different styles of yoga ashram in Rishikesh with different yoga: Hatha Yoga, Ashtanga, Vinyasa, Vinyasa flow, Iyengar,kundalini yoga, power yoga and many other styles in the ashram in Rishikesh.

        <Link href="/hatha-yoga-teacher-training">Hatha Yoga</Link>, <Link href="/ashtanga-vinyasa-yoga-course">Ashtanga</Link>, Vinyasa,
        Vinyasa Flow, Iyengar, Kundalini and Power Yoga.
      </p>
      <div className={styles.certBadges}>
        <span className={styles.badge}>Yoga Alliance USA</span>
        <span className={styles.badge}>Intl. Yoga Federation</span>
      </div>
    </div>
    <div className={styles.highlightCard}>
      <h3 className={styles.highlightCardTitle}>Courses Offered</h3>
      <p className={styles.bodyText}>
      Variety and choice can be found within the different yoga ashrams offering their own yoga courses and teacher training of different lengths. The yoga courses include 200 hour teacher training, 300 hour teacher training, and 500 hour teacher training courses that can last anywhere from 25 days to 1 month up to about 2 months and all of the above you will find at one establishment namely, AYM Yoga Ashram in Rishikesh. Upon completion you will be given an internationally recognized certificate, both Yoga Alliance USA and the international Yoga Federation.
      </p>
      <div className={styles.coursePills}>
        <Link href="/200-hour-yoga-teacher-training-in-rishikesh" className={styles.pillLink}>200 Hours Teacher Training <span className={styles.pillArrow}>›</span></Link>
        <Link href="/300-hour-yoga-ttc-in-rishikesh" className={styles.pillLink}>300 Hours Teacher Training <span className={styles.pillArrow}>›</span></Link>
        <Link href="/500-hour-yoga-ttc-in-rishikesh" className={styles.pillLink}>500 Hours Teacher Training <span className={styles.pillArrow}>›</span></Link>
      </div>
    </div>
  </div>
</section>

{/* ===== BOTTOM ASHRAM PHOTO ===== */}
<section className={styles.photoSection}>
  <div className={styles.photoFrame}>
    <div className={styles.ashramImageBox}>
      <Image
        src={yogaashramimg2}
        alt="Yoga Ashram in Rishikesh"
        fill
        sizes="(max-width: 575px) 100vw, (max-width: 991px) 90vw, 860px"
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
      <div className={styles.photoCaptionBar}>
        <p className={styles.photoCaptionTitle}>Yoga Ashram in Rishikesh</p>
        <span className={styles.photoCaptionSub}>AYM Yoga School · Rishikesh, Uttarakhand</span>
      </div>
    </div>
  </div>
</section>


{/* ===== WHAT IS AN ASHRAM ===== */}
<section className={styles.whatSection}>
  <p className={styles.sectionLabel}>Understanding the Space</p>
  <h2 className={styles.sectionTitle}>What is an Ashram?</h2>
  <div className={styles.whatInner}>
    <div className={styles.whatVisual}>
      {[
        { icon: "🏔", label: "Away from city" },
        { icon: "🧘", label: "Daily practice" },
        { icon: "📖", label: "Spiritual school" },
        { icon: "🌿", label: "Karma yoga" },
      ].map((item) => (
        <div key={item.label} className={styles.whatIconBlock}>
          <span className={styles.whatIcon}>{item.icon}</span>
          <span className={styles.whatIconLabel}>{item.label}</span>
        </div>
      ))}
    </div>
    <div className={styles.whatText}>
      <p className={styles.bodyText}>
      An Ashram: Peaceful and sacred habitation far away from worldly activities: Generally an ashram is a habitation situated in some tranquil location not much populated like in the hills, mountains, forest belts or beside a river; that means that the ashram is the place where the yogic students stay together following yogic traditions under the tutelage of a guru, thus an ashram is a colony. Their basic goal is to facilitate the student's opportunity to learn yogic practice in depth with a dedicated guru under his supervision and control. Yoga includes not only yogic postures (Asanas), it can cover everything that yoga stands for.

      </p>
      <p className={styles.bodyText}>
      Daily ashram schedule promotes inner awareness: Daily schedule of an ashram life involves yogic practices and meditating early morning. Then other activities start which go on till dinner and bedtime; all activities are done by students in some sort of routine manner to achieve spiritual progress with inner purification and inner realization so that he can maintain self discipline, awareness of this world, selflessness and mental peace; and can realize one's true self and attain enlightenment in his real human form by following the ideals of life which makes him leading a meaningful, peaceful and happy existence.
      </p>
      <blockquote className={styles.pullquote}>
        The ashram is a home away from home — where students can stay, read,
        study and practice yoga in a peaceful, undisturbed environment.
      </blockquote>
      <p className={styles.bodyText}>
        While living in an ashram, you must wake up early and do mantra
        chanting and yoga practice...
      </p>
    </div>
  </div>
</section>


{/* ===== WHY IS AYM BEST ===== */}
<section className={styles.whySection}>
  <div className={styles.whyInner}>
    <p className={styles.sectionLabel}>Our Difference</p>
    <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
      <Link href="/yoga-ttc-rishikesh">Why is AYM Yoga Ashram best to learn yoga?</Link>
    </h2>
    
    <p className={styles.whyBody}>
    Yoga ashram, as it is secluded form the disturbances, hustle, bustle of our day life so it is very suitable for the  learning of the yoga practice. As in AYM  yoga ashram well experienced and qualified yoga trainers teach us, for practice all the kind and styles of the  yoga, it should have been done the asanas regularly so that the person may have the clean and non-toxic and harmful-free body and mind it is the ashram for teaching people, concentrating on the one thing at a time or some groups of the skills to be achieved when dealing with specific type of work. After getting to the ashram everyone may pay attention to only the self.
    </p>
    <p className={styles.whyBody}>
    Learn where and what I am actually, as the people identify all the  secrets of their lives and know how to  serve in some other ways like, to serve self, after when he was learned 1 or more styles of yoga for achieving the meditative nature they have started their work with efficiency they are well familiar with the life skills.
    </p>
  </div>
  <div className={styles.whyGrid}>
      {[
        { num: "01", label: "Location", title: "Free from distraction", desc: "Located away from the hustle of daily life, free from interruptions, with full focus on your practice." },
        { num: "02", label: "Teachers", title: "Experienced masters", desc: "Qualified teachers who teach different styles and aspects of yoga with heart, mind, and soul." },
        { num: "03", label: "Practice", title: "Holistic wellness", desc: "Regular yoga practice with various asanas allows people to have a healthy mind and body free of toxins." },
        { num: "04", label: "Purpose", title: "Life transformation", desc: "People find the true meaning of life and discover how they can serve themselves by serving others." },
      ].map((card) => (
        <div key={card.num} className={styles.whyCard}>
          <p className={styles.whyCardNum}>{card.num} — {card.label}</p>
          <h3 className={styles.whyCardTitle}>{card.title}</h3>
          <p className={styles.whyCardDesc}>{card.desc}</p>
        </div>
      ))}
    </div>
</section>


{/* ===== ACTIVITIES ===== */}
<section className={styles.actSection}>
  <p className={styles.sectionLabel}>Life at the Ashram</p>
  <h2 className={styles.sectionTitle}>Activities in AYM Rishikesh Yoga Ashram</h2>
  <p className={styles.bodyText}>
    AYM Yoga School is the{" "}
    <strong>best yoga teacher training ashram in Rishikesh</strong> offering
    various styles of yoga. Beyond certified programs, the Ashram also carries
    out other enriching activities for its students.
  </p>
  <div className={styles.actGrid}>
    {[
      { icon: "🙏", text: "Karma Yoga — students participate in ashram activities as service" },
      { icon: "🎶", text: "Keertans — singing of religious songs and mantras together" },
      { icon: "🎬", text: "Yoga & meditation films — curated viewing sessions" },
      { icon: "🛕", text: "Spiritual site visits — one excursion during the course" },
      { icon: "🌅", text: "Free Sundays — explore Rishikesh and nearby places of worship" },
      { icon: "💬", text: "Post-class discussions with teachers on all aspects of life" },
    ].map((a) => (
      <div key={a.text} className={styles.actCard}>
        <span className={styles.actIcon}>{a.icon}</span>
        <p>{a.text}</p>
      </div>
    ))}
  </div>
  <p className={styles.bodyText}>
    At AYM, you have a lot to learn. Don&apos;t wait — come and learn the
    nuances of yoga and meditation at AYM{" "}
    <Link href="/yoga-teacher-training-in-rishikesh"><em>Yoga School in Rishikesh</em></Link>, India.
  </p>
  <div className={styles.coursesBlock}>
    <p className={styles.coursesHeading}>
      Various yoga courses offered by AYM yoga ashram in Rishikesh:
    </p>
    <ul className={styles.coursesList}>
      <li><Link href="/100-hour-yoga-ttc-in-rishikesh">100 Hour Yoga Teacher Training in Rishikesh</Link></li>
      <li><Link href="/200-hour-yoga-teacher-training-in-rishikesh">200 Hour Yoga Teacher Training in Rishikesh</Link></li>
      <li><Link href="/300-hour-yoga-ttc-in-rishikesh">300 Hour Yoga Teacher Training in Rishikesh</Link></li>
      <li><Link href="/500-hour-yoga-ttc-in-rishikesh">500 Hour Yoga Teacher Training in Rishikesh</Link></li>
    </ul>
  </div>
</section>
      <HowToReach />
    </div>
    </>
  );
};

export default YogaAshrams;