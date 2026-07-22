import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Ashtanga Vinyasa Yoga Teacher Training Course | AYM",
  description:
    "Master Ashtanga Vinyasa Yoga Teacher Training with AYM Yoga School. Build strength, flexibility, and confidence through traditional yoga education.",

    alternates: {
      canonical: "https://aymyogaschool.com/ashtanga-vinyasa-yoga-course",
    },
};

export default function Page() {
  return <PageClient />;
}