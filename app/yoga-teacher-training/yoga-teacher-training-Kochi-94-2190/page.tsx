import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "YTT Course in Kochi, India | AYM Yoga School",
  description:
    "Transform your practice with AYM's yoga teacher training in Kochi. Immersive learning in a serene setting, led by experienced instructors.",

    
};

export default function Page() {
  return <PageClient />;
}