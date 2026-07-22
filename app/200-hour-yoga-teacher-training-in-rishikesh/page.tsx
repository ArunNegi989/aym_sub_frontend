import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "200 Hour Yoga Teacher Training in Rishikesh | AYM Yoga ",
  description:
    "Enroll in AYM Yoga School's 200 Hour Yoga Teacher Training in Rishikesh. Experience authentic yoga education with expert teachers & earn yoga certification.",

    alternates: {
      canonical: "https://aymyogaschool.com/200-hour-yoga-teacher-training-in-rishikesh",
    },
};

export default function Page() {
  return <PageClient />;
}