import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Inner Awakening Retreat | Spiritual Retreat | AYM Yoga",
  description:
    "Join the Inner Awakening Retreat at AYM Yoga School in Rishikesh. Reconnect through yoga, meditation, pranayama, mindfulness, and holistic wellness.",
};

export default function Page() {
  return <PageClient />;
}