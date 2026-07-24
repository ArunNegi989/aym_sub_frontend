import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Himachal Pradesh | AYM Yoga School ",
  description:
    "Discover authentic Yoga Teacher Training in Himachal Pradesh with AYM Yoga School. Learn traditional yoga, deepen your practice, and earn a globally recognized certification in the peaceful Himalayas.",

    
};

export default function Page() {
  return <PageClient />;
}