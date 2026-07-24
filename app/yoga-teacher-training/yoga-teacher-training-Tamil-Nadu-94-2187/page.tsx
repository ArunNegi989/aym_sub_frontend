import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training School in Tamil Nadu | AYM",
  description:
    "Discover qualified yoga instructor training for residents of Tamil Nadu. AYM offers beginner to professional-level YTT with global accreditation.",

    
};

export default function Page() {
  return <PageClient />;
}