import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AYM Yoga School",
  description:
    "Get answers to common questions about yoga teacher training, course eligibility, certification, schedules, accommodation, and payments at AYM Yoga School.",
};

export default function Page() {
  return <PageClient />;
}