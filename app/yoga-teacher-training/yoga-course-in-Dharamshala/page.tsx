import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Dharamshala | AYM Yoga School",
  description:
    "Join AYM's affordable Yoga Teacher Training in Dharamshala. Comprehensive, expert-led courses with a globally recognized certification for aspirants.",

    
};

export default function Page() {
  return <PageClient />;
}