import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Prenatal Yoga Course | Pregnancy Yoga Training | AYM",
  description:
    "Build your expertise with AYM Yoga School's Prenatal Yoga Course. Learn prenatal yoga techniques, maternal wellness, meditation, and movement practices.",

    alternates: {
      canonical: "https://aymyogaschool.com/prenatal-yoga-course",
    },
};

export default function Page() {
  return <PageClient />;
}