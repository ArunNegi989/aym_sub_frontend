import type { Metadata } from "next";
import { Playfair_Display, Lato, Poppins, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import { AuthProvider } from "@/context/AuthContext";

// ✅ Headings font
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

// ✅ Body font
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal"],
});

// ✅ Alt body font (Poppins) — variable name fix kiya
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

// ✅ Menu font
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yoga School in Rishikesh | Certified Courses | AYM Yoga School",
  description:
    "Join AYM yoga school in Rishikesh for authentic Yoga Teacher Training Courses. We offer Yoga Alliance-certified teacher training, yoga retreats, and meditation.",

    alternates: {
      canonical: "https://aymyogaschool.com",
    },

};

//schema

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "SportsActivityLocation"],
      "@id": "https://aymyogaschool.com/#organization",
      "name": "AYM Yoga School",
      "alternateName": "Association for Yoga & Meditation",
      "url": "https://aymyogaschool.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aymyogaschool.com/_next/static/media/aym-yoga-school-logo.80503ca5.png"
      },
      "image": "https://aymyogaschool.com/_next/static/media/aym-yoga-school-logo.80503ca5.png",
      "description": "AYM Yoga School offers Yoga Alliance USA and AYUSH Ministry certified Yoga Teacher Training Courses (100, 200, 300, 500 hour), yoga retreats, and meditation programs in Rishikesh, India.",
      "telephone": "+91-7500277709",
      "email": "aymindia@gmail.com",
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
      "hasMap": "https://maps.google.com/?q=Indian+Yoga+Association+Rishikesh",
      "sameAs": [
        "https://www.facebook.com/aymindia",
        "https://x.com/aymindia",
        "https://www.instagram.com/indianyogaassociation/",
        "https://www.youtube.com/user/aymindia1/"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Yoga Alliance USA Registered School (RYS 200, RYS 300)",
          "credentialCategory": "Professional Certification"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Yoga Certification Board (YCB), Ministry of AYUSH, Government of India",
          "credentialCategory": "Government Recognition"
        }
      ],
      "makesOffer": [
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "100 Hour Yoga Teacher Training", "url": "https://aymyogaschool.com/100-hour-yoga-ttc-in-rishikesh" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "200 Hour Yoga Teacher Training", "url": "https://aymyogaschool.com/200-hour-yoga-teacher-training-in-rishikesh" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "300 Hour Yoga Teacher Training", "url": "https://aymyogaschool.com/300-hour-yoga-ttc-in-rishikesh" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "500 Hour Yoga Teacher Training", "url": "https://aymyogaschool.com/500-hour-yoga-ttc-in-rishikesh" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Kundalini Yoga Teacher Training", "url": "https://aymyogaschool.com/best-kundalini-yoga-course" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Prenatal Yoga Teacher Training", "url": "https://aymyogaschool.com/prenatal-yoga-course" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Ashtanga Vinyasa Yoga Teacher Training", "url": "https://aymyogaschool.com/ashtanga-vinyasa-yoga-course" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Hatha Yoga Teacher Training", "url": "https://aymyogaschool.com/hatha-yoga-teacher-training" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Online Yoga Course", "url": "https://aymyogaschool.com/online-yoga-course" } },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Yoga and Ayurveda Detox Retreat", "url": "https://aymyogaschool.com/yoga-and-ayurveda-detox-retreat-in-rishikesh" } }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aymyogaschool.com/#website",
      "url": "https://aymyogaschool.com/",
      "name": "AYM Yoga School",
      "publisher": { "@id": "https://aymyogaschool.com/#organization" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://aymyogaschool.com/#webpage",
      "url": "https://aymyogaschool.com/",
      "name": "Yoga School in Rishikesh | Certified Courses | AYM Yoga School",
      "description": "Join AYM yoga school in Rishikesh for authentic Yoga Teacher Training Courses. We offer Yoga Alliance-certified teacher training, yoga retreats, and meditation.",
      "isPartOf": { "@id": "https://aymyogaschool.com/#website" },
      "about": { "@id": "https://aymyogaschool.com/#organization" },
      "inLanguage": "en-IN"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-9S9H4M3CHH"></script>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-9S9H4M3CHH"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-9S9H4M3CHH');
  `}
</Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KR9JNCWB');
          `}
        </Script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />

{/* schema */}
<Script
  id="schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>

      </head>

      <body
        className={`${playfairDisplay.variable} ${lato.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KR9JNCWB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AuthProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AuthProvider>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}