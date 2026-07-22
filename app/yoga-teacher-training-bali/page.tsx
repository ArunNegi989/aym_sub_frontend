import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Teacher Training in Bali | Traditional Yoga Education",
  description:
    "Take your yoga journey to the next level with Yoga Teacher Training in Bali. Train with AYM Yoga School in a supportive and inspiring learning environment",

    alternates: {
      canonical: "https://aymyogaschool.com/yoga-teacher-training-bali",
    },
};

export default function Page() {
  return <PageClient />;
}