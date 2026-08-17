import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "About AYM Yoga School | Yoga School in India",
  description:
    "AYM Yoga School: a trusted, govt-recognized yoga ashram in Rishikesh since 2005. Explore our mission, history & Yoga Alliance-certified TTC programs.",

    alternates: {
      canonical: "https://aymyogaschool.com/about-aym-yoga-school-india",
    },
};

export default function Page() {
  return <PageClient />;
}