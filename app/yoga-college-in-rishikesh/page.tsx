import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga College in Rishikesh | Ministry of AYUSH Programs",
  description:
    "Join AYM Yoga College in Rishikesh for Ministry of AYUSH Certified Programs. Explore AYUSH courses, yoga teacher training, and traditional yoga education.",
};

export default function Page() {
  return <PageClient />;
}