import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Alliance & Indian Yoga Association | AYM Yoga School",
  description:
    "Learn at AYM Yoga School, a Registered Yoga School in Rishikesh with Yoga Alliance and Indian Yoga Association recognition for teacher training programs.",
};

export default function Page() {
  return <PageClient />;
}