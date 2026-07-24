import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Gurugram | AYM Yoga School",
  description:
    "Join AYM's affordable Yoga Teacher Training in Gurugram. Learn diverse yoga schools with theoretical and practical exposure, globally certified.",

    
};

export default function Page() {
  return <PageClient />;
}