import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Best Rishikesh Yoga Ashram | AYM Yoga School",
  description:
    "Discover AYM Yoga School, a Rishikesh Yoga Ashram offering Yoga Alliance-certified teacher training, yoga retreats, meditation, and wellness programs.",

    alternates: {
      canonical: "https://aymyogaschool.com/rishikesh-yoga-ashram",
    },
};

export default function Page() {
  return <PageClient />;
}