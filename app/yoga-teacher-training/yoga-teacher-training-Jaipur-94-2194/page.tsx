import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Jaipur | AYM Yoga School",
  description:
    "Looking for a yoga teacher training course in Jaipur? AYM offers comprehensive, internationally certified YTTC programs for all levels of practitioners.",

    
};

export default function Page() {
  return <PageClient />;
}