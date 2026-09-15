import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Thiruvananthapuram | AYM Yoga School",
  description:
    "Begin your Yoga Teacher Training in Thiruvananthapuram with AYM Yoga School. Learn authentic yoga from experienced teachers and earn a globally recognized certification.",

    
};

export default function Page() {
  return <PageClient />;
}