import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Traditional Hatha Yoga Teacher Training | AYM Yoga School",
  description:
    "Become a certified Hatha Yoga teacher in Rishikesh, India's yoga capital. Ancient techniques, expert gurus, small batches. Book your seat today!",

    alternates: {
      canonical: "https://aymyogaschool.com/hatha-yoga-teacher-training",
    },
};

export default function Page() {
  return <PageClient />;
}