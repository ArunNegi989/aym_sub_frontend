import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Arambol | AYM Yoga School Goa",
  description:
    "Begin your Yoga Teacher Training in Arambol with AYM Yoga School. Practice authentic yoga by the beach, learn from experienced teachers, and earn a globally recognized certification.",

    
};

export default function Page() {
  return <PageClient />;
}