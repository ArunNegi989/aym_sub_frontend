import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Secure Payment Options | AYM Yoga School",
  description:
    "Make secure online payments at AYM Yoga School. Review available payment options for yoga courses, teacher training, retreats, and workshops.",
};

export default function Page() {
  return <PageClient />;
}