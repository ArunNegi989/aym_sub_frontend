import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "200 Hour YTT Course in Varkala, Kerala | AYM Yoga",
  description:
    "Discover AYM's licensed yoga teacher training in Varkala. Study by the Arabian Sea with internationally certified instructors and a serene ambience.",

    
};

export default function Page() {
  return <PageClient />;
}