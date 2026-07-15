import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AYM Yoga School Gallery | Photos & Student Life",
  description:
    "Take a look inside AYM Yoga School through our gallery featuring yoga classes, retreats, meditation, events, and memorable student experiences. ",
};

export default function Page() {
  return <PageClient />;
}