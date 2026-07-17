import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Sound Healing Course | Learn Sound Therapy | AYM Yoga",
  description:
    "Experience a certified Sound Healing Course in Rishikesh at AYM Yoga School. Explore sound therapy, chakra healing, meditation, and traditional practices.",
};

export default function Page() {
  return <PageClient />;
}