"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../assets/style/Navbar.module.css";
import HamburgerMenu from "./Hamburgermenu";
import logo from "../../assets/icons/aym-yoga-school-logo.png";

export interface SubLink {
  label: string;
  href: string;
}

// export interface NavLink {
//   label: string;
//   href: string;
//   clickable?: boolean;
//   children?: SubLink[];
//   dropdownAlign?: "left" | "right";
// }
export interface NavLink {
  label: string;
  href: string;
  clickable?: boolean;
  className?: string; // add this
  children?: SubLink[];
  dropdownAlign?: "left" | "right";
}

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Affiliation", href: "/yoga-alliance-yoga-school" },
      { label: "About AYM", href: "/yoga-school-in-india" },
      { label: "Yoga Rules", href: "/yoga-ttc-india" },
      { label: "Our Teachers", href: "/yoga-teacher-in-rishikesh" },
    ],
  },
  {
    label: "Yoga Retreats",
    href: "/yoga-retreats",
    clickable: false,
    children: [
      { label: "Yoga Retreats", href: "/best-yoga-retreats-in-rishikesh" },
      { label: "Sound Healing Course", href: "/best-sound-healing-course-in-rishikesh" },
      { label: "Yoga Workshop", href: "/best-yoga-meditation-workshop-in-rishikesh" },
      { label: "Yoga Ashrams in India", href: "/best-yoga-ashrams-in-india" },
      { label: "Yoga Holidays & Camps", href: "/yoga-holidays-retreat-in-india" },
      { label: "Inner Awakening Retreat", href: "/inner-awakening-retreat" },
      {
        label: "Yoga Course for Beginners",
        href: "/yoga-course-for-beginners-in-india",
      },
      {
        label: "Ayurveda and Detox Retreat",
        href: "/yoga-and-ayurveda-detox-retreat-in-rishikesh",
      },
    ],
  },
  {
    label: "Yoga Teacher Training",
    href: "/yoga-teacher-training",
    clickable: false,
    children: [
      {
        label: "100 Hour Yoga Teacher Training",
        href: "/100-hour-yoga-ttc-in-rishikesh",
      },
      {
        label: "200 Hour Yoga Teacher Training",
        href: "/200-hour-yoga-teacher-training-in-rishikesh",
      },
      {
        label: "300 Hour Yoga Teacher Training",
        href: "/300-hour-yoga-ttc-in-rishikesh",
      },
      {
        label: "500 Hour Yoga Teacher Training",
        href: "/500-hour-yoga-ttc-in-rishikesh",
      },
      {
        label: "Kundalini Yoga Teacher Training",
        href: "/best-kundalini-yoga-course",
      },
      {
        label: "Yoga Teacher Training Rishikesh",
        href: "/best-yoga-teacher-training-course-in-rishikesh",
      },
      {
        label: "Prenatal Yoga Teacher Training",
        href: "/prenatal-yoga-ttc",
      },
      {
        label: "Vinyasa Yoga Teacher Training",
        href: "/vinyasa-ttc-in-india",
      },
      {
        label: "Yoga Teacher Training in India",
        href: "/yoga-ttc-in-india",
      },
      {
        label: "Hatha Yoga Teacher Training",
        href: "/hatha-yoga-ttc-in-rishikesh",
      },
      { label: "Yoga Teacher Training Goa", href: "/best-yoga-goa-in-india" },
      {
        label: "Yoga Teacher Training Bali",
        href: "/yoga-ttc-in-bali",
      },
      {
        label: "Ayurveda & Yoga TTC",
        href: "/yoga-ayurveda-ttc-in-rishikesh",
      },
      { label: "Yoga Teacher Training World Wide", href: "/yoga-world-wide" },
    ],
  },
  {
    label: "Online Yoga Course",
    href: "/online-yoga-course",
  },
  {
    label: "AYUSH Courses",
    href: "/yoga-college-in-rishikesh",
  },
 { label: "Register", href: "/yoga-registration", className: "navRegister" },
{ label: "Payment", href: "/200-hour-yoga-ttc-fees", className: "navPayment" },
  {
    label: "Resource",
    href: "/resource",
    clickable: false,
    dropdownAlign: "right",
    children: [
      { label: "Gallery", href: "/yoga-photos-india" },
      { label: "Glossary", href: "/yoga-sanskrit-glossary" },
      { label: "Yoga FAQ", href: "/yoga-ttc-rishikesh" },
      { label: "YTTC Reviews", href: "/testimonials" },
      { label: "AYM Yoga Blog", href: "/blog/aym-yoga-blog" },
      { label: "Post TTC Yoga Volunteer", href: "/yoga-volunteer" },
    ],
  },
];

export const Navbar = () => {
  const navRef = useRef<HTMLUListElement>(null);

  const closeAllDropdowns = () => {
    // Remove hover/focus state by blurring all focusable nav items
    navRef.current
      ?.querySelectorAll<HTMLElement>("li[tabindex]")
      .forEach((el) => el.blur());
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src={logo}
              alt="AYM Yoga School"
              width={130}
              height={65}
              priority
              className={styles.logo}
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className={styles.navList} ref={navRef}>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`${styles.navItem} ${link.children ? styles.hasDropdown : ""}`}
              tabIndex={link.children ? 0 : undefined}
            >
              {link.clickable === false && link.children ? (
                <span className={`${styles.navLink} ${styles.navLabelOnly}`}>
                  {link.label}
                  <span className={styles.arrow}>▾</span>
                </span>
              ) : (
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                  {link.children && <span className={styles.arrow}>▾</span>}
                </Link>
              )}

              {link.children && (
                <ul
                  className={`${styles.dropdown} ${
                    link.dropdownAlign === "right" ? styles.dropdownRight : ""
                  }`}
                >
                  {link.children.map((child) => (
                    <li key={child.href} className={styles.dropdownItem}>
                      <Link
                        href={child.href}
                        className={styles.dropdownLink}
                        onClick={closeAllDropdowns}
                      >
                        <span className={styles.dropdownDot}>›</span>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <HamburgerMenu navLinks={navLinks} />
      </nav>
    </header>
  );
};

export default Navbar;
