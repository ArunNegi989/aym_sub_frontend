import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "About AYM Yoga School | Yoga School in India",
  description:
    "Learn about AYM Yoga School, a trusted yoga school in India offering authentic yoga education, experienced teachers, and Yoga Alliance & Ministry of AYUSH recognition.",
};

export default function Page() {
  return <PageClient />;
}