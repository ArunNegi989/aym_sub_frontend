import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Best Yoga and Ayurveda Detox Retreat in Rishikesh",
  description:
    "Experience a Yoga and Ayurveda Detox Retreat in Rishikesh at AYM Yoga School. Restore your health through yoga, Ayurvedic therapies, and wellness.",
};

export default function Page() {
  return <PageClient />;
}