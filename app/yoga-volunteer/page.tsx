import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Volunteer Opportunities | AYM Yoga School",
  description:
    "Apply for the Yoga Volunteer Program at AYM Yoga School. Support yoga events, connect with the community, and grow through authentic yogic experiences.",
};

export default function Page() {
  return <PageClient />;
}