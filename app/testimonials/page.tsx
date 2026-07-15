import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "AYM Yoga School Reviews & Testimonials ",
  description:
    "Explore student reviews and testimonials about AYM Yoga School. Learn why students choose our yoga teacher training, retreats, and wellness programs.",
};

export default function Page() {
  return <PageClient />;
}