import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reservation from "./components/Reservation";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Reservation />
      <BookingForm />
      
    </>
  );
}
