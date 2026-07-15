import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Best Yoga Holiday Retreats in India | AYM Yoga School ",
  description:
    "Enjoy the best Yoga Holiday Retreats in India with AYM Yoga School. Experience daily yoga, meditation, healthy meals, and peaceful accommodation.",
};

export default function Page() {
  return <PageClient />;
}