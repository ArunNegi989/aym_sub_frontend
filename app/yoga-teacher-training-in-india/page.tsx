import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Best Yoga Teacher Training in India | AYM Yoga School",
  description:
    "Join AYM Yoga School for authentic Yoga Teacher Training in India. Learn from experienced teachers through Yoga Alliance and Ministry of AYUSH-recognized programs.",

    alternates: {
      canonical: "https://aymyogaschool.com/yoga-teacher-training-in-india",
    },
};

export default function Page() {
  return <PageClient />;
}