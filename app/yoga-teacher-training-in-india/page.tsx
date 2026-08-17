import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Best Yoga Teacher Training in India | AYM Yoga School",
  description:
    "Join AYM Yoga School's Yoga Teacher Training in India — Yoga Alliance & AYUSH certified courses in Rishikesh. Enroll today and start your journey!",

    alternates: {
      canonical: "https://aymyogaschool.com/yoga-teacher-training-in-india",
    },
};

export default function Page() {
  return <PageClient />;
}