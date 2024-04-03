import {  Carousel } from "../../components";

import { Faq } from "./components/Faq.jsx";
import { Review } from "./components/Review.jsx";
import { Navbar } from "../../components/Layout/Navbar.jsx";
// import { Testimonials } from "./components/Testimonials.jsx";
export function HomePage() {
  return (
    <>
      <Navbar/>
      <Carousel />
      <Faq />
      <Review />
      {/* <Testimonials /> */}

    </>
  );
}
