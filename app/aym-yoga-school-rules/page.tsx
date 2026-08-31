import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AYM Yoga School Rules & Policies | AYM Yoga School",
  description:
    "Explore AYM Yoga School's rules & code of conduct for Yoga Teacher Training in Rishikesh — respect, discipline, attendance & lifestyle guidelines.",

    alternates: {
      canonical: "https://aymyogaschool.com/aym-yoga-school-rules",
    },
};

export default function Page() {
  return <PageClient />;
}