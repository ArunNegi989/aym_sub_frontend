import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Certified Yoga Teacher Training Course, Pune | AYM",
  description:
    "Become a registered yoga instructor in Pune with AYM's comprehensive training program. One-on-one guidance from expert yoga professionals.",

    
};

export default function Page() {
  return <PageClient />;
}