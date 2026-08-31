import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "200 Hour Yoga Teacher Training in Rishikesh | AYM Yoga ",
  description:
    "200 Hour Yoga Teacher Training in Rishikesh, the yoga capital of the world. RYS 200 certified course with expert faculty. Book your spot now!",

    alternates: {
      canonical: "https://aymyogaschool.com/200-hour-yoga-teacher-training-in-rishikesh",
    },
};

export default function Page() {
  return <PageClient />;
}