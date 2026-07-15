import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Kundalini Yoga Teacher Training | AYM Yoga School",
  description:
    " Experience authentic Kundalini Yoga Teacher Training at AYM Yoga School in Rishikesh. Learn kriyas, meditation, and awaken your true potential.",
};

export default function Page() {
  return <PageClient />;
}