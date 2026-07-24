import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Certified Yoga Teacher Training, Lonavala | AYM Yoga",
  description:
    "Become a registered yoga master in Lonavala with AYM. World-class facilities, structured curriculum, and internationally accepted certification.",

    
};

export default function Page() {
  return <PageClient />;
}