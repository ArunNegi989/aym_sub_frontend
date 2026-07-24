import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Puducherry | AYM Yoga School",
  description:
    "Join AYM's Yoga Teacher Training in Puducherry. Traditional & modern methods, personalized attention, and internationally recognized certification.",

    
};

export default function Page() {
  return <PageClient />;
}