import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Munger | AYM Yoga School",
  description:
    "Kickstart your career with AYM's professional Yoga Teacher Training in Munger. Affordable, globally recognized certification for aspiring instructors.",

    
};

export default function Page() {
  return <PageClient />;
}