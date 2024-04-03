import {  Carousel } from "../../components";

import { Faq } from "./components/Faq.jsx";
import { Review } from "./components/Review.jsx";
// import { Testimonials } from "./components/Testimonials.jsx";
export function HomePage() {
  return (
    <>
      <Carousel />
      <Faq />
      <Review />
      {/* <Testimonials /> */}

    </>
  );
}
