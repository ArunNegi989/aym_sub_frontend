import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Rishikesh | Certified Courses",
  description:
    "Advance your yoga journey with Yoga Teacher Training in Rishikesh at AYM Yoga School. Learn from experienced teachers in a traditional yoga environment",

    alternates: {
      canonical: "https://aymyogaschool.com/yoga-teacher-training-in-rishikesh",
    },
};

export default function Page() {
  return <PageClient />;
}