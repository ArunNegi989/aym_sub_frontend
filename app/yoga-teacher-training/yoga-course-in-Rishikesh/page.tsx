import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Sikkim | AYM Yoga School",
  description:
    "Join AYM's recognized Yoga Teacher Training in Sikkim. Explore ancient & contemporary practices with expert instructors and global certification.",

    
};

export default function Page() {
  return <PageClient />;
}