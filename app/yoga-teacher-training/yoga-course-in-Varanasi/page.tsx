import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Learn Yoga Teacher Training in Varanasi | AYM Yoga School",
  description:
    "Join AYM Yoga School for Yoga Teacher Training in Varanasi. Experience traditional yoga, mindful living, and internationally recognized teacher training.",

    
};

export default function Page() {
  return <PageClient />;
}