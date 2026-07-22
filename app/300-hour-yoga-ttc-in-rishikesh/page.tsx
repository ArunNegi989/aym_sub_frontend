import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "300 Hour Yoga Teacher Training in Rishikesh | AYM Yoga School",
  description:
    "Join AYM Yoga School's 300 Hour Yoga Teacher Training in Rishikesh to deepen your practice, refine your teaching, and earn Yoga Alliance certification.",

    alternates: {
      canonical: "https://aymyogaschool.com/300-hour-yoga-ttc-in-rishikesh",
    },
};

export default function Page() {
  return <PageClient />;
}