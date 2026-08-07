// DetoxRetreat.tsx
import React from "react";
import Image from "next/image";
import styles from "@/assets/style/yoga-ayurveda-detox-retreat/Detoxretreat.module.css";
import detoxHero from "@/assets/images/Ayurvea-and-detox.jpg";
import faceMassage from "@/assets/images/Massage.jpg";
import HowToReach from "@/components/home/Howtoreach";
import heroImg from "@/assets/images/39.png";
import Script from "next/script";


const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh#breadcrumb",
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
          "name": "Ayurveda and Detox Retreat",
          "item": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh#webpage",
      "url": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh",
      "name": "Best Yoga and Ayurveda Detox Retreat in Rishikesh",
      "description": "Experience a Yoga and Ayurveda Detox Retreat in Rishikesh at AYM Yoga School. Restore your health through yoga, Ayurvedic therapies, and wellness.",
      "breadcrumb": { "@id": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh#breadcrumb" },
      "about": { "@id": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh#service" },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://aymyogaschool.com/#website" }
    },
    {
      "@type": "Service",
      "@id": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh#service",
      "serviceType": "Ayurveda Detox Retreat",
      "name": "Yoga and Ayurveda Detox Retreat",
      "description": "A holistic detoxification program in Rishikesh combining yoga, Ayurveda, and diet to cleanse the body of accumulated toxins, offered as both an in-person retreat at AYM's Panchakarma treatment centre and a guided at-home program with doctor consultation and delivered herbal treatment kits.",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://aymyogaschool.com/#organization",
        "name": "AYM Yoga School"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Rishikesh, Uttarakhand, India"
      },
      "availableChannel": [
        {
          "@type": "ServiceChannel",
          "name": "In-Person Panchakarma Retreat",
          "description": "Personal consultation with an Ayurveda doctor, a customised detox plan, daily herbal treatments, oil therapies, Panchakarma sessions, guided yoga and pranayama, and Ayurvedic meals, all at the AYM centre in Rishikesh."
        },
        {
          "@type": "ServiceChannel",
          "name": "At-Home Guided Detox Program",
          "description": "Phone consultation and guidance, a herbal medicine and oil kit delivered by post, live or video demonstration by a therapist, and ongoing monitoring and feedback during the detox process."
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Detox Retreat Durations",
        "itemListElement": [
          { "@type": "Offer", "name": "3 Day Detox Program", "description": "Price provided after consultation with AYM's Ayurveda doctor via email.", "url": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh" },
          { "@type": "Offer", "name": "7 Day Detox Program", "description": "Price provided after consultation with AYM's Ayurveda doctor via email.", "url": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh" },
          { "@type": "Offer", "name": "10 Day Detox Program", "description": "Price provided after consultation with AYM's Ayurveda doctor via email.", "url": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh" },
          { "@type": "Offer", "name": "15 Day Detox Program", "description": "Price provided after consultation with AYM's Ayurveda doctor via email.", "url": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh" }
        ]
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh#howto",
      "name": "Complete Method to Detoxification Through Yoga, Ayurveda, and Diet",
      "description": "AYM Yoga School's seven-step approach to full-body detoxification combining Ayurvedic therapies, yoga, and lifestyle changes.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Digestive Detox",
          "text": "Activate the digestive system to improve metabolism through herbs, therapies, and metabolic changes."
        },
        {
          "@type": "HowToStep",
          "name": "Gut Detox",
          "text": "Cleanse the rectum and large intestine through herbal oils and enema therapies."
        },
        {
          "@type": "HowToStep",
          "name": "Breathing & Lungs Detox",
          "text": "Carried out through medicated oil or steam treatments and deep yoga breathing techniques."
        },
        {
          "@type": "HowToStep",
          "name": "Muscles, Bones & Skin Detox",
          "text": "Achieved through herbal lepana, oil massage, steam therapy, and yoga practice."
        },
        {
          "@type": "HowToStep",
          "name": "Blood Purification",
          "text": "Deep cleansing of the blood through Ayurvedic herbs and purification rituals."
        },
        {
          "@type": "HowToStep",
          "name": "Digital Detox",
          "text": "Step away entirely from mobile phones, laptops, games, and social media."
        },
        {
          "@type": "HowToStep",
          "name": "Complete Detox",
          "text": "Full integration of the six steps above for a total transformation of body, mind, and spirit through Ayurveda, yoga, and nutrition."
        }
      ]
    }
  ]
}

// ===================== MAIN COMPONENT =====================
const DetoxRetreat: React.FC = () => {


   
  return (
    <>
     <Script
        id="detox-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

    
    <div className={styles.pageWrapper}>
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
      <section className={styles.section}>
  <h1 className={styles.mainTitle}>
  Ayurveda & Detox Retreat in Rishikesh: Cleanse, Heal, Restore
  </h1>

  <div className={styles.twoColumnLayout}>
    <div className={styles.textColumn}>
      <p className={styles.bodyText}>
      It’s your body and mind, and we have a responsibility to care for both of them.What are you doing to care for?Do you even think about it?I know We all are happy to purchase a new car and to regularly check and to do service so that our car does not Breakdown while you were travelling somewhere with it if I know well we buy a new car that would be using that for say about 10 years minimum, have you done maintenance of that car for at least 15 times?

      </p>
      <div className={styles.highlightBox}>
        <p className={styles.bodyText}>
          <span className={styles.highlight}>The below image shows</span> the condition of the sewage pipe when new and
          ten years after use. The condition of our large intestine would be
          similar.
        </p>
      </div>
      <p className={styles.bodyText}>
      Toxin is defined as a harmful compound that can harm a living creature. The toxin might also look like the monster residing inside your body, which appears in another shape. Heavy metals and synthetic chemicals are some examples of toxic compounds; a preservative is another type of natural substance used in all types of food.
      </p>
    </div>

    <div className={styles.imageColumn}>
      <div className={styles.imageBox}>
        <Image
          src={detoxHero}
          alt="Ayurveda detoxification - herbs and treatment"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.columnImage}
          priority
        />
        <div className={styles.imageOverlay}>
          <span className={styles.imageBadge}>Ayurveda Detox</span>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.conclusionBox}>
    <p className={styles.bodyText}>
      <span className={styles.quoteIcon}>"</span>
      We all say you are what you eat, but you are actually what you eat. The burger you had 1 year ago is still stuck in your system. Every food; sugar, cheese, biscuits, namkeen, tea, coffee, chips-all these kinds of foods that don't come from mother nature are very difficult for us to get rid of and digest.They stick to the inner walls of the intestines, accumulating as a thick coating.Most diseases like diabetics, high cholesterol, blood pressure originates from here due to this toxic body.
      <span className={styles.quoteIcon}>"</span>
    </p>
  </div>
</section>

     {/* ===== SECTION 2 — HOW TO CORRECT ===== */}
<section className={styles.correctSection}>
  <div className={styles.sectionInner}>
    <p className={styles.sectionLabel}>Holistic Healing</p>
    <h2 className={styles.sectionTitle}>HOW TO CORRECT THIS PROBLEM?</h2>
    <div className={styles.titleUnderline} />
    <p className={styles.bodyText}>
      We will help you clear this toxin/waste out of your system. In other words, wash out your inside system. Upon doing this you will naturally lose weight, achieve clearer skin, increase energy, gain more mental focus and overall attain a happier, healthier life.
    </p>
    <div className={styles.benefitGrid}>
      {[
        { icon: "⚖️", title: "Weight Loss", desc: "Eliminate accumulated waste and toxins to naturally shed excess weight." },
        { icon: "✨", title: "Clearer Skin", desc: "Purify from within for radiant, glowing skin free of blemishes." },
        { icon: "🧠", title: "Mental Clarity", desc: "Remove mental fog and gain focus, calmness and greater awareness." },
      ].map((b) => (
        <div key={b.title} className={styles.benefitCard}>
          <span className={styles.benefitIcon}>{b.icon}</span>
          <h3 className={styles.benefitTitle}>{b.title}</h3>
          <p className={styles.benefitDesc}>{b.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ===== SECTION 3 — COMPLETE METHOD ===== */}
<section className={styles.methodSection}>
  <div className={styles.sectionInner}>
    <p className={styles.sectionLabel}>Our Method</p>
    <h2 className={styles.sectionTitle}>
      COMPLETE METHOD TO DETOXIFICATION THROUGH YOGA, AYURVEDA, AND DIET
    </h2>
    <div className={styles.titleUnderline} />
    <p className={styles.bodyText}>
    As all of us may know; if we take off poisons, the body heals itself. While the body is cleaning from those things, the immune system enhances & healing starts with rapidity. We induce thorough detoxification with help of the above processes.
    </p>
    <div className={styles.stepsGrid}>
      {[
        { n: 1, title: "Digestive Detox", desc: "Activate the digestive system to improve metabolism through herbs, therapies and metabolic changes." },
        { n: 2, title: "Gut Detox", desc: "Rectum and large intestine cleanse through herbal oils and enema therapies." },
        { n: 3, title: "Breathing & Lungs Detox", desc: "Carried out through medicated oil or steam and deep yoga breathing techniques" },
        { n: 4, title: "Muscles, Bones & Skin", desc: "Through herbal lepana, oil massage, steam therapy and yoga practice." },
        { n: 5, title: "Blood Purification", desc: "Deep cleansing of the blood through Ayurvedic herbs and purification rituals." },
        { n: 6, title: "Digital Detox", desc: "Step away from all mobile phones, laptops, games and social media entirely." },
      ].map((s) => (
        <div key={s.n} className={styles.stepCard}>
          <div className={styles.stepNum}>{s.n}</div>
          <div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        </div>
      ))}
      <div className={`${styles.stepCard} ${styles.stepCardFull} ${styles.stepCardHighlight}`}>
        <div className={styles.stepNum}>7</div>
        <div>
          <h3 className={styles.stepTitle}>Complete Detox</h3>
          <p className={styles.stepDesc}>
            The full integration of all six steps above — a total transformation
            of body, mind and spirit through Ayurveda, Yoga and Nutrition.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== SECTION 4 — FACE MASSAGE IMAGE ===== */}
<section className={styles.massageSection}>
  <div className={styles.sectionInner}>
    <p className={styles.sectionLabel}>Experience</p>
    <h2 className={styles.sectionTitle}>AYURVEDA MASSAGE THERAPY</h2>
    <div className={styles.titleUnderline} />
    <div className={styles.mediaTabRow}>
      <div className={styles.badgeRow}>
        <span className={styles.therapyBadge}>Abhyanga</span>
        <span className={styles.therapyBadge}>Shirodhara</span>
        <span className={styles.therapyBadge}>Nasya</span>
      </div>
    </div>
    <div className={styles.massageImageBox}>
      <Image
        src={faceMassage}
        alt="Ayurveda face massage treatment"
        fill
        sizes="(max-width: 575px) 100vw, (max-width: 991px) 95vw, 1140px"
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
      <div className={styles.massageImageOverlay}>
        <p className={styles.overlayQuote}>
          &ldquo;Healing begins where toxins end.&rdquo;
        </p>
      </div>
    </div>
  </div>
</section>

  {/* ===== SECTION 5 — TWO SYSTEMS ===== */}
<section className={styles.systemsSection}>
  <div className={styles.sectionInner}>
    <p className={styles.sectionLabel}>Our Approach</p>
    <h2 className={styles.sectionTitle}>
      WE HAVE TWO SYSTEMS FOR DETOXIFICATION AT AYM DETOX SCHOOL IN RISHIKESH
    </h2>
    <div className={styles.titleUnderline} />

    <div className={styles.systemsGrid}>
{/* Card 1 */}
<div className={styles.systemCard}>
  <div className={styles.systemCardHeader}>
    <div className={styles.systemNum}>1</div>
    <p className={styles.systemCardDesc}>
    For one of the packages, you can make your way to our yoga Ayurveda panchakama treatment centre in rishikesh. The process is initiated by our professional practitioner through routine cleansing.
    </p>
  </div>
  <div className={styles.systemCardBody}>
    <p className={styles.providesLabel}>what to expect:</p>
    <ul className={styles.providesList}>
      {[
        "Initial consultation with our Ayurveda doctor upon arrival.",
        "An individual detox plan tailored to your body constitution (Dosha).",
        "Daily herbal remedies, massage with herbal oils, and Panchakarma procedures.",
        "Morning and evening yoga asanas and pranayama sessions for relaxation and purification.",
        "Wholesome vegetarian Ayurvedic food prepared fresh each day.",
      ].map((text) => (
        <li key={text} className={styles.providesItem}>
          <div className={styles.providesDot}><div className={styles.providesDotInner} /></div>
          <span className={styles.providesText}>{text}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

      {/* Card 2 */}
      <div className={styles.systemCard}>
        <div className={styles.systemCardHeader}>
          <div className={styles.systemNum}>2</div>
          <p className={styles.systemCardDesc}>
          We’ll deliver you all the material and training right to your doorstep & introduce you to the best ayurveda,yoga And Nutritionists so that you could get a personal consultation with them . You can either consult our experts by coming to our wellness center or do it yourself through a single training by our expert over video call. We have customized detox programs for your special needs.
          </p>
        </div>
        <div className={styles.systemCardBody}>
          <p className={styles.providesLabel}>we will provide you:</p>
          <ul className={styles.providesList}>
            {[
              "Consultation and assistance over the phone.",
              "You will get a pack with herbal medicine and oils delivered to your door, after you book with us.",
              "Our certified therapist will demonstrate every process through video calls or even in live mode.",
              "Our experts would come to you and provide the needed advice after proper consultation.",
            ].map((text) => (
              <li key={text} className={styles.providesItem}>
                <div className={styles.providesDot}><div className={styles.providesDotInner} /></div>
                <span className={styles.providesText}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== SECTION 6 — PRICE AND PACKAGES ===== */}
<section className={styles.packagesSection}>
  <div className={styles.sectionInner}>
    <p className={styles.sectionLabel}>Plans</p>
    <h2 className={styles.sectionTitle}>PRICE AND PACKAGES</h2>
    <div className={styles.titleUnderline} />

    <div className={styles.packagesGrid}>
      {["3 Days", "7 Days", "10 Days", "15 Days"].map((pkg) => (
        <div key={pkg} className={styles.pkgCard}>
          <div className={styles.pkgDays}>{pkg.split(" ")[0]}</div>
          <div className={styles.pkgDaysLabel}>Days</div>
        </div>
      ))}
    </div>

    <p className={styles.priceNote}>
      Price will Let you know after Consultant with Our Ayurveda Doctor ( By Email)
    </p>
  </div>
</section>
      <HowToReach />
    </div>
    </>
  );
};

export default DetoxRetreat;
