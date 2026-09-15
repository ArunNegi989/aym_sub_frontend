import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Licensed Yoga Teacher Training Uttarakhand | AYM",
  description:
    "Become a licensed yoga instructor in Uttarakhand with AYM's comprehensive teacher training. Expert gurus, hands-on practice, global certification.",

    
};

export default function Page() {
  return <PageClient />;
}