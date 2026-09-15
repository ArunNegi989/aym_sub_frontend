import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Rishikesh & Goa | AYM Yoga School",
  description:
    "Join AYM Yoga School's Yoga Teacher Training programs in Rishikesh & Goa. Yoga Alliance-certified 100 to 500-hour courses for aspiring yoga teachers.",

    
};

export default function Page() {
  return <PageClient />;
}