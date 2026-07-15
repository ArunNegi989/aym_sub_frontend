import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Yoga Sanskrit Dictionary & Glossary | AYM Yoga School",
  description:
    "Explore the Yoga Sanskrit Glossary by AYM Yoga School. Learn the meanings of essential yoga and Sanskrit terms to deepen your practice and knowledge",
};

export default function Page() {
  return <PageClient />;
}