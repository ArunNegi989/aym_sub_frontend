import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Agra | AYM Yoga School",
  description:
    "Explore authentic yoga teacher training in Agra with AYM. Build a strong classical foundation, sharpen teaching skills, and get certified worldwide.",

    
};

export default function Page() {
  return <PageClient />;
}