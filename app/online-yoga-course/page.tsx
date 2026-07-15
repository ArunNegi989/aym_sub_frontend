import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Online Yoga Teacher Training Course | AYM Yoga School",
  description:
    "Enroll in AYM Yoga School's yoga instructor course online. Learn Hatha, Ashtanga, anatomy, meditation, and teaching skills from experienced instructors.",
};

export default function Page() {
  return <PageClient />;
}