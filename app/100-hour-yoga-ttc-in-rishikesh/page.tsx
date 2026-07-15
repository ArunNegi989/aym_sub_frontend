import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "100 Hour Yoga Teacher Training in Rishikesh | AYM Yoga School",
  description:
    "Begin your yoga journey with AYM Yoga School's 100 Hour Yoga Teacher Training in Rishikesh. Learn authentic yoga, meditation, pranayama, and philosophy.",
};

export default function Page() {
  return <PageClient />;
}