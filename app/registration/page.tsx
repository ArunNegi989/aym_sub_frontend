import { Suspense } from "react";
import RegisterForm from "./RegisterForm";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Yoga Registration | Enroll at AYM Yoga School",
  description:
    "Complete your yoga registration at AYM Yoga School. Secure your seat for yoga teacher training, retreats, and wellness programs in Rishikesh.",
};


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
