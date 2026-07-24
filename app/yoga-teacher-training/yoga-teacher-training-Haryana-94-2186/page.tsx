import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Online & In-Person Yoga TTC in Haryana | AYM Yoga School",
  description:
    "Join AYM's Yoga Teacher Training in Haryana, offering flexible online YTTC options and globally recognized certification.",

    
};

export default function Page() {
  return <PageClient />;
}