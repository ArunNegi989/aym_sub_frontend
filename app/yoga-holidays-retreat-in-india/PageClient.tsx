// YogaHolidays.tsx
import React from "react";
import Image from "next/image";
import styles from "@/assets/style/yoga-holidays-in-india/Yogaholidays.module.css";
import image1 from "@/assets/images/hday.jpg";
import image2 from "@/assets/images/hday3.jpg";
import HowToReach from "@/components/home/Howtoreach";
import heroImg from "@/assets/images/36.png";
import Link from "next/link";
import Script from "next/script";




//schema
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aymyogaschool.com/yoga-holidays-retreat-in-india#breadcrumb",
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
          "name": "Yoga Holidays & Camps",
          "item": "https://aymyogaschool.com/yoga-holidays-retreat-in-india"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://aymyogaschool.com/yoga-holidays-retreat-in-india#webpage",
      "url": "https://aymyogaschool.com/yoga-holidays-retreat-in-india",
      "name": "Best Yoga Holiday Retreats in India | AYM Yoga School",
      "description": "Enjoy the best Yoga Holiday Retreats in India with AYM Yoga School. Experience daily yoga, meditation, healthy meals, and peaceful accommodation.",
      "breadcrumb": { "@id": "https://aymyogaschool.com/yoga-holidays-retreat-in-india#breadcrumb" },
      "about": { "@id": "https://aymyogaschool.com/yoga-holidays-retreat-in-india#service" },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://aymyogaschool.com/#website" }
    },
    {
      "@type": "Service",
      "@id": "https://aymyogaschool.com/yoga-holidays-retreat-in-india#service",
      "serviceType": "Yoga Holiday Retreat",
      "name": "Yoga Holidays & Wellness Camps in India",
      "description": "One-week detoxing and rejuvenating yoga holiday programs at AYM Yoga School, featuring Iyengar, Ashtanga, and Kundalini yoga styles, ranging from 7 to 10 days, combined with meditation and Ayurveda for overall wellness.",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://aymyogaschool.com/#organization",
        "name": "AYM Yoga School"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Rishikesh, Uttarakhand, India"
      }
    },
    {
      "@type": "EducationalEvent",
      "@id": "https://aymyogaschool.com/yoga-holidays-retreat-in-india#shivir-may",
      "name": "Yoga Shivir (Summer Yoga Camp) — Rishikesh",
      "description": "A residential yoga camp for self-practice and general wellness, not a teacher training course. Includes daily asana practice, pranayama, yoga philosophy, and meditation under the guidance of Yogi Chetan Mahesh. Participants receive a certificate of participation, not a teaching certification.",
      "startDate": "2026-05-15",
      "endDate": "2026-06-05",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
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
      },
      "organizer": { "@id": "https://aymyogaschool.com/#organization" },
      "typicalAgeRange": "15-60",
      "offers": {
        "@type": "Offer",
        "price": "1700",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://aymyogaschool.com/yoga-holidays-retreat-in-india",
        "description": "Per day, includes shared accommodation, satvic vegetarian meals, and yoga classes."
      }
    },
    {
      "@type": "EducationalEvent",
      "@id": "https://aymyogaschool.com/yoga-holidays-retreat-in-india#shivir-june",
      "name": "Yoga Shivir (Summer Yoga Camp) — Rishikesh",
      "description": "A residential yoga camp for self-practice and general wellness, not a teacher training course. Includes daily asana practice, pranayama, yoga philosophy, and meditation under the guidance of Yogi Chetan Mahesh. Participants receive a certificate of participation, not a teaching certification.",
      "startDate": "2026-06-06",
      "endDate": "2026-06-27",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
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
      },
      "organizer": { "@id": "https://aymyogaschool.com/#organization" },
      "typicalAgeRange": "15-60",
      "offers": {
        "@type": "Offer",
        "price": "1700",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://aymyogaschool.com/yoga-holidays-retreat-in-india",
        "description": "Per day, includes shared accommodation, satvic vegetarian meals, and yoga classes."
      }
    },
    {
      "@type": "EducationalEvent",
      "@id": "https://aymyogaschool.com/yoga-holidays-retreat-in-india#shivir-july",
      "name": "Yoga Shivir (Summer Yoga Camp) — Rishikesh",
      "description": "A residential yoga camp for self-practice and general wellness, not a teacher training course. Includes daily asana practice, pranayama, yoga philosophy, and meditation under the guidance of Yogi Chetan Mahesh. Participants receive a certificate of participation, not a teaching certification.",
      "startDate": "2026-06-30",
      "endDate": "2026-07-15",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
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
      },
      "organizer": { "@id": "https://aymyogaschool.com/#organization" },
      "typicalAgeRange": "15-60",
      "offers": {
        "@type": "Offer",
        "price": "1700",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://aymyogaschool.com/yoga-holidays-retreat-in-india",
        "description": "Per day, includes shared accommodation, satvic vegetarian meals, and yoga classes."
      }
    }
  ]
}




