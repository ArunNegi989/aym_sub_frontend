import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Maharashtra | AYM Yoga School",
  description:
    "Begin your yoga journey with Yoga Teacher Training in Maharashtra by AYM Yoga School. Learn from experienced teachers, gain recognized certification, and grow with authentic yoga.",

    
};

export default function Page() {
  return <PageClient />;
}