import { Carousel, Footer } from "../../components";

import { Faq } from "./components/Faq.jsx";
import { Review } from "./components/Review.jsx";
import { Navbar } from "../../components/Layout/Navbar.jsx";
import { ProductListFilters } from "../Product/ProductList.jsx";
// import { Testimonials } from "./components/Testimonials.jsx";
export function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <br />
      <br />    
      <ProductListFilters />
      <Faq />
      <Review />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
