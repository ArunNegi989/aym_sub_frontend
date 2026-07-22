import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Best Yoga Teacher in Rishikesh | AYM Yoga School",
  description:
    "Learn from the best yoga teachers in Rishikesh at AYM Yoga School. Discover expert instructors dedicated to authentic yoga education and personal growth.",

    alternates: {
      canonical: "https://aymyogaschool.com/yoga-teacher-in-rishikesh",
    },
};

export default function Page() {
  return <PageClient />;
}