// ===================== MAIN COMPONENT =====================
const YogaHolidays: React.FC = () => {
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
      {/* ===== SECTION 1 — WHITE BG ===== */}
     {/* ===== SECTION 1 — WHITE BG ===== */}
<section className={styles.whiteSection}>
  <h1 className={styles.mainTitle}>
  Yoga Holidays & Wellness Camps Across India
  </h1>

  {/* Two-column split: text left, media right */}
  <div className={styles.splitGrid}>
    <div className={styles.splitText}>
      <p className={styles.bodyText}>
      Stress, anxiety is all that it takes when caught up with a demanding job and the frantic pace of everyday life. We at AYM understand that maintaining serenity and peace amid the contemporary societal pressures that leave us drained, listless and utterly exhausted, isn’t that easy. In fact, atThe Association of Yoga and Meditation, we have cleverly devised a one-week detoxifying and energizing yoga package for you.A yoga Holiday in India would be apt to renew your zest for life.
You'll stretch to loosen muscles and melt away every inch of tension and strain, getting ready to face anything.

      </p>
      <p className={styles.bodyText}>
      AYM is the best destination to try if you seek a Yoga Retreat and are looking to have a break. AYM is counted amongst the best centres for Yoga Holidays in India. Your yoga trip to Rishikesh would yield immeasurable and quite clear results in a period of one week. We offer varying Yoga Holiday retreats like Iyengar Yoga, Ashtanga Yoga and Kundalini Yoga varying from 7-10 days.
      </p>
      <p className={styles.bodyText}>
      These holidays have been laid out for people across different walks of life whether it be a fitness enthusiast,a seeker of inner peace or anyone wishing for an honest, enriching experience which would improve your general well-being.
      </p>
      <p className={styles.bodyText}>
      So, one should brace to stretch, sweating away toxins making him/her lighter and stronger. You'll undertake several kinds of yoga, feel a surging of energy from deep within you all whilst having immense fun; not to forget, a yoga holiday perfect to bond with like-minded folks or perfect enough to let one indulge in some solitary moments and self-discovery.

      </p>
    </div>

    {/* Media stack: image + optional video */}
    <div className={styles.mediaStack}>
      <div className={styles.imageBox}>
        <Image
          src={image1}
          alt="Stunning View of Rishikesh - AYM Yoga Center"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={styles.imageOverlayCaption}>
          Stunning View of Rishikesh — AYM Yoga Center
        </div>
      </div>

      {/* Video block — swap src for your YouTube/Vimeo embed URL */}
      <div className={styles.videoBlock}>
        {/* Option A: embed an iframe */}
        <iframe
  src="https://www.youtube.com/embed/EJ6K-rhqevE?autoplay=1&loop=1&playlist=EJ6K-rhqevE&mute=1&controls=0&modestbranding=1&rel=0"
  title="Life at AYM Rishikesh"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>
      </div>
    </div>
  </div>

  {/* Ayurveda callout */}
  <div className={styles.ayurvedaCallout}>
    <p className={styles.bodyText}>
    With Your Yoga Holidays in Rishikesh you can combine anything else; Meditation and Ayurveda can be added too. Yoga & Ayurveda Spa is to improve your well-being which gives rest to your mind and transfigures your body. Mediation is to rest your mind and your body, removing tension and anxiety. Yoga in combination with Ayurveda will fill you with life energy, giving your mind body and soul health.
    </p>
  </div>

  {/* Benefits pills */}
  <div className={styles.benefitsWrap}>
    <p className={styles.benefitsHeading}>
      <strong><u>The benefits of our Yoga Holiday in Rishikesh :</u></strong>
    </p>
    <div className={styles.pillsRow}>
      {[
        "Peace of mind & clarity",
        "Relaxation",
        "Rejuvenation — Mind, Body & Soul",
        "Flexibility",
        "Strength — Physical & Mental",
        "Authentic Experience",
        "Lots of fun",
      ].map((b) => (
        <span key={b} className={styles.pill}>
          <span className={styles.pillDot} />
          {b}
        </span>
      ))}
    </div>
  </div>

  {/* CTA */}
  <div className={styles.ctaBar}>
    <p className={styles.ctaText}>
      For more detail about yoga holiday packages / vacations in Rishikesh, India.
    </p>
    <Link href="/best-yoga-retreats-in-rishikesh" className={styles.ctaButton}>
      Click Here to See Yoga Holidays Packages
    </Link>
  </div>
</section>

      {/* ===== SECTION 2 — BEIGE BG ===== */}
<section className={styles.beigeSection}>
  <div className={styles.beigeInner}>
    {/* Header with decorative element */}
    <div className={styles.shivirHeader}>
      <div className={styles.headerAccent}></div>
      <h2 className={styles.shivirTitle}>Yog Shivir Haridwar, Rishikesh, India</h2>
      <h3 className={styles.shivirSubtitle}>Yoga Camps in Rishikesh / Yoga Shivir Rishikesh</h3>
    </div>

    {/* Main description card */}
    <div className={styles.descriptionCard}>
      <p className={styles.beigeBodyText}>
      AYM Yoga Ashram has Residential Yoga camps in the lap of Himalayas where the Yoga camps are conducted by Yoga Master Yogi Chetan Mahesh. The main objective of conducting yoga camps is to enhance yoga knowledge for common man in which the students also gets yoga knowledge and thus enables them to keep good health and establish yogic life style for the students so that the problems like disease and stress kept away in future and it also helps in developing the morality and Indian traditional values among the youth. This yoga is not a yoga teacher training course for self-training and practice. The participation certificate will be given to the student after the camp, but not the yoga teaching certificates.
      </p>
    </div>

    {/* Yoga Camp Image with caption */}
    <div className={styles.imageWrapper}>
      <div className={styles.campImageBox}>
        <Image
          src={image2}
          alt="Yoga Camp in Rishikesh - AYM"
          fill
          sizes="(max-width: 575px) 100vw, (max-width: 991px) 90vw, 700px"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <div className={styles.campImageCaption}>
          <span>Morning Yoga Session at AYM Camp</span>
        </div>
      </div>
    </div>

    {/* Dates & Duration Section */}
    <div className={styles.infoCard}>
      <h2 className={styles.sectionHeading}>Dates & Duration</h2>
      <div className={styles.datesGrid}>
        <div className={styles.dateBlock}>
          <p className={styles.dateHighlight}>
            Summer Yoga camps in Rishikesh conducted during school holidays
          </p>
          <p className={styles.durationRange}>7 to 21 Days</p>
          <p className={styles.dateNote}>Choose according to your convenience</p>
        </div>
        <div className={styles.dateBlock}>
          <p className={styles.datePeriod}>15 May - 05 June</p>
          <p className={styles.datePeriod}>06 June - 27 June</p>
          <p className={styles.datePeriod}>30 June - 15 July</p>
        </div>
      </div>
    </div>

    {/* Timetable Section */}
    <div className={styles.timetableCard}>
      <div className={styles.timetableHeader}>
        <h3 className={styles.timetableTitle}>Daily Schedule</h3>
        <p className={styles.timetableSubtitle}>Yoga Shivir Timetable</p>
      </div>
      
      <div className={styles.timetableBody}>
        <div className={styles.timetableColumns}>
          <div className={styles.timetableCol}>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>06:00 AM</span>
              <span className={styles.activity}>Wake Up</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>06:30 AM</span>
              <span className={styles.activity}>Asana Practice</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>08:00 AM</span>
              <span className={styles.activity}>Tea & Snacks</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>08:30 AM</span>
              <span className={styles.activity}>Pranayama</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>10:00 AM</span>
              <span className={styles.activity}>Breakfast</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>11:00 AM</span>
              <span className={styles.activity}>Yoga Philosophy</span>
            </div>
          </div>
          <div className={styles.timetableCol}>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>01:30 PM</span>
              <span className={styles.activity}>Lunch</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>02:00 PM</span>
              <span className={styles.activity}>Rest Period</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>03:30 PM</span>
              <span className={styles.activity}>Asana & Meditation</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>06:30 PM</span>
              <span className={styles.activity}>Dinner</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>08:00 PM</span>
              <span className={styles.activity}>Mantra Chanting</span>
            </div>
            <div className={styles.timetableRow}>
              <span className={styles.timeSlot}>10:00 PM</span>
              <span className={styles.activity}>Lights Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Pricing Section */}
    <div className={styles.pricingGrid}>
      <div className={styles.pricingCard}>
        <h4 className={styles.pricingTitle}>Course Fee</h4>
        <p className={styles.pricingAmount}>1,700 INR</p>
        <p className={styles.pricingDetail}>per day</p>
        <div className={styles.pricingIncludes}>
          <span>Accommodation</span>
          <span>Meals</span>
          <span>Yoga Classes</span>
        </div>
      </div>
      <div className={styles.pricingCard}>
        <h4 className={styles.pricingTitle}>Meals</h4>
        <p className={styles.pricingAmount}>Satvic</p>
        <p className={styles.pricingDetail}>Vegetarian Food</p>
        <div className={styles.pricingIncludes}>
          <span>Healthy</span>
          <span>Nutritious</span>
          <span>Traditional</span>
        </div>
      </div>
      <div className={styles.pricingCard}>
        <h4 className={styles.pricingTitle}>Accommodation</h4>
        <p className={styles.pricingAmount}>Shared Room</p>
        <p className={styles.pricingDetail}>Included in Package</p>
        <div className={styles.pricingIncludes}>
          <span>Private Room Available</span>
          <span>Extra Charges Apply</span>
        </div>
      </div>
    </div>

    {/* Enrollment Section */}
    <div className={styles.enrollSection}>
      <h2 className={styles.sectionHeading}>How to Enroll?</h2>
      <div className={styles.enrollSteps}>
        <div className={styles.step}>
          <span className={styles.stepNumber}>01</span>
          <p>Register 1 month in advance</p>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNumber}>02</span>
          <p>Pay 5,000 INR advance booking fee</p>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNumber}>03</span>
          <p>Submit personal details for registration</p>
        </div>
      </div>
      <p className={styles.seatsNote}>Seats are limited and fill quickly</p>
    </div>

    {/* Eligibility Section */}
    <div className={styles.eligibilityCard}>
      <h2 className={styles.sectionHeading}>Who Can Attend?</h2>
      <p className={styles.eligibilityText}>
        Anyone interested in learning yoga, aged <strong>15 - 60 years</strong>, provided the individual is physically fit.
      </p>
    </div>

    {/* Guidelines Section */}
    <div className={styles.guidelinesSection}>
      <h2 className={styles.sectionHeading}>Important Guidelines</h2>
      <div className={styles.guidelinesGrid}>
        <div className={styles.guidelineItem}>
          <span className={styles.guidelineDot}></span>
          <p>Bring bed sheets, mosquito coils, torch, stationery items</p>
        </div>
        <div className={styles.guidelineItem}>
          <span className={styles.guidelineDot}></span>
          <p>Dress code: Loose, light-colored clothing</p>
        </div>
        <div className={styles.guidelineItem}>
          <span className={styles.guidelineDot}></span>
          <p>No mobile phones during yoga sessions</p>
        </div>
        <div className={styles.guidelineItem}>
          <span className={styles.guidelineDot}></span>
          <p>Punctuality required for all sessions</p>
        </div>
        <div className={styles.guidelineItem}>
          <span className={styles.guidelineDot}></span>
          <p>No smoking, alcohol, or intoxicants on campus</p>
        </div>
        <div className={styles.guidelineItem}>
          <span className={styles.guidelineDot}></span>
          <p>No fast food or junk food during camp</p>
        </div>
        <div className={styles.guidelineItem}>
          <span className={styles.guidelineDot}></span>
          <p>Report by 6:00 PM day before camp starts</p>
        </div>
        <div className={styles.guidelineItem}>
          <span className={styles.guidelineDot}></span>
          <p>Stay until camp concludes after lunch</p>
        </div>
      </div>
    </div>

    {/* ===== MORE RELATED INFORMATION SECTION ===== */}
    <div className={styles.moreInfoSection}>
      <h2 className={styles.moreInfoTitle}>
        More related information for yog shivir Rishikesh at AYM
      </h2>

      <p className={styles.moreInfoText}>
      It is requested of the interested participants to carry items required such as bed sheets, mosquito coil/mat, torch, stationery (pen, pencil, rubber, sharpener, writing pad/note book), toiletry articles for the whole duration of yoga camp.

      </p>

      <div className={styles.dressCodeBlock}>
        <h3 className={styles.dressCodeTitle}>Dress code for Yoga sessions</h3>
        <p className={styles.dressCodeItem}>
          <strong>For Men :</strong> Loose T-shirt of any light color along with pyjayama and shorts.
        </p>
        <p className={styles.dressCodeItem}>
          <strong>For Women :</strong> Loosely made Salwar-Kameez (normal ladies suit) of light colour.
        </p>
        <p className={styles.moreInfoText}>
          Shorts for men are allowed only in yoga sessions and not outside them.
        </p>
      </div>

      <div className={styles.moreInfoRules}>
        <p className={styles.moreInfoText}>
        Any mobile phone,i-pod,i-pad,cd/dvd recorder and tape recorder are prohibited from Yoga sessions.
        </p>
        <p className={styles.moreInfoText}>
        The registered students are requested to be present and attend yoga sessions on time.
        </p>
        <p className={styles.moreInfoText}>
        Participants have to report at camp's office one day in advance, latest by 6:00 p.m. And they are permitted to depart at post lunch time on the last day. Students are not permitted to leave the camp before its termination.
        </p>
        <p className={styles.moreInfoText}>
        To go out of the campus to smoke cigarettes, Cigar, to chew paan, pan-masala, drinking wine, liquor or other intoxicating, is strongly prohibited.

        </p>
        <p className={styles.moreInfoText}>
        Students have to walk for 2 kilometers, have to climb stairs up to the 2nd floor of the building everyday within campus for the various Yoga & meditation sessions.
        </p>
        <p className={styles.moreInfoText}>
        Students are not permitted to consume fast food & junk food.
        </p>
      </div>
    </div>

    {/* How to Reach */}
    <div className={styles.reachSection}>
      <h2 className={styles.sectionHeading}>How to Reach?</h2>
      <p className={styles.beigeBodyText}>
        Rishikesh is located 300 km from Delhi and is well-connected by road, train, and air.
        Use Google Maps and search &quot;AYM Yoga Teacher Training School Rishikesh&quot; for directions.
      </p>
    </div>
  </div>
</section>

      <HowToReach />
    </div>
    </>
  );
};

export default YogaHolidays;