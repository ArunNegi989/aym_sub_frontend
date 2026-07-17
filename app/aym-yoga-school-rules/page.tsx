import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AYM Yoga School Rules & Policies | AYM Yoga School",
  description:
    "Read the AYM Yoga School rules and guidelines for Yoga Teacher Training. Learn about attendance, discipline, accommodation, and course policies before enrolling.",
};

export default function Page() {
  return <PageClient />;
}