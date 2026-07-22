import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training Course for Beginners in India",
  description:
    "Join AYM Yoga School's Yoga Teacher Training Course for Beginners in India. Build a strong foundation with expert guidance and traditional yoga practices.",

    alternates: {
      canonical: "https://aymyogaschool.com/yoga-course-for-beginners-in-india",
    },};

export default function Page() {
  return <PageClient />;
}