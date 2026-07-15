import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AYM Yoga Blog | Yoga Tips, Guides & Wellness",
  description:
    "Read the latest yoga articles from AYM Yoga School. Discover tips on yoga teacher training, meditation, Ayurveda, wellness, and yogic lifestyle.",
};

export default function Page() {
  return <PageClient />;
}