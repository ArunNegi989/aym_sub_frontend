import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Chennai | AYM Yoga School",
  description:
    "Start your yoga journey with Yoga Teacher Training in Chennai by AYM Yoga School. Learn authentic yoga from experienced teachers and earn a globally recognized certification.",

    
};

export default function Page() {
  return <PageClient />;
}