import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Certified Yoga Teaching Course in Mumbai | AYM Yoga",
  description:
    "Become a certified yoga instructor with AYM's teacher training in Mumbai. Personalized attention, traditional & modern methods, global accreditation.",

    
};

export default function Page() {
  return <PageClient />;
}