import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Best Yoga Workshop in Rishikesh | AYM Yoga School",
  description:
    "Discover the best Yoga Workshop in Rishikesh at AYM Yoga School. Improve your yoga practice through guided meditation, pranayama, and expert instruction.",

    alternates: {
      canonical: "https://aymyogaschool.com/best-yoga-meditation-workshop-in-rishikesh",
    },
};

export default function Page() {
  return <PageClient />;
}