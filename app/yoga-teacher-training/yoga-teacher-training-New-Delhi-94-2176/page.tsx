import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Registered Yoga Teacher Training Course, Delhi | AYM Yoga",
  description:
    "Join AYM's world-class yoga training environment for aspirants in New Delhi. Expert instructors, top amenities, globally acclaimed certification.",

    
};

export default function Page() {
  return <PageClient />;
}