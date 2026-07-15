import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Goa | AYM Yoga School",
  description:
    "Train with AYM Yoga School in Goa and build a strong foundation in yoga. Explore traditional practices, mindful living, and professional teacher training.",
};

export default function Page() {
  return <PageClient />;
}