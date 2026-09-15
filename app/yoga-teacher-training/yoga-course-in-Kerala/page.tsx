import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Registered Yoga Teacher Training Course, Kerala | AYM",
  description:
    "Become a licensed yoga instructor in Kerala with AYM's expert-led training. Traditional & modern methods, internationally certified programs.",

    
};

export default function Page() {
  return <PageClient />;
}