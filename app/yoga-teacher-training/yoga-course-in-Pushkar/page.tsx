import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Registered Yoga Teacher Training Course, Pushkar | AYM",
  description:
    "Become a certified yoga instructor in Pushkar with AYM's comprehensive training program. Experienced instructors, international certification.",

    
};

export default function Page() {
  return <PageClient />;
}