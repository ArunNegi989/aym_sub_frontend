import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Traditional Hatha Yoga Teacher Training | AYM Yoga School",
  description:
    "Join AYM Yoga School for Hatha Yoga Teacher Training in Rishikesh. Learn traditional Hatha yoga, meditation, pranayama, philosophy, and teaching techniques.",
};

export default function Page() {
  return <PageClient />;
}