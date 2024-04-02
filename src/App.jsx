import ProductList from "./Components/ProductList";
import './App.css'
import Carousel from './Components/Carousel';
import { Footer } from "./Components";
import { Navbar } from "./Components";
import {Faq} from "./Pages/Home/index"
//const element = <FontAwesomeIcon icon={faEnvelope} />

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductList />   
      <Faq />
      <Footer />
    </>
  );
}


export default App;
