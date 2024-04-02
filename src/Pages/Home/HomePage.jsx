import { Footer, Navbar, Carousel } from "../../components";

import { Faq } from "./components/Faq.jsx";
import { Review } from "./components/Review.jsx";
export function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Faq />
      <Review/>
      <Footer />
    </>
  );
}
