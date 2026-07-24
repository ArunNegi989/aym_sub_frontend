import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Mysore | 200/300/500 Hr | AYM",
  description:
    "Explore AYM's Yoga Teacher Training in Mysore - 200, 300 & 500-hour Yoga Alliance-certified courses covering asanas, philosophy & teaching methods.",

    
};

export default function Page() {
  return <PageClient />;
}