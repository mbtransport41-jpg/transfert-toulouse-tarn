import { Suspense } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reservation from "./components/Reservation";
import BookingForm from "./components/BookingForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Reservation />
      <Suspense fallback={null}>
        <BookingForm />
      </Suspense>
    </>
  );
}
