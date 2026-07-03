import React from 'react'
import styles from '../../assets/style/privacy-policy/privacy-policy.module.css'

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use-information', label: 'How We Use Your Information' },
  { id: 'payments-refunds', label: 'Payments & Refunds' },
  { id: 'cookies', label: 'Cookies & Tracking' },
  { id: 'third-party-sharing', label: 'Sharing Your Information' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'your-rights', label: 'Your Rights & Choices' },
  { id: 'international-transfers', label: 'International Transfers' },
  { id: 'childrens-privacy', label: "Children's Privacy" },
  { id: 'third-party-links', label: 'Third-Party Links' },
  { id: 'policy-changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact Us' },
]

function Page() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>AYM Yoga School · Legal</p>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroLede}>
            This policy explains what information AYM Yoga School collects when you visit
            aymyogaschool.com, register for a yoga teacher training, retreat, or online course,
            or make a payment with us — and how we use, protect, and share that information.
          </p>
          <div className={styles.heroMeta}>
            {/* <span className={styles.heroChip}>Effective Date: July 3, 2026</span> */}
            <span className={styles.heroChip}>Last Updated: July 3, 2026</span>
            <span className={styles.heroChip}>aymyogaschool.com</span>
          </div>
        </div>
      </header>

      <div className={styles.body}>
        {/* Sidebar TOC */}
        <nav className={styles.sidebar} aria-label="Table of contents">
          <p className={styles.sidebarLabel}>On This Page</p>
          <ul className={styles.tocList}>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a className={styles.tocLink} href={`#${s.id}`}>
                  <span className={styles.tocNumber}>{String(i + 1).padStart(2, '0')}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.sidebarNote}>
            <strong>Quick summary</strong>
            We collect only what's needed to run your training, retreat, or course booking —
            we never sell your personal data.
          </div>
        </nav>

        {/* Main content */}
        <main className={styles.content}>
          <section id="introduction" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>01</span>
              <h2 className={styles.sectionTitle}>Introduction</h2>
            </div>
            <p className={styles.paragraph}>
              AYM Yoga School ("AYM Yoga School," "we," "us," or "our") operates the website
              aymyogaschool.com, together with our registration, payment, and course-delivery
              systems (collectively, the "Services"). We are based in Rishikesh, India, and
              offer yoga teacher training, retreats, online yoga courses, and AYUSH-recognized
              programs to students worldwide.
            </p>
            <p className={styles.paragraph}>
              This Privacy Policy describes how we collect, use, disclose, and safeguard your
              information when you visit our website, enrol in a program, make a payment, or
              otherwise interact with us. By using our Services, you agree to the collection
              and use of information in accordance with this policy. If you do not agree with
              our policies, please do not use our Services.
            </p>
          </section>

          <section id="information-we-collect" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>02</span>
              <h2 className={styles.sectionTitle}>Information We Collect</h2>
            </div>
            <p className={styles.paragraph}>
              We collect information you provide directly to us, information gathered
              automatically as you use our Services, and information from trusted third
              parties such as payment processors.
            </p>

            <h3 className={styles.subheading}>Information You Provide</h3>
            <ul className={styles.list}>
              <li>Full name, gender, date of birth, and nationality</li>
              <li>Contact details — email address, phone/WhatsApp number, mailing address</li>
              <li>Passport or government ID details, required for visa-support letters and course certification</li>
              <li>Emergency contact information</li>
              <li>Health, dietary, and injury information you choose to share, so we can accommodate your practice safely</li>
              <li>Payment and billing information (card details are handled directly by our payment processor and are not stored on our servers)</li>
              <li>Course, retreat, or teacher-training preferences and application materials</li>
              <li>Messages, reviews, testimonials, and correspondence you send us</li>
            </ul>

            <h3 className={styles.subheading}>Information Collected Automatically</h3>
            <ul className={styles.list}>
              <li>IP address, browser type, device type, and operating system</li>
              <li>Pages visited, time spent on pages, referring URLs, and click patterns</li>
              <li>Approximate location derived from your IP address</li>
              <li>Cookie and similar tracking identifiers (see Section 5)</li>
            </ul>

            <h3 className={styles.subheading}>Information From Third Parties</h3>
            <p className={styles.paragraph}>
              We may receive information about you from payment gateways, referral partners,
              social media platforms (if you interact with us there), and analytics providers.
            </p>
          </section>

          <section id="how-we-use-information" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>03</span>
              <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
            </div>
            <p className={styles.paragraph}>We use the information we collect to:</p>
            <ul className={styles.list}>
              <li>Process your registration for yoga teacher training, retreats, AYUSH courses, or online programs</li>
              <li>Process payments, issue invoices and receipts, and manage refunds</li>
              <li>Communicate with you about your booking, schedule changes, and course logistics</li>
              <li>Prepare visa-support letters and certificates where applicable</li>
              <li>Accommodate dietary, health, or accessibility needs during your stay</li>
              <li>Send confirmations, reminders, and — where you've opted in — newsletters and promotional offers</li>
              <li>Improve our website, course content, and student experience</li>
              <li>Detect, investigate, and prevent fraud, abuse, or security incidents</li>
              <li>Comply with legal, tax, and regulatory obligations, including AYUSH and Yoga Alliance reporting requirements</li>
            </ul>
          </section>

          <section id="payments-refunds" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>04</span>
              <h2 className={styles.sectionTitle}>Payments & Refunds</h2>
            </div>
            <p className={styles.paragraph}>
              We take the security of your payment information seriously and limit our own
              handling of it as much as possible.
            </p>

            <h3 className={styles.subheading}>How Payments Are Processed</h3>
            <ul className={styles.list}>
              <li>Payments made through our website are processed by PCI-DSS compliant third-party payment gateways (such as Razorpay, Stripe, or PayPal, as applicable at checkout)</li>
              <li>We do not store full card numbers, CVV codes, or banking passwords on our servers</li>
              <li>We retain only transaction metadata — amount, date, order reference, and payment status — needed for accounting, invoicing, and dispute resolution</li>
              <li>Bank transfers or other manual payments are matched to your booking using the reference details you provide</li>
            </ul>

            <h3 className={styles.subheading}>Refund Policy</h3>
            <p className={styles.paragraph}>
              Our general refund terms are summarized below. Program-specific terms shared at
              the time of booking take precedence over this summary.
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Cancellation window</th>
                  <th>Refund</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30+ days before start date</td>
                  <td>Full refund minus non-refundable registration/booking fee</td>
                </tr>
                <tr>
                  <td>15–29 days before start date</td>
                  <td>50% of course/retreat fee refunded</td>
                </tr>
                <tr>
                  <td>Less than 15 days before start date</td>
                  <td>Non-refundable, except where required by law</td>
                </tr>
                <tr>
                  <td>No-show or early departure</td>
                  <td>No refund for unused portion of the program</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.paragraph}>
              Approved refunds are issued to the original payment method within 7–14 business
              days, though your bank or card provider may take longer to reflect the credit.
              To request a refund or cancellation, contact us using the details in Section 14.
            </p>

            <h3 className={styles.subheading}>Chargebacks & Disputes</h3>
            <p className={styles.paragraph}>
              If you believe a charge was made in error, please contact us before initiating a
              chargeback with your bank — most issues can be resolved directly and faster this
              way. We share transaction records with payment processors and banks as necessary
              to respond to disputes and chargebacks.
            </p>
          </section>

          <section id="cookies" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>05</span>
              <h2 className={styles.sectionTitle}>Cookies & Tracking Technologies</h2>
            </div>
            <p className={styles.paragraph}>
              We use cookies and similar technologies (such as pixels and local storage) to
              operate our website, remember your preferences, and understand how visitors use
              our Services.
            </p>
            <div className={styles.calloutGrid}>
              <div className={styles.callout}>
                <p className={styles.calloutTitle}>Essential Cookies</p>
                <p className={styles.calloutText}>
                  Required for core site functionality, such as checkout and account login.
                  These cannot be disabled.
                </p>
              </div>
              <div className={styles.callout}>
                <p className={styles.calloutTitle}>Analytics Cookies</p>
                <p className={styles.calloutText}>
                  Help us understand site usage (e.g. Google Analytics) so we can improve pages
                  and content.
                </p>
              </div>
              <div className={styles.callout}>
                <p className={styles.calloutTitle}>Marketing Cookies</p>
                <p className={styles.calloutText}>
                  Used to show relevant offers on our own site and, where you've consented, on
                  third-party platforms.
                </p>
              </div>
              <div className={styles.callout}>
                <p className={styles.calloutTitle}>Chat & Support Widgets</p>
                <p className={styles.calloutText}>
                  Our WhatsApp/chat widget may set cookies to keep your conversation connected
                  across page visits.
                </p>
              </div>
            </div>
            <p className={styles.paragraph}>
              You can control or disable cookies through your browser settings. Disabling
              essential cookies may affect your ability to use certain features, such as
              completing a booking.
            </p>
          </section>

          <section id="third-party-sharing" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>06</span>
              <h2 className={styles.sectionTitle}>Sharing Your Information</h2>
            </div>
            <p className={styles.paragraph}>
              We do not sell your personal information. We share it only in the following
              circumstances:
            </p>
            <ul className={styles.list}>
              <li><strong>Service providers</strong> — payment gateways, email/SMS providers, hosting, and analytics vendors who process data on our behalf under confidentiality obligations</li>
              <li><strong>Accreditation bodies</strong> — Yoga Alliance USA and the Yoga Certification Board (Ministry of AYUSH) where required to issue or verify your certification</li>
              <li><strong>Accommodation & travel partners</strong> — where your retreat or training package includes lodging, meals, or airport transfers</li>
              <li><strong>Legal & compliance</strong> — where disclosure is required to comply with a law, court order, or governmental request, or to protect the rights, safety, or property of AYM Yoga School, our students, or the public</li>
              <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, subject to this policy or a materially similar one</li>
            </ul>
          </section>

          <section id="data-security" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>07</span>
              <h2 className={styles.sectionTitle}>Data Security</h2>
            </div>
            <p className={styles.paragraph}>
              We use industry-standard safeguards — including encrypted connections (SSL/TLS),
              access controls, and secure payment gateways — to protect your information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <div className={styles.highlightBox}>
              <p className={styles.paragraph} style={{ marginBottom: 0 }}>
                No method of transmission or storage is 100% secure. While we work hard to
                protect your data, we cannot guarantee absolute security, and you share
                information with us at your own risk.
              </p>
            </div>
          </section>

          <section id="data-retention" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>08</span>
              <h2 className={styles.sectionTitle}>Data Retention</h2>
            </div>
            <p className={styles.paragraph}>
              We retain personal information for as long as necessary to fulfil the purposes
              described in this policy, including:
            </p>
            <ul className={styles.list}>
              <li>For the duration of your enrolment plus a reasonable period afterward to handle certification, alumni support, and re-enrolment</li>
              <li>Financial and transaction records are retained as required by Indian tax and accounting law (typically up to 8 years)</li>
              <li>Marketing data is retained until you unsubscribe or withdraw consent</li>
              <li>Website analytics data is retained in aggregated or anonymized form after standard retention windows</li>
            </ul>
          </section>

          <section id="your-rights" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>09</span>
              <h2 className={styles.sectionTitle}>Your Rights & Choices</h2>
            </div>
            <p className={styles.paragraph}>
              Depending on your location, you may have some or all of the following rights
              regarding your personal information:
            </p>
            <ul className={styles.list}>
              <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong>Correction</strong> — ask us to correct inaccurate or incomplete data</li>
              <li><strong>Deletion</strong> — request deletion of your data, subject to legal retention requirements</li>
              <li><strong>Objection / Restriction</strong> — object to or limit certain processing, such as marketing</li>
              <li><strong>Portability</strong> — request your data in a portable format, where applicable</li>
              <li><strong>Withdraw consent</strong> — opt out of marketing emails at any time via the unsubscribe link, or withdraw other consent you've given us</li>
            </ul>
            <p className={styles.paragraph}>
              To exercise any of these rights, contact us using the details in Section 14. We
              will respond within a reasonable timeframe and in accordance with applicable law.
            </p>
          </section>

          <section id="international-transfers" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>10</span>
              <h2 className={styles.sectionTitle}>International Transfers</h2>
            </div>
            <p className={styles.paragraph}>
              We are based in India and welcome students from over 50 countries. Your
              information may be transferred to, stored, and processed in India or other
              countries where our service providers operate, which may have different data
              protection laws than your home country. Where required, we take steps to ensure
              such transfers are protected by appropriate contractual or legal safeguards.
            </p>
          </section>

          <section id="childrens-privacy" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>11</span>
              <h2 className={styles.sectionTitle}>Children's Privacy</h2>
            </div>
            <p className={styles.paragraph}>
              Our Services are intended for individuals aged 18 and over. We do not knowingly
              collect personal information from children under 18. If you believe a child has
              provided us with personal information, please contact us so we can promptly
              delete it.
            </p>
          </section>

          <section id="third-party-links" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>12</span>
              <h2 className={styles.sectionTitle}>Third-Party Links</h2>
            </div>
            <p className={styles.paragraph}>
              Our website may contain links to third-party sites, such as social media
              platforms or partner accommodation providers. We are not responsible for the
              privacy practices of these third parties, and we encourage you to review their
              privacy policies before providing any personal information.
            </p>
          </section>

          <section id="policy-changes" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>13</span>
              <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
            </div>
            <p className={styles.paragraph}>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technology, or legal requirements. We will post the revised policy on
              this page with an updated "Last Updated" date, and where changes are material, we
              will provide additional notice, such as an email or a notice on our website.
            </p>
          </section>

          <section id="contact" className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionIndex}>14</span>
              <h2 className={styles.sectionTitle}>Contact Us</h2>
            </div>
            <p className={styles.paragraph}>
              If you have questions about this Privacy Policy, or wish to exercise any of your
              rights, including refund requests, please reach out to us:
            </p>

            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>AYM Yoga School</h3>
              <p className={styles.contactText}>
                We're happy to help with any privacy, payment, or data question — most requests
                are resolved within a few business days.
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactDetail}>
                  <span className={styles.contactLabel}>Website</span>
                  <span className={styles.contactValue}>
                    <a href="https://aymyogaschool.com" target="_blank" rel="noopener noreferrer">
                      aymyogaschool.com
                    </a>
                  </span>
                </div>
                <div className={styles.contactDetail}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>
                    <a href="mailto:aymindia@gmail.com">aymindia@gmail.com</a>
                  </span>
                </div>
                <div className={styles.contactDetail}>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>Rishikesh, Uttarakhand, India</span>
                </div>
              </div>
            </div>

            <a className={styles.backToTop} href="#introduction">↑ Back to top</a>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Page