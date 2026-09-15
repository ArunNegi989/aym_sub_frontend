import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Auroville | AYM Yoga School",
  description:
    "Start your yoga journey with Yoga Teacher Training in Auroville by AYM Yoga School. Learn authentic yoga, meditation, philosophy, and teaching skills from experienced instructors.",

    
};

export default function Page() {
  return <PageClient />;
}