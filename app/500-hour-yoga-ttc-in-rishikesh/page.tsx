import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "500 Hour Yoga Teacher Training in Rishikesh | AYM Yoga School",
  description:
    "Join AYM Yoga School's 500 Hour Yoga Teacher Training in Rishikesh. Deepen your practice, gain teaching confidence, and become a certified yoga teacher.",

    alternates: {
      canonical: "https://aymyogaschool.com/500-hour-yoga-ttc-in-rishikesh",
    },
};

export default function Page() {
  return <PageClient />;
}